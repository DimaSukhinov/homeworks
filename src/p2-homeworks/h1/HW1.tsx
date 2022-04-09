import React from 'react'
import Message from './Message';

const messageData = {
    avatar: 'https://sun9-62.userapi.com/impg/PHYyrX__ctTup5GAVdwohv-KJkfwJRCeButMnA/1EjSdwCR8c4.jpg?size=100x100&quality=95&sign=67010ed9c53b08a2811df72473d0a242&type=album',
    name: 'Maks',
    message: 'npm start нажимал?',
    time: '22:01',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
        </div>
    )
}

export default HW1
