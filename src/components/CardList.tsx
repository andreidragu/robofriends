import React from 'react';

import { IRobot } from '../redux/robots/robots.type';
import Card from './Card';

type TCardListProps = {
    robots: IRobot[];
};

const CardList: React.FC<TCardListProps> = ({ robots }) => {
    return (
        <React.Fragment>
            {robots.map(robot => <Card key={robot.id} username={robot.username} name={robot.name} email={robot.email} />)}
        </React.Fragment>
    );
};

export default CardList;
