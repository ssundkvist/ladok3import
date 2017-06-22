module.exports = function (context, input) {

    context.log(input);

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
        body: JSON.stringify(input),
        timeout: 2000,
        json: true // Automatically stringifies the body to JSON 
    };

    RxHttpRequest.post(url, options).subscribe(
        data => {
            if (data.response.statusCode === 200 ||  data.response.statusCode === 201) {
                context.log('Success: %', JSON.stringify(data.body));
                context.done();
            } else {
                context.log('%s %s', data.response.statusCode, JSON.stringify(data.body));
                context.done(JSON.stringify(data.body));
            }
        },
        error => {
            context.log('Failed to post to %s: %s', url, JSON.stringify(error));
            context.done(JSON.stringify(error));
        }
    );
};