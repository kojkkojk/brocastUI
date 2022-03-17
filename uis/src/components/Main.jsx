import React, { useEffect, useState } from 'react'
import { ref, onValue } from "firebase/database";
import {database} from '../configs/firebase'
const bgImgs = (select) => {
   let a = {
      backgroundImage: `url(${select})`,
      backgroundSize: "contain"
   }
   return a
}

function Main() {

   const [blueDrakes, setBlueDrakes] = useState({});
   const [redDrakes, setRedDrakes] = useState({});
   const [scores, setScores] = useState({blue:{name:"~",score:9},red:{name:"~",score:9}});
   const [epics, setEpics] = useState({baron:false,elder:false});
   const db = database;

   const drakeNowBlue = ()=>{
      onValue(ref(db,`dragons/blue`),(snapShots) => {
         if (snapShots.exists()) {
            setBlueDrakes(snapShots.val());
         }
      })
   }
   const drakeNowRed = ()=>{
      onValue(ref(db,`dragons/red`),(snapShots) => {
         if (snapShots.exists()) {
            setRedDrakes(snapShots.val());
         }
      })
   }
   const score = ()=>{
      onValue(ref(db,`team`),(snapShots) => {
         if (snapShots.exists()) {
            setScores(snapShots.val());
         }
      })
   }
   const epic = ()=>{
      onValue(ref(db,`epic`),(snapShots) => {
         if (snapShots.exists()) {
            setEpics(snapShots.val());
         }
      })
   }
   useEffect(() => {
      drakeNowBlue()
      drakeNowRed()
      score()
      epic()
   }, [])

   return (
      <>
         <div className='top'>
            <div className='team left'><div className='scores'>{scores.blue.score}</div> <div className='name'>{scores.blue.name}</div></div>
            <div className='scoreboard'></div>
            <div className='team right'><div className='name'>{scores.red.name}</div> <div className='scores'>{scores.red.score}</div></div>
         </div>
         <div className="drakes">
            <div className="leftDrake showDrake">
               <div style={bgImgs(blueDrakes["4th"])}></div>
               <div style={bgImgs(blueDrakes["3rd"])}></div>
               <div style={bgImgs(blueDrakes["2nd"])}></div>
               <div style={bgImgs(blueDrakes["1st"])}></div>
            </div>
            <div className="blank"></div>
            <div className="rightDrake showDrake">
               <div style={bgImgs(redDrakes["1st"])}></div>
               <div style={bgImgs(redDrakes["2nd"])}></div>
               <div style={bgImgs(redDrakes["3rd"])}></div>
               <div style={bgImgs(redDrakes["4th"])}></div>
            </div>
         </div>
         <div className="leftBottomBox">
            
         </div>
      </>
   )
}

export default Main