import React from 'react';
import { Box } from '@chakra-ui/react';

import { Robot } from '../datasets/robots';
import Card from './Card';

type CardListProps = {
    robots: Robot[];
};

const CardList: React.FC<CardListProps> = ({ robots }) => {
    return (
        <Box textAlign="center">
            {robots.map(robot => <Card key={robot.id} username={robot.username} name={robot.name} email={robot.email} />)}
        </Box>
    );
};

export default CardList;
