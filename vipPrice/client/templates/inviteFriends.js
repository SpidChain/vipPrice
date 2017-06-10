import Notifications from '/imports/Notifications'

Template.inviteFriends.onCreated(() => {
    Template.instance().subscribe('notifications')
})

Template.inviteFriends.helpers({
   users: () => Meteor.users.find()
})

Template.inviteFriends.events({
    'submit': (e) => {
        e.preventDefault()
        const checked = document.querySelector('input[name="users"]:checked')
        if (checked) {
            console.log({requester: Meteor.userId()});
            Notifications.insert({endorser: checked.value, requester: Meteor.userId()})
        }
    }
})
