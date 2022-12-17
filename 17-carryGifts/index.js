function carryGifts(gifts, maxWeight) {
  return gifts.reduce((acum, current) => {
    if (acum.length === 0) {
      return current.length <= maxWeight ? [...acum, current] : acum;
    }

    if (`${acum.at(-1).replace(/\s/g, "")}${current}`.length <= maxWeight) {
      acum[acum.length - 1] = `${acum.at(-1)} ${current}`;
      return acum;
    } else {
      return [...acum, current];
    }
  }, []);
}