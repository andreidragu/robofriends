import React from 'react';
import { Input } from '@chakra-ui/react';

type SearchBoxProps = {
    onSearchChange: (value: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ onSearchChange }) => {

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        onSearchChange(event.target.value);
    };

    return (
        <Input m={3} placeholder="Search a robot" maxW="350px" onChange={handleInputChange} />
    );
};

export default SearchBox;
