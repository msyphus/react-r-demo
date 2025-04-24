const R = require('r-integration');
const path = require('path');
const baseURL = path.join(__dirname, '../RFiles');
const baseURLConverted = baseURL.replace(/\\/g, '/');

exports.getHistogram = (req, res) => {
    console.log('hola hist');
    console.log(req.query.arg);

    //To run a simple script file
    // try {
    //     const result = R.executeRScript(`${baseURL}/generatePIN.R`);

    //     console.log(result);
    //     res.send(result);
    // }catch(err) {
    //     console.log(err);
    // }

    R.callMethodAsync(
        `${baseURLConverted}/histogram.R`, 
        "result", 
        {
            data: req.query.arg
        }
    ).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.error(error);
    })
}

exports.getMax = (req, res) => {
    console.log('hola max');
    console.log(req.query.arg);

    //To run R code inline:
    // const result = R.executeRCommand(
    //     `max(1, 2, ${req.query.arg}, 3)`
    // );
    // console.log(result);
    // res.send(result);

    R.callMethodAsync(
        `${baseURLConverted}/max.R`, 
        "result", 
        {
            data: req.query.arg
        }
    ).then((result) => {
        console.log(result);
        res.send(result)
    }).catch((error) => {
        console.error(error);
        res.send(error)
    })
}