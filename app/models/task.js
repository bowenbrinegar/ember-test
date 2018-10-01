import DS from 'ember-data';


export default DS.Model.extend({
    title: DS.attr('string'),
    holder: DS.attr('string'),
    createdAt: DS.attr('string', {
        defaultValue: function() {
            return null
        }
    })
});
