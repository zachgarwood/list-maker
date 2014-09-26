App.ListsCreateController = Ember.ObjectController.extend({
    actions: {
        create: function() {
            var title = this.get('title'); 
            if (!title) return false;
            if (!title.trim()) return;

            var list = this.store.createRecord(
                'list',
                {
                    description: title
                }
            );

            list.save();

            this.set('title', '');
        }
    }
});
