import React, { FC } from 'react';

interface ListProps {
  messages: Message[];
}
interface Message {
  author: string;
  value: string;
}

export const MessageList: FC<ListProps> = ({ messages }) => (
  <ul>
    {messages.map((message, idx) => (
      <li key={idx}>
        {' '}
        {message.author}: {message.value}
      </li>
    ))}
  </ul>
);
