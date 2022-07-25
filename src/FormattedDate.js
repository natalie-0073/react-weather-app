import react from "react";
export default function FormattedDate(props){
    let day=props.date.getDay();
    let date=props.date.getDate();
    let month=props.date.getMonth();
    
    let days=["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
return `${days[day]}, ${months[month]} ${date}, ${new Date().toLocaleTimeString([], {timeStyle: 'short'})}`;
}