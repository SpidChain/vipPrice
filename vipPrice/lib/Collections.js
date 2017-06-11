Meteor.users.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});


Lists.deny({
  insert() { return false; },
  update() { return false; },
  remove() { return false; },
});
