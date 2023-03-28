// returns all challenges in the database

import { challenges } from "../../../lib/db";

export default function handler(request, response) {
  return response.status(200).json(challenges);
}
