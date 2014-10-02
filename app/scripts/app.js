var App = window.App = Ember.Application.create();
App.appName = 'List Maker (alpha)';

require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/fixtures/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
