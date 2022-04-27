import React, { FC } from 'react';

interface messProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
export const Message: FC<messProps> = ({ value, setValue }) => (
  <input
    className="input"
    autoFocus
    placeholder="Введите текст"
    type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);
