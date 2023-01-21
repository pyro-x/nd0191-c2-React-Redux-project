import { connect } from 'react-redux';

const LeaderBoard = ({usersWithScore}) => {
    return (
        <div className='border' > 
            <div className="grid grid-flow-row grid-cols-3 gap-3 bg-blue-200 border divide-x">
                <div className="p-2">Name</div>
                <div className="p-2">Answered</div>
                <div className="p-2">Created</div>
            </div>
                {
                    usersWithScore.sort((a,b) => b.score - a.score).map((user) => {
                        return (
                                <div key={user.id} data-testid="user-row" className="grid grid-flow-row grid-cols-3 gap-4 boder divide-x">
                                    <div className="p-2 flex items-center"><img src={user.avatarURL} alt="avatar" className="w-10 h-10 rounded-full pr-2" />{user.name}</div>
                                    <div className="p-2 flex items-center" data-testid="nquestion-answered">{user.answeredQuestions}</div>
                                    <div className="p-2 flex items-center" data-testid="nquestion-created">{user.createdQuestions}</div>
                                </div>
                        )
                    })
                }    
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    const  usersWithScore = Object.values(users).map((user) => {

        const answeredQuestions = Object.keys(user.answers).length;
        const createdQuestions = user.questions.length;
        const score = answeredQuestions + createdQuestions;
        // return as an object with the user id as the key
        
        return {...user, answeredQuestions, createdQuestions, score} ;
        
    });

    return {
        usersWithScore
    }
};



export default connect(mapStateToProps)(LeaderBoard);
