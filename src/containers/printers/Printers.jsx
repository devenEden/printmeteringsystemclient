import { Button, Space } from "antd";
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
import AddPrinter from "../../components/printers/forms/AddPrinters";
import EditPrinter from "../../components/printers/forms/EditPrinter";
import PrinterDetails from "../../components/printers/Details/PrinterDetails";

const Printers = () => {
  const [printerTypesModal, setPrinterTypesModal] = useState(false);
  const [openAddPrinterTypeModal, setOpenAddPrinterTypeModal] = useState(false);
  const [editPrinterTypeModal, setEditPrinterTypeModal] = useState(false);
  const [printerTypeDetailsModal, setPrinterTypeDetailsModal] = useState(false);
  const [openAddPrinterModal, setOpenAddPrinterModal] = useState(false);
  const [openEditPrinterModal, setOpenEditPrintersModal] = useState(false);
  const [printerDetailsModal, setPrinterDetailsModal] = useState(false);
  const { permissions } = useSelector((state) => state.authState);

  const { printersSuccess } = useSelector((state) => state.printersState);
  const { printerTypesSuccess } = useSelector(
    (state) => state.printerTypesState
  );
  const dispatch = useDispatch();
  //ui fucntions
  const togglePrinterTypesModal = (value) => setPrinterTypesModal(value);
  const toggleEditPrinterModal = (value) => setOpenEditPrintersModal(value);
  const toggleAddPrinterTypesModal = (value) =>
    setOpenAddPrinterTypeModal(value);
  const toggleEditPrinterTypeModal = (value) => setEditPrinterTypeModal(value);
  const togglePrinterTypeDetailsModal = (value) =>
    setPrinterTypeDetailsModal(value);
  const toggleAddPrinterModal = (value) => setOpenAddPrinterModal(value);
  const togglePrinterDetailsModal = (value) => setPrinterDetailsModal(value);

  //thunks
  const refreshData = () => {
    dispatch(printerThunks.getPrinters());
    dispatch(printerTypeThunks.getPrinterTypes());
    dispatch(printerThunks.printersMetaData());
  };
  const deletePrinterType = (id, printerTypes) => {
    dispatch(printerTypeThunks.deletePrinterTypes(id, printerTypes));
  };
  const deletePrinter = (id, printers) =>
    dispatch(printerThunks.deletePrinters(id, printers));
  const printerTypeDetails = (id) => {
    setPrinterTypeDetailsModal(true);
    dispatch(printerTypeThunks.getPrinterTypesDetails(id));
  };
  const addPrinterType = (values, printerTypes) =>
    dispatch(printerTypeThunks.addPrinterTypes(values, printerTypes));
  const addPrinter = (values, printers) =>
    dispatch(printerThunks.addPrinters(values, printers));
  const editPrinterType = (values, printerTypes) =>
    dispatch(printerTypeThunks.editPrinterTypes(values, printerTypes));
  const editPrinter = (values, printers) =>
    dispatch(printerThunks.editPrinters(values, printers));
  const approvePrinterType = (id) =>
    dispatch(printerTypeThunks.approvePrinterTypes(id));
  const approvePrinter = (id) => dispatch(printerThunks.approvePrinters(id));
  const printerDetails = (id) => {
    setPrinterDetailsModal(true);
    dispatch(printerThunks.getPrintersDetails(id));
  };
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
      <Space direction="vertical">
        <h3 className="m-3 mb-0">Printers</h3>
        {permissions.can_view_printer_types && (
          <Button
            onClick={() => togglePrinterTypesModal(true)}
            className="mb-2"
            type="default"
            size="large"
          >
            Printer Types
          </Button>
        )}
      </Space>
      <PrintersTable
        handleViewDetails={printerDetails}
        handleOpenEditModal={toggleEditPrinterModal}
        handleDelete={deletePrinter}
        handleOpenAddModal={toggleAddPrinterModal}
        handleRefreshTable={refreshData}
      />
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
      <AddPrinter
        visible={openAddPrinterModal}
        handleCloseModal={toggleAddPrinterModal}
        handleAddRecord={addPrinter}
      />
      <EditPrinter
        handleEditRecord={editPrinter}
        visible={openEditPrinterModal}
        handleCloseModal={toggleEditPrinterModal}
      />
      <PrinterDetails
        handApprovePrinterType={approvePrinter}
        visible={printerDetailsModal}
        handleCloseModal={togglePrinterDetailsModal}
      />
    </div>
  );
};

export default Printers;
