
import {useState} from "react"


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Main(){
    const [question, setQuestion] = useState('กด Next เพื่อเริ่ม !!');
    const [questionnumber, setQuestionnumber] = useState(0);

    const questionList = [
        "คนที่เข้าห้องน้ำล่าสุด — Drink.",
        "ทุกคนชี้คนที่น่าจะเมาคนแรก",
        "คนโดนชี้เยอะสุด — Drink.",
        "ทุกคนชี้คนที่ดูปั่นที่สุด",
        "คนนั้นทำหน้าคน “กำลังจะก่อเรื่อง”",
        "ใครหลุดขำก่อน — Drink.",
        "ทุกคนชี้คนที่น่าจะนอนดึกที่สุด",
        "คนนั้นเลือกคน Drink.",
        "ทุกคนชี้คนที่แต่งตัวดีที่สุด",
        "คนโดนชี้เยอะสุด — Pose.",
        "ทุกคนชี้คนที่ดูมีพิรุธที่สุด",
        "คนนั้นพูดว่า “ฉันบริสุทธิ์” โดยห้ามยิ้ม",
        "ใครหัวเราะ — Drink.",
        "ทุกคนชี้คนที่ดูเหมือนจะมีความลับ",
        "คนนั้นเลือก Do or Drink.",
        "คนที่หัวเราะล่าสุด — ทำหน้าตาย 5 วิ",
        "คนที่หลบสายตาคนอื่นเร็วที่สุด — Drink.",
        "ทุกคนมองคนทางซ้ายพร้อมกัน",
        "คนที่หลบก่อน — Drink.",
        "ทุกคนทำหน้าตกใจพร้อมกัน",
        "คนที่ทำช้าที่สุด — Drink.",
        "ทุกคนชี้คนที่ดูขี้อายที่สุด",
        "คนนั้นต้องทำหน้าตัวเองตอนเขิน",
        "ทุกคนชี้คนที่น่าจะกล้าเสี่ยงที่สุด",
        "คนนั้นเลือก 1 คนให้ทำ Challenge",
        "ทุกคนชี้คนที่น่าจะโกหกเก่งที่สุด",
        "คนนั้นพูดว่า “ฉันไม่เคยโกหก”",
        "ใครไม่เชื่อ — ชี้เขา",
        "คนที่ถูกชี้มากที่สุด — Drink.",
        "ทุกคนชี้คนที่ดูเหมือนจะมีเรื่องเล่าเยอะที่สุด",
    ];

    return(
        <>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

            <p>{question}</p>

        </div>

        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <button className="bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
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
        </>
    )
}