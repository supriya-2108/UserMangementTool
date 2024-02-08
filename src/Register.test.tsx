import { fireEvent, render, screen } from "@testing-library/react";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

it("should SignUp User and redirect to Dashboard Page", async () => {
  render(
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );

  const signUpLink = screen.getByText("SignUp");
  fireEvent.click(signUpLink);

  const emailInput = screen.getByPlaceholderText("Email-Id");
  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(usernameInput, { target: { value: "Testuser" } });
  fireEvent.change(passwordInput, { target: { value: "Password@123" } });

  const submitButton = screen.getByText("SignUp");
  fireEvent.click(submitButton);
  console.log(
    emailInput.innerHTML,
    usernameInput.innerHTML,
    passwordInput.innerHTML
  );
  expect(window.location.pathname).toBe("/dashboard");
});
