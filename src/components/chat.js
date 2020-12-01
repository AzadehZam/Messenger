import React, { useEffect, useState } from 'react';
import { useDispatch } from '../context/dispatch';
import MessagesList from './messagesList';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Chat({ id, chatsDetails }) {

    const dispatch = useDispatch();

    let chatData = chatsDetails.find(item => item.userId === id);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(chatData.messages);

    useEffect(() =>
        setMessages(chatData.messages)
        , [chatData.messages])

    function handleSend() {
        const newMessages = [
            ...messages,
            {
                id: messages.length + 1,
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                sender: 'myself'
            }
        ];
        setMessages(newMessages);

        dispatch({
            type: 'MESSAGE_SENT',
            payload: { newMessages, id }
        })
        setMessage('');

    }
    // useEffect(() => {
    //     dispatch({
    //         type: 'MESSAGE_SENT',
    //         payload: { messages , id }
    //     })
    // }, [messages]);
    function onKeypress(e) {
        if (e.key === 'Enter') {
            handleSend()
        }

    }

    return (
        <div className='w-100 h-100 d-block align-bottom border border-secondary rounded '>
            <div className='font-weight-bold h4 d-block p-3 mb-5 bg-info text-white text-center'>{chatData.userName}</div >
            <MessagesList messages={messages} />
            {(id !== 0) && (<div className="chat-footer offset-md-4 fixed-bottom">
                <InputGroup className=" mb-3 ml-3 pr-5 mr-5" >
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

{/* <input className='message-input' value={message} onChange={e => setMessage(e.target.value)}></input> */ }
{/* <Button className='send-button m-2' variant="dark" disabled={!(message)} onClick={handleSend}>send</Button> */ }
        </div >
    )
}

// export function chatHeader({userName}) {



// }