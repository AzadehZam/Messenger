import React from 'react';
import ChatsListItem from './chatsListItem';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ChatsList({data}) {
    
    return (<div className='border border-secondary rounded '>
        <ListGroup className='chatList'>
        {data.map(item => {
            const {id , text, time, userName, unreadMessages} = item;
            return <ListGroup.Item action variant="info" key={id}>
                <ChatsListItem  text = {text} time = {time}  userName = {userName} unreadMessages = {unreadMessages} id= {id}/>
            </ListGroup.Item>
        }
        )}
    </ListGroup>
    </div>)

}