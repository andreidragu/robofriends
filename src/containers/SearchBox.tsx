import type React from 'react';
import { useState, useRef } from 'react';
import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';

type TSearchBoxProps = {
    onSearchChange: (value: string) => void;
};

const SearchBox: React.FC<TSearchBoxProps> = ({ onSearchChange }) => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClearClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (value) {
            onSearchChange('');
            setValue('');
            inputRef.current?.focus();
        }
    };

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const value = event.target.value;
        onSearchChange(value);
        setValue(value);
    };

    return (
        <InputGroup m={3} bg="blue.50" maxW="250px" mx="auto">
            {value &&
                <InputRightElement
                    children={
                        <IconButton
                            variant="ghost"
                            size="sm"
                            icon={<FiX />}
                            aria-label="Clear search field"
                            _focus={{ boxShadow: 'none' }}
                            onClick={handleClearClick}
                        />
                    }
                />
            }
            <Input
                placeholder="Search a robot"
                ref={inputRef}
                value={value}
                onChange={handleInputChange}
            />
        </InputGroup>
    );
};

export default SearchBox;
