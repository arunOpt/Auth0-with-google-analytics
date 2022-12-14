import { useUser } from "@auth0/nextjs-auth0/client";

export default function Header() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>{error.message}</div>;
  return (
    <>
      {user ? (
        <header>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <a href="/api/auth/logout">Logout</a>
        </header>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}
    </>
  );
}
