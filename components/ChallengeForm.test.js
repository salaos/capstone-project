import React from "react";
import { render, screen } from "@testing-library/react";
import ChallengeForm from "./ChallengeForm";
import userEvent from "@testing-library/user-event";

test("renders ChallengeForm component", () => {
  render(<ChallengeForm />);
  const linkElement = screen.getByText(/New Challenge/i);
  expect(linkElement).toBeInTheDocument();
});
