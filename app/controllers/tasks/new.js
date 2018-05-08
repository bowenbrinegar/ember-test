import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addTask: function() {
            let title = this.get('title')
            let holder = this.get('holder')
            alert(title)
            alert(holder)
        }
    }
});
