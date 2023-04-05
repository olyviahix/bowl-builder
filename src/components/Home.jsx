import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import bowl from '../images/bowl.jpeg'

const Home = () =>{
    return(
        <div class='home'>
            
            <h1>Welcome to Build A Bowl!</h1>
            <h3>NEW! LeanFeast Bowl Builder with Macros!</h3>
            <img src={bowl}/>
        </div>
    )
}

export default Home;