import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config/apiConfig'; 

const AdminDashboard = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');  // Chuyển hướng đến trang login nếu chưa đăng nhập
    } else {
      axios
        .get(`${API_BASE_URL}/api/admin`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUserData(res.data))
        .catch((err) => {
          console.error(err);
          localStorage.removeItem('token');
          navigate('/login');
        });
    }
  }, [navigate]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, {userData.username}!</p>
    </div>
  );
};

export default AdminDashboard;
