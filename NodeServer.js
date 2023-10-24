const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.all('/register', async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { username, email, password } = req.body;
      const response = await axios.post("https://api.hackingly.xyz/users/register/", {
        username,
        email,
        password,
      });

      res.json(response.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        res.status(500).json({ error: 'An error occurred' });
      }
    }
  } else if (req.method === 'GET') {
  } else {
    res.status(405).send('Method Not Allowed');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
