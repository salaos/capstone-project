// home page of the app

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/challenges">
        <a>my challenges</a>
      </Link>
    </main>
  );
}
