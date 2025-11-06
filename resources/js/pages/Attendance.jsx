import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("/api/employees").then((res) => setEmployees(res.data));
  }, []);

  const handlePunch = (id, type) => {
    axios.post("/api/records", { employee_id: id, type }).then(() => {
      alert("打刻しました！");
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">勤怠管理</h1>
      {employees.map((emp) => (
        <div key={emp.id} className="border p-2 mb-2">
          {emp.name}
          <button
            onClick={() => handlePunch(emp.id, "in")}
            className="bg-green-500 text-white px-3 py-1 ml-2"
          >
            出勤
          </button>
          <button
            onClick={() => handlePunch(emp.id, "out")}
            className="bg-red-500 text-white px-3 py-1 ml-2"
          >
            退勤
          </button>
        </div>
      ))}
    </div>
  );
}
