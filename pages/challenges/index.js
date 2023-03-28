// page that lists "my challenges"

import { challenges } from "../../lib/db";
import Card from "../../components/Card";
import CardContainer from "../../components/CardContainer";
import NoCard from "../../components/NoCard";

export default function Challenges() {
  return (
    <main>
      <h1>my challenges</h1>
      <CardContainer>
        {challenges.length === 0 ? (
          <NoCard />
        ) : (
          challenges.map((challenge) => (
            <Card key={challenge.id} challenge={challenge} />
          ))
        )}
      </CardContainer>
    </main>
  );
}

// export default function Challenges() {
//   if (challenges.length === 0) {
//     return (
//       <main>
//         <h1>my challenges</h1>
//         <CardContainer>
//           <NoCard />
//         </CardContainer>
//       </main>
//     );
//   }

//   return (
//     <main>
//       <h1>my challenges</h1>
//       <CardContainer>
//         {challenges.map((challenge) => (
//           <Card key={challenge.id} challenge={challenge} />
//         ))}
//       </CardContainer>
//     </main>
//   );
// }
