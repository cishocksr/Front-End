import React, { useState, useEffect} from 'react';
import PlayerCard from './PlayerCard.js';
import axios from 'axios';

const Dashboard = props => {

    const[player, setPlayer] = useState({team: 'Select...', name: 'Select...'})

    const changePlayer = (event) => {
        setPlayer({...player, [event.target.name]: event.target.value})
        console.log(player);
    }

    return (
        <div>
            <form>
                <label>Team: </label>
                <select name='team' value={player.team} onChange={changePlayer} >
                    <option value='Select...'>Select...</option>
                    <option value='Lakers'>Lakers</option>
                </select>
                <label>Player: </label>
                <select name='name' value={player.name} onChange={changePlayer}>
                    <option value='Select...'>Select...</option>
                    <option value='Lebron James'>Lebron James</option>
                </select>
            </form>
            {/* Need Styling For wrapper to hold both cards */}
            <div>
                <PlayerCard/>
                <PlayerCard/>
            </div>
        </div>
    )
}

export default Dashboard;