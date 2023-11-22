import { gql } from '../data-access/graphql-client';

export default async function Index() {
  const { findAllUsers: users } = await gql.getUsers();

  return users.map((user) => (
    <figure
      key={user.id}
      className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 m-6"
    >
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={`https://i.pravatar.cc/150?u=${user.id}`}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that Ive seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div>{user.name}</div>
          <div>{user.email}</div>
        </figcaption>
      </div>
    </figure>
  ));
}
