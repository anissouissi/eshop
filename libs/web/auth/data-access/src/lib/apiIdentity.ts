import { User, UserCreateInput } from '@aso/data-access-graphql';

const IDENTITY_BASE_URL = `${import.meta.env.VITE_API_IDENTITY_URL}`;

export async function signUp({ name, email, password }: UserCreateInput) {
  try {
    const res = await fetch(`${IDENTITY_BASE_URL}/sign-up`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    if (!res.ok) {
      throw new Error('Error occurred, please try again.');
    }
    const user: User = await res.json();
    return user;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const res = await fetch(`${IDENTITY_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const user: User = await res.json();
    return user;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getCurrentUser() {
  try {
    const res = await fetch(`${IDENTITY_BASE_URL}`, {
      credentials: 'include',
    });
    if (!res.ok) {
      return null;
    }
    const user: User = await res.json();
    return user;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function logout() {
  try {
    await fetch(`${IDENTITY_BASE_URL}/logout`, {
      credentials: 'include',
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
