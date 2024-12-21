import express from 'express';
// import v1router from './v1/routes/index.js';
import v1workout from './v1/routes/workoutRoutes.js';
import bodyParser from 'body-parser';
import apicache from 'apicache';

import swaggerJSDoc from './v1/swagger.js';
const V1SwaggerDocs = swaggerJSDoc; // version 1 swagger doc

const app = express();
const PORT = process.env.PORT || 8002;
const cache = apicache.middleware;

app.use(bodyParser.json());

// check api health optional
app.get('/health', (req, res)=> {
    res.send("<h2>It's Working!</h2>"); 
});

// v1 routes
// app.use('/api/v1', v1router);

app.use(cache("2 minutes")); // use cache middleware

// v1 workout routes
app.use('/api/v1/workouts', v1workout);


app.listen(PORT, ()=> {
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT)
});
