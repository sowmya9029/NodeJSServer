// lib/app.ts
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/Routes";
var cors = require('cors');

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.config();      
        this.routePrv.routes(this.app);    
        this.app.get('/', function(req, res) {
            res.sendfile(__dirname+'/angularDist/index.html')
        
        });
    }

    private config(): void{
        // support application/json type post data
        
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        //this. app.use('/', express.static(__dirname+'/angularDist'));

       
    }
    

}

export default new App().app;