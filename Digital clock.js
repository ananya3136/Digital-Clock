import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the time as HH:MM:SS AM/PM
  const formattedTime = time.toLocaleTimeString();

  return (
    <div style={{ 
      fontSize: '2rem', 
      fontFamily: 'monospace', 
      textAlign: 'center', 
      padding: '20px', 
      borderRadius: '8px', 
      backgroundColor: '#222', 
      color: '#0f0' 
    }}>
      {formattedTime}
    </div>
  );
};

export default DigitalClock;
