export const INSERT = "INSERT";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const UPDATE_INDEX = "UPDATE_INDEX";
export const NAME = "NAME";
export const ACCOUNT_NUMBER = "ACCOUNT_NUMBER";
export const FSC = "FSC";
export const AMOUNT = "AMOUNT";
export const RESULT = "RESULT";

export const handleInputChangeName = (value) => {
  return {
    type: NAME,
    payload: value,
  };
};

export const handleInputChangeAccountNumber = (value) => {
  return {
    type: ACCOUNT_NUMBER,
    payload: value,
  };
};

export const handleResult = () => {
  return {
    type: RESULT,
  };
};

export const handleInputChangeFsc = (value) => {
  return {
    type: FSC,
    payload: value,
  };
};

export const handleInputChangeAmount = (value) => {
  return {
    type: AMOUNT,
    payload: value,
  };
};

export const insert = (data) => {
  return {
    type: INSERT,
    payload: data,
  };
};

export const update = (id) => {
  return {
    type: UPDATE,
    payload: id,
  };
};

export const deleteData = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
export const updateIndex = (index) => {
  return {
    type: UPDATE_INDEX,
    payload: index,
  };
};
