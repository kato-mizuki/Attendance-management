import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ClockInButton from './components/ClockInButton';
import ClockOutButton from './components/ClockOutButton';
import AttendanceList from './components/AttendanceList';

function App() {
  const [records, setRecords] = useState([]);

  const handleClockIn = () => {
    const now = new Date();
    setRecords([...records, { type: '出勤', time: now.toLocaleTimeString() }]);
  };

  const handleClockOut = () => {
    const now = new Date();
    setRecords([...records, { type: '退勤', time: now.toLocaleTimeString() }]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>勤怠管理（React練習版）</h1>
      <ClockInButton onClockIn={handleClockIn} />
      <ClockOutButton onClockOut={handleClockOut} />
      <AttendanceList records={records} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
