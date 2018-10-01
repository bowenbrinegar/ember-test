import Controller from '@ember/controller';


export default Controller.extend({
    actions: {
        addTask: function() {
            let title = this.get('title')
            let holder = this.get('holder')

            let temp = this.store.createRecord('task', {
                title: title,
                holder: holder,
                date: new Date()
            })
            
            temp.save()
            
            this.setProperties({
                title: '',
                holder: ''
            })

            alert('task added')
        },
    }
});
