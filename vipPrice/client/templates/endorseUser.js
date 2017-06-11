import Notifications from '/imports/Notifications'

const claims = [
    'Sa giocare a tennis',
    'Va in barca a vela',
    'Sa andare a cavallo'
]

Template.endorseUser.onCreated(() => {
    Template.instance().subscribe('notifications')
})

Template.endorseUser.helpers({
    id: () => FlowRouter.getParam('id'),
    claims: () => claims
})

Template.endorseUser.events({
    'submit': (e) => {
        e.preventDefault()
        const endorsements = []
        const userId = FlowRouter.getParam('id')
        const checked = document.querySelectorAll('input[name="claims"]:checked')
        for(let i = 0; i < checked.length; i ++) {
            endorsements.push({
                claim: checked[i].value,
                endorser: Meteor.userId(),
                share: false
            })
        }
        const notification = Notifications.findOne({endorser: Meteor.userId(), requester: userId})
        if (notification) {
            Notifications.remove(notification._id)
        }
        Meteor.users.update(userId, {
            $set: {'profile.endorsements': endorsements}
        })
    }
})