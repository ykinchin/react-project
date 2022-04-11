import React from 'react'
import { Link } from "react-router-dom";

import "./styles/MainNavigation.css";


const items = [
    {path:'/', value:'Home',key:1},
    {path:'/about-us', value: 'About Us',key:2},
    {path:'/menu', value: 'Menu',key:3},
    {path:'/features', value: 'Features',key:4},
  ]

const PageLinks = (props) => {
    const PageLink = items.map((item) => <li key ={item.key} className="bar__item"><Link to={item.path}>{item.value}</Link></li>)

  return (
    <ul className={props.class}>{PageLink}</ul>
  )
}

export default PageLinks