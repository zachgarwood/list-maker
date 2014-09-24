var App = window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_ACTIVE_GENERATION: true
});
App.appName = 'List Maker';

require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/fixtures/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
