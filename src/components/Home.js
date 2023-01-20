import QuestionsGroup from "./QuestionsGroup";

const Home = () => {
    return (
        <div className="flex flex-col gap-4">
            <QuestionsGroup group="new" />
            <QuestionsGroup group="done"/>
        </div>
    );
}

export default Home;