import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {
  level: null,
  currentQuestionPosition: 0,

  id: Ember.computed.readOnly('level.id'),
  firstQuestion: Ember.computed.readOnly('level.questions.firstObject'),

  questionsManager: Ember.inject.service('questions-manager'),

  handleOnInit: Ember.on('init', function() {
    console.log('ON INIT!!!');
    this.get('questionsManager').on('goToNextQuestion', () => {
      this.incrementProperty('currentQuestionPosition');
      const nextQuestion = this.get('level.questions').objectAt(this.get('currentQuestionPosition'));
      console.log('nextQuestion', nextQuestion)
      console.log('id', this.get('id'))
      if (nextQuestion) {
        this.get('questionsManager').resetAnswer();
        this.trigger('transitionQuestion', this.get('id'), nextQuestion);
      } else {
        this.trigger('transitionOutcome');
      }
    });
  }),

  setLevel(model) {
    if (model.get('id') !== this.get('level.id')) {
      this.set('level', model);
      this.set('currentQuestionPosition');
      const id = model.get('id');
      const firstQuestion  = model.get('questions.firstObject');
      this.trigger('transitionQuestion', id, firstQuestion);
    }
  }
});
