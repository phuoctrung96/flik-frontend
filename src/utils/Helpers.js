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
