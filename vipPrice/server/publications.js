import Notifications from '/imports/Notifications'

Meteor.publish('allUsers', () => {
  const allUsers = Meteor.users.find()
  return allUsers
})

Meteor.publish('notifications', () => Notifications.find())
