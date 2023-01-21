/* eslint-disable testing-library/prefer-screen-queries */

import * as React from 'react';
import {  render } from '@testing-library/react';

import reducer from "../reducers";
import { Provider } from 'react-redux';
import middleware from "../middleware";
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router';

import NavBar from "./NavBar";


describe ('NavBar', () => {
    let store;
    const initialState = {
        authedUser: "sarahedo",
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
                    <NavBar/>
                </Provider>
            </MemoryRouter>
            );
        expect(view).toMatchSnapshot()
    });

    it ('contains three main sections', () => {
        const  view  = render(
            <MemoryRouter>
                <Provider store={store}>
                    <NavBar/>
                </Provider>
            </MemoryRouter>
            );
        expect(view.getAllByRole('link')).toHaveLength(3);

        expect (view.getByTestId("home-lnk")).toBeInTheDocument();
        expect (view.getByTestId("add-lnk")).toBeInTheDocument();
        expect (view.getByTestId("leaderboard-lnk")).toBeInTheDocument();
    });

    it ('contains a logout button', () => {
        const  view  = render(
            <MemoryRouter>
                <Provider store={store}>
                    <NavBar/>
                </Provider>
            </MemoryRouter>
            );
        expect(view.getByTestId("logout-btn")).toBeInTheDocument();

    });

});

