import Team from '../../models/Team';

export async function create(data) {
  const document = await Team.create({
    id: data.id,
    responsible: data.responsible,
    active: data.active,
    teams: data.teams,
    totalTeams: data.totalTeams,
    totalPlayers: data.totalPlayers,
    gameDate: data.gameDate,
  });
  return document
};

export async function findAll(query, fields, options, sort) {
  const document = await Team.find(query, fields, options).sort(sort);
  return document
};

export async function count(query) {
  const document = await Team.count(query);
  return document
};

export async function findOne(query, fields, sort) {
  const document = await Team.findOne(query, fields).sort(sort);
  return document
};

export async function getOne(query, fields) {
  const document = await Team.findOne({ active: true, ...query }, fields);
  return document
};

export async function update(filter, update) {
  const document = await Team.findOneAndUpdate(filter, update);
  return document
};

export async function deleteOne(filter) {
  const document = await Team.deleteOne(filter);
  return document
};