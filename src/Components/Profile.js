import React, { useState } from "react";
import "antd/dist/antd.dark.css";
import "./userProfile.css";
import {
  HeartFilled,
  EditOutlined,
  DeleteOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import { GiCircleCage } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { userDataActions } from "../Store/userData";
import FormModal from "./Modal";
import Navbar from "./Nav";

const { Meta } = Card;

const Profile = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.userList);
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [userId, setUserId] = useState();

  const showModal = (e) => {
    if (e.target.closest("svg")) {
      setUserId(+e.target.closest("span").id);
      setIsModelOpen(true);
    }
  };

  const handleLike = (e) => {
    if (e.target.closest("svg")) {
      const id = e.target.closest("span").id;
      dispatch(userDataActions.updateUserList(id));
    }
  };

  const handleDelete = (e) => {
    if (e.target.closest("svg")) {
      const id = e.target.closest("span").id;
      dispatch(userDataActions.deleteUserList(id));
    }
  };

  return (
    <>
      <Navbar />
      <hr />
      <FormModal
        id={userId}
        isModalOpen={isModalOpen}
        setIsModelOpen={setIsModelOpen}
      />
      <div className="cards">
        {userDetails?.map((user) => {
          const imageUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;
          return (
            <>
              <Card
                key={user.id}
                style={{
                  width: 300,
                  margin: 10,
                }}
                cover={<img alt="profile" src={imageUrl} height="200" />}
                actions={[
                  user.like ? (
                    <HeartFilled
                      id={user.id}
                      key="like"
                      style={{ color: "red" }}
                      onClick={handleLike}
                    />
                  ) : (
                    <HeartOutlined
                      id={user.id}
                      key="like"
                      style={{ color: "red" }}
                      onClick={handleLike}
                    />
                  ),
                  <EditOutlined id={user.id} key="edit" onClick={showModal} />,
                  <DeleteOutlined
                    id={user.id}
                    key="delete"
                    onClick={handleDelete}
                  />,
                ]}
                hoverable
              >
                <Meta
                  title={user.name}
                  description={
                    <>
                      <p className="card-text">
                        <MdOutlineMail />
                        &nbsp;{user.email}
                      </p>
                      <p className="card-text">
                        <AiOutlinePhone />
                        &nbsp;{user.phone}
                      </p>
                      <p className="card-text">
                        <GiCircleCage />
                        &nbsp;http://{user.website}
                      </p>
                      <p className="card=-text">
                        <AiOutlineHome />
                        &nbsp;{user.address.suite}, {user.address.street},
                        {user.address.city} - {user.address.zipcode}
                      </p>
                      <p className="card=-text">
                        <HiOutlineOfficeBuilding />
                        &nbsp;{user.company.name} ({user.company.bs})
                      </p>
                    </>
                  }
                />
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
