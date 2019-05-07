/**
 * Auto-generated action file for "Swagger API2Cart" API.
 *
 * Generated at: 2019-05-07T08:16:57.010Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / api-2-cart-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'OrderFind'
 * Endpoint Path: '/order.find.json'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "customer_id",
    "customer_email",
    "order_status",
    "start",
    "count",
    "params",
    "exclude",
    "created_to",
    "created_from",
    "modified_to",
    "modified_from",
    "financial_status"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "customer_id": "customer_id",
    "customer_email": "customer_email",
    "order_status": "order_status",
    "start": "start",
    "count": "count",
    "params": "params",
    "exclude": "exclude",
    "created_to": "created_to",
    "created_from": "created_from",
    "modified_to": "modified_to",
    "modified_from": "modified_from",
    "financial_status": "financial_status"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['api_key'] = cfg['api_key'];
    securities['store_key'] = cfg['store_key'];

    let callParams = {
        spec: spec,
        operationId: 'OrderFind',
        pathName: '/order.find.json',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}