// @flow

const getLineStatus = (line: Line): ItemStatus => {
  const [a, b, c] = line;

  switch (a) {
    case 1:
      return a === b && b === c
        ? 1
        : 0;
    case 2:
      return a === b && b === c
        ? 2
        : 0;
    default:
      return 0;
  }
};

export default getLineStatus;
