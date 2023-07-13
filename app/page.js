import Link from "next/link";
import { getServerSession  } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
    <h1>Memoria</h1>
    <Link href="/signin">Signin</Link>

    <br></br>

    <p>Server Side rendered</p>
    <pre>{JSON.stringify(session)}</pre>
    </>
  )
}
