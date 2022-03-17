import React, { useState } from 'react'
import { database } from '../../configs/firebase'
import { ref, update } from 'firebase/database'

function Console() {
  const [drake] = useState([
    "https://firebasestorage.googleapis.com/v0/b/brodcastui.appspot.com/o/inferno.png?alt=media&token=3adc5a27-0947-4ce7-ae72-39750fc531e6",
    "https://firebasestorage.googleapis.com/v0/b/brodcastui.appspot.com/o/cloud.png?alt=media&token=bb55a6c4-aa71-40c0-b93c-2d1193112b2c",
    "https://firebasestorage.googleapis.com/v0/b/brodcastui.appspot.com/o/ocean.png?alt=media&token=265cb738-979c-418f-be21-83294cfe6442",
    "https://firebasestorage.googleapis.com/v0/b/brodcastui.appspot.com/o/hex.png?alt=media&token=103d7a86-1f12-480b-8536-c773215115af",
    "https://firebasestorage.googleapis.com/v0/b/brodcastui.appspot.com/o/mauntain.png?alt=media&token=e762cf1e-d231-45b2-a9d0-4aa8e04e71e4"
  ])
  const [blueteam, setBlueteam] = useState("")
  const [redteam, setRedteam] = useState("")
  const [blueteamScore, setBlueteamScore] = useState(0)
  const [redteamScore, setRedteamScore] = useState(0)
  const db = database;
  const reset = { "blue": { "1st": "~", "2nd": "~", "3rd": "~", "4th": "~" }, "red": { "1st": "~", "2nd": "~", "3rd": "~", "4th": "~" } };
  const updateDragons = (side, order, values) => {
    update(ref(db, `dragons/${side}`), {
      [order]: values
    }).then(() => { })
  }
  const changeName1 = (e)=>{setBlueteam(e.target.value)};
  const changeName2 = (e)=>{setRedteam(e.target.value)};
  const changeScore1 = (e)=>{setBlueteamScore(e.target.value)};
  const changeScore2 = (e)=>{setRedteamScore(e.target.value)};
  const updateTeamname = () => {
    update(ref(db, `team`),{blue:{name:blueteam,score:blueteamScore},red:{name:redteam,score:redteamScore}}).then(() => { })
  }
  return (
    <div className='consoles'>
      <div className='bsides'>
        <h2>블루사이드</h2>
        <h3>1번 드래곤</h3>
        <div>
          <button onClick={() => {
            updateDragons("blue", "1st", drake[0])
          }}>불</button>
          <button onClick={() => {
            updateDragons("blue", "1st", drake[1])
          }}>바람</button>
          <button onClick={() => {
            updateDragons("blue", "1st", drake[2])
          }}>물</button>
          <button onClick={() => {
            updateDragons("blue", "1st", drake[3])
          }}>마공</button>
          <button onClick={() => {
            updateDragons("blue", "1st", drake[4])
          }}>대지</button>
        </div>
        <h3>2번 드래곤</h3>
        <div>
          <button onClick={() => {
            updateDragons("blue", "2nd", drake[0])
          }}>불</button>
          <button onClick={() => {
            updateDragons("blue", "2nd", drake[1])
          }}>바람</button>
          <button onClick={() => {
            updateDragons("blue", "2nd", drake[2])
          }}>물</button>
          <button onClick={() => {
            updateDragons("blue", "2nd", drake[3])
          }}>마공</button>
          <button onClick={() => {
            updateDragons("blue", "2nd", drake[4])
          }}>대지</button>
        </div>
        <h3>3번 드래곤</h3>
        <div>
          <button onClick={() => {
            updateDragons("blue", "3rd", drake[0])
          }}>불</button>
          <button onClick={() => {
            updateDragons("blue", "3rd", drake[1])
          }}>바람</button>
          <button onClick={() => {
            updateDragons("blue", "3rd", drake[2])
          }}>물</button>
          <button onClick={() => {
            updateDragons("blue", "3rd", drake[3])
          }}>마공</button>
          <button onClick={() => {
            updateDragons("blue", "3rd", drake[4])
          }}>대지</button>
        </div>
        <h3>4번 드래곤</h3>
        <div>
          <button onClick={() => {
            updateDragons("blue", "4th", drake[0])
          }}>불</button>
          <button onClick={() => {
            updateDragons("blue", "4th", drake[1])
          }}>바람</button>
          <button onClick={() => {
            updateDragons("blue", "4th", drake[2])
          }}>물</button>
          <button onClick={() => {
            updateDragons("blue", "4th", drake[3])
          }}>마공</button>
          <button onClick={() => {
            updateDragons("blue", "4th", drake[4])
          }}>대지</button>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
          <h4>블루팀</h4>
          <input style={{height:"30px"}} type="text" onChange={changeName1}/>
          <input style={{height:"30px"}} type="number" onChange={changeScore1}/>
          <h4>레드팀</h4>
          <input style={{height:"30px"}} type="text" onChange={changeName2}/>
          <input style={{height:"30px"}} type="number" onChange={changeScore2}/>
          <br />
          <button onClick={updateTeamname}>변경</button>
        </div>
      </div>
      <div className='rsides'>
        <h2>레드사이드</h2>
        <h3>1번 드래곤</h3>
        <div>
          <button onClick={() => {
            updateDragons("red", "1st", drake[0])
          }}>불</button>
          <button onClick={() => {
            updateDragons("red", "1st", drake[1])
          }}>바람</button>
          <button onClick={() => {
            updateDragons("red", "1st", drake[2])
          }}>물</button>
          <button onClick={() => {
            updateDragons("red", "1st", drake[3])
          }}>마공</button>
          <button onClick={() => {
            updateDragons("red", "1st", drake[4])
          }}>대지</button>
        </div>
        <h3>2번 드래곤</h3>
        <div>
          <button onClick={() => {
            updateDragons("red", "2nd", drake[0])
          }}>불</button>
          <button onClick={() => {
            updateDragons("red", "2nd", drake[1])
          }}>바람</button>
          <button onClick={() => {
            updateDragons("red", "2nd", drake[2])
          }}>물</button>
          <button onClick={() => {
            updateDragons("red", "2nd", drake[3])
          }}>마공</button>
          <button onClick={() => {
            updateDragons("red", "2nd", drake[4])
          }}>대지</button>
        </div>
        <h3>3번 드래곤</h3>
        <div>
          <button onClick={() => {
            updateDragons("red", "3rd", drake[0])
          }}>불</button>
          <button onClick={() => {
            updateDragons("red", "3rd", drake[1])
          }}>바람</button>
          <button onClick={() => {
            updateDragons("red", "3rd", drake[2])
          }}>물</button>
          <button onClick={() => {
            updateDragons("red", "3rd", drake[3])
          }}>마공</button>
          <button onClick={() => {
            updateDragons("red", "3rd", drake[4])
          }}>대지</button>
        </div>
        <h3>4번 드래곤</h3>
        <div>
          <button onClick={() => {
            updateDragons("red", "4th", drake[0])
          }}>불</button>
          <button onClick={() => {
            updateDragons("red", "4th", drake[1])
          }}>바람</button>
          <button onClick={() => {
            updateDragons("red", "4th", drake[2])
          }}>물</button>
          <button onClick={() => {
            updateDragons("red", "4th", drake[3])
          }}>마공</button>
          <button onClick={() => {
            updateDragons("red", "4th", drake[4])
          }}>대지</button>
        </div>
        <button style={{ width: "100%", marginTop: "20px", height: "40px" }} onClick={() => {
          update(ref(db, 'dragons'), reset).then(() => { })
        }}>Reset</button>
      </div>
    </div>
  )
}

export default Console