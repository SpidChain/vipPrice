Meteor.users.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});


Metor.users.deny({
  insert() { return false; },
  update() { return false; },
  remove() { return false; },
});
