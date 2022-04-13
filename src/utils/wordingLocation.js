export const wordingLocation = (str) => {
  let result = '';
  let splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  result = splitStr.join(' ');

  if (str === 'DKI JAKARTA') {
    result = 'DKI Jakarta';
  }
  // Directly return the joined string
  return result;
};
