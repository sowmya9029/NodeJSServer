import app from "./app";
import {DataAccess} from '../DataAccess';

const PORT = 8080;
const port= process.env.PORT;
console.log("before connect");
DataAccess.connect();

app.listen(8080, () => {
    
    console.log('Express server listening on port ' + PORT);
    
})