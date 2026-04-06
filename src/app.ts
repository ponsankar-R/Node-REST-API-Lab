//src/app.ts
import express,{Application,Request,Response,NextFunction} from 'express';
import dotenv from'dotenv';


dotenv.config();

const app:Application = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));






//global error handler
app.use((err:any, req:Request,res:Response, next:NextFunction)=>{
    console.error(err.stack);
    res.status(500).json({
        success:false,
        message:'Internal server error',
        error:process.env.NODE_ENV=='development'? err.message:'something broke'
    
    })
});



//handle 404 (if none of the above routes matches the request then finally it comes here)
app.use((req:Request,res:Response)=>{ 
    res.status(404).json({success:false,message:'Route not found'});
});

export default app;
