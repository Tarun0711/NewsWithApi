import React from 'react'
import { MdOutlineSportsMartialArts ,MdOutlineBusiness} from "react-icons/md";
import {BiSolidCameraMovie} from "react-icons/bi";
import { RiMentalHealthFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import { GiMaterialsScience,GiIndiaGate } from "react-icons/gi";
import './sideBar.css';
// import { Route, Router } from 'react-router-dom';
export const SideBar = ({active,setActive,setCategory}) => {
  const links=[
    { id:1,logo: {
      MdOutlineBusiness
  }, name:"General" ,value:"general"},
    { id:2, name:"Business" ,value:"business"},
    { id:3, name:"Entertainment" ,value:"entertainment"},
    { id:4, name:"Health" ,value:"health"},
    { id:5, name:"Science" ,value:"science"},
    { id:6, name:"Sports" ,value:"sports"},
    { id:7, name:"Technology" ,value:"technology"},
  ]
  function onClick(id,value){
    setActive(id)
    setCategory(value)
  }
  return (
    <div className='sideBar'>
      <p style={{textDecoration:"3px brown underline"}}>Category</p>
      <ul>
        {links.map(link=>(
        <li  key={link.id}
          className={active === link.id ? "active" :"inactive"}
          onClick={()=>onClick(link.id,link.value)}>
            {link.name}
          </li>
        ))}
      </ul>
      {/* <ul>
        <li><GiIndiaGate/>General</li>
        <li><MdOutlineSportsMartialArts/>Sports</li>
        <li><MdOutlineBusiness/>Business</li>
        <li><BiSolidCameraMovie/>Entertainment</li>
        <li><RiMentalHealthFill/>Health</li>
        <li><GrTechnology/>Technology</li>
        <li><GiMaterialsScience/>Science</li>
      </ul> */}
    </div>
  )
}

