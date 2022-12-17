function decorateTree(base) {
  let baseTree = base.split(" ");
  let rowTree = "";
  let tree = [base];
  while (baseTree.length > 1) {
    for (let i = 0; i < baseTree.length - 1; i++) {
      const pairElement = baseTree.slice(i, i + 2);
      if (pairElement[0] === pairElement[1]) {
        rowTree += pairElement[0] + " ";
      }
      if (pairElement.includes("P") & pairElement.includes("R")) {
        rowTree += "B ";
      }
      if (pairElement.includes("P") & pairElement.includes("B")) {
        rowTree += "R ";
      }
      if (pairElement.includes("B") & pairElement.includes("R")) {
        rowTree += "P ";
      }
    }
    tree = [rowTree.trim(), ...tree];
    baseTree = rowTree.trim().split(" ");
    rowTree = "";
  }

  return tree;
}
