export const GetPrice = (id) => {
  let y = 0;
  id.split("").forEach((id) => (y += parseInt(id)));
  return y;
};
