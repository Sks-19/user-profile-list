import { useSelector } from "react-redux";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import { GiCircleCage } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import "./userProfile.css";

const UserProfile = () => {
  const userDetails = useSelector((state) => state.userDetails.userList);

  console.log("u", userDetails);
  return (
    <>
      <div className="cards">
        {userDetails?.map((user) => {
          const imageUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;
          return (
            <>
              <div
                className="card m-2"
                key={user.id}
                style={{ width: "20rem" }}
              >
                <img className="card-img-top" src={imageUrl} alt="user" />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
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
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserProfile;
