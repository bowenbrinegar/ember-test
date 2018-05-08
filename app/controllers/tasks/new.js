import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addTask: function() {
            let title = this.get('task')
            alert(title)
        }
    }
});
