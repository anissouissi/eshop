import { OrderCreateInput } from '@aso/data-access-graphql';
import { gql } from './graphql-client';

export async function placeOrder(orderCreateInput: OrderCreateInput) {
  const data = await gql.CreateOrder({ data: orderCreateInput });
  return data.createOrder;
}
