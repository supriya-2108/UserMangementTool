import { fireEvent, render, screen } from "@testing-library/react";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

it("should SignIn User", async () => {
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

  const signInLink = screen.getByText("SignIn");

  const emailInput = screen.getByPlaceholderText("Email-Id");
  const passwordInput = screen.getByPlaceholderText("Password");

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "Password@123" } });

  const submitButton = screen.getByText("SignIn");
  fireEvent.click(submitButton);
  console.log(emailInput, passwordInput);
});
