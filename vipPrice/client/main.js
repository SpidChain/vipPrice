import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Notifications from '/imports/Notifications'

Bert.defaults.style = 'growl-top-right'

Tracker.autorun(() => {
    const userId = Meteor.userId()
    if (userId) {
        const requests = Notifications.find({'endorser': userId})
        requests.forEach((r) => {
            const requester = Meteor.users.findOne(r.requester)
            if (requester) {
                Bert.alert({
                    title: requester.profile.name + ' is requesting your endorsement',
                    type: 'info'
                })
            }
        })
    }
})