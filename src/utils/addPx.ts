const addPx = (value: number | string | undefined) => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
};

export { addPx };
