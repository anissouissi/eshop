import { BasketItem, CustomerBasket } from '@aso/data-access-graphql';
import { gql } from './graphql-client';

export async function getCustomerBasket(basketId?: string | null) {
  if (basketId) {
    try {
      const { findOneCustomerBasket } = await gql.GetCustomerBasket({
        where: { id: basketId },
      });
      return findOneCustomerBasket as CustomerBasket;
    } catch (error) {
      console.log(error);
    }
  }

  const { createCustomerBasket: basket } = await gql.CreateCustomerBasket({
    data: { items: [] },
  });

  localStorage.setItem('basketId', basket.id);

  return basket as CustomerBasket;
}

export async function addToBasket({
  productId,
  basket,
}: {
  productId: string;
  basket?: CustomerBasket;
}) {
  if (!basket) {
    return;
  }

  const basketItem = getBasketItem(productId, basket.items);
  if (basketItem) {
    basketItem.quantity = (basketItem.quantity ?? 0) + 1;
  } else {
    basket?.items?.push({
      productId,
      quantity: 1,
    });
  }

  const { updateCustomerBasket: updatedCustomerBasket } =
    await gql.UpdateCustomerBasket({
      data: {
        items: basket?.items?.map((i) => ({
          productId: i.productId,
          quantity: i.quantity,
        })),
      },
      where: { id: basket.id },
    });

  return updatedCustomerBasket;
}

export async function updateBasketItemQuantity({
  productId,
  basket,
  quantity,
}: {
  productId: string;
  basket: CustomerBasket;
  quantity: number;
}) {
  const basketItem = getBasketItem(productId, basket.items);

  if (!basketItem) {
    return;
  }

  basketItem.quantity += quantity;

  const { updateCustomerBasket: updatedCustomerBasket } =
    await gql.UpdateCustomerBasket({
      data: {
        items: basket?.items?.map((i) => ({
          productId: i.productId,
          quantity: i.quantity,
        })),
      },
      where: { id: basket.id },
    });

  return updatedCustomerBasket;
}

export async function deleteBasketItem({
  productId,
  basket,
}: {
  productId: string;
  basket: CustomerBasket;
}) {
  const basketItem = getBasketItem(productId, basket.items);

  if (!basketItem) {
    return;
  }

  const { updateCustomerBasket: updatedCustomerBasket } =
    await gql.UpdateCustomerBasket({
      data: {
        items: basket?.items
          ?.filter((i) => i.productId !== productId)
          .map((i) => ({
            productId: i.productId,
            quantity: i.quantity,
          })),
      },
      where: { id: basket.id },
    });

  return updatedCustomerBasket;
}

function getBasketItem(productId: string, basketItems?: BasketItem[] | null) {
  if (!basketItems || basketItems.length === 0) {
    return null;
  }
  return basketItems.find((i) => i.productId === productId);
}
