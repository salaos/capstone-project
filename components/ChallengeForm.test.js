import React from "react";
import { render, screen } from "@testing-library/react";
import ChallengeForm from "./ChallengeForm";
import userEvent from "@testing-library/user-event";

test("renders ChallengeForm component", () => {
  render(<ChallengeForm />);
  const linkElement = screen.getByText(/New Challenge/i);
  expect(linkElement).toBeInTheDocument();
});

// test("When the form is submitted, the onAddChallenge function is called", () => {
//   const onAddChallenge = jest.fn();
//   render(<ChallengeForm onAddChallenge={onAddChallenge} />);
//   userEvent.type(screen.getByPlaceholderText(/Title/i), "Talk to a stranger");
//   userEvent.type(
//     screen.getByPlaceholderText(/Description/i),
//     "Talk to a stranger"
//   );
//   userEvent.type(
//     screen.getByPlaceholderText(/Best case/i),
//     "You make a new friend"
//   );
//   userEvent.type(
//     screen.getByPlaceholderText(/Worst case/i),
//     "You get rejected"
//   );
//   userEvent.selectOptions(screen.getByLabelText(/Level/i), "1");
//   userEvent.click(screen.getByRole("button", { name: /Add Challenge/i }));
//   expect(onAddChallenge).toHaveBeenCalled();
// });
