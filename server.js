const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));
require('./routes/email')(app);
require('./routes/homePage')(app);
require('./routes/workHist')(app);
require('./routes/projects')(app);
require('./routes/skills')(app);

if (process.env.NODE_ENV === 'production') {
    //Express will serve up production assets
    app.use(express.static('client/build'));

    //Express will serve up the index.html file
    //if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));