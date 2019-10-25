import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Button, List } from "semantic-ui-react";

function PlayerSearch() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    setFilteredPlayers(players.filter(player => player.includes(search)));
  }, [search]);

  useEffect(() => {
    axios
      .post("https://nba-predictor-ptbw.herokuapp.com/history", {
        token: localStorage.getItem("token")
      })
      .then(result => {
        setPlayers(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, [players]);

  const onInputChange = e => {
    const { value } = e.target;
    setPlayer(value);
  };

  const onSearchChange = e => {
    const { value } = e.target;
    setSearch(value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setPlayers([...players, player]);
    setPlayer("");
  };

  console.log(filteredPlayers);
  const playerArray = filteredPlayers.length ? filteredPlayers : players;

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <Input value={player} onChange={onInputChange} />
        <Input
          loading
          icon="user"
          placeholder="Search..."
          value={search}
          onChange={onSearchChange}
        />
        <Button type="submit">Search Players</Button>
      </form>
      <div>
        {playerArray.map((play, index) => (
          <List link>
            <List.Item key="index">{play}</List.Item>
          </List>
        ))}
      </div>
    </div>
  );
}

export default PlayerSearch;
{
  /* <p key={index}>{play}</p>; */
}
