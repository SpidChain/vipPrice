Meteor.users.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});


Meteor.users.deny({
  insert() { return false; },
  update() { return false; },
  remove() { return false; },
});
