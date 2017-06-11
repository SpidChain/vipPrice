import Notifications from '/imports/Notifications'

Template.endorse.onCreated(() => {
    Template.instance().subscribe('notifications')
})

Template.endorse.helpers({
    requests: () => {
        const userId = Meteor.userId()
        if (userId) {
            const requests = Notifications.find({'endorser': userId}).fetch()
            return requests.map((r) => Meteor.users.findOne(r.requester))
        }
    }
})