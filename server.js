const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Contact keeper API...' })
);

app.listen(PORT, () => {
  console.log(`Live on PORT ${PORT}`);
});
