import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['game-answer-selector btn-block btn-lg'],
  classNameBindings: ['answerClass', 'questionsManager.isQuestionAnswered:disabled'],

  questionsManager: Ember.inject.service('questions-manager'),

  answerClass: Ember.computed('questionsManager.userAnswer', 'answer.id', 'answer.isCorrect', function() {
    const userAnswer = this.get('questionsManager.userAnswer');
    const id = this.get('answer.id');
    const isCorrect = this.get('answer.isCorrect');

    if (isCorrect && userAnswer !== -1) {
      return 'btn-success';
    }

    if (id === userAnswer) {
      return 'btn-danger';
    }

    return 'btn-primary';
  }),

  click: function() {
    const id = this.get('answer.id');
    const isCorrect = this.get('answer.isCorrect');
    this.get('questionsManager').answerQuestion(id, isCorrect);
  }
});
