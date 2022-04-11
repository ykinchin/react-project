import React from "react";
import './styles/Sidebar.css';

const Sidebar = ({ header, items, active, setActive}) => {
  return (
    <div className={active ? 'menu active' : 'active'}>
      <div className="blur"/>
      <div className="menu__content">
        <div className="menu__header">{header}</div>
        <ul>
          {items.map((item) => (
            <li>
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
