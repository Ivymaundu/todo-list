import '../style/reminders.css'
import { useEffect } from 'react';

export default function AddReminder() {

    useEffect(() => {
        if ("Notification" in window) {
            Notification.requestPermission().then(function () {
                if (Notification.permission !== "granted") {
                    alert('Please allow notification access!');
                    location.reload()
                }
            });
        }
    }, []);

    const timeoutIds: number[] = [];

    function deleteReminder(button: HTMLButtonElement) {
        let row = button.closest('tr');
        let index = row?.rowIndex ?? 0;
    
        clearTimeout(timeoutIds[index - 1]);
        timeoutIds.splice(index , 1);
        let tableBody = document.getElementById('reminderTableBody') as HTMLTableSectionElement;
        if (tableBody) {
            tableBody.deleteRow(index);
        }
    }
    

    const addReminder = (activity: string, description: string, dateTimeString: string) => {
        let tableBody = document.getElementById('reminderTableBody') as HTMLTableSectionElement ;

        let row =tableBody.insertRow()
        let titleCell=row.insertCell(0);
        let descriptionCell=row.insertCell(1);
        let dateTimeCell=row.insertCell(2);
        let actionCell=row.insertCell(3);

        titleCell.innerHTML= activity;
        descriptionCell.innerHTML =description;
        dateTimeCell.innerHTML = dateTimeString;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (event) => deleteReminder(event.target as HTMLButtonElement));
        actionCell.appendChild(deleteButton);
    };
    

    const scheduleReminder = () => {
        let titleElement = document.getElementById('activity') as HTMLInputElement;
        let descriptionElement = document.getElementById('description') as HTMLInputElement;
        let dateElement = document.getElementById('date') as HTMLInputElement;
        let timeElement = document.getElementById('time') as HTMLInputElement;

        

        let activity = titleElement.value;
        let description = descriptionElement.value;
        let date = dateElement.value;
        let time = timeElement.value;

        let dateTimeString = date + ' ' + time;
        let scheduleTime = new Date(dateTimeString);
        let currentTime = new Date();
        let timeDifference = scheduleTime.getTime() - currentTime.getTime();

        if (timeDifference > 0) {
            addReminder(activity, description, dateTimeString);
            let timeoutId = setTimeout(function () {
                let notificationSound = document.getElementById('notificationSound') as HTMLAudioElement;
                notificationSound.play();
                new Notification(activity, {
                    body: description,
                    requireInteraction: true,
                })
            }, timeDifference);
            timeoutIds.push(timeoutId);
            console.log(timeoutId)
        }
        
    }


    return (
        <div className="container3 mt-5">
            <h2 style={{ textAlign: 'center' }}>Set Reminder</h2>

            <label htmlFor="">Activity  "</label>
            <input type="text" id="activity" required />
            <label htmlFor="">Description  :</label>
            <input type="text" id="description" required />
            <label htmlFor="">Date :</label>
            <input type="date" id="date" required />
            <label htmlFor="">Time :</label>
            <input type="time" id="time" required />

            <button onClick={scheduleReminder} className='reminderbutton'> Schedule Reminder</button>

            <table>
                <thead>
                    <tr>
                        <th>Activity</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody id="reminderTableBody"></tbody>
            </table>
            <audio src="notifcationsoundeffect.mp3" id="notificationSound"></audio>
        </div>

    )
}