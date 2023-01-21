import Login from './Login';

import { fireEvent, render, screen } from '@testing-library/react';

import * as React from 'react';

import reducer from "../reducers";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import middleware from "../middleware";
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router';




describe ('Login', () => {
    let store;
    const initialState = {
        authedUser: null,
        users: {
            sarahedo: {
                id: "sarahedo",
                name: "Sarah Edo",
                avatarURL: "https://api.dicebear.com/5.x/avataaars/svg?seed=sarahedo&style=circle",
                answers: {
                    "8xf0y6ziyjabvozdd253nd": "optionOne",
                    "6ni6ok3ym7mf1p33lnez": "optionOne",
                    "am8ehyc8byjqgar0jgpub9": "optionTwo",
                    "loxhs1bqm25b708cmbf3g": "optionTwo"
                },
                questions: [],
                password: "password123"
            }
        }
    }

    beforeEach(() => {
        store = createStore(reducer, initialState, middleware);
    });

    it ('renders correctly', () => {
        const  view  = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login/>
                </Provider>
            </MemoryRouter>
            );
        expect(view).toMatchSnapshot()
    });

    it ('user select password and submit button are present', () => {
        const  view  = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login/>
                </Provider>
            </MemoryRouter>
            );
        expect(screen.getByTestId('user-select')).toBeInTheDocument();
        expect(screen.getByTestId('password-input')).toBeInTheDocument();
        expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });


    it ('img logo changes when user selected', () => {
        const  view  = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login/>
                </Provider>
            </MemoryRouter>
            );
        
        var input = screen.getByTestId('user-select');
        fireEvent.change (input, {target: {value: "sarahedo"}});
        expect (screen.getByTestId('user-img')).toHaveAttribute('src', 'https://api.dicebear.com/5.x/avataaars/svg?seed=sarahedo&style=circle');
        expect(screen.getByTestId('user-img')).toHaveAttribute('alt', 'sarahedo');

    });

    it ('shows password error when wrong password entered', () => {
        const  view  = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login/>
                </Provider>
            </MemoryRouter>
            );

        var input = screen.getByTestId('user-select');
        var password = screen.getByTestId('password-input');
        fireEvent.change (input, {target: {value: "sarahedo"}});
        fireEvent.change (password, {target: {value: "wrongpassword"}}); // wrong password

        fireEvent.click(screen.getByTestId('submit-button'));
        expect(screen.getByTestId('error-msg')).toBeInTheDocument();

    });
}); 