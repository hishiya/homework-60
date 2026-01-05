const express = require('express');
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');

const app = express();
app.use('/users', userRoutes);

app.use('/articles', articleRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

