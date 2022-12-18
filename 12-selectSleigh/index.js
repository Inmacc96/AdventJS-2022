function selectSleigh(distance, sleighs) {
  const bestSleigh = sleighs
    .reverse()
    .find((sleigh) => sleigh.consumption * distance <= 20);
  return bestSleigh ? bestSleigh.name : null;
}