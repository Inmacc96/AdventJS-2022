function countHours(year, holidays) {
  return holidays.reduce((hoursExtra, holiday) => {
    const date = new Date(`${year}/${holiday}`);
    return ![0, 6].includes(date.getDay()) ? hoursExtra + 2 : hoursExtra;
  }, 0);
}
