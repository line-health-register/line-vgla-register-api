require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.post('/register', (req, res) => {
  const { lineId, ref } = req.body;
  console.log('📩 收到註冊請求：', { lineId, ref });

  // 這邊可以接資料庫，先模擬回傳
  res.json({ success: true, message: '已註冊成功', data: { lineId, ref } });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 register_api_server is running on port ${port}`);
});
