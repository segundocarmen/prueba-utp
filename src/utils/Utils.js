export const DateToString = (date, ymd = false) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  if (ymd) {
    return [year, month, day].join("/");
  } else {
    return [day, month, year].join("/");
  }
};

export const GetDateYear = (date) => {
  var d = new Date(date),
    year = d.getFullYear();
  return year;
};

export const GetArrayLength = (array) => {
  return array.length;
};

export const ShortString = (string, long = 40) => {
  if (string === undefined) {
    return "";
  } else {
    if (string.length > long) {
      return string.substring(0, long).concat("...");
    } else {
      return string;
    }
  }
};

export const ArrayLenght = (array = []) => {
  return array.length;
};
