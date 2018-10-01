import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    turn: true,
    edit: false,
    selectedId: null,

    actions: {
        viewToggle: function() {
            this.toggleProperty('turn');
        },
        editToggle: function(id) {
            this.set('selectedId', id);
            this.toggleProperty('edit');
        },
        delete: function(id) {
            this.store.findRecord('task', id).then(function(task) {
                task.deleteRecord();
                task.get('isDeleted');
                task.save();
            });
        }
    },
    update: Ember.observer('edit', 'selectedId', function () {
        const id = this.get('selectedId');
        if (!this.get('edit')) {
            this.store.findRecord('task', id).then(function(task) {
                task.save();
                alert(task.date)
            });
        }
    })
});
