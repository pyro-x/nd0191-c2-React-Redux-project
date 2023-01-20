const QuestionResult = ({ optionText, winner, votes, percentage }) => {

    const winnerCLass = winner ? "bg-green-500" : " bg-gray-500";
    return (
            <div className='flex flex-col space-y-4 p-4 border shadow w-1/2 justify-between'>
                <div>{optionText}</div>
                <div> Number of Votes {votes} </div>
                <div className={winnerCLass + " text-white font-bold py-2 px-4 rounded mt-8 disabled:opacity-50 text-center"}>{percentage}%</div>
            </div>
    )
}

export default QuestionResult;