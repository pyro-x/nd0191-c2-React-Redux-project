
import * as React from 'react';
import {  render, screen } from '@testing-library/react';

import reducer from "../reducers";
import { Provider } from 'react-redux';
import middleware from "../middleware";
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router';

import LeaderBoard from "./LeaderBoard";

describe ('LeaderBoard', () => {
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
                questions : ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
                password: "password123"
            },
            tylermcginnis: {
                id: "tylermcginnis",
                name: "Tyler McGinnis",
                avatarURL: "https://api.dicebear.com/5.x/avataaars/svg?seed=tylermcginnis&style=circle",
                answers: {
                    "vthrdm985a262al8qx3do": "optionOne",
                    "xj352vofupe1dqz9emx13r": "optionTwo",
                },
                questions : ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
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
                    <LeaderBoard/>
                </Provider>
            </MemoryRouter>
            );
        expect(view).toMatchSnapshot()
    });


    it('render two users', () => {
        const view = render(
            <MemoryRouter>
                <Provider store={store}>
                    <LeaderBoard/>
                </Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByTestId('user-row')).toHaveLength(2);

        expect(screen.getAllByTestId('user-row')[0]).toHaveTextContent('Sarah Edo');
        expect(screen.getAllByTestId('user-row')[1]).toHaveTextContent('Tyler McGinnis');

        expect(screen.getAllByTestId('nquestion-answered')[0]).toHaveTextContent('4');
        expect(screen.getAllByTestId('nquestion-created')[0]).toHaveTextContent('2');


    });
});
    