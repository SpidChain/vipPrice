import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  //used to test users publications
  /*
  if(! Meteor.users || Meteor.users.find().count() < 2) {
    Accounts.createUser({username: "ciro", password: "xxxxxx"})
    Accounts.createUser({username: "lorenzo", password: "xxxxxx"})
    Accounts.createUser({username: "duccio", password: "xxxxxx"})
  }
  */
});

Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
    }
    return user;
});

Meteor.users.allow({
    update: () => true
})