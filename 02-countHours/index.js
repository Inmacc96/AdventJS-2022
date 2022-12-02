function countHours(year, holidays) {
  return holidays.reduce((hoursExtra, holiday) => {
    const day = holiday.split("/")[1];
    const date = new Date(`${year}/${holiday}`);
    if (day !== "31" && ![0, 6].includes(date.getDay())) {
      hoursExtra += 2;
    }
    return hoursExtra;
  }, 0);
}
