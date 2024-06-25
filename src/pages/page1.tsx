import { Button, Form, Input } from "antd";
import React from "react";
import { EditableTable } from "../components/EditableTable";

interface IAdmin {
  name: string;
  phone: string;
  job: string;
}

interface IForm {
  address: string;
  admins: IAdmin[];
}

const Page1: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={
        { address: "", admins: [{ name: "1", phone: "1", job: "1" }] } as IForm
      }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="地址"
        name="address"
        rules={[{ required: true, message: "地址!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="联系人"
        name="admins"
        rules={[{ required: true, message: "联系人!" }]}
      >
        <EditableTable></EditableTable>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Page1;
