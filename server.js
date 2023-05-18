const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
let users = []; // users will be stored here

app.get('/api/kullanıcılar', (req, res) => {
  res.json(users);
});

app.post('/api/kayıtol', (req, res) => {
  const { kullaniciadi, sifre } = req.body;

  // This is a very basic check, you should use a better method for passwords
  if(kullaniciadi && sifre){
    users.push({ kullaniciadi, sifre });
    res.json({ kullaniciadi });
  } else {
    res.status(400).json({ error: 'Bad request' });
  }
});

app.post('/api/giriş', (req, res) => {
  const { kullaniciadi, sifre } = req.body;

  const user = users.find(u => u.kullaniciadi === kullaniciadi && u.sifre === sifre);

  if(user){
    res.json({ message: 'Welcome!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
