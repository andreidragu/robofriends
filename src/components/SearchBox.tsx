import type React from 'react';
import { Input } from '@chakra-ui/react';

type TSearchBoxProps = {
    onSearchChange: (value: string) => void;
};

const SearchBox: React.FC<TSearchBoxProps> = ({ onSearchChange }) => {

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        onSearchChange(event.target.value);
    };

    return (
        <Input m={3} bg="blue.50" placeholder="Search a robot" maxW="250px" onChange={handleInputChange} />
    );
};

export default SearchBox;
