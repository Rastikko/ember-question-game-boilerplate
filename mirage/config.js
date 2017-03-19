export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  // this.namespace = 'api';

  this.get('/levels');
  this.get('/questions');
  this.get('/answers');

  this.get('/levels/:id');
  this.get('/questions/:id');
  this.get('/answers/:id');

  // this.get('levels/:id', (schema, request) => {
  //   // this.namespace = 'api';
  //   console.log('AAAAAAAAAAAAAA', schema, request)
  //   return {id: 1, title: 'Epona'};
  //   ;
  // });
}
