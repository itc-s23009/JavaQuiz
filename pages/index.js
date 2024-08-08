import React, {useState, useEffect, Component} from "react";
import app from '../../../firebase_Config'

const firestore = getFirestore(app)


export default function Home() {

  const [quiz, setQuiz] = useState(null);
  //firebaseから取ってきたchoiceを入れる配列
  const [choice, setChoise] = useState([]);

  return (
      <p>Hello World</p>
  )
}
