const { fibonacci } = require("./FuncAux");

const getFibonacci = (req, res) => {
  try {
    const { parameter } = req.params;

    const result = fibonacci(parameter);

    return res.status(200).json({ fibonacci: result });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ message: "invalid parameter" });
  }
};

module.exports = { getFibonacci };
