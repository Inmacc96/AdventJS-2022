function dryNumber(dry, numbers) {
  let notPrintNumbers = [];
  for (let i = 1; i <= numbers; i++) {
    if (i.toString().includes(dry.toString())) {
      notPrintNumbers.push(i);
    }
  }
  return notPrintNumbers;
}

// Another more beautiful solution
function dryNumber2(dry, number) {
  return Array.from({ length: number }, (_, i) => i + 1).filter((n) =>
    n.toString().includes(dry.toString())
  );
}