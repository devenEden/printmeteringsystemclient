import { Modal, Form, DatePicker, Button, Alert, message } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import generatePDF from "../../../config/helpers/generatePdf";
import { numberWithCommas } from "../../../config/helpers/numberFormatter";

const { RangePicker } = DatePicker;

const BillingPeriodForm = ({
  visible,
  handleCloseModal,
  handleSelectPeriod,
}) => {
  const {
    billingPeriod,
    billingPeriodLoading,
    billingPeriodSuccess,
    billingPeriodError,
  } = useSelector((state) => state.billingState);
  const { permissions } = useSelector((state) => state.authState);
  const [form] = Form.useForm();
  const closeModal = () => handleCloseModal(false);
  const onFinish = (values) => {
    values.from = values.rangeTimePicker[0];
    values.to = values.rangeTimePicker[1];
    handleSelectPeriod(values);
  };
  console.log("====================================");
  console.log(billingPeriod);
  console.log("====================================");
  const exportRecords = () => {
    const pdfColumns = [
      "Printer",
      "Type",
      "Period",
      "Opening",
      "Closing",
      "Prints/Copies",
      "Cost",
    ];
    let pdfRows = [];
    billingPeriod.forEach((record) => {
      const row = [record.printer_name, "", "", "", "", "", ""];
      pdfRows.push(row);
      record.printerBillingCycle.forEach((r) => {
        const row = [
          "",
          record.printer_type,
          r.period,
          numberWithCommas(r.opening),
          numberWithCommas(r.closing),
          numberWithCommas(r.prints),
          numberWithCommas(r.total_cost),
        ];
        pdfRows.push(row);
      });
    });
    // data?.forEach((record) => {
    //   const row = [record.name, record.ip, record.location];
    //   pdfRows.push(row);
    // });
    if (permissions.can_export_billing) {
      generatePDF(
        pdfRows,
        pdfColumns,
        `Billing - ${new Date().toLocaleDateString()}`,
        `Billing - ${new Date().toLocaleDateString()}.pdf`
      );
    } else message.error("You Do Not Have Permission To Export Billing");
  };
  useEffect(() => {
    if (!billingPeriodSuccess && billingPeriod.length > 0) {
      message.info("Started download");
      form.resetFields();
      exportRecords();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billingPeriodSuccess, form, billingPeriod]);
  return (
    <div>
      <Modal
        visible={visible}
        title="SELECT PERIOD FOR BILLING REPORT"
        footer={null}
        onCancel={closeModal}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {!billingPeriodSuccess && billingPeriodError && (
            <Alert
              showIcon
              type="error"
              message={billingPeriodError}
              className="my-2"
            />
          )}
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please select a period for the report",
              },
            ]}
            name="rangeTimePicker"
            label="Select Period"
          >
            <RangePicker picker="month" className="w-100" />
          </Form.Item>
          <Form.Item>
            <Button
              loading={billingPeriodLoading}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BillingPeriodForm;
