import React from 'react';

export default function AttendanceList({ records }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>勤怠一覧</h3>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record.time} - {record.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
