const intialState = {
  printerTypes: [],
  printerTypesLoading: false,
  printerTypesError: "",
  printerTypesSuccess: false,

  addPrinterTypesLoading: false,
  addPrinterTypesMessage: "",
  addPrinterTypesSuccess: false,
  addPrinterTypesError: "",

  printerTypesDetails: {},
  printerTypesDetailsSuccess: false,
  printerTypesDetailsLoading: false,
  printerTypesDetailsError: "",

  editPrinterTypesSuccess: false,
  editPrinterTypesLoading: false,
  editPrinterTypesData: {},
  editPrinterTypesError: "",
  editPrinterTypesMessage: "",

  deletePrinterTypesLoading: false,
  deletePrinterTypesSuccess: false,
  deletePrinterTypesMessage: "",
  deletePrinterTypesError: "",

  approvePrinterTypesLoading: false,
  approvePrinterTypesError: "",
  approvePrinterTypesSuccess: false,
  approvePrinterTypesMessage: "",

  printerTypesMetaDataLoading: false,
  printerTypesMetaData: {},
};

export default intialState;
