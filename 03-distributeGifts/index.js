function distributeGifts(packOfGifts, reindeers) {
  const boxWeight = packOfGifts.reduce((acum, gift) => acum + gift.length, 0);
  const reindeersLimit = reindeers.reduce(
    (acum, reindeer) => acum + 2 * reindeer.length,
    0
  );

  return Math.floor(reindeersLimit / boxWeight);
}
