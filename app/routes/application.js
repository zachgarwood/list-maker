import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        return this.get("session").fetch().catch(function() {});
    },

    actions: {
        signIn: function(provider) {
            let that = this;
            this.get("session").open("firebase", {
                provider: provider
            }).then(function(data) {
                that.transitionTo('/');
            });
        },

        signOut: function() {
            this.get("session").close();
            this.transitionTo('/');
        }
    }
});
