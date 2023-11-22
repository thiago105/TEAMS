import mongoose, {Schema} from 'mongoose';

const Team = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.String,
    active: mongoose.Schema.Types.Boolean,
    responsible: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    teams: {
      type: mongoose.Schema.Types.Array,
      required: true,
    },
    totalTeams: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    totalPlayers: mongoose.Schema.Types.Number,
    gameDate: mongoose.Schema.Types.Date
  },

  { timestamps: true }
);

module.exports = mongoose.model('team', Team);
