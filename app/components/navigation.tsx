import Link from "next/link";

function Navigation() {
  return (
    <div className="flex justify-center w-100 p-4 bg-indigo-100 h-14">
      <Link href="/" className="text-slate-800 font-bold">
        Logo
      </Link>
      <Link className="mx-auto" href="/play">
        Play
      </Link>
    </div>
  );
}

export default Navigation;
