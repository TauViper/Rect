import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chats } from '../../App';
import { nanoid } from 'nanoid';
import SendIcon from '@mui/icons-material/Send';
import ButtonUI from '@mui/material/Button';

interface ChatListProps {
  chatList: Chats[];
  onAddChat: (chats: Chats[]) => void;
}
export const ChatList: FC<ChatListProps> = ({ chatList, onAddChat }) => {
  const [name, setName] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      onAddChat([
        ...chatList,
        {
          id: nanoid(),
          name,
        },
      ]);
    }
  };
  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          autoFocus
          placeholder="Введите текст"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ButtonUI variant="contained" type="submit" endIcon={<SendIcon />}>
          Add Chat
        </ButtonUI>
      </form>
    </>
  );
};
