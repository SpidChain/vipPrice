import Notifications from '/imports/Notifications'

Template.inviteFriends.onCreated(() => {
    Template.instance().subscribe('notifications')
})

Template.inviteFriends.helpers({
   users: () => Meteor.users.find()
})

Template.inviteFriends.events({
  'change .form-check-input':  (e,t) => {
    //$(".profileImageList").addClass("selected")
  },
    'submit': (e) => {
        e.preventDefault()
        const checked = document.querySelector('input[name="users"]:checked')
        if (checked) {
<<<<<<< HEAD

            Meteor.users.update(Meteor.userId(), {$set: {'profile.endorser': checked.value}})
=======
            console.log({requester: Meteor.userId()});
            Notifications.insert({endorser: checked.value, requester: Meteor.userId()})
>>>>>>> ffc34e7135293d66ef2de4a0dbca7c23941b23f5
        }
    }
})