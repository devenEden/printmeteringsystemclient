import { Alert, Button, message, Modal, Spin } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import PrinterTypeOtherDetails from "./PrinterTypeOtherDetails";
import PrinterTypePrinterTable from "./PrinterTypePrinterTable";

const { TabPane } = Tabs;

const PrinterTypeDetails = ({
  visible,
  handleCloseModal,
  handApprovePrinterType,
}) => {
  const closeModal = () => handleCloseModal(false);
  const {
    printerTypesDetails,
    printerTypesDetailsSuccess,
    printerTypesDetailsLoading,
    printerTypesDetailsError,
    approvePrinterTypesLoading,
    approvePrinterTypesError,
    approvePrinterTypesSuccess,
    approvePrinterTypesMessage,
  } = useSelector((state) => state.printerTypesState);
  useEffect(() => {
    if (approvePrinterTypesSuccess && approvePrinterTypesMessage) {
      message.success(approvePrinterTypesMessage);
    } else if (approvePrinterTypesError && !approvePrinterTypesSuccess)
      message.error(approvePrinterTypesError);
  }, [
    approvePrinterTypesSuccess,
    approvePrinterTypesError,
    approvePrinterTypesMessage,
  ]);
  const approvePrinterType = () =>
    handApprovePrinterType(printerTypesDetails.id);
  return (
    <div>
      <Modal
        title="PRINTER TYPE DETAILS"
        visible={visible}
        onCancel={closeModal}
        footer={[
          parseInt(printerTypesDetails.status) < 2 && (
            <Button
              onClick={approvePrinterType}
              loading={approvePrinterTypesLoading}
            >
              Approve
            </Button>
          ),
        ]}
      >
        {printerTypesDetailsLoading ? (
          <div className="d-flex justify-content-center m-5">
            <Spin size="large" />
          </div>
        ) : (
          <div>
            {!printerTypesDetailsSuccess ? (
              <Alert
                showIcon
                type="error"
                message={printerTypesDetailsError}
                className="my-2"
              />
            ) : (
              <div>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Details" key="1">
                    <PrinterTypeOtherDetails data={printerTypesDetails} />
                  </TabPane>
                  <TabPane tab="Printers" key="2">
                    <PrinterTypePrinterTable
                      data={printerTypesDetails.printers}
                    />
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

export default PrinterTypeDetails;
