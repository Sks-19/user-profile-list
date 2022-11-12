import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditableForm from "./Components/editableForm";
import Loader from "./Components/Loader";
import FormModal from "./Components/Modal";
import { userDataActions } from "./Store/userData";

const Profile = lazy(() => import("./Components/Profile"));

function App() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.userList);

  useEffect(() => {
    const getUserDetails = async () => {
      const resDetails = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const reqdetails = await resDetails.json();

      const data = reqdetails.map((user) => {
        return { ...user, like: false };
      });

      dispatch(userDataActions.setUserList(data));
    };

    getUserDetails();
  }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/form" element={<FormModal />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
