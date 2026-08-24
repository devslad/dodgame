
import {useState} from "react"


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Main(){
    const [question, setQuestion] = useState('-');
    const [questionnumber, setQuestionnumber] = useState(0);

    const questionList = [
        "ทำไร 1",
        "ทำไร 2",
        "ทำไร 3",
    ];

    return(
        <>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

            <div>
                <p>{question}</p>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => {
                    console.log("CLICK")
                    let numTemp = getRandomInt(questionList.length)
                    console.log(`numTemp : ${numTemp}`);
                    setQuestionnumber(numTemp);
                    let questionTemp = questionList[questionnumber];
                    setQuestion(questionTemp);
                }}
                >
                    Next
                </button>
            </div>

        </div>
        </>
    )
}