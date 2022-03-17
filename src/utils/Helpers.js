export function classNames(classOne, classTwo) {
  return classOne + " " + classTwo;
}

export function splitName(name) {
  let newName = name
    .split(" ")
    .map((str) => str[0])
    .join("");
  return newName.length <= 2
    ? newName
    : newName[0] + newName[newName.length - 1];
}

export function checkObjectEmpty(data) {
  return Object.keys(data).length === 0;
}

export function convertSecondToMinute(seconds) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds - minutes * 60;
  return minutes + ":" + newSeconds;
}
