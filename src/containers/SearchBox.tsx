import type React from 'react';
import { useState, useRef, memo as ReactMemo } from 'react';
import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';

import { useAppDispatch } from '../redux/hooks';
import { searchFieldTyping } from '../redux/search/search.slice';

const SearchBox: React.FC = ReactMemo(() => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const handleClearClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (value) {
            dispatch(searchFieldTyping(''));
            setValue('');
            inputRef.current?.focus();
        }
    };

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const value = event.target.value;
        dispatch(searchFieldTyping(value));
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
});
SearchBox.displayName = 'SearchBox';

export default SearchBox;
