'use strict';

/**
 * requisition service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::requisition.requisition');
