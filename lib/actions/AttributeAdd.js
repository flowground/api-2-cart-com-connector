/**
 * Auto-generated action file for "Swagger API2Cart" API.
 *
 * Generated at: 2019-05-07T14:36:36.633Z
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
 * Operation: 'AttributeAdd'
 * Endpoint Path: '/attribute.add.json'
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
    "type",
    "name",
    "store_id",
    "lang_id",
    "visible",
    "required",
    "position",
    "is_global",
    "is_searchable",
    "is_filterable",
    "is_comparable",
    "is_html_allowed_on_front",
    "is_filterable_in_search",
    "is_configurable",
    "is_visible_in_advanced_search",
    "is_used_for_promo_rules",
    "used_in_product_listing",
    "used_for_sort_by",
    "apply_to"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "type": "type",
    "name": "name",
    "store_id": "store_id",
    "lang_id": "lang_id",
    "visible": "visible",
    "required": "required",
    "position": "position",
    "is_global": "is_global",
    "is_searchable": "is_searchable",
    "is_filterable": "is_filterable",
    "is_comparable": "is_comparable",
    "is_html_allowed_on_front": "is_html_allowed_on_front",
    "is_filterable_in_search": "is_filterable_in_search",
    "is_configurable": "is_configurable",
    "is_visible_in_advanced_search": "is_visible_in_advanced_search",
    "is_used_for_promo_rules": "is_used_for_promo_rules",
    "used_in_product_listing": "used_in_product_listing",
    "used_for_sort_by": "used_for_sort_by",
    "apply_to": "apply_to"
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
        operationId: 'AttributeAdd',
        pathName: '/attribute.add.json',
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