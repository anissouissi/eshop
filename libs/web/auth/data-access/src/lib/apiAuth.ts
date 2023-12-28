import {
  User,
  UserCreateInput,
  UserUpdateInput,
} from '@aso/data-access-graphql';

const AUTH_BASE_URL = `${import.meta.env.VITE_API_IDENTITY_URL}/auth`;

export async function signup({ name, email, password }: UserCreateInput) {
  try {
    const res = await fetch(`${AUTH_BASE_URL}/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
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

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const res = await fetch(`${AUTH_BASE_URL}/login`, {
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
    const res = await fetch(`${AUTH_BASE_URL}`, {
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
    await fetch(`${AUTH_BASE_URL}/logout`, {
      credentials: 'include',
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function updateCurrentUser({ name, password }: UserUpdateInput) {
  try {
    const res = await fetch(`${AUTH_BASE_URL}/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    const updatedUser: User = await res.json();
    return updatedUser;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
