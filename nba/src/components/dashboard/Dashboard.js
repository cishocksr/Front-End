import React, { useState, useEffect} from 'react';
import PlayerCard from './PlayerCard.js';
import { CardsWrapper, DashForm, Label } from './styledComponent.js'
import axios from 'axios';

const Dashboard = props => {

    const[player, setPlayer] = useState({team: 'Select...', name: 'Select...'})

    const changePlayer = (event) => {
        setPlayer({...player, [event.target.name]: event.target.value})
        console.log(player);
    }

    return (
        <div>
            <h1>Compare Players</h1>
            <DashForm>
                <div>
                <Label>Team: </Label>
                <select name='team' value={player.team} onChange={changePlayer} >
                    <option value='Select...'>Select...</option>
                    <option value='Lakers'>Los Angeles Lakers</option>
                </select>
                </div>
                <div>
                <Label>Player: </Label>
                <select name='name' value={player.name} onChange={changePlayer}>
                    <option value='Select...'>Select...</option>
                    <option value='Lebron James'>Lebron James</option>
                </select>
                </div>
            </DashForm>
            {/* Need Styling For wrapper to hold both cards */}
            <CardsWrapper>
                <PlayerCard/>
                <PlayerCard/>
            </CardsWrapper>
        </div>
    )
}

export default Dashboard;