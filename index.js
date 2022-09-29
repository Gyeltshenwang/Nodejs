import express from 'express';
const app = express();
app.use((req, res, next) => {
    res.send('in middleware')
});

app.get('/', (req, res,next) => { 

    res.send('welcome to home page')
})

app.listen(process.env.PORT, () => {
    console.log(`localhost listening on ${process.env.PORT}`);
})