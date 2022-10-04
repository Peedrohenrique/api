//Conexão com banco de dados MySQL!
const db = require("../config/db");

//Todas as minhas Querys como Array!
const querys = [
  "SELECT * FROM usuarios",
  "SELECT * FROM usuarios WHERE id = ?",
  "INSERT INTO usuarios(nome, setor, cargo, salario) VALUES (?, ?, ?, ?)",
  "UPDATE usuarios SET nome = ?, setor = ?, cargo = ?, salario = ? WHERE id = ?",
  "DELETE FROM usuarios WHERE id = ?",
];

module.exports = {
  //Pegar Todos os users do banco de dados!
  async getAll() {
    const [users] = await db.execute(querys[0]);
    return users;
  },

  //Pegar apenas um user do banco de dados!
  async getFindOne(id) {
    const [user] = await db.execute(querys[1], [id]);
    return user;
  },

  //Cadastrar user no banco de dados!
  async post(user) {
    const { nome, setor, cargo, salario } = user;
    const [response] = await db.execute(querys[2], [
      nome,
      setor,
      cargo,
      salario,
    ]);
    return { Cadastrado_Id: response.insertId };
  },

  //Atualizar user do banco de dados!
  async update(id, user) {
    const { nome, setor, cargo, salario } = user;
    const [update] = await db.execute(querys[3], [
      nome,
      setor,
      cargo,
      salario,
      id,
    ]);
    return update;
  },

  //Apagar user do banco de dados!
  async delete(id) {
    const removeUser = await db.execute(querys[4], [id]);
    return removeUser;
  },
};
