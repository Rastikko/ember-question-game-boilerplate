import Ember from 'ember';

export default Ember.Controller.extend({
  questionsManager: Ember.inject.service('questions-manager'),
});
