import React from "react";
import { Message } from "./Message";
import { render, screen } from '@testing-library/react';

describe('Message', () => {
    it('render', () => {
        render(<Message />);
    });
    it('snapshot', () => {
        const { asFragment } = render(<Message />);
        expect(asFragment()).toMatchSnapshot();
    });
});


