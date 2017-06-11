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

            Meteor.users.update(Meteor.userId(), {$set: {'profile.endorser': checked.value}})
        }
    }
})
