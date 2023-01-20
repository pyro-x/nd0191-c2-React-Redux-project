import QuestionCard from "./QuestionCard";
import { connect } from "react-redux";
const QuestionsGroup = ({ questionsNew , questionsOld, group }) => {
    const questions = (group === 'new') ? questionsNew : questionsOld;

    return (
        <div className="flex flex-col place-items-center border shadow-md gap-4">
            <div className="border w-full text-center">{group === 'new'? 'New Questions': 'Done'}</div>
            <div className="p-4 border flex gap-4">
        
                {
                    questions.length === 0 ? <div className="">No more new questions currently available</div> :
                    questions.map((question) => (
                        <QuestionCard key={question.id} question={question}/>
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = ({ questions , authedUser }, {group}) => {
    return {
        questionsNew: Object.values(questions).filter((question) => {
            return !(question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser));
        }),
        questionsOld: Object.values(questions).filter((question) => {
            return question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
        }),
    };
};
export default connect(mapStateToProps)(QuestionsGroup);