function createCube(size) {
  let upper = "";
  for (let i = 1; i < size + 1; i++) {
    upper += `${" ".repeat(size - i)}${"/\\".repeat(i)}${"_\\".repeat(size)}\n`;
  }

  let lower = "";
  for (let i = size; i > 0; i--) {
    lower += `${" ".repeat(size - i)}${"\\/".repeat(i)}${"_/".repeat(size)}${
      0 !== i ? "\n" : ""
    }`;
  }
  return upper + lower;
}
