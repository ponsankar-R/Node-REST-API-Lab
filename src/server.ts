//src/server.ts
import app from './app';


const PORT:number = parseInt(process.env.PORT || '3000',10);

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);

});

