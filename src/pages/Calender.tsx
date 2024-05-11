import moment from 'moment'
import Calendar from "../Calender/Calender";
import '../style/calender.css';


export default function BigCalender() {

  

  return (
    <>
      <Calendar style={{ height: '90vh',width:'90vw'}}
        defaultView={'week'}
        views={["month", "week", "day", 'work_week']}
        defaultDate={('02/05/2024')}
        formats={{ dayHeaderFormat: (date) => moment(date).format('dddd da DD') }}

      />
      
    </>
  )
}