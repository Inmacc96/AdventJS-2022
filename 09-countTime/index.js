function countTime(leds) {
  const ledsCopy = [...leds];
  let nChange = 0;
  while (ledsCopy.some((v) => v !== 1)) {
    ledsCopy = ledsCopy.map((led, i) => (ledsCopy.at(i - 1) || led));
    nChange += 1;
  }
  return nChange * 7;
}
