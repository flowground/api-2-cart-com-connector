/**
 * Auto-generated action file for "Swagger API2Cart" API.
 *
 * Generated at: 2019-05-07T14:36:36.650Z
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
 * Operation: 'ProductAdd'
 * Endpoint Path: '/product.add.json'
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
    "attribute_name": "attribute_name",
    "attribute_set_name": "attribute_set_name",
    "available_for_sale": "available_for_sale",
    "available_for_view": "available_for_view",
    "best_offer": "best_offer",
    "categories_ids": "categories_ids",
    "condition": "condition",
    "created_at": "created_at",
    "description": "description",
    "downloadable": "downloadable",
    "ean": "ean",
    "group_prices": "group_prices",
    "isbn": "isbn",
    "lang_id": "lang_id",
    "listing_duration": "listing_duration",
    "listing_type": "listing_type",
    "manufacturer": "manufacturer",
    "meta_description": "meta_description",
    "meta_keywords": "meta_keywords",
    "meta_title": "meta_title",
    "model": "model",
    "name": "name",
    "ordered_count": "ordered_count",
    "package_details": "package_details",
    "payment_methods": "payment_methods",
    "paypal_email": "paypal_email",
    "price": "price",
    "quantity": "quantity",
    "return_accepted": "return_accepted",
    "sales_tax": "sales_tax",
    "shipping_details": "shipping_details",
    "shipping_template_id": "shipping_template_id",
    "short_description": "short_description",
    "sku": "sku",
    "special_price": "special_price",
    "sprice_create": "sprice_create",
    "sprice_expire": "sprice_expire",
    "sprice_modified": "sprice_modified",
    "tax_class_id": "tax_class_id",
    "tier_prices": "tier_prices",
    "type": "type",
    "upc": "upc",
    "url": "url",
    "viewed_count": "viewed_count",
    "weight": "weight",
    "weight_unit": "weight_unit",
    "wholesale_price": "wholesale_price",
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
        operationId: 'ProductAdd',
        pathName: '/product.add.json',
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