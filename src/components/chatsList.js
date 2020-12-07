import React from 'react';
import ChatsListItem from './chatsListItem';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ChatsList({chatsList, chatsDetails}) {
    console.log('chatList rendered');
    
    return (<div className='border border-secondary rounded '>
        <ListGroup className='chatList'>
        {chatsList.map(item => {
            const {chatId , userName, unreadMessages} = item;
            const chatMessages = chatsDetails.find(chat => chat.chatId === chatId).messages;
            const lastMessage = chatMessages[chatMessages.length-1];
            return <ListGroup.Item action variant="info" key={chatId}>
                <ChatsListItem
                  text = {lastMessage.text} 
                  time = {lastMessage.time}  
                  userName = {userName} 
                  unreadMessages = {unreadMessages} 
                  chatId= {chatId}/>
            </ListGroup.Item>
        }
        )}
    </ListGroup>
    </div>)

}