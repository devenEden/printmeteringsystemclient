import React from "react";
import { useHistory } from "react-router-dom";
import { FcHighPriority } from "react-icons/fc";
import { Button } from "antd";

const PageNotFound = () => {
  const history = useHistory();

  const gotBack = () => {
    history.goBack();
  };
  return (
    <div className="text-center container-fluid ">
      <div className="display-2 m-1">
        <FcHighPriority />
      </div>
      <div className="display-3 m-2">
        404
        <br />
        Sorry, the page you visited does not exist.
      </div>
      <Button size="large" onClick={gotBack}>
        {" "}
        Go Back{" "}
      </Button>
    </div>
  );
};

export default PageNotFound;
