import React, { useState } from 'react'
import{useNavigate} from 'react-router-dom'



const Index = () => {
    const[roomCode, SetRoomCode]=useState('')
    const navigate= useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`/room/${roomCode}`);
        };
  return (
    <div className='home-page'>
      <form  onSubmit={handleSubmit} className='form'  action="">
       <div>
         <label htmlFor="">Enter Room Code </label>
         <input type='text' value={roomCode} onChange={(e)=>SetRoomCode(e.target.value)} placeholder='Enter the room code ' required/>
       </div>
       <button type='submit'>Enter Room</button>

      </form>
    </div>
  )
}

export default Index
