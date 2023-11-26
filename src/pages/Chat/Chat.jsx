import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addMessage} from "../../redux/reducers/message";

const Chat = () => {

    const dispatch = useDispatch();
    const messages = useSelector((state) => state.message.messages);
    const [newMessageText, setNewMessageText] = React.useState('');

    const sendMessage = () => {
        if (newMessageText.trim() !== '') {
            dispatch(addMessage(newMessageText.trim()));
            setNewMessageText('');
        }
    };
    // const initialMessages = [
    //     { id: 1, name: 'Санжар', message: 'привет' },
    //     { id: 2, name: 'User', message: 'привет' },
    // ];
    //
    // const [messages, setMessages] = useState(initialMessages);
    //
    // const [newMessageText, setNewMessageText] = useState('');
    //
    const handleInputChange = (e) => {
        setNewMessageText(e.target.value);
    };
    //
    // const sendMessage = () => {
    //     if (newMessageText.trim() !== '') {
    //         const newMessage = {
    //             id: messages.length + 1,
    //             name: 'User',
    //             message: newMessageText.trim(),
    //         };
    //         setMessages([...messages, newMessage]);
    //         setNewMessageText('');
    //     }
    // };

    return (
        <div className="chat">
                <div className="chat__row">
                    <div className="chat__row-top">
                        <h1 className='chat__row-top__title'>Chat</h1>
                    </div>
                    {messages.map((msg) => (
                        <div key={msg.id} className='chat__row-message'>
                            <h3 className='chat__row-message-title'>{msg.name}</h3>
                            <p className='chat__row-message-subtitle'>
                                {msg.message}
                            </p>
                        </div>
                    ))}




                </div>
            <div className='chat__row-bottom'>
                <input
                    type="text"
                    className='chat__row-bottom__input'
                    value={newMessageText}
                    onChange={handleInputChange}
                />
                <button className='chat__row-bottom__btn' onClick={sendMessage}>
                    Отправить
                </button>
            </div>
        </div>
    );
};

export default Chat;