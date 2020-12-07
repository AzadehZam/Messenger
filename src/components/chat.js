import React, { useState } from 'react';
import { useDispatch } from '../context/dispatch';
import MessagesList from './messagesList';
import { sendMessage } from '../stateManager/actions';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';



export default function Chat({ chatId, chatsDetails }) {

    const dispatch = useDispatch();

    let chatData = chatsDetails.find(item => item.chatId === chatId);
    const messages = chatData.messages

    const [message, setMessage] = useState('');
    // const [messages, setMessages] = useState(chatData.messages);

    //useEffect(() =>
        //setMessages(chatData.messages)
        //, [chatData.messages])

    function handleSend() {
        
        //setMessages(newMessages);

        dispatch(sendMessage({ message, chatId }))

        // dispatch({
        //     type: 'SEND_MESSAGE',
        //     payload: { message, chatId }
        // });
        setMessage('');
    }

    function onKeypress(e) {
        if (e.key === 'Enter') {
            handleSend();
        }
    }

    return (
        <div className='w-100 h-100 d-block align-bottom border border-secondary rounded '>
            <div className='font-weight-bold h4 d-block p-3 mb-5 bg-info text-white text-center'>{chatData.userName}</div >
            <MessagesList messages={messages} />
            {chatId && (<div className="chat-footer offset-md-4 fixed-bottom">
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
</div >
    )
}
