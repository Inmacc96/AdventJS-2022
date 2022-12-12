function countTime(leds) {
  let nChange = 0;
  while (leds.some((v) => v !== 1)) {
    leds = leds.map((led, i) => (led === 0 && leds.at(i - 1) === 1 ? 1 : led));
    nChange += 1;
  }
  return nChange * 7;
}