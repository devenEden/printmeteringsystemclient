const intialState = {
  printers: [],
  printersLoading: false,
  printersError: "",
  printersSuccess: false,

  addPrintersLoading: false,
  addPrintersMessage: "",
  addPrintersSuccess: false,
  addPrintersError: "",

  printersDetails: {},
  printersDetailsSuccess: false,
  printersDetailsLoading: false,
  printersDetailsError: "",

  editPrintersSuccess: false,
  editPrintersLoading: false,
  editPrintersData: {},
  editPrintersError: "",
  editPrintersMessage: "",

  deletePrintersLoading: false,
  deletePrintersSuccess: false,
  deletePrintersMessage: "",
  deletePrintersError: "",

  approvePrintersLoading: false,
  approvePrintersError: "",
  approvePrintersSuccess: false,
  approvePrintersMessage: "",

  printersMetaDataLoading: false,
  printersMetaData: {},
};

export default intialState;
