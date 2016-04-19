import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'

import { Rotas } from '../api/rotas';

Meteor.startup(() => {

  if (Rotas.find().count() === 0) {

    HTTP.call( 'GET', 'http://demo8987249.mockable.io/rotas', {}, function( error, response ) {
  if ( error ) {
    console.log( error );
  } else {
    console.log( response.content);


    /*
     This will return the HTTP response object that looks something like this:
     {
       content: "String of content...",
       data: [{
         "body": "The body of the post with the ID 5."
         "id": 5,
         "title": "The title of the post with the ID 5.",
         "userId": 1
       }],
       headers: {  Object containing HTTP response headers }
       statusCode: 200
     }
    */
  }
});


  }
});
