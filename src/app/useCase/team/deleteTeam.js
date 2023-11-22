import * as Repository from "../../repository/index";
import * as UseCase from "../index";

export async function index(payload) {
  try {
    const team = await Repository.team.create();
    return {
      statusCode: 200,
      success: true,
      message: "Team created sucess",
      data: {}
    };

  } catch (err) {
    console.log(err)
    throw { message: err?.message ?? "Deu algo errado..." }
  }
}