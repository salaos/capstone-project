import React from "react";
import { render } from "@testing-library/react";
import Card from "./Challenges";

const challenges = [
  {
    title: "Start a Conversation",
    description: "Talk to a stranger",
    level: 1,
    bestcase: "You make a new friend",
    worstcase: "You get rejected",
    realcase: "You get rejected",
  },
];

test("renders a card with the correct title", () => {
  const { getByText } = render(<Card challenges={challenges} />);
  const title = getByText(/Start a Conversation/i);
  expect(title).toBeInTheDocument();
});

test("if there is no challenge, it should render the NoCard component", () => {
  const { getByText } = render(<Card challenges={[]} />);
  const noCard = getByText(/Nothing to do/i);
  expect(noCard).toBeInTheDocument();
});
