export default function getModifiedArrayOfCities(sities, ...filds) {
  const arrObjVal = Object.values(sities);

  const newArr = arrObjVal.map((obj) => {
    const newobj = {};
    const arrKeys = Object.keys(obj);

    for (const item of filds) {
      if (!arrKeys.some((val) => val === item)) {
        return;
      }
    }

    for (const item of filds) {
      newobj[item] = obj[item];
    }
    // eslint-disable-next-line consistent-return
    return newobj;
  }).filter((obj) => Boolean(obj) === true);
  return newArr;
}
