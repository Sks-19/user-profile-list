import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { userDataActions } from "../Store/userData";
import EditableForm from "./editableForm";

const FormModal = ({ id, isModalOpen, setIsModelOpen }) => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.userList);

  const handleOk = (e) => {
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;
    const userPhone = document.getElementById("userPhone").value;
    const userWebsite = document.getElementById("userWebsite").value;

    const updatedUser = userDetails?.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          name: userName,
          email: userEmail,
          phone: userPhone,
          website: userWebsite,
        };
      } else {
        return user;
      }
    });

    dispatch(userDataActions.updateEditedUser(updatedUser));
    setIsModelOpen(false);
  };

  const handleCancel = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <Modal
        title="Basic Title"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <EditableForm id={id} />
      </Modal>
    </>
  );
};

export default FormModal;
