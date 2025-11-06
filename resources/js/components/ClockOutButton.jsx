import React from 'react';

export default function ClockOutButton({ onClockOut }) {
  return (
    <button onClick={onClockOut}>
      退勤
    </button>
  );
}
