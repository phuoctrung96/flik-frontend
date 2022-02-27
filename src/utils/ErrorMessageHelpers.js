export const required = (fieldName) => {
  return `${fieldName} is a required field`;
};

export const matched = (fieldName1, fieldName2) => {
  return `${fieldName1} and ${fieldName2} must be matched`;
};

export const emailValid = (fieldName) => {
  return `${fieldName} is invalid`;
};
