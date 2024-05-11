import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import TodoList from "./pages/todo";
import Login2 from "./pages/login2";
import Register from "./pages/register";
import Dashboard from "./pages/Dashboard";
import Add_activity from "./pages/Add_activity";
import BigCalender from "./pages/Calender.tsx";
import Completed from "./pages/Completed_tasks";
import AddReminders from "./pages/Reminders.tsx";
import Task_summary from "./pages/Summary";
import Sidebar from "./components/Sidebar";



export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={< TodoList />} />
        <Route path="/login" element={< Login2 />} />
        <Route path="/register" element={< Register />} />
        <Route path="/calender" element={< BigCalender />} />
        <Route path="/reminder" element={< AddReminders />} />
        <Route element={<Sidebar children={undefined}/>}>
          <Route path="/dashboard" element={< Dashboard />} />
          <Route path="/list" element={< Add_activity />} />
          
          <Route path="/completed-task" element={< Completed />} />
          
          <Route path="/task-summary" element={< Task_summary />} />
        </Route>

      </Routes>

  )
}
