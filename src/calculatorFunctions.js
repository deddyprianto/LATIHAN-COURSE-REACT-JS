console.log(`ini adalah sebuah Fuctions calculator`);

export const hitungData = (dataArr) =>
  dataArr.reduce((acc, curr) => acc + curr);

export const kurangkanData = (dataArr) =>
  dataArr.reduce((acc, curr) => acc - curr);
