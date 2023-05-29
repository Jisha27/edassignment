import React from 'react';
import Navbar from './Components/Navbar/Navbar';


import style from './App.module.css'
import Content from './Components/Content/Content';
import Form from './Components/Form/Form';


const App = () => {
    return (
        <div className={style.main}>
        <Navbar />
        <div className={style.wrapper}>
          <div className={style.left}>
            <Content />
          </div>
          <div className={style.right}>
            <Form/>
          </div>
        </div>
      </div>
    );
}

export default App;
