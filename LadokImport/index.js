module.exports = function (context, ladokfeedtimer) {


const axios = require("axios");
const https = require("https");
const fs = require("fs");
const expat = require("node-expat");
const url = require("url");

let options = {
    hostname: 'api.mit-integration.ladok.se',
    port: 443,
    path: '/handelser/feed/first',
    method: 'GET',
};


    var timeStamp = new Date().toISOString();
    
    if(!ladokfeedtimer.isPastDue)
    {
        context.log({lastId: context.bindings.lastIdDocumentIn.value});  
        context.bindings.lastIdDocument = JSON.stringify({ id: "lastId", value: parseInt(context.bindings.lastIdDocumentIn.value)+1});
    } else {
        context.log.error('Timer is past due, skipping!', timeStamp);   
    }
    
    context.log('Ladok3 feed reader ran!', timeStamp);   
    
    context.done();
};
