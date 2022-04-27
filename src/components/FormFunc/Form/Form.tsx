import React, { useState, FC } from 'react';
import { Button } from '../Button/Button';
import { Message } from '../Message/Message';

interface FormProps {
    addMessages: (value: string) => void,
    setValue?: React.Dispatch<React.SetStateAction<string>>
    preventDefault?: () => void
}
export const Form: FC<FormProps> = ({ addMessages }) => {
    const [buttonName] = useState<string>('Send')
    const [value, setValue] = useState<string>('');
    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addMessages(value)
        setValue('')
    };
    return (
        <form onSubmit={handleSubmitForm}>
            <Message value={value} setValue={setValue} />
            <Button name={buttonName} />
        </form>
    );
};