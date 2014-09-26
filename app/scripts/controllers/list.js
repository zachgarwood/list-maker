App.ListController = Ember.ObjectController.extend({
    actions: {
        addItem: function() {
            var text = this.get('itemText'); 
            if (!text) return false;
            if (!text.trim()) return;
            var list = this.get('model');
                
            var item = this.store.createRecord(
                'item',
                {
                    text: text,
                    list: list 
                }
            );
            item.save().then(function(item) {
                list.get('items').pushObject(item);
                list.save();
            });

            this.set('itemText', '');
        }
    }
});
