export const isEmptyObject = (obj: object) =>
  Object.values(obj).every((value) => value === '' || value === null || value === undefined);
