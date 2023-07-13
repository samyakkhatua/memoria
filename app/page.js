import Link from "next/link";
import { getServerSession  } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "./components/User";

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
    <h1>Memoria</h1>
    <Link href="/signin">Signin</Link>

    <br></br>

    <p>Server Side rendered</p>
    <pre>{JSON.stringify(session)}</pre>
    <br></br>
    <br/>

    <p>Client Side rendered</p>
    <User />
    </>
  )
}
