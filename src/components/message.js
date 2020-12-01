import React from 'react';

export default function Message({ text, time, sender}) {
    return (
        <div className={`border border-secondary rounded ${sender === "myself" ? "flex-row-reverse p-2 mb-2 bg-dark text-white" : " p-2 mb-2 bg-light text-dark"}` }>
            <div className='messageText'>{text}</div>
            <div className='messageTime'>{time}</div>
        </div>
    )
}