export const getExpiryDate = () => {
  var day = 4;
  var date = new Date();
  while (date.getDay() != day) {
    date.setDate(date.getDate() + 1);
  }
  const month = date.getMonth() + 1;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const dayNumber = date.getDate();
  const formattedDay = dayNumber < 10 ? `0${dayNumber}` : dayNumber;
  return `${date.getFullYear()}-${formattedMonth}-${formattedDay}`;
};
