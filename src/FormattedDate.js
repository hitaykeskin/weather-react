import React from "react";

export default function FormattedDate(props) {
  let day = props.date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = props.date.getHours();
  let minute = props.date.getMinutes();
  return (
    <div>
      {days[day]} {hours}:{minute}
    </div>
  );
}
