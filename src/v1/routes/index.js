// import express from 'express';
import { Router } from 'express';

const router = Router();

router.route('/')
.get((req, res)=> {
    res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

export default router;
