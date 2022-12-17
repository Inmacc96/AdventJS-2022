function selectSleigh(distance, sleighs) {
  const bestSelight = sleighs
    .reverse()
    .find((sleigh) => sleigh.consumption * distance <= 20);
  return bestSelight ? bestSelight.name : null;
}