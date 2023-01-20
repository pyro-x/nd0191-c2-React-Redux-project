import { Link } from "react-router-dom";
const QuestionCard = ({question}) => {

  const formatedDate = new Date(question.timestamp).toLocaleString();

  return (
    <div className="flex flex-col gap-2 border p-4 place-items-center">
        <div>{question.author}</div>
        <div>{formatedDate}</div>
        <hr/>
        <button className="text-green-500 border py-1 px-2 shadow-sm">
            <Link to={`/question/${question.id}`}>View Poll</Link>
        </button>        
    </div>
  ); 
}

export default QuestionCard;