import React, { useState } from 'react';
import { useDispatch } from '../context/dispatch';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SearchBox() {

    const dispatch = useDispatch();

    const [keyword, setKeyword] = useState('')

    function handleChange(e) {
         setKeyword(e.target.value);
         dispatch({
            type: 'SEARCH',
            payload: e.target.value
        })
    }

    return (
        <div className='chat w-100 d-inline-block '>
            
            <div className="search-box">
                <InputGroup className=" mb-1 message-input">
                    <FormControl
                        placeholder="Search"
                        aria-label="message box"
                        value={keyword}
                        onChange={handleChange}
                    />
                </InputGroup>
            </div>

        </div>
    )
}
