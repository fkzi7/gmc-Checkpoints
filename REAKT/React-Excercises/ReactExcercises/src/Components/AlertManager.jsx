import React, { useState } from 'react';
import Alerts from './Alerts';

export default function AlertManager() {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (alertStyle, text) => {
    const newAlert = { id: Date.now(), alertStyle, text };
    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

    // Remove the alert after 3 seconds
    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== newAlert.id));
    }, 3000);
  };

  const handleButtonClick = (alertStyle) => {
    // Add a new alert when a button is clicked
    switch (alertStyle) {
      case 'info':
        addAlert('info', 'This is an info alert');
        break;
      case 'success':
        addAlert('success', 'This is a success alert');
        break;
      case 'error':
        addAlert('error', 'This is an error alert');
        break;
      case 'warning':
        addAlert('warning', 'This is a warning alert');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {/* Render initial alert buttons */}
      <div>
        <button onClick={() => handleButtonClick('info')} className="btn btn-info m-2">
          Show Info Alert
        </button>
        <button onClick={() => handleButtonClick('success')} className="btn btn-success m-2">
          Show Success Alert
        </button>
        <button onClick={() => handleButtonClick('error')} className="btn btn-error m-2">
          Show Error Alert
        </button>
        <button onClick={() => handleButtonClick('warning')} className="btn btn-warning m-2">
          Show Warning Alert
        </button>
      </div>

      {/* Render dynamic alerts */}
      {alerts.map((alert) => (
        <Alerts
          key={alert.id}
          alertStyle={alert.alertStyle}
          text={alert.text}
          onClick={() => handleButtonClick(alert.alertStyle)} // Allow clicking on alerts to trigger new alerts
        />
      ))}
    </div>
  );
}