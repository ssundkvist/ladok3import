module.exports = function (context, req) {
    var statusCode = 400;
    var responseBody = "Invalid request object";

    if (typeof req.body != 'undefined' && typeof req.body == 'object') {
        statusCode = 201;
        responseBody = "Got your message " + req.body.name;
        context.bindings.ladok3message = req.body;
    }

    context.res = {
        status: statusCode,
        body: responseBody
    };

    context.done();
};