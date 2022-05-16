export const FormatDate = () => {
  const FuncFormatDate = (dt: Date) => {
    var y = dt.getFullYear();
    var m = ("00" + (dt.getMonth() + 1)).slice(-2);
    var d = ("00" + dt.getDate()).slice(-2);
    return y + "-" + m + "-" + d;
  };

  return { FuncFormatDate };
};
