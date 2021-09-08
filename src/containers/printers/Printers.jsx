import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrinterTypeDetails from "../../components/PrinterTypes/Details/PrinterTypeDetails";
import AddPrinterType from "../../components/PrinterTypes/Forms/AddPrinterType";
import EditPrinterType from "../../components/PrinterTypes/Forms/EditPrinterType";
import PrintersTable from "../../components/printers/tables/PrintersTable";
import PrinterTypesTables from "../../components/PrinterTypes/Tables/PrinterTypesTables";
import routes from "../../config/routes/routes";
import printerThunks from "../../config/thunks/printers/printers.thunks";
import printerTypeThunks from "../../config/thunks/printers/printerTypes.thunks";

const Printers = () => {
  const [printerTypesModal, setPrinterTypesModal] = useState(false);
  const [openAddPrinterTypeModal, setOpenAddPrinterTypeModal] = useState(false);
  const [editPrinterTypeModal, setEditPrinterTypeModal] = useState(false);
  const [printerTypeDetailsModal, setPrinterTypeDetailsModal] = useState(false);
  const [openAddPrinterModal, setOpenAddPrinterModal] = useState(false);

  const { printersSuccess } = useSelector((state) => state.printersState);
  const { printerTypesSuccess } = useSelector(
    (state) => state.printerTypesState
  );
  const dispatch = useDispatch();
  //ui fucntions
  const togglePrinterTypesModal = (value) => {
    setPrinterTypesModal(value);
  };
  const toggleAddPrinterTypesModal = (value) =>
    setOpenAddPrinterTypeModal(value);
  const toggleEditPrinterTypeModal = (value) => setEditPrinterTypeModal(value);
  const togglePrinterTypeDetailsModal = (value) =>
    setPrinterTypeDetailsModal(value);

  //thunks
  const refreshData = () => {
    dispatch(printerThunks.getPrinters());
    dispatch(printerTypeThunks.getPrinterTypes());
    dispatch(printerThunks.printersMetaData());
  };
  const deletePrinterType = (id, printerTypes) => {
    dispatch(printerTypeThunks.deletePrinterTypes(id, printerTypes));
  };
  const printerTypeDetails = (id) => {
    setPrinterTypeDetailsModal(true);
    dispatch(printerTypeThunks.getPrinterTypesDetails(id));
  };
  const addPrinterType = (values, printerTypes) =>
    dispatch(printerTypeThunks.addPrinterTypes(values, printerTypes));
  const editPrinterType = (values, printerTypes) =>
    dispatch(printerTypeThunks.editPrinterTypes(values, printerTypes));
  const approvePrinterType = (id) =>
    dispatch(printerTypeThunks.approvePrinterTypes(id));
  //use effect
  useEffect(() => {
    document.title = routes.printers.title;
    if (!printersSuccess) {
      dispatch(printerThunks.getPrinters());
      dispatch(printerThunks.printersMetaData());
    }
    if (!printerTypesSuccess) dispatch(printerTypeThunks.getPrinterTypes());
  }, [printersSuccess, dispatch, printerTypesSuccess]);
  return (
    <div id="main-container">
      <Button
        onClick={() => togglePrinterTypesModal(true)}
        className="mt-4"
        type="type"
      >
        Printer Types
      </Button>
      <PrintersTable handleRefreshTable={refreshData} />
      <PrinterTypesTables
        handleViewDetails={printerTypeDetails}
        handleOpenEditModal={toggleEditPrinterTypeModal}
        handleDelete={deletePrinterType}
        handleOpenAddModal={toggleAddPrinterTypesModal}
        handleRefreshTable={refreshData}
        visible={printerTypesModal}
        handleCloseModal={togglePrinterTypesModal}
      />
      <AddPrinterType
        handleAddRecord={addPrinterType}
        handleCloseModal={toggleAddPrinterTypesModal}
        visible={openAddPrinterTypeModal}
      />
      <EditPrinterType
        handleEditRecord={editPrinterType}
        handleCloseModal={toggleEditPrinterTypeModal}
        visible={editPrinterTypeModal}
      />
      <PrinterTypeDetails
        handApprovePrinterType={approvePrinterType}
        handleCloseModal={togglePrinterTypeDetailsModal}
        visible={printerTypeDetailsModal}
      />
    </div>
  );
};

export default Printers;
