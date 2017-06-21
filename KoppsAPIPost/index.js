module.exports = function (context, input) {

    const RxHttpRequest = require("@akanass/rx-http-request").RxHR;

    const url = process.env['POST_URL'];

    const options = {
        auth: {
            user: process.env['POST_USERNAME'],
            pass: process.env['POST_PASSWORD']
        },
        headers: {
            'User-Agent': process.env['POST_USER_AGENT']
        },
        qs: {
            code: process.env['POST_CODE'] 
        },
        body: {
            some: 'payload'
        },
        timeout: 2000,
        json: true // Automatically stringifies the body to JSON 
    };


    const log = console.log;
    log("ye");
    context.log('JavaScript manually triggered function called with input:', input);

    RxHttpRequest.post(url, options).subscribe(
        function (result) {
            console.log("result " + result);
            context.done();
        },
        function (error) {
            console.log("ERRRORR!!!!");
            console.log("error", error);
            context.done();
        }, function () {
            console.log("complete");
            context.done();
        }
    ); 
    console.log('Not waiting for data');
    context.done();
};