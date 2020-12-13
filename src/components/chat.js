import React, { useState } from 'react';
import { useDispatch } from '../context/dispatch';
import MessagesList from './messagesList';
import { sendMessage } from '../stateManager/actions';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';



export default function Chat({ userName, chatId, selectedChatDatails, userId }) {

    const dispatch = useDispatch();


    const [message, setMessage] = useState('');

    function handleSend() {
        dispatch(sendMessage({  message, chatId }))
        setMessage('');
    }

    function onKeypress(e) {
        if (e.key === 'Enter') {
            handleSend();
        }
    }

    return (
        <div className='w-100 h-100 d-block  border border-secondary rounded chat'>
            <div className='font-weight-bold h4 d-block p-3 bg-info text-white text-center'>{userName}</div >
            <div className='message-list'>
               {!!selectedChatDatails && <MessagesList messages={selectedChatDatails.messages}  />}

            </div>
            {chatId && (<div className="chat-footer  w-100">
                <InputGroup className=" message-input " >
                    <FormControl
                        placeholder="Type your message here"
                        aria-label="message box"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        onKeyPress={e => onKeypress(e)}
                    />
                    <InputGroup.Append>
                        <Button variant="dark" disabled={!(message)} onClick={handleSend}>send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>)
            }
        </div >
    )
}
