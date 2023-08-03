import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "./components/User";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1>Memoria</h1>
      <Link href="/signin">Signin</Link>

      <br></br>

      <h1>Server Side Rendered</h1>
      <pre>{JSON.stringify(session)}</pre>

      {/* Slow */}
      <h1>Client Side Rendered</h1>
      <User />
    </>
  );
}
