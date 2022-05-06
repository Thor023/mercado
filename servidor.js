const express = require ("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require('path')
// SETTIINGs

const port = 3000;
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'views', 'layouts'));

app.engine(
    'handlebars',
    exphbs.engine({
        defaultLayout: 'Dashboard',
        layoutsDir: app.get('views'),
        partialsDir:path.join(__dirname, 'views', 'components')
    })
);

//Routes
app.use(require('./routes'));
//midleware de CSS
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

//START SERVER
app.listen(port,()=>{
    console.log(`SERVER ON port: ${port}`);
});
