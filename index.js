import express from 'express';

const app = express();
const PORT = 3080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Surver is up and running!');
});

app.get('/home', (req,res) => {
    res.send('This is home route');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});