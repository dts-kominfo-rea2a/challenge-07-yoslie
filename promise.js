const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  const dataIXX = await promiseTheaterIXX();
  const dataVGC = await promiseTheaterVGC();
  const data = dataIXX.concat(dataVGC);

  let totalEmotion = 0;
  data.map(item => item.hasil === emotion && (totalEmotion += 1) )
  return totalEmotion
};

module.exports = {
  promiseOutput,
};
