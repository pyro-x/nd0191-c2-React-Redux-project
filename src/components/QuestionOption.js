const QuestionOption = ({ optionText, optionValue, onOptionClick }) => {

    const handleClick = () => {
        onOptionClick(optionValue);
    }
    return (
            <div className='flex flex-col space-y-4 p-4 border shadow w-1/2 justify-between' onClick={handleClick}>
                <div>{optionText}</div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8 disabled:opacity-50 ">Vote</button>
            </div>
    )
}

export default QuestionOption;