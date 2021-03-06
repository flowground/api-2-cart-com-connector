/**
 * Auto-generated action file for "Swagger API2Cart" API.
 *
 * Generated at: 2019-05-07T14:36:36.657Z
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
 * Operation: 'ProductUpdate'
 * Endpoint Path: '/product.update.json'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "id",
    "price",
    "special_price",
    "sprice_create",
    "sprice_expire",
    "cost_price",
    "retail_price",
    "quantity",
    "weight",
    "increase_quantity",
    "reduce_quantity",
    "warehouse_id",
    "reserve_quantity",
    "manage_stock",
    "name",
    "sku",
    "visible",
    "manufacturer",
    "manufacturer_id",
    "description",
    "short_description",
    "meta_title",
    "meta_keywords",
    "meta_description",
    "store_id",
    "lang_id",
    "in_stock",
    "status",
    "seo_url",
    "report_request_id",
    "disable_report_cache"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "id": "id",
    "price": "price",
    "special_price": "special_price",
    "sprice_create": "sprice_create",
    "sprice_expire": "sprice_expire",
    "cost_price": "cost_price",
    "retail_price": "retail_price",
    "quantity": "quantity",
    "weight": "weight",
    "increase_quantity": "increase_quantity",
    "reduce_quantity": "reduce_quantity",
    "warehouse_id": "warehouse_id",
    "reserve_quantity": "reserve_quantity",
    "manage_stock": "manage_stock",
    "name": "name",
    "sku": "sku",
    "visible": "visible",
    "manufacturer": "manufacturer",
    "manufacturer_id": "manufacturer_id",
    "description": "description",
    "short_description": "short_description",
    "meta_title": "meta_title",
    "meta_keywords": "meta_keywords",
    "meta_description": "meta_description",
    "store_id": "store_id",
    "lang_id": "lang_id",
    "in_stock": "in_stock",
    "status": "status",
    "seo_url": "seo_url",
    "report_request_id": "report_request_id",
    "disable_report_cache": "disable_report_cache"
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
        operationId: 'ProductUpdate',
        pathName: '/product.update.json',
        method: 'put',
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