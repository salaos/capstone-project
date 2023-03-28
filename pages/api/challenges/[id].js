// dynamic route that will return a challenge based on the id

import { challenges } from "../../../lib/db";

export default function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }

  const place = challenges.find((challenge) => challenge.id === id);

  if (!challenge) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json(challenge);
}
