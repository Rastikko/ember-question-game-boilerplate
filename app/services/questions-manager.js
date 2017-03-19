import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {

  correctAnswers: 0,
  totalAnswers: 0,
  userAnswer: -1,

  isQuestionNotAnswered: Ember.computed.equal('userAnswer', -1),
  isQuestionAnswered: Ember.computed.not('isQuestionNotAnswered'),

  answerQuestion: function(answerId, isCorrect) {
    this.set('userAnswer', answerId);
    this.incrementProperty('totalAnswers');
    isCorrect && this.incrementProperty('correctAnswers');
    console.log('?????????');
    Ember.run.later(() => {
      this.trigger('goToNextQuestion');
    }, 1000);
  },

  resetAnswer: function() {
    this.set('userAnswer', -1);
  }
});
