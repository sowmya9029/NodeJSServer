import app from "./app";
import {DataAccess} from '../DataAccess';

const PORT = 8080;

console.log("before connect");
DataAccess.connect();
app.listen(process.env.PORT || 8080);
/*app.listen(PORT, () => {
    
    console.log('Express server listening on port ' + PORT);
    
})*/