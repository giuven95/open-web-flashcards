function ymdFormatted(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  let month = date.getMonth() + 1; // month is zero-indexed
  let day = date.getDate();

  // add leading zeroes if necessary
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
}

export default ymdFormatted;
