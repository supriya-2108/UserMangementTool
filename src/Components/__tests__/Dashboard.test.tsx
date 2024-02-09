import { configureStore, Reducer, Store } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import userReducer from "../../utils/userSlice";

interface UserState {
  user_id: string | null;
  user_list: any[];
  // Other user-related state properties if any
}

const emptyStore = configureStore({
  reducer: {
    user: userReducer as Reducer<UserState>,
  },
  preloadedState: {
    user: {
      user_id: "123",
      user_list: [],
    } as UserState,
  },
});
const appStore = configureStore({
  reducer: {
    user: userReducer as Reducer<UserState>,
  },
  preloadedState: {
    user: {
      user_id: "123",
      user_list: [
        {
          id: 1,
          email: "george.bluth@reqres.in",
          first_name: "George",
          last_name: "Bluth",
          avatar: "https://reqres.in/img/faces/1-image.jpg",
        },
        {
          id: 2,
          email: "george.bluth@reqres.in",
          first_name: "George",
          last_name: "Bluth",
          avatar: "https://reqres.in/img/faces/1-image.jpg",
        },
        {
          id: 3,
          email: "george.bluth@reqres.in",
          first_name: "George",
          last_name: "Bluth",
          avatar: "https://reqres.in/img/faces/1-image.jpg",
        },
        {
          id: 4,
          email: "george.bluth@reqres.in",
          first_name: "George",
          last_name: "Bluth",
          avatar: "https://reqres.in/img/faces/1-image.jpg",
        },
        {
          id: 5,
          email: "george.bluth@reqres.in",
          first_name: "George",
          last_name: "Bluth",
          avatar: "https://reqres.in/img/faces/1-image.jpg",
        },
      ],
    } as UserState,
  },
});
const setUp = (appStore: Store) => {
  const utils = render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Provider>
  );
  return utils;
};
describe("Dashboard component", () => {
  test("renders the Dashboard when user ID is present", () => {
    setUp(appStore);
    const dashboardHeading = screen.getByText("List Of All Users");
    expect(dashboardHeading).toBeInTheDocument();
  });

  test("dashboard shuld not be rendered without a user_id", () => {
    setUp(emptyStore);
    expect(window.location.pathname).toBe("/");
  });
});
