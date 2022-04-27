import React, { FC, useCallback, useEffect, useState } from 'react';
import { AUTHOR } from '../../constants';
import { Form } from '../FormFunc/Form/Form';
import { MessageList } from '../FormFunc/MessageList';
import { Header } from '../Header/Header';

interface Message {
    author: string,
    value: string
}
export const Chats: FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].value === '') {
            const timeout = setTimeout(() => {
                setMessages([...messages,
                {
                    author: AUTHOR.bot,
                    value: 'Чё?! Не понял',
                }
                ]);
            }, 1500);
            return () => {
                clearTimeout(timeout)
            };
        }
        if (messages.length > 0 && messages[messages.length - 1].author !== AUTHOR.bot) {
            const timeout = setTimeout(() => {
                setMessages([...messages,
                {
                    author: AUTHOR.bot,
                    value: 'Welcome to Chat',
                }
                ]);
            }, 1500);
            return () => {
                clearTimeout(timeout)
            };
        }
    }, [messages]);
    const addMessages = useCallback((value: string) => {
        setMessages((prevMessage) => [
            ...prevMessage,
            {
                author: AUTHOR.user,
                value,
            },
        ]);
    }, []);

    return (<>
        <Header />
        <main>
            <MessageList messages={messages} />
            <Form addMessages={addMessages} />
        </main>
    </>
    )
}