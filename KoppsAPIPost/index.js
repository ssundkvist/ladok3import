module.exports = function (context, input) {

    const RxHttpRequest = require("@akanass/rx-http-request").RxHR;

    const options = {
        qs: {
            dir: 'xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx' 
        },
        body: {
            some: 'payload'
        },
        json: true // Automatically stringifies the body to JSON 
    };

    context.log('JavaScript manually triggered function called with input:', input);

    RxHttpRequest.post('http://posttestserver.com/posts', options).subscribe(
        (data) => {
            if (data.response.statusCode === 201) {
                console.log(data.body); // Show the JSON response object.
                context.done(); 
            }
        },
        (err) => {
            console.error(err);
            context.done();
        } // Show error in console 
    );

};