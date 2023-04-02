// home page of the app
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        <Link href="/challenges">My Challenges</Link>
      </h1>
    </main>
  );
}
