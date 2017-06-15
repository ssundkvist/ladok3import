module.exports = function (context, input) {

    const RxHttpRequest = require("rx-http-request");

    const options = {
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
            }
        },
        (err) => console.error(err) // Show error in console 
    );

    context.done();
};