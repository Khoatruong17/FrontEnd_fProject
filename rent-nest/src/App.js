// src/App.js

import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/') // Thay thế '/endpoint' bằng endpoint API của bạn
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Có lỗi xảy ra khi gọi API:", error);
      });
  }, []);

  console.log(data)
  return (
    <div>
      <h1>Dữ liệu từ API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
