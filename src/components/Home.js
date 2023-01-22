import QuestionsGroup from "./QuestionsGroup";
import { useState } from "react";

const Home = () => {

    const [group, setGroup] = useState('new');

    const handleGroupChange = (g) => {
        setGroup (g.target.value);
    }
    
    return (
        <div className="flex flex-col gap-4 w-3/4 border">
            <div className="flex flex-row gap-2 px-2 pt-2">
                <div>
                    <input  type="radio" name="groups" value="new" className="hidden peer" id="rb1" defaultChecked onChange={handleGroupChange}  />
                    <label className="peer-checked:text-blue-900 cursor-pointer hover:text-blue-700 peer-checked:underline"   htmlFor="rb1">New</label>
                </div>
                <div>
                    <input  type="radio" name="groups" value="answered" className="hidden peer" id="rb2"  onChange={handleGroupChange}   />
                    <label className="peer-checked:text-blue-900 cursor-pointer hover:text-blue-700 peer-checked:underline"  htmlFor="rb2">Already answered</label>
                </div>
            </div>
            <QuestionsGroup group={group} />
        </div>
    );

}

export default Home;