import * as UseCase from '../useCase/index';

class TeamController {
  async create(req, res) {
    try {
      const result = await UseCase.teamCreate.index(req)
      return res.status(200).json(result)
    } catch (err) {
      return res.status(400).json(err)
    }
  };

  async get(req, res) {
    try {
      const result = await UseCase.teamGet.index(req)
      return res.status(200).json(result)
    } catch (err) {
      return res.status(400).json(err)
    }
  };

  async update(req, res) {
    try {
      const result = await UseCase.teamUpdate.index(req)
      return res.status(200).json(result)
    } catch (err) {
      return res.status(400).json(err)
    }
  };

  async delete(req, res) {
    try {
      const result = await UseCase.teamDelete.index(req)
      return res.status(200).json(result)
    } catch (err) {
      return res.status(400).json(err)
    }
  };
  
}

export default new TeamController();
