import React from 'react'
import './Admin.css'
import {Routes, Route} from 'react-router-dom'
import Inventaire from './Inventaire/Inventaire'
import Navbar from '../../components/Navbar/Navbar'
import DashboardIcon from '../../images/dashboard-apps.png'
import ProductIcon from '../../images/product.png'
import ClientIcon from '../../images/customer-conservation.png'
import EmployeeIcon from '../../images/employee.png'
import Header from '../../components/Header/Header'

const items=[
    {
        text:"Inventaire",
        icon:DashboardIcon
    },
    {
        text:"Produits",
        icon:ProductIcon
    },
    {
        text:"Clients",
        icon:ClientIcon
    },
    {
        text:"Employés",
        icon:EmployeeIcon
    }
]

function Admin() {
  return (
    <div className='admin'>
        <Header/>
        <div className="middle-content">
            <Navbar navItems={items}/>
            <Routes>
                <Route path='/' element={<Inventaire/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Admin