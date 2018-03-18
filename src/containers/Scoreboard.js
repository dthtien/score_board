import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Players from '../components/Players';

class Scoreboard extends Component {

  static propTypes = {
    players: PropTypes.array.isRequired
  };

  render(){

    const {dispatch, players} = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    return(
      <div className="scoreboard">
        <Header players={players} />

        <Players 
          players={players}
          updatePlayerScore={updatePlayerScore}
          removePlayer={removePlayer}
        />

        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state
});

export default connect(mapStateToProps)(Scoreboard);