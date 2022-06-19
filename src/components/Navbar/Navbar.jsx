import React, {useState} from 'react'
import './Navbar.css'
import Logo from '../../images/logo.png'
import DashboardIcon from '../../images/dashboard-apps.png'
import ProductIcon from '../../images/product.png'

function Navbar(props) {
    const [selected, setSelected]=useState(0)
  return (
    <div className='navBar'>
        <div className="logo">
            <img src={Logo} alt="logo" />
            <span>St<span>o</span>re</span>
        </div>
        <div className="navItems">
            {props.navItems.map((item, index)=>{return(
                <div className={selected===index?"navItem active":"navItem"} 
                key={index}
                onClick={()=>setSelected(index)}>
                    <img src={item.icon} alt="" />
                    <span>{item.text}</span>
            </div>
            )})}
        </div>
    </div>
  )
}

export default Navbar