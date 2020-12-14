import React from 'react';
import ChatsListItem from './chatsListItem';
import { useDispatch } from '../context/dispatch';
import { selectChat } from '../stateManager/actions';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ChatsList({chatsList, chatsDetails}) {
    
    const dispatch = useDispatch();
    
    return (<div className='border border-secondary rounded '>
        <ListGroup className='chatList'>
        {chatsList.map(item => {
            const {chatId , userName, unreadMessages} = item;
            const chatMessages = chatsDetails.find(chat => chat.chatId === chatId).messages;
            const lastMessage = chatMessages[chatMessages.length-1];
            return <ListGroup.Item action variant="dark"  key={chatId} onClick={() => dispatch(selectChat(chatId))}>
                <ChatsListItem
                  text = {lastMessage.text} 
                  time = {lastMessage.time}  
                  userName = {userName} 
                  unreadMessages = {unreadMessages} 
                  />
            </ListGroup.Item>
        }
        )}
    </ListGroup>
    </div>)

}