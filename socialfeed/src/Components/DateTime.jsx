import React, { useState } from "react";
import './DateTime.css'

export const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <div className="date">
      <h6 className="text-muted">{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</h6>
    </div>
  );
};
