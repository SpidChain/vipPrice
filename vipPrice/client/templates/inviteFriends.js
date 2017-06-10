Template.inviteFriends.helpers({
   users: () => Meteor.users.find()
})

Template.inviteFriends.events({
    'submit': (e) => {
        e.preventDefault()
        const checked = document.querySelector('input[name="users"]:checked')
        if (checked) {
            console.log(checked.value);
        }
    }
})
