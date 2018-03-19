import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Players from '../components/Players';
import PlayerDetail from '../components/PlayerDetail';


class Scoreboard extends Component {

  static propTypes = {
    players: PropTypes.array.isRequired,
    selectedPlayerIndex: PropTypes.number.isRequired
  };

  render(){

    const {dispatch, players, selectedPlayerIndex} = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const updatePlayerIndex = bindActionCreators(PlayerActionCreators.updatePlayerIndex, dispatch);

    let selectedPlayer;
    if (selectedPlayerIndex !== -1) {
      selectedPlayer = players[selectedPlayerIndex]
    }
    return(
      <div className="scoreboard">
        <Header players={players} />

        <Players 
          players={players}
          updatePlayerScore={updatePlayerScore}
          removePlayer={removePlayer}
          updatePlayerIndex={updatePlayerIndex}
        />

        <AddPlayerForm addPlayer={addPlayer} />
        <PlayerDetail 
          selectedPlayer={selectedPlayer}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
  selectedPlayerIndex: state.selectedPlayerIndex
});

export default connect(mapStateToProps)(Scoreboard);