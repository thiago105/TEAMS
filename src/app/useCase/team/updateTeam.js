import * as Repository from "../../repository/index";
import * as UseCase from "../index";

export async function index(payload) {
  try {
    const { query } = payload

    const team = await Repository.team.findAll();


    return {
      statusCode: 200,
      success: true,
      message: "Team created sucess",
      data: team
    };

  } catch (err) {
    console.log(err)
    throw { message: err?.message ?? "Deu algo errado..." }
  }
}