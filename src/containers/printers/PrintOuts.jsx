import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import routes from "../../config/routes/routes";
import printerThunks from "../../config/thunks/printers/printers.thunks";
import PrintOutsThunks from "../../config/thunks/printers/printOuts.thunks";
import PrintOutsTable from "../../components/printOuts/Tables/PrintOutsTable";
import AddPrintOut from "../../components/printOuts/Forms/AddPrintOut";
import EditPrintOut from "../../components/printOuts/Forms/EditPrintOuts";
import PrintOutDetails from "../../components/printOuts/Details/PrintOutDetails";

const PrintOuts = () => {
  const [addPrintOutsModal, setAddPrintOutsModal] = useState(false);
  const [editPrintOutsModal, setEditPrintOutsModal] = useState(false);
  const [printOutDetailsModals, setPrintOutsDetailsModal] = useState(false);

  const { printOutsSuccess } = useSelector((state) => state.printOutsState);
  const dispatch = useDispatch();

  //ui functions
  const togglePrintOutDetailssModal = (value) =>
    setPrintOutsDetailsModal(value);
  const toggleAddPrintOutModal = (value) => setAddPrintOutsModal(value);
  const toggleEditPrintOutModal = (value) => setEditPrintOutsModal(value);

  const refreshTable = () => {
    dispatch(printerThunks.printersMetaData());
    dispatch(PrintOutsThunks.getPrintOuts());
  };
  const deleteRecord = (id, printOuts) =>
    dispatch(PrintOutsThunks.deletePrintOuts(id, printOuts));
  //thunks
  const addPrintOuts = (values, print_outs) =>
    dispatch(PrintOutsThunks.addPrintOuts(values, print_outs));
  const editPrintOuts = (values, print_outs) =>
    dispatch(PrintOutsThunks.editPrintOuts(values, print_outs));
  const printOutDetails = (id) => {
    setPrintOutsDetailsModal(true);
    dispatch(PrintOutsThunks.getPrintOutsDetails(id));
  };
  //use effect
  useEffect(() => {
    document.title = routes.printOuts.title;
    if (!printOutsSuccess) {
      dispatch(PrintOutsThunks.getPrintOuts());
      dispatch(printerThunks.printersMetaData());
    }
  }, [printOutsSuccess, dispatch]);
  return (
    <div id="main-container">
      <PrintOutsTable
        handleViewDetails={printOutDetails}
        handleOpenEditModal={toggleEditPrintOutModal}
        handleDelete={deleteRecord}
        handleRefreshTable={refreshTable}
        handleOpenAddModal={toggleAddPrintOutModal}
      />
      <AddPrintOut
        handleAddRecord={addPrintOuts}
        visible={addPrintOutsModal}
        handleCloseModal={toggleAddPrintOutModal}
      />
      <EditPrintOut
        handleCloseModal={toggleEditPrintOutModal}
        visible={editPrintOutsModal}
        handleEditRecord={editPrintOuts}
      />
      <PrintOutDetails
        visible={printOutDetailsModals}
        handleCloseModal={togglePrintOutDetailssModal}
      />
    </div>
  );
};

export default PrintOuts;
