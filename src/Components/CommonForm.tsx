import React, { ChangeEvent, FormEvent, useState } from "react";
import { API_LINK, ImageUrl } from "../utils/constants";
import { NavLink, useNavigate } from "react-router-dom";
import { BaseFormProps, RegisterProps } from "../utils/types";
import { checkValidateData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../utils/userSlice";
import { SignUp, Login } from "../webApis/authenticateUsers";

interface formProps {
  formDetails: BaseFormProps | RegisterProps;
}
const CommonForm = ({ formDetails }: formProps) => {
  const navigate = useNavigate();
  const [formEnteries, setFormEnteries] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>();
  const dispatch = useDispatch();
  const {
    heading,
    type,
    placeholder_email,
    placeholder_password,
    button_title,
  } = formDetails;
  const placeholder_username =
    "placeholder_username" in formDetails
      ? (formDetails as RegisterProps).placeholder_username
      : "";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormEnteries((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = checkValidateData(formEnteries);
    if (res === null) {
      setError(null);
      if (type === "Signup") {
        const json = await SignUp(formEnteries);
        if (json) {
          dispatch(authenticateUser(json.id));
          navigate("/dashboard");
        }
      } else {
        const loginDetails = {
          email: formEnteries.email,
          password: formEnteries.password,
        };
        const json = await Login(loginDetails);
        if (json) {
          console.log(json);
        }
      }
    } else {
      setError(res);
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" border-2">
        <form onSubmit={submitForm}>
          <div className=" bg-green-700 h-8 w-[100%] mb-4 text-white text-center p-1 font-semibold">
            {heading}
          </div>
          <div className=" flex flex-col m-3 py-4 items-center">
            <img src={ImageUrl} alt="userIcon" className=" h-10 w-20 mb-4" />
            <input
              type="text"
              className=" border-2 mt-2 p-1 w-64"
              name="email"
              placeholder={placeholder_email}
              value={formEnteries.email}
              onChange={handleChange}
            />
            {type === "Signup" ? (
              <input
                type="text"
                className=" border-2 mt-3 p-1 w-64"
                name="username"
                placeholder={placeholder_username}
                value={formEnteries.username}
                onChange={handleChange}
              />
            ) : (
              ""
            )}
            <input
              type="text"
              className=" border-2 mt-3 mb-4 p-1 w-64"
              name="password"
              placeholder={placeholder_password}
              value={formEnteries.password}
              onChange={handleChange}
            />
            {error ? (
              <p className=" text-red-700 text-sm font-semibold m-1">{error}</p>
            ) : (
              ""
            )}
            <button
              type="submit"
              className=" bg-green-900 text-white w-64 m-2 py-1"
            >
              {button_title}
            </button>
            {type === "Signin" ? (
              <p className=" text-red-700 text-sm font-semibold m-1">
                New User |{" "}
                <NavLink to="/signup">
                  <span>SignUp</span>
                </NavLink>
              </p>
            ) : (
              <p className=" text-red-700 text-sm font-semibold m-1">
                Already a User |{" "}
                <NavLink to="/">
                  <span>SignIn</span>
                </NavLink>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommonForm;
