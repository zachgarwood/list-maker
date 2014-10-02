App.ListController = Ember.ObjectController.extend({
    actions: {
        addItem: function() {
            var title = this.get('itemTitle'); 
            if (!title) return false;
            if (!title.trim()) return;
            var list = this.get('model');
                
            var item = this.store.createRecord(
                'item',
                {
                    title: title,
                    list: list 
                }
            );
            item.save().then(function(item) {
                list.get('items').pushObject(item);
                list.save();
            });

            this.set('itemTitle', '');
        }
    }
});
