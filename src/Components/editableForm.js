import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input } from "antd";
import { useSelector } from "react-redux";

const EditableForm = ({ id }) => {
  const userDetails = useSelector((state) => state.userDetails.userList);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (id) {
      form.resetFields();
    }
  }, [id]);

  const displayUser = userDetails?.filter((user) => user.id === id);

  return (
    <>
      <div className="container">
        {displayUser?.map((user) => (
          <Form
            name="editable"
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 10 }}
            initialValues={{
              ["name"]: user.name,
              ["email"]: user.email,
              ["phone"]: user.phone,
              ["website"]: user.website,
              ["address"]: `${user.address.suite}, ${user.address.street}, ${user.address.city} - ${user.address.zipcode}`,
              ["office"]: `${user.company.name} (${user.company.bs}`,
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input id="userName" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input id="userEmail" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please input your phone no.!" },
              ]}
            >
              <Input id="userPhone" />
            </Form.Item>

            <Form.Item
              label="Website"
              name="website"
              rules={[
                { required: true, message: "Please input your website!" },
              ]}
            >
              <Input id="userWebsite" />
            </Form.Item>
          </Form>
        ))}
      </div>
    </>
  );
};

export default EditableForm;
