const axios = require("axios");

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584;
const fibonacci = (value) => {
  const fibo = [0, 1];

  for (let i = 2; i < value; i += 1) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }

  return fibo;
};

const requestCityData = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao buscar o CEP.");
  }
};

module.exports = { fibonacci, requestCityData };
