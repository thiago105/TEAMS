import * as Repository from "../../repository/index";
import * as UseCase from "../index";

export async function index(payload) {
  try {
    const { query } = payload
    let filter = { active: true };
    
    if (query.id) filter.id = query.id;
    if (query.responsibleName) filter.responsible = query.responsibleName;
    if (query.gameDate) { filter.gameDate = { $eq: new Date(query.gameDate) } };
    
    
    const team = await Repository.team.findAll(filter);

    return {
      statusCode: 200,
      success: true,
      message: "filter done successfully",
      data: team
    };

  } catch (err) {
    console.log(err)
    throw { message: err?.message ?? "Deu algo errado..." }
  }
}