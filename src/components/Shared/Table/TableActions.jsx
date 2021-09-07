import { Popconfirm, Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 16, color: "#fff" }} spin />
);

const TableButtonActions = (
  text,
  {
    viewDetails,
    updateRecord,
    confirmDelete,
    deleteRecord,
    deleteLoading,
    deleteId,
  }
) => (
  <Space direction="vertical">
    <button onClick={viewDetails} id={text?.id} className="w-100 ant-btn">
      More
    </button>
    <button
      onClick={updateRecord}
      id={text?.id}
      className="ant-btn ant-btn-primary w-100"
    >
      Edit
    </button>
    <Popconfirm
      onConfirm={confirmDelete}
      title="Are you sure you want to delete this ?"
    >
      <button
        className="ant-btn ant-btn-primary ant-btn-dangerous"
        onClick={deleteRecord}
        id={text?.id}
      >
        {deleteLoading && deleteId === text?.id && <Spin indicator={antIcon} />}
        &nbsp; Delete
      </button>
    </Popconfirm>
  </Space>
);

export default TableButtonActions;
