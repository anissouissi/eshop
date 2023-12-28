import {
  User,
  UserCreateInput,
  UserUpdateInput,
} from '@aso/data-access-graphql';

export async function signup({ name, email, password }: UserCreateInput) {
  try {
    const res = await fetch('http://localhost:3001/auth/create', {
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
    const res = await fetch('http://localhost:3001/auth/login', {
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
    const res = await fetch('http://localhost:3001/auth', {
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
    await fetch('http://localhost:3001/auth/logout');
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function updateCurrentUser({ name, password }: UserUpdateInput) {
  try {
    const res = await fetch('http://localhost:3001/auth/update', {
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
