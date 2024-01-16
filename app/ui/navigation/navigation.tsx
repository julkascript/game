import Link from "next/link";
import NavbarUserMenu from "./navbarUserMenu";
import { auth } from "@/auth";

async function Navigation() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex justify-center w-100 p-4 bg-indigo-300 h-14">
      <Link href="/" className="text-slate-800 font-bold">
        Logo
      </Link>
      <Link className="mx-auto" href="/game">
        Play
      </Link>
      {user ? <NavbarUserMenu /> : <Link href="/login">Sign in</Link>}
    </div>
  );
}

export default Navigation;
