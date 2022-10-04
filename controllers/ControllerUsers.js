const modelUsers = require("../models/ModelUsers");

module.exports = {
  async getAll(req, res) {
    try {
      const users = await modelUsers.getAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async getFindOne(req, res) {
    const { id } = req.params;
    try {
      const user = await modelUsers.getFindOne(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async post(req, res) {
    try {
      const user = await modelUsers.post(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async update(req, res) {
    const { id } = req.params;
    try {
      await modelUsers.update(id, req.body);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      await modelUsers.delete(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
