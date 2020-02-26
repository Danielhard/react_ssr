import Koa from 'koa';
import serve from 'koa-static';
import {renderToString} from 'react-dom/server';
import App from '../shared/App';
import React from "react";

const app = new Koa();
app.listen(3001,()=>{
    console.log("listening at localhost:3001")
})