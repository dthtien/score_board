import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player'

const Players = (props) => {
  return (
    <div className="players">
      {props.players.map(function(player, index) {
         return (
           <Player
            index={index}
             name={player.name}
             score={player.score}
             key={player.name}
             updatePlayerScore={props.updatePlayerScore}
             removePlayer={() => props.removePlayer(index)}
           />
         );
       }.bind(this))}
    </div>
  );
}

Players.propsType = {
  players: PropTypes.array.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired
}

export default Players;