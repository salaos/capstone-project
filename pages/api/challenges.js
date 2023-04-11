// This file contains the database of challenges and their descriptions.
import path from "path";
import { promises as fs } from "fs";

async function readDb() {
  const inFile = path.join(process.cwd(), "pages", "api", "db.json");
  return JSON.parse(await fs.readFile(inFile, "utf-8"));
}

async function writeDb(db) {
  const outFile = path.join(process.cwd(), "pages", "api", "db.json");
  await fs.writeFile(outFile, JSON.stringify(db, null, 2), "utf-8");
}

function validateChallenge(newChallenge) {
  if (
    JSON.stringify(Object.keys(newChallenge).sort()) !==
    JSON.stringify(
      [
        "title",
        "description",
        "level",
        "bestcase",
        "worstcase",
        "realcase",
      ].sort()
    )
  ) {
    return "Invalid body";
  }
  if (newChallenge.title.length < 2 || newChallenge.title.length > 100) {
    return "Invalid title length";
  }
  if (newChallenge.level < 1 || newChallenge.level > 5) {
    return "Invalid level range";
  }
  if (newChallenge.description.length > 100) {
    return "Invalid description length";
  }
  if (newChallenge.bestcase.length > 100) {
    return "Invalid bestcase length";
  }
  if (newChallenge.worstcase.length > 100) {
    return "Invalid worstcase length";
  }
  if (newChallenge.realcase.length > 100) {
    return "Invalid realcase length";
  }
  return null;
}

export default async function handler(req, res) {
  const db = await readDb();
  const { challenges } = db;

  if (req.method === "GET") {
    res.status(200).json(challenges);
    return;
  } else if (req.method === "POST") {
    let newChallenge = req.body;
    const validationError = validateChallenge(newChallenge, res);
    if (validationError) {
      res.status(400).json({ error: validationError });
      return;
    }

    newChallenge = {
      ...newChallenge,
      id: challenges.length,
    };
    challenges.push(newChallenge);
    writeDb(db);

    res.status(201).json(newChallenge);
    return;
  }
}
