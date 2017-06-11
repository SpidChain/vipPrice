import Notifications from '/imports/Notifications'

Template.inviteFriends.onCreated(() => {
    Template.instance().subscribe('notifications')
})

Template.inviteFriends.helpers({
/*
$and: [
  {'_id': { $ne : Meteor.userId() }},
  {    'profile.endorsement': {  $not: { $elemMatch :{endorser: Meteor.userId()} }  }    }
]
*/
   users: () => Meteor.users.find(
    {'_id': { $ne : Meteor.userId() }}
  ),

   usersCount: () => {
     var count = Meteor.users.find( {'_id': {$ne : Meteor.userId() }} ).count()
     console.log(count);
     return count
   }
})

Template.inviteFriends.events({
  'click .list-group-item':   (e,t) => {
    console.log(e.target.id);
    $("#" + e.target.id + " .form-check-input").removeAttr('checked');

    $("#" + e.target.id + " .form-check-input").prop("checked", true)
    $(".list-group-item").removeClass("selected")
    $("#" + e.target.id).addClass("selected")

    //$("#radio_1").prop("checked", true)
    //console.log(t);
  },
  'change .form-check-input':  (e,t) => {
    //$(".profileImageList").addClass("selected")
    $(".list-group-item").removeClass("selected")
    const checked = document.querySelector('input[name="users"]:checked').value
    console.log("change .list-group-item: ");
    console.log(checked);
    $("#label_" + checked).addClass("selected")



},
    'submit': (e) => {
        e.preventDefault()
        const checked = document.querySelector('input[name="users"]:checked')
        console.log(checked);
        if (checked) {
            Meteor.users.update( Meteor.userId(), { $set: { 'profile.endorsements':[] } } )

            Meteor.users.update(Meteor.userId(), {$set: {'profile.endorser': checked.value}})
            console.log("id: " + checked.value);
            console.log({requester: Meteor.userId()});
            Notifications.insert({endorser: checked.value, requester: Meteor.userId()})


        }
    }
})
