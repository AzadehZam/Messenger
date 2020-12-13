import React from 'react';
import Message from './message';

export default function MessagesList({messages}) {
    
    return <ul className='list-unstyled px-2 messages-list'>
        {messages.map(item => {
            const {id , text, time, userId} = item;
            return <li key={id} className={userId === '1' ? 'd-flex flex-row-reverse p-2 mb-2 ': 'd-flex p-2 mb-2 '}>
                <Message  text = {text} time = {time}  userId = {userId}/>
            </li>
        }
        )}
    </ul>

}
