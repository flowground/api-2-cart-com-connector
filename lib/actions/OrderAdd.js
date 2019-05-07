/**
 * Auto-generated action file for "Swagger API2Cart" API.
 *
 * Generated at: 2019-05-07T08:16:57.007Z
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
 * Operation: 'OrderAdd'
 * Endpoint Path: '/order.add.json'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "admin_comment": "admin_comment",
    "bill_address_1": "bill_address_1",
    "bill_address_2": "bill_address_2",
    "bill_city": "bill_city",
    "bill_company": "bill_company",
    "bill_country": "bill_country",
    "bill_fax": "bill_fax",
    "bill_first_name": "bill_first_name",
    "bill_last_name": "bill_last_name",
    "bill_phone": "bill_phone",
    "bill_postcode": "bill_postcode",
    "bill_state": "bill_state",
    "comment": "comment",
    "coupon_discount": "coupon_discount",
    "currency": "currency",
    "customer_birthday": "customer_birthday",
    "customer_email": "customer_email",
    "customer_fax": "customer_fax",
    "customer_first_name": "customer_first_name",
    "customer_last_name": "customer_last_name",
    "customer_phone": "customer_phone",
    "date": "date",
    "date_finished": "date_finished",
    "date_modified": "date_modified",
    "discount": "discount",
    "financial_status": "financial_status",
    "fulfillment_status": "fulfillment_status",
    "gift_certificate_discount": "gift_certificate_discount",
    "order_id": "order_id",
    "order_item": "order_item",
    "order_payment_method": "order_payment_method",
    "order_shipping_method": "order_shipping_method",
    "order_status": "order_status",
    "send_notifications": "send_notifications",
    "shipp_address_1": "shipp_address_1",
    "shipp_address_2": "shipp_address_2",
    "shipp_city": "shipp_city",
    "shipp_company": "shipp_company",
    "shipp_country": "shipp_country",
    "shipp_fax": "shipp_fax",
    "shipp_first_name": "shipp_first_name",
    "shipp_last_name": "shipp_last_name",
    "shipp_phone": "shipp_phone",
    "shipp_postcode": "shipp_postcode",
    "shipp_state": "shipp_state",
    "shipping_price": "shipping_price",
    "store_id": "store_id",
    "subtotal_price": "subtotal_price",
    "tax_price": "tax_price",
    "total_paid": "total_paid",
    "total_price": "total_price",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

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
        operationId: 'OrderAdd',
        pathName: '/order.add.json',
        method: 'post',
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