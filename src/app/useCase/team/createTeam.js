import * as Repository from "../../repository/index";
import * as Utils from '../../../utils/index';

export async function index(payload) {
  try {
    const { responsible, totalTeams, players } = payload.body;

    if (totalTeams < 2) {
      throw ({ message: "nescessario contem no minimo 2 times!" })
    } else if (players.length < 2) {
      throw ({ message: "nescessario contem no minimo 2 jogadores!" })
    }
    const date = Utils.helpers.newDate();
    const shuffledPlayers = Utils.helpers.shuffleArray([...players]);
    const teams = [];

    for (let i = 0; i < totalTeams; i++) {
      teams.push({
        teamName: `Team ${String.fromCharCode(65 + i)}`,
        players: shuffledPlayers.splice(0, Math.ceil(shuffledPlayers.length / (totalTeams - i))),
      });
    }

    const response = await Repository.team.create({
      id: Utils.helpers.id(),
      active: true,
      responsible: responsible,
      teams: teams,
      totalTeams: totalTeams,
      totalPlayers: players.length,
      gameDate: date,
    });

    const gameDate = await Repository.team.findOne({ gameDate: response.gameDate })
    const expireGameDate = Utils.helpers.addDays(gameDate, 1);

    if(expireGameDate){
      await Repository.team.update({},{
        id: response.id,
        active: false,
        responsible: response.responsible,
        teams: response.teams,
        totalTeams: response.totalTeams,
        totalPlayers: response.totalPlayers,
        gameDate: response.date,
        expireGameDate: expireGameDate
      });
    }

    return {
      statusCode: 200,
      success: true,
      message: "Team created successfully",
      data: response
    };

  } catch (err) {
    console.log(err)
    throw { message: err?.message ?? "Deu algo errado..." }
  }
}