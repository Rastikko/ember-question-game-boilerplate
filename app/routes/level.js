import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // Get questions from mirage
    return this.store.findRecord('level', params.level_id);
  },

  afterModel: function(model) {
    console.log('MODEL questions', model.get('questions'));
    console.log('MODEL title', model.get('title'));
    console.log('MODEL questions 0', model.get('questions.0'));
    console.log('MODEL questions firstObject', model.get('questions.firstObject'));
    console.log('---------------------------');
    this.transitionTo(`level.question`, model.get('id'), model.get('questions.firstObject'))
  }
});
