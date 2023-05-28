import './App.css';
import {Quiz} from './components/Quiz/Quiz';
import {QuizPanel} from './components/QuizPanel/QuizPanel';
import {Header} from './components/Header/Header';
import {React, useState} from 'react';
import {Register} from './components/Register/Register';
import { Main } from './components/Main/Main';
import {Routes, Route} from 'react-router-dom'

 
function App() {
  const quizArr = [
    {
      quizImage: 'https://mobimg.b-cdn.net/v3/fetch/de/ded8ee65e4000243a33ce55d3b724fc8.jpeg',
      quizName: 'vdmlkvdemklvnklvadknm',
    
      questions: [
          {
          questionImage: 'https://b1.m24.ru/c/1665263.jpg',
          questionText: 'Как меня зовут',
          answerOptions:[
            {answer_text: 'bosыton', isCorrect: false },
            {answer_text: 'ывы', isCorrect: false },
            {answer_text: 'в', isCorrect: true },
            {answer_text: 'stывon', isCorrect: false },
          ]
        },
        {
          questionImage: 'https://b1.m24.ru/c/1665263.jpg',
          questionText: 'аимв',
          answerOptions:[
            {answer_text: 'boston', isCorrect: false },
            {answer_text: 'bostn', isCorrect: true },
            {answer_text: 'boon', isCorrect: false },
            {answer_text: 'ston', isCorrect: false },
          ]
        },
        {
          questionImage: 'https://b1.m24.ru/c/1665263.jpg',
          questionText: 'vsвссвсфвсфысыdhjbcsbhj',
          answerOptions:[
            {answer_text: 'bсфыoston', isCorrect: true },
            {answer_text: 'bosсыфtn', isCorrect: false },
            {answer_text: 'boыфсon', isCorrect: false },
            {answer_text: 'stсыфon', isCorrect: false },
          ]
        },
        {
          questionImage: 'https://b1.m24.ru/c/1665263.jpg',
          questionText: 'vsdhjbcыфссфыысsbhj',
          answerOptions:[
            {answer_text: 'bostсыфon', isCorrect: false },
            {answer_text: 'bostсn', isCorrect: false },
            {answer_text: 'bысыoon', isCorrect: false },
            {answer_text: 'sыфton', isCorrect: true },
          ]
        },
        {
          questionImage: 'https://b1.m24.ru/c/1665263.jpg',
          questionText: 'vsdhjbcsbhj',
          answerOptions:[
            {answer_text: 'boston', isCorrect: true },
            {answer_text: 'bostn', isCorrect: false },
            {answer_text: 'boon', isCorrect: false },
            {answer_text: 'ston', isCorrect: false },
          ]
        }
      ]
    },
    {
      quizImage: 'https://mobimg.b-cdn.net/v3/fetch/de/ded8ee65e4000243a33ce55d3b724fc8.jpeg',
      quizName: 'vdmlkvdemklvnklvadknm',
    
      questions: [
          {
          questionImage: 'https://b1.m24.ru/c/1665263.jpg',
          questionText: 'Как меня зовут',
          answerOptions:[
            {answer_text: 'bosыton', isCorrect: false },
            {answer_text: 'ывы', isCorrect: false },
            {answer_text: 'в', isCorrect: true },
            {answer_text: 'stывon', isCorrect: false },
          ]
        },
        {
          questionImage: 'https://b1.m24.ru/c/1665263.jpg',
          questionText: 'аимв',
          answerOptions:[
            {answer_text: 'boston', isCorrect: false },
            {answer_text: 'bostn', isCorrect: true },
            {answer_text: 'boon', isCorrect: false },
            {answer_text: 'ston', isCorrect: false },
          ]
        },
        {
          questionImage: 'https://b1.m24.ru/c/1665263.jpg',
          questionText: 'vsвссвсфвсфысыdhjbcsbhj',
          answerOptions:[
            {answer_text: 'bсфыoston', isCorrect: true },
            {answer_text: 'bosсыфtn', isCorrect: false },
            {answer_text: 'boыфсon', isCorrect: false },
            {answer_text: 'stсыфon', isCorrect: false },
          ]
        },
        {
          questionImage: 'https://b1.m24.ru/c/1665263.jpg',
          questionText: 'vsdhjbcыфссфыысsbhj',
          answerOptions:[
            {answer_text: 'bostсыфon', isCorrect: false },
            {answer_text: 'bostсn', isCorrect: false },
            {answer_text: 'bысыoon', isCorrect: false },
            {answer_text: 'sыфton', isCorrect: true },
          ]
        },
        {
          questionImage: 'https://b1.m24.ru/c/1665263.jpg',
          questionText: 'vsdhjbcsbhj',
          answerOptions:[
            {answer_text: 'boston', isCorrect: true },
            {answer_text: 'bostn', isCorrect: false },
            {answer_text: 'boon', isCorrect: false },
            {answer_text: 'ston', isCorrect: false },
          ]
        }
      ]
    }
  ]
  const [quizVisibility, setQuizVisibility] = useState(false)
  const [tTest, setTTest] = useState([])
  const showTest = (elem) =>{
    setQuizVisibility(true)
    setTTest(elem.questions)
  }
  const hideTest = () =>{
    setQuizVisibility(false)
  }
  return (

      <>
      
      <Header/>

    <div className="App">

      <Routes>
        <Route path='/test' element= { <>
      {quizVisibility?
       <Quiz questions={tTest} hideTest = {hideTest}/>
       : 
        <div className='panel'>
          {quizArr.map((elem) =>
          <QuizPanel
          image = {elem.quizImage}
          name = {elem.quizName}
          showTest = {() => showTest(elem)}
          />
          )}
        </div>
        }</>}/>
        <Route path='/test' element= {<Register/>}/>
        <Route path='/' element= {<Main/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
