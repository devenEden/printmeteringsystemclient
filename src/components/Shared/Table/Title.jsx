import { Button, Popover, Space } from "antd";
import React from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { /* FcExport, */ FcExport, FcRefresh } from "react-icons/fc";

const TableTitle = ({
  search,
  setfilterTableNull,
  refreshTable,
  exportRecords,
  openAddModal,
}) => {
  const actions = (
    <Space direction="vertical">
      <Button type="primary" className="w-100" onClick={refreshTable}>
        <Space>
          <FcRefresh /> Refresh
        </Space>
      </Button>
      <Button className="bg-light w-100">
        <Space>
          <AiOutlineSearch /> Search
        </Space>
      </Button>
      <Button onClick={exportRecords} type="dashed" className="w-100">
        <Space>
          <FcExport /> Export
        </Space>
      </Button>
    </Space>
  );
  return (
    <div className="d-flex   w-100">
      <Space className="w-50" direction="horizontal">
        <Button onClick={openAddModal} type="primary">
          <Space>
            <AiOutlinePlus /> Add New
          </Space>
        </Button>
        <Popover content={actions} trigger="click" placement="bottom">
          <Button>Actions</Button>
        </Popover>
      </Space>
    </div>
  );
};

export default TableTitle;
