import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import { challenges } from "../lib/db";

test("renders a card", () => {
  render(<Card challenge={challenges} />);

  const card = document.querySelector("div");
  expect(card).toBeInTheDocument();
});

test("renders a card with the correct title", () => {
  render(<Card challenge={challenges[0]} />);

  const card = document.querySelector("div");
  expect(card).toHaveTextContent("Start a Conversation");
});
