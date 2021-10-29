import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions
          .map((each) => (<MissionCard
            key={ each.name }
            name={ each.name }
            year={ each.year }
            country={ each.country }
            destination={ each.destination }
          />))}
      </div>
    );
  }
}

export default Missions;
