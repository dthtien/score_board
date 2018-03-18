import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
  players: [{
    name: 'Jim Hoskins',
    score: 31,
    created: '11/8/2016',
    updated: '11/9/2016'
  },
  {
    name: 'Andrew Chalkley',
    score: 20,
    created: '11/9/2016',
    updated: '11/10/2016'
  },
  {
    name: 'Alena Holligan',
    score: 50,
    created: '11/11/2016',
    updated: '11/12/2016'
  }
  ],
  selectedPlayerIndex: -1
}

export default function Player(state=initialState, action){
  switch(action.type) {
    case PlayerActionTypes.ADD_PLAYER:
    return {
      players: [
        ...state.players,
        {
          name: action.name,
          score: 0
        }
      ],
      selectedPlayerIndex: state.selectedPlayerIndex
    };

    case PlayerActionTypes.REMOVE_PLAYER:

    return{
      players: [
        ...state.players.slice(0, action.index),
        ...state.players.slice(action.index + 1)
      ],
      selectedPlayerIndex: state.selectedPlayerIndex
    };

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
    return{ 
      players: state.players.map((player, index) => {
        if(index === action.index) {
          console.log(action);
          return {
            ...player,
            score: player.score + action.score
          }
        }
        return player;
      }),
      selectedPlayerIndex: state.selectedPlayerIndex
    };

    case PlayerActionTypes.UPDATE_PLAYER_INDEX:
    return{
      selectedPlayerIndex: action.index,
      players: state.players
    };

    default:
      return state;
  }
}