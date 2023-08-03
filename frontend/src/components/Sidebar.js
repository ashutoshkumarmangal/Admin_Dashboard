import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faGear,faClockRotateLeft,faTrophy, faGift, faBook, faPieChart, faCalendar, faChild, faQuestionCircle, faComment, faList, faTasks, faBars, faExclamationTriangle, faLanguage, faBell,  faCartShopping, faMoneyBill, faUsers, faSignOut, } from '@fortawesome/free-solid-svg-icons';

// import { 
   
//     FaBars 

// } from 'react-icons/fa';

const Sidebar = ({children}) => {
    
    const menuItem = [
        {
            path:"/adminuser",
            name:"Admin User",
            icon:faUser
        },
        {
            path:"/app_setting",
            name:"App Settings",
            icon:faGear
        },
        {
            path:"/audit_logs",
            name:"Audit Logs",
            icon:faClockRotateLeft
        },
        {
            path:"/contest",
            name:"Contest",
            icon:faTrophy
        },
        {
            path:"/contestrules",
            name:"Contest Rules",
            icon:faTrophy
        },
        {
            path:"/coupons",
            name:"Coupons",
            icon:faGift
        },
        {
            path:"/course",
            name:"Course",
            icon:faBook
        },
        {
            path:"/createcoupons",
            name:"Create Coupons",
            icon:faGift
        },
        // {
        //     path:"/dashboard",
        //     name:"Dashboard",
        //     icon:faPieChart
        // },
        {
            path:"/daycategory",
            name:"Day Category",
            icon:faCalendar
        },
        {
            path:"/exercise",
            name:"Excercise",
            icon:faChild
        },
        {
            path:"/faq",
            name:"FAQ",
            icon:faQuestionCircle
        },
        {
            path:"/faqlist",
            name:"FAQ List",
            icon:faQuestionCircle
        },
        {
            path:"/faqtags",
            name:"FAQ Tags",
            icon:faQuestionCircle
        },
        {
            path:"/feedback",
            name:"Feedback",
            icon:faComment
        },
        {
            path:"/greatextension",
            name:"Great Extension",
            icon:faList
        },
        {
            path:"/gxcourse",
            name:"Gx Course",
            icon:faBook
        },
        {
            path:"/managecomments",
            name:"Manage Comments",
            icon:faComment
        },
        {
            path:"/manageextension",
            name:"Manage Extension",
            icon:faList
        },
        {
            path:"/managemarathon",
            name:"Manage Marathon",
            icon:faTasks
        },
        {
            path:"/manageusers",
            name:"Manage Users",
            icon:faUser
        },
        {
            path:"/modules",
            name:"Modules",
            icon:faBars
        },
        {
            path:"/multierror",
            name:"Multi Error",
            icon:faExclamationTriangle
        },
        // {
        //     path:"/multilanguage",
        //     name:"Multi Language",
        //     icon:faLanguage
        // },
        {
            path:"/notifications",
            name:"Notifications",
            icon:faBell
        },
        {
            path:"/order",
            name:"Order",
            icon:faCartShopping
        },
        {
            path:"/profile",
            name:"Profile",
            icon:faUser
        },
        {
            path:"/revenue",
            name:"Revenue",
            icon:faMoneyBill
        },
        {
            path:"/usersessionlogs",
            name:"User Session Logs",
            icon:faUsers
        },
        {
            path:"/userprivelege",
            name:"User Privelege",
            icon:faUser
        },
        {
            path:"/",
            name:"Log Out",
            icon:faSignOut
        },
        
        

    ]
  return (
      <div className='sidebar'>
        <div className='top_section'>
        <p className='logo'>Miyabi Admin</p>
        {/* <div className='bars'> */}    
        {/* </div> */}
        </div>
        {/* <div className='bottom_section'>
        {
            menuItem.map((item, index)=>(
                
                <NavLink to = {item.path} key ={index} className="link" activeclassName= "active">
                   <div className='link_text'>
                  <div className='link_text1'><div className='icon'><FontAwesomeIcon icon = {item.icon}/>
                  </div>{item.name}
                  
                  </div> 
                  </div>
                </NavLink>
               
            ))
        }
        </div> */}

        <div className='bottom_section'>
  {menuItem.map((item, index) => (
    <NavLink to={item.path} key={index} className="link" activeClassName="active">
      <div className='link_text'>
        <div className='icon'><FontAwesomeIcon icon={item.icon} /></div>
        <div className='link_text1'>{item.name}</div>
      </div>
    </NavLink>
  ))}
</div>

        <main>{children}</main>
    </div>
        
   
  )
}

export default Sidebar