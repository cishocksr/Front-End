import React from 'react';
import { CardWrapper, PlayerImage, CardHeader, CardHeading, CardSubHeading, CardBody } from './styledComponent';

const PlayerCard = props => {
     return (
          <div>
               <CardWrapper>
                    <PlayerImage src='https://nba-players.herokuapp.com/players/kuzma/kyle' />
                    <CardHeader>
                         <CardHeading>Kyle Kuzma</CardHeading>
                         <CardSubHeading>LA Lakers, Small Forward</CardSubHeading>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
               </CardWrapper>  
          </div>
     )
}

export default PlayerCard;