import React from "react";

const PrinterTypeOtherDetails = ({ data }) => {
  return (
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
            <td>Name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Unit Cost</td>
            <td>{data.unit_cost}</td>
          </tr>
          <tr>
            <td>Created By</td>
            <td>{`${data?.creator?.first_name} ${data?.creator?.other_names}`}</td>
          </tr>
          <tr>
            <td>Created At</td>
            <td>
              {`${new Date(data.created_at).toDateString()} ${new Date(
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
                `${new Date(data.updated_at).toDateString()} ${new Date(
                  data.updated_at
                ).toLocaleTimeString()}`}
            </td>
          </tr>
          <tr>
            <td>Approved By</td>
            <td>
              {data.approver &&
                `${data?.approver?.first_name} ${data?.approver?.other_names}`}
            </td>
          </tr>
          <tr>
            <td>Approved At</td>
            <td>
              {data.approved_at &&
                `${new Date(data.approved_at).toDateString()} ${new Date(
                  data.approved_at
                ).toLocaleTimeString()}`}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrinterTypeOtherDetails;
