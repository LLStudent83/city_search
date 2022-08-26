export default function getCityById(sities, id) {
  const arrObjVal = Object.values(sities);
  const [objSity] = arrObjVal.filter((obj) => obj.id === id);
  return objSity;
}
