Meteor.publish('allUsers', () => {
  const allUsers = Meteor.users.find()
  return allUsers
})
