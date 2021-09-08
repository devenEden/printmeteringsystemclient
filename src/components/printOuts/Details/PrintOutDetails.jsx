import { Alert, Modal, Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../../config/helpers/numberFormatter";

const PrintOutDetails = ({ visible, handleCloseModal }) => {
  const {
    printOutsDetails: data,
    printOutsDetailsSuccess,
    printOutsDetailsLoading,
    printOutsDetailsError,
  } = useSelector((state) => state.printOutsState);
  const closeModal = () => handleCloseModal(false);
  return (
    <div>
      <Modal
        title="Print Out Details"
        onCancel={closeModal}
        footer={null}
        visible={visible}
      >
        {printOutsDetailsLoading ? (
          <div className="m-5 d-flex justify-content-center">
            <Spin size="large" />
          </div>
        ) : (
          <div>
            {!printOutsDetailsSuccess ? (
              <Alert
                className="m-2"
                type="error"
                showIcon
                message={printOutsDetailsError}
              />
            ) : (
              <div>
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Column</th>
                      <th scope="col">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Print Outs</td>
                      <td>{numberWithCommas(parseInt(data.print_outs))}</td>
                    </tr>
                    <tr>
                      <td>Printer</td>
                      <td>{data.printerDetails?.name}</td>
                    </tr>
                    <tr>
                      <td>Unit Cost</td>
                      <td>{data.printerDetails?.unit_cost}</td>
                    </tr>
                    <tr>
                      <td>Total Cost</td>
                      <td>
                        {numberWithCommas(
                          data.printerDetails?.unit_cost * data.print_outs
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Created By</td>
                      <td>{`${data?.creator?.first_name} ${data?.creator?.other_names}`}</td>
                    </tr>
                    <tr>
                      <td>Created At</td>
                      <td>
                        {`${new Date(
                          data.created_at
                        ).toDateString()} ${new Date(
                          data.created_at
                        ).toLocaleTimeString()}
                        `}
                      </td>
                    </tr>
                    <tr>
                      <td>Last Updated By</td>
                      <td>
                        {data.updator &&
                          `${data?.updator?.first_name} ${data?.updator?.other_names}`}
                      </td>
                    </tr>
                    <tr>
                      <td>Last Updated At</td>
                      <td>
                        {data.updated_at &&
                          `${new Date(
                            data.updated_at
                          ).toDateString()} ${new Date(
                            data.updated_at
                          ).toLocaleTimeString()}`}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PrintOutDetails;
