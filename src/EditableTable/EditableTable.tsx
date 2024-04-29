import { Form, Input, Button, Table } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export const EditableTable = ({}: { value?: any; onChange?: any }) => {
  const getColumns = (remove: any) => [
    {
      title: "姓名",
      dataIndex: "name",
      render: (_: any, record: any) => (
        <Form.Item
          name={[record.name, "name"]}
          rules={[{ required: true, message: "Please input name" }]}
        >
          <Input />
        </Form.Item>
      ),
    },
    {
      title: "手机号",
      dataIndex: "phone",
      render: (_: any, record: any) => (
        <Form.Item
          name={[record.name, "phone"]}
          rules={[{ required: true, message: "Please input phone" }]}
        >
          <Input />
        </Form.Item>
      ),
    },
    {
      title: "工作",
      dataIndex: "job",
      render: (_: any, record: any) => (
        <Form.Item
          name={[record.name, "job"]}
          rules={[{ required: true, message: "Please input job" }]}
        >
          <Input />
        </Form.Item>
      ),
    },
    {
      title: "操作",
      dataIndex: "delete",
      render: (_: any, record: any) => (
        <MinusCircleOutlined onClick={() => remove(record.name)} />
      ),
    },
  ];

  return (
    <Form.List name="admins">
      {(fields, { add, remove }) => {
        return (
          <>
            <Table
              columns={getColumns(remove)}
              dataSource={fields} // 仅用来渲染行数和key，值是input受控经过formitem的namepath从form拿到的
              pagination={false}
              rowKey="name"
            />

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "100%" }}
              >
                <PlusOutlined /> Add Admin
              </Button>
            </Form.Item>
          </>
        );
      }}
    </Form.List>
  );
};
