import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';



const Home =() => {
    return(
        <div>
        <Header/>
        <div className="app__body">
        <Sidebar/>
        </div>
        </div>
        
        
    );
}

export default Home;