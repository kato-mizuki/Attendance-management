import React from 'react';

export default function ClockInButton({ onClockIn }) {
  return (
    <button onClick={onClockIn} style={{ marginRight: '10px' }}>
      出勤
    </button>
  );
}
