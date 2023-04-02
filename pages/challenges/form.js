import ChallengeForm from "../../components/ChallengeForm";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ChallengeForm />
      <h3>
        <Link href="/challenges">Back to challenges</Link>
      </h3>
    </main>
  );
}
