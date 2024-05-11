import { ReactNode } from "react";
import { FaRegChartBar, FaTh, FaCalendarAlt, FaRegListAlt, FaRegBookmark, FaRegCheckCircle, FaBars } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import './Sidebar.css'
import { useState } from "react";

type Props = {
    children: ReactNode;
};

const Sidebar: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    const menuItem = [
        {
            path: '/dashboard',
            name: 'Dashboard',
            icon: <FaTh />
        },
        {
            path: '/list',
            name: 'My Todos',
            icon: <FaRegListAlt />
        },
        {
            path: '/calender',
            name: 'My Calender',
            icon: <FaCalendarAlt />
        },
        {
            path: '/task-summary',
            name: 'Summary',
            icon: <FaRegChartBar />
        },
        {
            path: '/completed-task',
            name: 'Completed Tasks',
            icon: <FaRegCheckCircle />
        },
        {
            path: '/remider',
            name: 'Remind Me',
            icon: <FaRegBookmark />
        }
    ]

    return (
        <div className="container-fluid-side">
            <div className="sidebar" style={{ width: isOpen ? "200px" : "50px" }}>
                <div className="top_section">
                    <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>Schedule</h1>
                    <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) =>
                        <NavLink to={item.path} key={index} className='link' >
                            <div className="icon">{item.icon}</div>
                            <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
                        </NavLink>
                    )
                }
            </div>
            <main>{children}</main>
        </div>
    )
}
export default Sidebar