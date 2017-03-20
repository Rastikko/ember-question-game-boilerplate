import Ember from 'ember';

export default Ember.Route.extend({

  currentQuestionPosition: 0,

  levelsManager: Ember.inject.service('levels-manager'),

  handleOnInit: Ember.on('init', function() {
    const self = this;
    this.get('levelsManager').on('transitionQuestion', function(levelId, question) {
      self.transitionTo('level.question', levelId, question);
    });
    this.get('levelsManager').on('transitionOutcome', function() {
      self.transitionTo('outcome');
    });
  }),

  model: function(params) {
    // Get questions from mirage
    return this.store.findRecord('level', params.level_id);
  },

  afterModel: function(model) {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAA');
    this.get('levelsManager').setLevel(model);
    console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBB');
  }
});
