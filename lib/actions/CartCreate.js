/**
 * Auto-generated action file for "Swagger API2Cart" API.
 *
 * Generated at: 2019-05-07T14:36:36.640Z
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
 * Operation: 'CartCreate'
 * Endpoint Path: '/cart.create.json'
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
    "cart_id",
    "store_url",
    "bridge_url",
    "store_root",
    "store_key",
    "shared_secret",
    "validate_version",
    "verify",
    "db_tables_prefix",
    "ftp_host",
    "ftp_user",
    "ftp_password",
    "ftp_port",
    "ftp_store_dir",
    "apiKey_3dcart",
    "AdminAccount",
    "ApiPath",
    "ApiKey",
    "client_id",
    "accessToken",
    "access_token",
    "apiKey_shopify",
    "apiPassword",
    "EncryptedPassword",
    "Login",
    "apiUser_adnsf",
    "apiPass",
    "accessKey_scelite",
    "apiKey_scelite",
    "apiSecretKey_scelite",
    "privateKey",
    "appToken",
    "etsy_keystring",
    "etsy_shared_secret",
    "tokenSecret",
    "ebay_client_id",
    "ebay_client_secret",
    "ebay_runame",
    "ebay_access_token",
    "ebay_refresh_token",
    "ebay_environment",
    "dw_client_id",
    "dw_api_pass",
    "store_id",
    "seller_id",
    "marketplaces_ids"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "cart_id": "cart_id",
    "store_url": "store_url",
    "bridge_url": "bridge_url",
    "store_root": "store_root",
    "store_key": "store_key",
    "shared_secret": "shared_secret",
    "validate_version": "validate_version",
    "verify": "verify",
    "db_tables_prefix": "db_tables_prefix",
    "ftp_host": "ftp_host",
    "ftp_user": "ftp_user",
    "ftp_password": "ftp_password",
    "ftp_port": "ftp_port",
    "ftp_store_dir": "ftp_store_dir",
    "apiKey_3dcart": "apiKey_3dcart",
    "AdminAccount": "AdminAccount",
    "ApiPath": "ApiPath",
    "ApiKey": "ApiKey",
    "client_id": "client_id",
    "accessToken": "accessToken",
    "access_token": "access_token",
    "apiKey_shopify": "apiKey_shopify",
    "apiPassword": "apiPassword",
    "EncryptedPassword": "EncryptedPassword",
    "Login": "Login",
    "apiUser_adnsf": "apiUser_adnsf",
    "apiPass": "apiPass",
    "accessKey_scelite": "accessKey_scelite",
    "apiKey_scelite": "apiKey_scelite",
    "apiSecretKey_scelite": "apiSecretKey_scelite",
    "privateKey": "privateKey",
    "appToken": "appToken",
    "etsy_keystring": "etsy_keystring",
    "etsy_shared_secret": "etsy_shared_secret",
    "tokenSecret": "tokenSecret",
    "ebay_client_id": "ebay_client_id",
    "ebay_client_secret": "ebay_client_secret",
    "ebay_runame": "ebay_runame",
    "ebay_access_token": "ebay_access_token",
    "ebay_refresh_token": "ebay_refresh_token",
    "ebay_environment": "ebay_environment",
    "dw_client_id": "dw_client_id",
    "dw_api_pass": "dw_api_pass",
    "store_id": "store_id",
    "seller_id": "seller_id",
    "marketplaces_ids": "marketplaces_ids"
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

    let callParams = {
        spec: spec,
        operationId: 'CartCreate',
        pathName: '/cart.create.json',
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