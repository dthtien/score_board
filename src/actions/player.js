import * as PlayerActionTypes from '../actiontypes/player';

export const addPlayer = name => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name
  };
};

export const removePlayer = index => {
  return {
    type: PlayerActionTypes.REMOVE_PLAYER,
    index
  };
};

export const updatePlayerScore = (index, score) => {
  console.log(score)
  return {
    type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
    index,
    score
  };
};

export const updatePlayerIndex = index => {
  return{
    type: PlayerActionTypes.UPDATE_PLAYER_INDEX,
    index
  }
}