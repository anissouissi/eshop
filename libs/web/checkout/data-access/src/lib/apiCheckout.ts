import { OrderCreateInput } from '@aso/api-order-generated-db-types';

const ORDERING_BASE_URL = `${import.meta.env.VITE_API_ORDERING_URL}/Ordering`;

export async function placeOrder(order: OrderCreateInput) {
  try {
    const res = await fetch(`${ORDERING_BASE_URL}/place-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(order),
    });
    if (!res.ok) {
      throw new Error('Error occurred, please try again.');
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
