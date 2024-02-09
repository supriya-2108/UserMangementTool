import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SignUp from "../../Pages/SignUp";
import { BrowserRouter, Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { useSelector, useDispatch } from "react-redux";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const setUp = () => {
  const utils = render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );
  return utils;
};

describe("all test cases for signup", () => {
  test("To check if SignUp Page is loaded or not", () => {
    setUp();
    const heading = screen.getByText("USER SIGNUP");
    expect(heading).toBeInTheDocument();
  });

  test("To check if SignUp button is there", () => {
    setUp();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("to check if the textboxes is on the SignUp Page", () => {
    setUp();
    const textbox = screen.getAllByRole("textbox");
    expect(textbox.length).toBe(3);
  });

  test("to check if inputbox is changed or not", async () => {
    setUp();
    const input_email = screen.getByPlaceholderText(
      "Email-Id"
    ) as HTMLInputElement;
    const input_password = screen.getByPlaceholderText(
      "Password"
    ) as HTMLInputElement;
    const input_username = screen.getByPlaceholderText(
      "Username"
    ) as HTMLInputElement;
    const submit_button = screen.getByRole("button");
    fireEvent.change(input_email, { target: { value: "supriya@gmail.com" } });
    fireEvent.change(input_password, { target: { value: "Supriya@1234" } });
    fireEvent.change(input_username, { target: { value: "Supriya" } });
    // console.log(input_email.value, input_password.value, input_password.value);
    fireEvent.click(submit_button);
    await waitFor(() => {
      expect(window.location.pathname).toBe("/dashboard");
    });
  });
});
