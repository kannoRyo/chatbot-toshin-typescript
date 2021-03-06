import React,{useState,useEffect,useCallback} from 'react'
import './assets/styles/style.css'
import {
  Answers,
  Chats,
} from './components/index'
import defaultDataset from './dataset'
import FormDialog from './components/Form/FormDialog'
import {businessHourArray} from './utils/dayjs'

const dayjs = require('dayjs')

type answerType = {
  content: string,
  nextId: string
} 

type answersType = [
  answerType[] 
] 

type chatType = {
  text: string,
  type: 'question' | 'answer'
} 

type chatsType = [
  chatType[] 
] 


const App = ()=> {
  const [chats, setChats] = useState<any>([])
  const [answers, setAnswers] = useState<answersType | [] >([])
  const [currentId, setcurrentId] = useState('init')
  const [dataset, setDetaset] = useState<any>(defaultDataset)
  const [open, setOpen] = useState(false)
  const [isExam, setIsExam] = useState(false)
  const [date, setDate] = useState('')

  const addChat = useCallback((chat)=>{
    setChats((prevChats: chatsType)  =>{
      return [...prevChats, chat]
    })
  },[])

  const todayBusiinessHour = ()=>{
    const today = dayjs().format('MM/DD') 
    const businessHour = businessHourArray[today] 
    return businessHour
  }

  const handleClickOpen = ()=>{
    setOpen(true)
  }

  const handleClickClose = ()=>{
    setOpen(false)
    if(isExam === true){
      setIsExam(false)
    }
  }

  const initAnswer = ()=>{
    console.log(dataset[currentId].answers)
    const initAnswer:answersType = dataset[currentId].answers
    setAnswers(initAnswer)
  }
  
  const  initChats = ()=>{
    const initQuestion:chatType = {
      text: dataset[currentId].question ,
      type: 'question'
    }
    addChat(initQuestion)
  }

  useEffect(()=>{
    initChats()
    initAnswer()
  },[])
  
  useEffect(()=>{
    const scroll = document.getElementById('scrollHeight') as HTMLElement
    scroll.scrollTop = scroll.scrollHeight
  })

  const nextDisplayQuestion = (nextId: string)=>{
    addChat({
      text: dataset[nextId].question,
      type:'question'
    })
    setcurrentId(nextId)
    setAnswers(dataset[nextId].answers)
  }

  const selectAnswer = (selectedAnswer:string, nextId:string)=>{
    switch(true){
      case (selectedAnswer === 'init'):
        break;
        case (nextId === 'contact'):
          if(currentId === 'practiceExam'){
            setIsExam(true)
          }
          handleClickOpen()
        nextDisplayQuestion('init')
        break;

      case ( nextId === "displaySelectedBussinessHours"): // 未実装
        addChat({
          text:'未実装です（使えません）',
          type:'question'
        })
        nextDisplayQuestion('businessHours')
        break;
      case ( nextId === "displayTodayBussinessHours"):
        addChat({
          text: selectedAnswer,
          type:'answer'
        })
        const todayBusinessHour = todayBusiinessHour()
        setTimeout(()=>{
          addChat({
            text: `${todayBusinessHour}`,
            type:'question'
          })
          nextDisplayQuestion('businessHours')
        },750)
        break;
      case (　nextId === 'https://www.toshin.com/exams/'):
        addChat({
          text: "HPを別タブにて開きます",
          type:'question'
        })
        nextDisplayQuestion('practiceExam')
        const a2 = document.createElement('a')
        a2.href =  nextId
        a2.target = '__blank'
        a2.click()
        break;
      case (/^https:*/.test(nextId)):
        const a = document.createElement('a')
        a.href =  nextId
        a.target = '__blank'
        a.click()
        nextDisplayQuestion('init')
        break;
      default:
        addChat({
          text: selectedAnswer,
          type:'answer'
        })
        
        setTimeout(()=>{
          nextDisplayQuestion(nextId)    
        },750)
    }
  }

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats}/>
        <Answers answers={answers} selectAnswer={selectAnswer}/>
        <FormDialog open={open} handleClickClose={handleClickClose} isExam={isExam}/>
      </div>
    </section>
  );
}

export default App;

