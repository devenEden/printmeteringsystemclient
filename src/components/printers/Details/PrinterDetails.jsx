import { Alert, Button, message, Modal, Spin } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import PrinterOtherDetails from "./PrinterOtherDetails";
import PrintOutsTable from "./PrinterPrintOutsTable";

const { TabPane } = Tabs;

const PrinterDetails = ({
  visible,
  handleCloseModal,
  handApprovePrinterType,
}) => {
  const closeModal = () => handleCloseModal(false);
  const {
    printersDetails,
    printersDetailsSuccess,
    printersDetailsLoading,
    printersDetailsError,
    approvePrintersLoading,
    approvePrintersError,
    approvePrintersSuccess,
    approvePrintersMessage,
  } = useSelector((state) => state.printersState);
  useEffect(() => {
    if (approvePrintersSuccess && approvePrintersMessage) {
      message.success(approvePrintersMessage);
    } else if (approvePrintersError && !approvePrintersSuccess)
      message.error(approvePrintersError);
  }, [approvePrintersSuccess, approvePrintersError, approvePrintersMessage]);
  const approvePrinterType = () => handApprovePrinterType(printersDetails.id);
  return (
    <div>
      <Modal
        title={printersDetails.name || "PRINTER TYPE DETAILS"}
        visible={visible}
        onCancel={closeModal}
        footer={[
          parseInt(printersDetails.status) < 2 && (
            <Button
              onClick={approvePrinterType}
              loading={approvePrintersLoading}
            >
              Approve
            </Button>
          ),
        ]}
      >
        {printersDetailsLoading ? (
          <div className="d-flex justify-content-center m-5">
            <Spin size="large" />
          </div>
        ) : (
          <div>
            {!printersDetailsSuccess ? (
              <Alert
                showIcon
                type="error"
                message={printersDetailsError}
                className="my-2"
              />
            ) : (
              <div>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Details" key="1">
                    <PrinterOtherDetails data={printersDetails} />
                  </TabPane>
                  <TabPane tab="Print Outs" key="2">
                    <PrintOutsTable data={printersDetails} />
                  </TabPane>
                </Tabs>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PrinterDetails;
