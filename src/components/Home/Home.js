import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Room from '../Room/Room';
import './Home.css'

const Home = () => {
    const [room,setRoom]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setRoom(data))
    },[]);
    // const style = {
    //     display: 'flex',
    //     margin: '40px',
    //     justifyContent: 'space-between'
    // }
   
    return (
        <div className="room-container">
            
           
           {
               room.map(room=><Room room={room}></Room>)
           }
           {
               room.map(room=><Book roomm={room}></Book>)
           }
         
        </div>
    );
};

export default Home;