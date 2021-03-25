import React from 'react';

import { IRobot } from '../typings/IRobot';
import Card from './Card';

type CardListProps = {
    robots: IRobot[];
};

const CardList: React.FC<CardListProps> = ({ robots }) => {
    return (
        <React.Fragment>
            {robots.map(robot => <Card key={robot.id} username={robot.username} name={robot.name} email={robot.email} />)}
        </React.Fragment>
    );
};

export default CardList;
