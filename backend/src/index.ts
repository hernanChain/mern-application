import app from './app';
import './database';
import dotenv from 'dotenv'
dotenv.config()


app.listen(app.get('port'),()=>{
    console.log(`Server listening on http://localhost:${app.get('port')}/`);
    
})