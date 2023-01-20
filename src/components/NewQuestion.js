import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { handleAddQuestion } from '../actions/questions';
const NewQuestion = ({dispatch, authedUser}) => {

    const navigate = useNavigate();

    let [optionOne, setOptionOne] = useState('');
    let [optionTwo, setOptionTwo] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(handleAddQuestion(
            {
            optionOneText: optionOne, 
            optionTwoText: optionTwo,
            author: authedUser
        }));
        navigate ("/");
    };

    const handleOptionOneChange = (e) => {
        setOptionOne(e.target.value);
    };

    const handleOptionTwoChange = (e) => {
        setOptionTwo(e.target.value);
    };


    return (
        <form className="flex flex-col gap-4  border shadow-md p-4" onSubmit={handleSubmit}>
        
            <h1 className="text-4xl self-center">Would you rather</h1>
            <div className="text-l self-center">Create a new Poll</div>
            <div className="flex justify-between items-baseline gap-4 pt-4">
                <label>First Option</label>
                <input className="w-96" type="text" placeholder="Option One" onChange={handleOptionOneChange} />
            </div>
            <div className="flex justify-between items-baseline gap-4 pb-4">
                <label>Second Option</label>
                <input className="w-96" type="text" placeholder="Option Two" onChange={handleOptionTwoChange}/>
            </div>
            <button className="bg-green-500 hover:bg-green-700 border shadow-md text-white p-2 rounded-md">Submit</button>
        </form>
    );
}

const mapStateToProps = ({authedUser}) => {
    return {
        authedUser
    }
};

export default connect(mapStateToProps)(NewQuestion);