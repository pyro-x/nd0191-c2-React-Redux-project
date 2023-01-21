import { render } from '@testing-library/react'

import QuestionResult  from './QuestionResult'
import * as React from 'react';

describe('QuestionResult', () => {
    it ('renders correctly', () => {
        const  view  = render(
            <QuestionResult optionText="snapshot test" winner={true} votes={1} percentage={100}/>
            );
        expect(view).toMatchSnapshot()
    });
});