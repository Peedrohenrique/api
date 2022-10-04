module.exports = {
  validateBody(req, res, next) {
    const { body } = req;

    if (body.nome === "" || body.nome === undefined) {
      return res.status(400).json({ message: "O Campo 'NOME' é obrigatório!" });
    }
    if (body.setor === "" || body.setor === undefined) {
      return res
        .status(400)
        .json({ message: "O Campo 'SETOR' é obrigatório!" });
    }
    if (body.cargo === "" || body.cargo === undefined) {
      return res
        .status(400)
        .json({ message: "O Campo 'CARGO' é obrigatório!" });
    }
    if (body.salario === "" || body.salario === undefined) {
      return res
        .status(400)
        .json({ message: "O Campo 'SALÁRIO' é obrigatório!" });
    }
    next();
  },
};
