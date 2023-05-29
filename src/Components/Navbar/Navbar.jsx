import React from 'react';
import css from "./Navbar.module.css"
import {AiOutlineSearch}  from "react-icons/ai"
import edyoda from "../../Assets/EDYODA.png"
const Navbar = () => {
    return (
        <div className={css.container}>
            <div className={css.left}>
                
                <img src={edyoda} alt="" />
                <span><select name="Courses" id={css.courses}>
                    <option value="1">Courses</option>
                    <option value="2">Interview questions</option>
                    <option value="3">Programming languages</option>
                    <option value="4">Web development</option>
                    <option value="5">Artificial Intelligence</option></select>
                </span>
                <span>
                    <select name="pgms" id={css.pgms}>
                        <option value="1">Programmes</option>
                        <option value="2">Mern stack</option>
                        <option value="3">Mean stack</option>
                    </select>
                </span>

            </div>

            <div className={css.right}>
                 <AiOutlineSearch className={css.search}/>
                   <span className={css.login}>Login</span>
                   <button className={css.button}>JOIN NOW</button>
            </div>
        </div>
    );
}

export default Navbar;
