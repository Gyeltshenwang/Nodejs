import express from 'express';
const app = express();
app.use((req, res, next) => {
    console.log('in the middlware app');
    next(); // allows to contuinue in next middle ware

});
app.use((req, res, next) => { 
    console.log('in the next middlware app');
})

app.get('/', (req, res,next) => { 

    res.send('welcome to home page')
})

app.listen(3000, () => {
    console.log(`localhost listening on 3000`);
})