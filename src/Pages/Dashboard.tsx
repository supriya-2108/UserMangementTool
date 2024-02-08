import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { useNavigate } from "react-router-dom";
import { addUserList } from "../utils/userSlice";
import Card from "../Components/Card";
import { getUsers } from "../webApis/getUsers";

interface DataType {
  data: ElementType[];
}
interface ElementType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
const Dashboard = () => {
  const navigate = useNavigate();
  const user_id = useSelector((state: RootState) => state.user.user_id);
  const dispatch = useDispatch();
  const users_list = useSelector((state: RootState) => state.user.user_list);
  useEffect(() => {
    if (user_id === null) {
      navigate("/");
    } else {
      users_list.length === 0 && UsersData(1);
    }
  }, [user_id]);
  const UsersData = async (pageno: number) => {
    const data: DataType = await getUsers(pageno);
    const user_data = data.data;
    user_data.forEach((element: ElementType) => {
      dispatch(addUserList(element));
    });
  };

  return user_id !== null ? (
    <div className=" p-5 h-[100vh] justify-center">
      <h2 className=" text-2xl uppercase font-semibold text-center m-3">
        List Of All Users
      </h2>
      <div className=" ml-auto">
        <div className=" flex flex-wrap mx-auto">
          {users_list.map((user: ElementType) => (
            <Card
              key={user.id}
              id={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
              src={user.avatar}
            />
          ))}
        </div>
        {users_list.length < 12 ? (
          <button
            onClick={() => UsersData(2)}
            className=" bg-red-700 py-1 px-2 text-white mx-[40%]"
          >
            Show More
          </button>
        ) : (
          <button className=" bg-red-700 py-1 px-2 text-white mx-[40%]">
            No NewUser
          </button>
        )}
      </div>
    </div>
  ) : null;
};

export default Dashboard;
