const getID = () => {
  // https://gist.github.com/gordonbrander/2230317
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "id" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

const dateFormat = (value) => {
  let options = {
    // day: "2-digit",
    // month: "long",
    // year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return new Intl.DateTimeFormat("ru-RU", options).format(value);
};

const dateDiff = (dateNew, dateOld) => {
  let delta = Math.abs(dateNew - dateOld) / 1000;
  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;
  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  // what's left is seconds
  var seconds = Math.floor(delta % 60); // in theory the modulus is not required
  return { days, hours, minutes, seconds };
};

const consolelog = (value) => {
  console.log(value);
};

export { getID, dateFormat, dateDiff, consolelog };
