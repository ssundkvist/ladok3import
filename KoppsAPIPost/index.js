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

    context.log('JavaScript manually triggered function called with input:', input);

    RxHttpRequest.post(url, options).subscribe(
        (data) => {
            if (data.response.statusCode === 201) {
                console.log(data.body); // Show the JSON response object.
                context.done(); 
            } else {
                console.log(data.response.statusCode + " " + data.body); // Show the JSON response object.
                context.done(); 
            }
        },
        (err) => {
            console.error(err);
            context.done(err);
        } // Show error in console 
    );

};