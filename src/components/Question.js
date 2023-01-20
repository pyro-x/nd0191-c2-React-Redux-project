import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { handleVoteQuestion } from '../actions/questions';
import QuestionOption from './QuestionOption';
import QuestionResult from './QuestionResult';
import { withRouter } from '../utils/helpers';
import { useEffect } from 'react';


const Question = ({dispatch, question, author, id, authedUser}) => {

    const navigate = useNavigate();
    const handleVote = (value) => {

        console.log("value:", value);
        dispatch (handleVoteQuestion({
            qid: id,
            authedUser,
            answer: value
        }));

        navigate ("/");

    }
    useEffect (() => {
        console.log ("use effect question", question);
        if (question === undefined) {
            navigate ("/404");
        }
    },[]);

    const isAnswered = question && (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser));
    
    const votesAPercentage = question && Math.round((question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100);
    const votesBPercentage = question && Math.round((question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100);

    const votesA = question && question.optionOne.votes.length;
    const votesB = question && question.optionTwo.votes.length;

    return question && (
        <div className="flex flex-col gap-8 items-center border shadow-md p-4">
            <div>Poll by {author.name}</div>
            <img src={author.avatarURL} alt={author.name} className='w-32 h-32' />
            {!isAnswered ? (
            <div className="flex flex-col items-center gap-8">
                <div >Would you rather</div>
                <div className='flex gap-4'>
                    <QuestionOption optionText={question.optionOne.text}  optionValue='optionOne' onOptionClick={handleVote}/>
                    <QuestionOption optionText={question.optionTwo.text}  optionValue='optionTwo' onOptionClick={handleVote}/>
                </div>
            </div>
            ) : (
                
                <div className="flex flex-col items-center gap-8">
                    <div >Results</div>
                    <div className='flex gap-4'>
                        <QuestionResult optionText={question.optionOne.text} votes={votesA} percentage={votesAPercentage} winner={votesAPercentage>votesBPercentage}/>
                        <QuestionResult optionText={question.optionTwo.text} votes={votesB} percentage={votesBPercentage} winner={votesBPercentage>votesAPercentage}/>
                    </div>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = ({ questions , users, authedUser}, props) => {

    const {id} = props.router.params;

    return {
        question: questions[id] ? questions[id] : undefined,
        author: questions[id] ? users[questions[id].author] : undefined,
        authedUser,
        id
    };
};
export default withRouter(connect(mapStateToProps)(Question));