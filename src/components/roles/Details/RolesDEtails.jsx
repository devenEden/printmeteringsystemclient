import { Modal, Button, Tabs, Table, message } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;

const RolesDetails = ({
  visible,
  handleCloseModal,
  details,
  handApproveRole,
}) => {
  const {
    approveRolesLoading,
    approveRolesError,
    approveRolesSuccess,
    approveRolesMessage,
  } = useSelector((state) => state.rolesState);
  const closeModal = () => handleCloseModal(false, []);
  const approveRole = () => handApproveRole(details.id);
  const column = [{ title: "Permission", dataIndex: "permission" }];
  useEffect(() => {
    if (approveRolesSuccess && approveRolesMessage) {
      message.success(approveRolesMessage);
    } else if (approveRolesError && !approveRolesSuccess)
      message.error(approveRolesError);
  }, [approveRolesSuccess, approveRolesError, approveRolesMessage]);
  console.log(details);
  return (
    <div>
      <Modal
        visible={visible}
        onCancel={closeModal}
        footer={[
          parseInt(details?.status) < 2 && (
            <Button
              onClick={approveRole}
              loading={approveRolesLoading}
              className="approve"
            >
              Approve
            </Button>
          ),
        ]}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab={`${details.name} Permissions`} key="1">
            <Table
              rowKey={(r) => r.id}
              columns={column}
              dataSource={details?.permissions}
            />
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
};

export default RolesDetails;
