module.exports = function (context, input) {

    const RxHttpRequest = require("@akanass/rx-http-request").RxHR;

    const options = {
        qs: {
            code: process.env['POST_CODE'] 
        },
        body: {
            some: 'payload'
        },
        json: true // Automatically stringifies the body to JSON 
    };

    context.log('JavaScript manually triggered function called with input:', input);

    RxHttpRequest.post('https://sstladok3.azurewebsites.net/api/post', options).subscribe(
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