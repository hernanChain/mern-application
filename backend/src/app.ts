import express from 'express';
const app = express();
import config from './config'

app.set('port', config.APP_PORT)

export default app;