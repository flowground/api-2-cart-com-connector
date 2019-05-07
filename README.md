# ![LOGO](logo.png) Swagger API2Cart MSP Connector

## Description

A generated MSP connector for the Swagger API2Cart API (version 1.0.0).

Generated from: https://api.apis.guru/v2/specs/api2cart.com/1.0.0/swagger.json<br/>
Generated at: 2019-05-07T11:16:57+03:00

## API Description

API2Cart

## Authorization

Supported authorization schemes:
- API Key- API Key
## Actions

### Get list of carts.

*Tags:* `account`

#### Input Parameters
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `request_from_date` - _optional_ - Retrieve entities from their creation date
* `request_to_date` - _optional_ - Retrieve entities to their creation date

### Update configs in the API2Cart database.

*Tags:* `account`

#### Input Parameters
* `db_tables_prefix` - _optional_ - This parameter is deprecated for this method. Please, use this parameter in method account.config.update
* `client_id` - _optional_ - Client ID of the requesting app.
* `bridge_url` - _optional_ - This parameter allows to set up store with custom bridge url (you must use store_root parameter if a bridge folder is not in the root folder of the store)
* `store_root` - _optional_ - Absolute path to the store root directory (used with "bridge_url" parameter)
* `shared_secret` - _optional_ - Shared secret

### List webhooks that was not delivered to the callback.

*Tags:* `account`

#### Input Parameters
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `ids` - _optional_ - List of somma-separated webhook ids

### Add new attribute

*Tags:* `attribute`

#### Input Parameters
* `type` - _required_ - Defines attribute's type
    Possible values: text, select, textarea, date, price, multiselect, boolean.
* `name` - _required_ - Defines attributes's name
* `store_id` - _optional_ - Store Id
* `lang_id` - _optional_ - Language id
* `visible` - _optional_ - Set visibility status
* `required` - _optional_ - Defines if the option is required
* `position` - _optional_ - Attribute`s position
* `is_global` - _optional_ - Attribute saving scope
    Possible values: Global, Store, Website.
* `is_searchable` - _optional_ - Use attribute in Quick Search
* `is_filterable` - _optional_ - Use In Layered Navigation
    Possible values: Filterable (with results), Filterable (no results), No.
* `is_comparable` - _optional_ - Comparable on Front-end
* `is_html_allowed_on_front` - _optional_ - Allow HTML Tags on Frontend
* `is_filterable_in_search` - _optional_ - Use In Search Results Layered Navigation
* `is_configurable` - _optional_ - Use To Create Configurable Product
* `is_visible_in_advanced_search` - _optional_ - Use in Advanced Search
* `is_used_for_promo_rules` - _optional_ - Use for Promo Rule Conditions
* `used_in_product_listing` - _optional_ - Used in Product Listing
* `used_for_sort_by` - _optional_ - Used for Sorting in Product Listing
* `apply_to` - _optional_ - Types of products which can have this attribute
    Possible values: simple, configurable, virtual, bundle, downloadable, all_types.

### Assign attribute to the group

*Tags:* `attribute`

#### Input Parameters
* `id` - _required_ - Entity id
* `group_id` - _required_ - Attribute group_id
* `attribute_set_id` - _optional_ - Attribute set id

### Assign attribute to the attribute set

*Tags:* `attribute`

#### Input Parameters
* `id` - _required_ - Entity id
* `group_id` - _optional_ - Attribute group_id
* `attribute_set_id` - _required_ - Attribute set id

### Get attribute_set list

*Tags:* `attribute`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

### Get attributes count

*Tags:* `attribute`

#### Input Parameters
* `type` - _optional_ - Defines attribute's type
    Possible values: text, select, textarea, date, price, multiselect, boolean.
* `store_id` - _optional_ - Store Id
* `lang_id` - _optional_ - Language id
* `visible` - _optional_ - Filter items by visibility status
* `required` - _optional_ - Defines if the option is required

### Delete attribute from store

*Tags:* `attribute`

#### Input Parameters
* `store_id` - _optional_ - Store Id
* `id` - _required_ - Entity id

### Get attribute group list

*Tags:* `attribute`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `attribute_set_id` - _optional_ - Attribute set id

### Get attribute info

*Tags:* `attribute`

#### Input Parameters
* `id` - _required_ - Entity id
* `store_id` - _optional_ - Store Id
* `lang_id` - _optional_ - Language id
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

### Get attributes list

*Tags:* `attribute`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `type` - _optional_ - Defines attribute's type
    Possible values: text, select, textarea, date, price, multiselect, boolean.
* `attribute_ids` - _optional_ - Filter attributes by ids
* `store_id` - _optional_ - Store Id
* `lang_id` - _optional_ - Retrieves attributes on specified language id
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `visible` - _optional_ - Filter items by visibility status
* `required` - _optional_ - Defines if the option is required
* `system` - _optional_ - True if attribute is system

### Get list of supported attributes types

*Tags:* `attribute`

### Unassign attribute from group

*Tags:* `attribute`

#### Input Parameters
* `id` - _required_ - Entity id
* `group_id` - _required_ - Customer group_id

### Unassign attribute from attribute set

*Tags:* `attribute`

#### Input Parameters
* `id` - _required_ - Entity id
* `attribute_set_id` - _required_ - Attribute set id

### Add item to basket

*Tags:* `basket`

#### Input Parameters
* `customer_id` - _required_ - Retrieves orders specified by customer id
* `product_id` - _required_ - Defines id of the product which should be added to the basket
* `variant_id` - _optional_ - Defines product's variants specified by variant id
* `quantity` - _optional_ - Defines new items quantity
* `store_id` - _optional_ - Store Id

### Delete bridge from the store.

*Tags:* `bridge`

### Download bridge for store

*Tags:* `cart`

### Update bridge in the store.

*Tags:* `bridge`

### Get bridge key and store key

*Tags:* `cart`

### Clear cache on store.

*Tags:* `cart`

#### Input Parameters
* `cache_type` - _required_ - Defines which cache should be cleared.

### Get list of cart configs

*Tags:* `cart`

#### Input Parameters
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

### Use this API method to update custom data in client database.

*Tags:* `cart`

### Create new coupon

*Tags:* `cart`

#### Input Parameters
* `code` - _required_ - Coupon code
* `action_type` - _required_ - Coupon discount type
    Possible values: percent, fixed.
* `action_apply_to` - _required_ - Defines where discount should be applied
    Possible values: order_total, item_price, shipping.
* `action_scope` - _required_ - Specify how discount should be applied. If scope=matching_items, then discount will be applied to each of the items that match action conditions. Scope order means that discount will be applied once.
    Possible values: order, matching_items.
* `action_amount` - _required_ - Defines the discount amount value.
* `date_start` - _optional_ - Defines when discount code will be available.
* `date_end` - _optional_ - Defines when discount code will be expired.
* `usage_limit` - _optional_ - Usage limit for coupon.
* `usage_limit_per_customer` - _optional_ - Usage limit per customer.
* `action_condition_entity` - _optional_ - Defines entity for action condition.
    Possible values: order, order_shipping_address, product, customer.
* `action_condition_key` - _optional_ - Defines entity attribute code for action condition.
    Possible values: product_id, category_id, variant_id, country.
* `action_condition_operator` - _optional_ - Defines condition operator.
    Possible values: ONE_OF, ==.
* `action_condition_value` - _optional_ - Defines condition attribute value/s. Can be comma separated string.

### Get cart coupons count.

*Tags:* `cart`

#### Input Parameters
* `store_id` - _optional_ - Store Id
* `date_start_from` - _optional_ - Filter entity by date_start (greater or equal)
* `date_start_to` - _optional_ - Filter entity by date_start (less or equal)
* `date_end_from` - _optional_ - Filter entity by date_end (greater or equal)
* `date_end_to` - _optional_ - Filter entity by date_end (less or equal)
* `avail` - _optional_ - Defines category's visibility status

### Delete coupon

*Tags:* `cart`

#### Input Parameters
* `id` - _required_ - Entity id

### Get cart coupon discounts.

*Tags:* `cart`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved. Max allowed count=250
* `store_id` - _optional_ - Filter coupons by store id
* `date_start_from` - _optional_ - Filter entity by date_start (greater or equal)
* `date_start_to` - _optional_ - Filter entity by date_start (less or equal)
* `date_end_from` - _optional_ - Filter entity by date_end (greater or equal)
* `date_end_to` - _optional_ - Filter entity by date_end (less or equal)
* `avail` - _optional_ - Filter coupons by avail status
* `lang_id` - _optional_ - Language id
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

### Add store to the account

*Tags:* `cart`

#### Input Parameters
* `cart_id` - _required_ - Store's identifier which you can get from cart_list method
* `store_url` - _required_ - A web address of a store that you would like to connect to API2Cart
* `bridge_url` - _optional_ - This parameter allows to set up store with custom bridge url (you must use store_root parameter if a bridge folder is not in the root folder of the store)
* `store_root` - _optional_ - Absolute path to the store root directory (used with "bridge_url" parameter)
* `store_key` - _optional_ - Set this parameter if bridge is already uploaded to store
* `shared_secret` - _optional_ - Shared secret
* `validate_version` - _optional_ - Specify if api2cart should validate cart version
* `verify` - _optional_ - Enables or disables cart's verification
* `db_tables_prefix` - _optional_ - This parameter is deprecated for this method. Please, use this parameter in method account.config.update
* `ftp_host` - _optional_ - FTP connection host
* `ftp_user` - _optional_ - FTP User
* `ftp_password` - _optional_ - FTP Password
* `ftp_port` - _optional_ - FTP Port
* `ftp_store_dir` - _optional_ - FTP Store dir
* `apiKey_3dcart` - _optional_ - 3DCart API Key
* `AdminAccount` - _optional_ - It's a BigCommerce account for which API is enabled
* `ApiPath` - _optional_ - BigCommerce API URL
* `ApiKey` - _optional_ - Bigcommerce API Key
* `client_id` - _optional_ - Client ID of the requesting app.
* `accessToken` - _optional_ - Access token authorizing the app to access resources on behalf of a user
* `access_token` - _optional_ - Access token authorizing the app to access resources on behalf of a user
* `apiKey_shopify` - _optional_ - Shopify API Key
* `apiPassword` - _optional_ - Shopify API Password
* `EncryptedPassword` - _optional_ - Volusion API Password
* `Login` - _optional_ - It's a Volusion account for which API is enabled
* `apiUser_adnsf` - _optional_ - It's a AspDotNetStorefront account for which API is available
* `apiPass` - _optional_ - AspDotNetStorefront API Password
* `accessKey_scelite` - _optional_ - Shopping Cart Elite Access Key
* `apiKey_scelite` - _optional_ - Shopping Cart Elite API Key
* `apiSecretKey_scelite` - _optional_ - Shopping Cart Elite API Secret Key
* `privateKey` - _optional_ - 3DCart Application Private Key
* `appToken` - _optional_ - 3DCart Token from Application
* `etsy_keystring` - _optional_ - Etsy keystring
* `etsy_shared_secret` - _optional_ - Etsy shared secret
* `tokenSecret` - _optional_ - Secret token authorizing the app to access resources on behalf of a user
* `ebay_client_id` - _optional_ - Application ID (AppID).
* `ebay_client_secret` - _optional_ - Shared Secret from eBay application
* `ebay_runame` - _optional_ - The RuName value that eBay assigns to your application.
* `ebay_access_token` - _optional_ - Used to authenticate API requests.
* `ebay_refresh_token` - _optional_ - Used to renew the access token.
* `ebay_environment` - _optional_
    Possible values: production, sandbox.
* `dw_client_id` - _optional_ - Demandware client id
* `dw_api_pass` - _optional_ - Demandware api password
* `store_id` - _optional_ - Store Id
* `seller_id` - _required_ - Seller Id
* `marketplaces_ids` - _required_ - Comma separated marketplaces ids

### Remove store from API2Cart

*Tags:* `cart`

### Disconnect with the store and clear store session data.

*Tags:* `cart`

#### Input Parameters
* `delete_bridge` - _optional_ - Identifies if there is a necessity to delete bridge

### Create new gift card

*Tags:* `cart`

#### Input Parameters
* `amount` - _required_ - Defines the gift card amount value.
* `code` - _optional_ - Gift card code
* `owner_email` - _optional_ - Gift card owner email

### Get gift cards count.

*Tags:* `cart`

#### Input Parameters
* `store_id` - _optional_ - Store Id

### Get gift cards list.

*Tags:* `cart`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `store_id` - _optional_ - Store Id
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

### Get cart information

*Tags:* `cart`

#### Input Parameters
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `store_id` - _optional_ - Store Id

### Get list of supported carts

*Tags:* `cart`

### Get list of cart methods

*Tags:* `cart`

### Get list of installed plugins

*Tags:* `cart`

#### Input Parameters
* `store_key` - _optional_ - Set this parameter if bridge is already uploaded to store
* `store_id` - _optional_ - Store Id
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved

### Check store availability, bridge connection for the downloadable carts, identify DB prefix, validate API accesses for API carts.

*Tags:* `cart`

#### Input Parameters
* `validate_version` - _optional_ - Specify if api2cart should validate cart version

### Add new category in store

*Tags:* `category`

#### Input Parameters
* `name` - _required_ - Defines category's name that has to be added
* `parent_id` - _optional_ - Adds categories specified by parent id
* `stores_ids` - _optional_ - Create category in the stores that is specified by comma-separated stores' id
* `store_id` - _optional_ - Store Id
* `avail` - _optional_ - Defines category's visibility status
* `sort_order` - _optional_ - Sort number in the list
* `created_time` - _optional_ - Entity's date creation
* `modified_time` - _optional_ - Entity's date modification
* `description` - _optional_ - Defines category's description
* `meta_title` - _optional_ - Defines unique meta title for each entity
* `meta_description` - _optional_ - Defines unique meta description of a entity
* `meta_keywords` - _optional_ - Defines unique meta keywords for each entity
* `seo_url` - _optional_ - Defines unique category's URL for SEO

### Assign category to product

*Tags:* `category`

#### Input Parameters
* `product_id` - _required_ - Defines category assign to the product, specified by product id
* `category_id` - _required_ - Defines category assign, specified by category id

### Count categories in store.

*Tags:* `category`

#### Input Parameters
* `parent_id` - _optional_ - Counts categories specified by parent id
* `store_id` - _optional_ - Counts category specified by store id
* `lang_id` - _optional_ - Counts category specified by language id

### Delete category in store

*Tags:* `category`

#### Input Parameters
* `id` - _required_ - Defines category removal, specified by category id

### Search category in store. "Laptop" is specified here by default.

*Tags:* `category`

#### Input Parameters
* `find_value` - _required_ - Entity search that is specified by some value
* `find_where` - _optional_ - Entity search that is specified by the comma-separated unique fields
    Possible values: name, description.
* `find_params` - _optional_ - Entity search that is specified by comma-separated parameters
    Possible values: regex, case_sensitive, whole_words.

### Add image to category

*Tags:* `category`

#### Input Parameters
* `category_id` - _required_ - Defines category id where the image should be added
* `image_name` - _required_ - Defines image's name
* `url` - _required_ - Defines URL of the image that has to be added
* `label` - _optional_ - Defines alternative text that has to be attached to the picture
* `mime` - _optional_ - Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
* `type` - _required_ - Defines image's types that are specified by comma-separated list
    Possible values: base, thumbnail.
* `position` - _optional_ - Defines image's position in the list
* `store_id` - _optional_ - Store Id

### Delete image

*Tags:* `category`

#### Input Parameters
* `category_id` - _required_ - Defines category id where the image should be deleted
* `image_id` - _required_ - Define image id
* `store_id` - _optional_ - Store Id

### Get category info about category ID*** or specify other category ID.

*Tags:* `category`

#### Input Parameters
* `id` - _required_ - Retrieves category's info specified by category id
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `store_id` - _optional_ - Retrieves category info  specified by store id
* `lang_id` - _optional_ - Retrieves category info  specified by language id

### Get list of categories from store. Returns 4 categories by default.

*Tags:* `category`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `parent_id` - _optional_ - Retrieves categories specified by parent id
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `store_id` - _optional_ - Retrieves categories specified by store id
* `lang_id` - _optional_ - Retrieves categorys specified by language id

### Unassign category to product

*Tags:* `category`

#### Input Parameters
* `category_id` - _required_ - Defines category unassign, specified by category id
* `product_id` - _required_ - Defines category unassign to the product, specified by product id

### Update category in store

*Tags:* `category`

#### Input Parameters
* `id` - _required_ - Defines category update specified by category id
* `name` - _optional_ - Defines new category's name
* `parent_id` - _optional_ - Defines new parent category id
* `stores_ids` - _optional_ - Update category in the stores that is specified by comma-separated stores' id
* `avail` - _optional_ - Defines category's visibility status
* `sort_order` - _optional_ - Sort number in the list
* `modified_time` - _optional_ - Entity's date modification
* `description` - _optional_ - Defines new category's description
* `meta_title` - _optional_ - Defines unique meta title for each entity
* `meta_description` - _optional_ - Defines unique meta description of a entity
* `meta_keywords` - _optional_ - Defines unique meta keywords for each entity
* `seo_url` - _optional_ - Defines unique category's URL for SEO

### Add customer into store.

*Tags:* `customer`

### Get number of customers from store.

*Tags:* `customer`

#### Input Parameters
* `group_id` - _optional_ - Customer group_id
* `created_from` - _optional_ - Retrieve entities from their creation date
* `created_to` - _optional_ - Retrieve entities to their creation date
* `modified_from` - _optional_ - Retrieve entities from their modification date
* `modified_to` - _optional_ - Retrieve entities to their modification date
* `store_id` - _optional_ - Counts customer specified by store id
* `customer_list_id` - _optional_ - The numeric ID of the customer list in Demandware.

### Find customers in store.

*Tags:* `customer`

#### Input Parameters
* `find_value` - _required_ - Entity search that is specified by some value
* `find_where` - _optional_ - Entity search that is specified by the comma-separated unique fields
    Possible values: email, first_name, last_name.
* `find_params` - _optional_ - Entity search that is specified by comma-separated parameters
    Possible values: regex, case_sensitive, whole_words.
* `store_id` - _optional_ - Store Id

### Get customers' details from store.

*Tags:* `customer`

#### Input Parameters
* `id` - _required_ - Retrieves customer's info specified by customer id
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `store_id` - _optional_ - Retrieves customer info specified by store id

### Get list of customers from store.

*Tags:* `customer`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `created_from` - _optional_ - Retrieve entities from their creation date
* `created_to` - _optional_ - Retrieve entities to their creation date
* `modified_from` - _optional_ - Retrieve entities from their modification date
* `modified_to` - _optional_ - Retrieve entities to their modification date
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `group_id` - _optional_ - Customer group_id
* `store_id` - _optional_ - Retrieves customers specified by store id
* `customer_list_id` - _optional_ - The numeric ID of the customer list in Demandware.

### Get list of orders that were left by customers before completing the order.

*Tags:* `order`

#### Input Parameters
* `store_id` - _optional_ - Store Id
* `customer_id` - _optional_ - Retrieves orders specified by customer id
* `customer_email` - _optional_ - Retrieves orders specified by customer email
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `created_to` - _optional_ - Retrieve entities to their creation date
* `created_from` - _optional_ - Retrieve entities from their creation date
* `modified_to` - _optional_ - Retrieve entities to their modification date
* `modified_from` - _optional_ - Retrieve entities from their modification date

### Add a new order to the cart.

*Tags:* `order`

### Count orders in store

*Tags:* `order`

#### Input Parameters
* `customer_id` - _optional_ - Counts orders quantity specified by customer id
* `customer_email` - _optional_ - Counts orders quantity specified by customer email
* `order_status` - _optional_ - Counts orders quantity specified by order status
* `created_to` - _optional_ - Retrieve entities to their creation date
* `created_from` - _optional_ - Retrieve entities from their creation date
* `modified_to` - _optional_ - Retrieve entities to their modification date
* `modified_from` - _optional_ - Retrieve entities from their modification date
* `store_id` - _optional_ - Counts orders quantity specified by store id
* `order_ids` - _optional_ - Counts orders specified by order ids
* `financial_status` - _optional_ - Counts orders quantity specified by financial status
    Possible values: pending, authorized, partially_paid, paid, partially_refunded, refunded, voided.

### Retrieve list of financial statuses

*Tags:* `order`

### Find orders

*Tags:* `order`

#### Input Parameters
* `customer_id` - _optional_ - Retrieves orders specified by customer id
* `customer_email` - _optional_ - Retrieves orders specified by customer email
* `order_status` - _optional_ - Retrieves orders specified by order status
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `created_to` - _optional_ - Retrieve entities to their creation date
* `created_from` - _optional_ - Retrieve entities from their creation date
* `modified_to` - _optional_ - Retrieve entities to their modification date
* `modified_from` - _optional_ - Retrieve entities from their modification date
* `financial_status` - _optional_ - Retrieves orders specified by financial status
    Possible values: pending, authorized, partially_paid, paid, partially_refunded, refunded, voided.

### Info about a specific order by ID

*Tags:* `order`

#### Input Parameters
* `order_id` - _required_ - Retrieves order's info specified by order id
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `store_id` - _optional_ - Defines store id where the order should be found

### Get list of orders from store. Returns 4 orders by default.

*Tags:* `order`

#### Input Parameters
* `customer_id` - _optional_ - Retrieves orders specified by customer id
* `customer_email` - _optional_ - Retrieves orders specified by customer email
* `order_status` - _optional_ - Retrieves orders specified by order status
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `sort_by` - _optional_ - Set field to sort by
* `sort_direction` - _optional_ - Set sorting direction
    Possible values: asc, desc.
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `created_to` - _optional_ - Retrieve entities to their creation date
* `created_from` - _optional_ - Retrieve entities from their creation date
* `modified_to` - _optional_ - Retrieve entities to their modification date
* `modified_from` - _optional_ - Retrieve entities from their modification date
* `store_id` - _optional_ - Store Id
* `order_ids` - _optional_ - Retrieves orders specified by order ids
* `financial_status` - _optional_ - Retrieves orders specified by financial status
    Possible values: pending, authorized, partially_paid, paid, partially_refunded, refunded, voided.

### Add a refund to the order.

*Tags:* `order`

### Add a shipment to the order.

*Tags:* `order`

### Get list of shipments by orders.

*Tags:* `order`

#### Input Parameters
* `order_id` - _required_ - Retrieves shipments specified by order id
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `created_from` - _optional_ - Retrieve entities from their creation date
* `created_to` - _optional_ - Retrieve entities to their creation date

### Update order's shipment information.

*Tags:* `order`

### Retrieve list of statuses

*Tags:* `order`

### Update existing order.

*Tags:* `order`

#### Input Parameters
* `order_id` - _required_ - Defines the orders specified by order id
* `store_id` - _optional_ - Defines store id where the order should be found
* `order_status` - _optional_ - Defines new order's status
* `comment` - _optional_ - Specifies order comment
* `date_modified` - _optional_ - Specifies order's  modification date
* `date_finished` - _optional_ - Specifies order's  finished date
* `financial_status` - _optional_ - Update order financial status to specified
    Possible values: paid.

### Add new product to store.

*Tags:* `product`

### Get list of attributes.

*Tags:* `product`

#### Input Parameters
* `product_id` - _required_ - Retrieves attributes specified by product id
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `sort_by` - _optional_ - Set field to sort by
* `sort_direction` - _optional_ - Set sorting direction
    Possible values: asc, desc.
* `lang_id` - _optional_ - Retrieves attributes specified by language id
* `store_id` - _optional_ - Retrieves attributes specified by store id
* `attribute_id` - _optional_ - Retrieves info for specified attribute_id
* `attribute_group_id` - _optional_ - Filter by attribute_group_id
* `set_name` - _optional_ - Retrieves attributes specified by set_name in Magento

### Set attribute value to product.

*Tags:* `product`

#### Input Parameters
* `product_id` - _required_ - Defines product id where the attribute should be added
* `attribute_id` - _optional_ - Filter by attribute_id
* `attribute_group_id` - _optional_ - Filter by attribute_group_id
* `attribute_name` - _optional_ - Define attribute name
* `value` - _optional_ - Define attribute value
* `value_id` - _optional_ - Define attribute value id
* `lang_id` - _optional_ - Language id
* `store_id` - _optional_ - Store Id

### Search product child item (bundled item or configurable product variant) in store catalog.

*Tags:* `product`

#### Input Parameters
* `find_value` - _required_ - Entity search that is specified by some value
* `find_where` - _optional_ - Entity search that is specified by the comma-separated unique fields
    Possible values: name, sku, description.
* `find_params` - _optional_ - Entity search that is specified by comma-separated parameters
    Possible values: regex, case_sensitive, whole_words.
* `store_id` - _optional_ - Store Id

### Get child items list of specific product.

*Tags:* `product`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `product_id` - _required_ - Filter by parent product id
* `product_ids` - _optional_ - Filter by parent product id
* `store_id` - _optional_ - Store Id
* `lang_id` - _optional_ - Language id

### Count products in store.

*Tags:* `product`

#### Input Parameters
* `category_id` - _optional_ - Counts products specified by category id
* `created_from` - _optional_ - Retrieve entities from their creation date
* `created_to` - _optional_ - Retrieve entities to their creation date
* `modified_from` - _optional_ - Retrieve entities from their modification date
* `modified_to` - _optional_ - Retrieve entities to their modification date
* `avail_view` - _optional_ - Specifies the set of visible/invisible products
* `avail_sale` - _optional_ - Specifies the set of available/not available products for sale
* `store_id` - _optional_ - Counts products specified by store id
* `lang_id` - _optional_ - Counts products specified by language id
* `product_ids` - _optional_ - Counts products specified by product ids
* `report_request_id` - _optional_ - Report request id
* `disable_report_cache` - _optional_ - Disable report cache for current request

### Add currency and/or set default in store

*Tags:* `product`

#### Input Parameters
* `iso3` - _required_ - Specifies standardized currency code
* `rate` - _required_ - Defines the numerical identifier against to the major currency
* `name` - _optional_ - Defines currency's name
* `avail` - _optional_ - Specifies whether the currency is available
* `symbol_left` - _optional_ - Defines the symbol that is located before the currency
* `symbol_right` - _optional_ - Defines the symbol that is located after the currency
* `default` - _optional_ - Specifies currency's default meaning

### Get list of currencies

*Tags:* `product`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `default` - _optional_ - Specifies the set of default/not default currencies
* `avail` - _optional_ - Specifies the set of available/not available currencies

### Product delete

*Tags:* `product`

#### Input Parameters
* `id` - _required_ - Product id that will be removed

### Retrieve all available fields for product item in store.

*Tags:* `product`

### Search product in store catalog. "Apple" is specified here by default.

*Tags:* `product`

#### Input Parameters
* `find_value` - _required_ - Entity search that is specified by some value
* `find_where` - _optional_ - Entity search that is specified by the comma-separated unique fields
    Possible values: name, model, description.
* `find_params` - _optional_ - Entity search that is specified by comma-separated parameters
    Possible values: regex, case_sensitive, whole_words.
* `find_what` - _optional_ - Parameter's value specifies the entity that has to be found
    Possible values: product, variant, each.

### Add image to product

*Tags:* `product`

#### Input Parameters
* `product_id` - _required_ - Defines product id where the image should be added
* `image_name` - _required_ - Defines image's name
* `type` - _required_ - Defines image's types that are specified by comma-separated list
    Possible values: small, base, additional, thumbnail.
* `url` - _required_ - Defines URL of the image that has to be added
* `label` - _optional_ - Defines alternative text that has to be attached to the picture
* `mime` - _optional_ - Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
* `position` - _optional_ - Defines image's position in the list
* `content` - _optional_ - Content(body) encoded in base64 of image file
* `product_variant_id` - _optional_ - Defines product's variants specified by variant id
* `store_id` - _optional_ - Store Id

### Delete image

*Tags:* `product`

#### Input Parameters
* `product_id` - _required_ - Defines product id where the image should be deleted
* `id` - _required_ - Entity id
* `store_id` - _optional_ - Store Id

### Update details of image

*Tags:* `product`

#### Input Parameters
* `product_id` - _required_ - Defines product id where the image should be updated
* `image_name` - _optional_ - Defines image's name
* `type` - _optional_ - Defines image's types that are specified by comma-separated list
    Possible values: small, base, additional, thumbnail.
* `label` - _optional_ - Defines alternative text that has to be attached to the picture
* `position` - _optional_ - Defines image's position in the list
* `id` - _required_ - Defines image update specified by image id
* `store_id` - _optional_ - Store Id
* `hidden` - _optional_ - Define is hide image

### Get product info about product ID *** or specify other product ID.

*Tags:* `product`

#### Input Parameters
* `id` - _required_ - Retrieves product's info specified by product id
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `store_id` - _optional_ - Retrieves product info specified by store id
* `lang_id` - _optional_ - Retrieves product info specified by language id
* `product_variant_params` - _optional_ - Set this parameter in order to choose which product variants fields you want to retrieve
* `report_request_id` - _optional_ - Report request id
* `disable_report_cache` - _optional_ - Disable report cache for current request

### Get list of products from your store. Returns 4 products by default.

*Tags:* `product`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `category_id` - _optional_ - Retrieves products specified by category id
* `created_from` - _optional_ - Retrieve entities from their creation date
* `created_to` - _optional_ - Retrieve entities to their creation date
* `modified_from` - _optional_ - Retrieve entities from their modification date
* `modified_to` - _optional_ - Retrieve entities to their modification date
* `avail_view` - _optional_ - Specifies the set of visible/invisible products
* `avail_sale` - _optional_ - Specifies the set of available/not available products for sale
* `store_id` - _optional_ - Retrieves products specified by store id
* `lang_id` - _optional_ - Retrieves products specified by language id
* `product_ids` - _optional_ - Retrieves products specified by product ids
* `product_variant_params` - _optional_ - Set this parameter in order to choose which product variants fields you want to retrieve
* `since_id` - _optional_ - Retrieve products starting from the specified product id
* `report_request_id` - _optional_ - Report request id
* `disable_report_cache` - _optional_ - Disable report cache for current request

### Add manufacturer to store and assign to product

*Tags:* `product`

#### Input Parameters
* `product_id` - _required_ - Defines products specified by product id
* `manufacturer` - _required_ - Defines product's manufacturer's name

### Add product option from store.

*Tags:* `product`

#### Input Parameters
* `name` - _required_ - Defines option's name
* `type` - _required_ - Defines option's type that has to be added
    Possible values: option_type_select, option_type_text, option_type_radio, option_type_checkbox, option_type_textarea, option_type_readonly, option_type_multiselect, option_type_multicheckbox, option_type_file, option_type_date, option_type_datetime, option_type_time.
* `product_id` - _optional_ - Defines product id where the option should be added
* `option_values` - _optional_ - Defines option values that has to be added in Magento
* `description` - _optional_ - Defines option's description
* `avail` - _optional_ - Defines whether the option is available
* `sort_order` - _optional_ - Sort number in the list
* `required` - _optional_ - Defines if the option is required

### Assign option from product.

*Tags:* `product`

#### Input Parameters
* `product_id` - _required_ - Defines product id where the option should be assigned
* `option_id` - _required_ - Defines option id which has to be assigned

### Get list of options.

*Tags:* `product`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `product_id` - _optional_ - Retrieves products' options specified by product id

### Add product option item from option.

*Tags:* `product`

#### Input Parameters
* `option_id` - _required_ - Defines option id where the value has to be added
* `option_value` - _required_ - Defines option value that has to be added
* `sort_order` - _optional_ - Sort number in the list

### Assign product option item from product.

*Tags:* `product`

#### Input Parameters
* `product_option_id` - _required_ - Defines product's option id where the value has to be assigned
* `option_value_id` - _required_ - Defines value id that has to be assigned

### Update product option item from option.

*Tags:* `product`

#### Input Parameters
* `option_value_id` - _required_ - Defines value id that has to be assigned
* `price` - _optional_ - Defines new product option price
* `quantity` - _optional_ - Defines new products' options quantity

### Add some prices to the product.

*Tags:* `product`

### Delete some prices of the product

*Tags:* `product`

#### Input Parameters
* `product_id` - _required_ - Defines the product where the price has to be deleted
* `group_prices` - _optional_ - Defines product's group prices

### Update some prices of the product.

*Tags:* `product`

### Get reviews of a specific product.

*Tags:* `product`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `product_id` - _required_ - Product id
* `store_id` - _optional_ - Store Id
* `status` - _optional_ - Defines status
    Possible values: approved, pending, disapproved.
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

### Add tax class and tax rate to store and assign to product.

*Tags:* `product`

### Update price and quantity for a specific product

*Tags:* `product`

#### Input Parameters
* `id` - _required_ - Defines product id that has to be updated
* `price` - _optional_ - Defines new product's price
* `special_price` - _optional_ - Defines new product's special price
* `sprice_create` - _optional_ - Defines the date of special price creation
* `sprice_expire` - _optional_ - Defines the term of special price offer duration
* `cost_price` - _optional_ - Defines new product's cost price
* `retail_price` - _optional_ - Defines new product's retail price
* `quantity` - _optional_ - Defines new product's quantity
* `weight` - _optional_ - Weight
* `increase_quantity` - _optional_ - Defines the incremental changes in product quantity
* `reduce_quantity` - _optional_ - Defines the decrement changes in product quantity
* `warehouse_id` - _optional_ - This parameter is used for selecting a warehouse where you need to update a product quantity. Also, it has to be used along with this parameters: in_stock,quantity,increase_quantity,reduce_quantity.
* `reserve_quantity` - _optional_ - This parameter allows to reserve/unreserve product quantity.
* `manage_stock` - _optional_ - Defines inventory tracking for product
* `name` - _optional_ - Defines product's name that has to be updated
* `sku` - _optional_ - Defines new product's sku
* `visible` - _optional_ - Set visibility status
    Possible values: nowhere, catalog, search, everywhere.
* `manufacturer` - _optional_ - Defines product's manufacturer
* `manufacturer_id` - _optional_ - Defines product's manufacturer by manufacturer_id
* `description` - _optional_ - Defines new product's description
* `short_description` - _optional_ - Defines short description
* `meta_title` - _optional_ - Defines unique meta title for each entity
* `meta_keywords` - _optional_ - Defines unique meta keywords for each entity
* `meta_description` - _optional_ - Defines unique meta description of a entity
* `store_id` - _optional_ - Defines store id where the product should be found
* `lang_id` - _optional_ - Language id
* `in_stock` - _optional_ - Set stock status
* `status` - _optional_ - Defines product's status
    Possible values: enabled, disabled.
* `seo_url` - _optional_ - Defines unique URL for SEO
* `report_request_id` - _optional_ - Report request id
* `disable_report_cache` - _optional_ - Disable report cache for current request

### Add variant to product.

*Tags:* `product`

#### Input Parameters
* `product_id` - _required_ - Defines product's id where the variant has to be added
* `name` - _optional_ - Defines variant's name that has to be added
* `model` - _required_ - Specifies variant's model that has to be added
* `price` - _optional_ - Defines new product's variant price
* `attributes` - _optional_ - Defines variant's attributes list
* `description` - _optional_ - Specifies variant's description
* `special_price` - _optional_ - Specifies variant's model that has to be added
* `sprice_create` - _optional_ - Defines the date of special price creation
* `sprice_modified` - _optional_ - Defines the date of special price modification
* `sprice_expire` - _optional_ - Defines the term of special price offer duration
* `available_for_view` - _optional_ - Specifies the set of visible/invisible product's variants for users
* `available_for_sale` - _optional_ - Specifies the set of visible/invisible product's variants for sale
* `weight` - _optional_ - Weight
* `short_description` - _optional_ - Defines short description
* `quantity` - _optional_ - Defines product variant's quantity that has to be added
* `created_at` - _optional_ - Defines the date of entity creation
* `manufacturer` - _optional_ - Specifies the product variant's manufacturer
* `tax_class_id` - _optional_ - Defines tax classes where entity has to be added
* `meta_title` - _optional_ - Defines unique meta title for each entity
* `meta_keywords` - _optional_ - Defines unique meta keywords for each entity
* `meta_description` - _optional_ - Defines unique meta description of a entity
* `url` - _optional_ - Defines unique product variant's URL
* `store_id` - _optional_ - Add variants specified by store id

### Get count variants.

*Tags:* `product`

#### Input Parameters
* `created_from` - _optional_ - Retrieve entities from their creation date
* `created_to` - _optional_ - Retrieve entities to their creation date
* `modified_from` - _optional_ - Retrieve entities from their modification date
* `modified_to` - _optional_ - Retrieve entities to their modification date
* `category_id` - _optional_ - Counts products' variants specified by category id
* `product_id` - _optional_ - Retrieves products' variants specified by product id
* `store_id` - _optional_ - Retrieves variants specified by store id

### Delete variant.

*Tags:* `product`

#### Input Parameters
* `id` - _required_ - Defines variant removal, specified by variant id

### Get variant info.

*Tags:* `product`

#### Input Parameters
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `id` - _required_ - Retrieves variant's info specified by variant id
* `store_id` - _optional_ - Retrieves variant info specified by store id

### Get list variants.

*Tags:* `product`

#### Input Parameters
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
* `created_from` - _optional_ - Retrieve entities from their creation date
* `created_to` - _optional_ - Retrieve entities to their creation date
* `modified_from` - _optional_ - Retrieve entities from their modification date
* `modified_to` - _optional_ - Retrieve entities to their modification date
* `category_id` - _optional_ - Retrieves products' variants specified by category id
* `product_id` - _optional_ - Retrieves products' variants specified by product id
* `store_id` - _optional_ - Retrieves variants specified by store id

### Add some prices to the product variant.

*Tags:* `product`

### Delete some prices of the product variant.

*Tags:* `product`

#### Input Parameters
* `id` - _required_ - Defines the variant where the price has to be deleted
* `group_prices` - _optional_ - Defines variants's group prices

### Update some prices of the product variant.

*Tags:* `product`

### Update variant.

*Tags:* `product`

#### Input Parameters
* `id` - _required_ - Defines variant update specified by variant id
* `product_id` - _required_ - Defines product's id where the variant has to be updated
* `quantity` - _optional_ - Defines new products' variants quantity
* `price` - _optional_ - Defines new product's variant price
* `special_price` - _optional_ - Defines new product's variant special price
* `manage_stock` - _optional_ - Defines inventory tracking for product variant
* `name` - _required_ - Defines variant's name that has to be updated
* `sku` - _optional_ - Defines new product's variant sku
* `meta_title` - _optional_ - Defines unique meta title for each entity
* `meta_description` - _optional_ - Defines unique meta description of a entity
* `meta_keywords` - _optional_ - Defines unique meta keywords for each entity
* `description` - _optional_ - Specifies variant's description
* `short_description` - _optional_ - Defines short description
* `visible` - _optional_ - Set visibility status
    Possible values: nowhere, catalog, search, everywhere.
* `status` - _optional_ - Defines product variant's status
    Possible values: enabled, disabled.

### Get info about tax

*Tags:* `tax`

#### Input Parameters
* `tax_class_id` - _required_ - Retrieves taxes specified by class id
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `exclude` - _optional_ - Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all

### Count registered webhooks on the store.

*Tags:* `webhook`

#### Input Parameters
* `entity` - _optional_ - The entity you want to filter webhooks by (e.g. order or product)
* `action` - _optional_ - The action you want to filter webhooks by (e.g. order or product)
* `active` - _optional_ - The webhook status you want to filter webhooks by

### Create webhook on the store and subscribe to it.

*Tags:* `webhook`

#### Input Parameters
* `entity` - _required_ - Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)
* `action` - _required_ - Specify what action (event) will trigger the webhook (e.g add, delete, or update)
* `callback` - _required_ - Callback where the webhook should send the POST request when the event occurs
* `label` - _optional_ - The name you give to the webhook
* `fields` - _optional_ - Fields the webhook should send
* `active` - _optional_ - Webhook status
* `store_id` - _optional_ - Defines store id where the webhook should be assigned

### Delete registered webhook on the store.

*Tags:* `webhook`

#### Input Parameters
* `id` - _required_ - Webhook id

### List all Webhooks that are available on this store.

*Tags:* `webhook`

### List registered webhook on the store.

*Tags:* `webhook`

#### Input Parameters
* `params` - _optional_ - Set this parameter in order to choose which entity fields you want to retrieve
* `start` - _optional_ - This parameter sets the number from which you want to get entities
* `count` - _optional_ - This parameter sets the entity amount that has to be retrieved
* `entity` - _optional_ - The entity you want to filter webhooks by (e.g. order or product)
* `action` - _optional_ - The action you want to filter webhooks by (e.g. add, update, or delete)
* `active` - _optional_ - The webhook status you want to filter webhooks by
* `ids` - _optional_ - List of somma-separated webhook ids

### Update Webhooks parameters.

*Tags:* `webhook`

#### Input Parameters
* `id` - _required_ - Webhook id
* `callback` - _optional_ - Callback where the webhook should send the POST request when the event occurs
* `label` - _optional_ - The name you give to the webhook
* `fields` - _optional_ - Fields the webhook should send
* `active` - _optional_ - Webhook status

## License

flowground :- Telekom iPaaS / api-2-cart-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
