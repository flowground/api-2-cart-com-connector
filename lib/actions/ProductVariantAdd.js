/**
 * Auto-generated action file for "Swagger API2Cart" API.
 *
 * Generated at: 2019-05-07T08:16:57.023Z
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
 * Operation: 'ProductVariantAdd'
 * Endpoint Path: '/product.variant.add.json'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "product_id",
    "name",
    "model",
    "price",
    "attributes",
    "description",
    "special_price",
    "sprice_create",
    "sprice_modified",
    "sprice_expire",
    "available_for_view",
    "available_for_sale",
    "weight",
    "short_description",
    "quantity",
    "created_at",
    "manufacturer",
    "tax_class_id",
    "meta_title",
    "meta_keywords",
    "meta_description",
    "url",
    "store_id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "product_id": "product_id",
    "name": "name",
    "model": "model",
    "price": "price",
    "attributes": "attributes",
    "description": "description",
    "special_price": "special_price",
    "sprice_create": "sprice_create",
    "sprice_modified": "sprice_modified",
    "sprice_expire": "sprice_expire",
    "available_for_view": "available_for_view",
    "available_for_sale": "available_for_sale",
    "weight": "weight",
    "short_description": "short_description",
    "quantity": "quantity",
    "created_at": "created_at",
    "manufacturer": "manufacturer",
    "tax_class_id": "tax_class_id",
    "meta_title": "meta_title",
    "meta_keywords": "meta_keywords",
    "meta_description": "meta_description",
    "url": "url",
    "store_id": "store_id"
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
        operationId: 'ProductVariantAdd',
        pathName: '/product.variant.add.json',
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