import claims from '/imports/claims'
import Notifications from '/imports/Notifications'


const createEndorsements = (user) => [
  `A ${user} piacciono le automobili vintage`,
  `A ${user} andra in vacanza al mare quest'estate`,
  `${user} si sta per sposare`,
]

Template.endorse2.onCreated(function () {
    this.claimNo = new ReactiveVar(0)
    /*
  this.autorun(() => {
    if( this.subscriptionsReady()) {
      if(Meteor.user()) {
      console.log("subscriptionsready")
      console.log("Meteor.user()", Meteor.user())
      const endorser = Meteor.user().profile.endorser
      if(endorser) {
      console.log("endorser is", endorser)
      const endorserName = Meteor.users.findOne(endorser).profile.name
      const endorsements = createEndorsements(endorserName)
      console.log(endorsements)
      this.endorsements = endorsements
      }
      }
    }
  }
  )*/
})

Template.endorse2.events({
    'click button': (e, t) => {
        const userId = FlowRouter.getParam('id')
        const user = Meteor.users.findOne(userId)
        const endorsements = user.profile.endorsements || []
        const claims = endorsements.map(e => e.claim)
        const claimNo = t.claimNo.get()
        const action = e.target.getAttribute('name')
        if (action !== 'skip') {
            const bool = action === 'yes' ? true : false
            if (claims.indexOf(claimNo) === -1) {
                endorsements.push({
                    claim: claimNo,
                    endorser: Meteor.userId(),
                    result: bool
                })
            }

            console.log("endorsements");
            console.log(endorsements);

            const notification = Notifications.findOne({endorser: Meteor.userId(), requester: userId})
            if (notification) {
                Notifications.remove(notification._id)
            }
            Meteor.users.update(userId, {$set: {'profile.endorsements': endorsements}})
        }
        console.log(claims.length);
        console.log((claimNo + 1) % claims.length);
        t.claimNo.set((claimNo + 1) % claims.length)
        if (claimNo === 2) {
            FlowRouter.go('home')
        }
    }
})

Template.endorse2.helpers({
    user: () => {
        const userId = FlowRouter.getParam('id')
        return Meteor.users.findOne(userId)
    },

    claim: () => claims[Template.instance().claimNo.get()],
    /*
  endorsement: function (){
    console.log(Template.instance())
    const e = Template.instance().endorsements[i]
    //n = (n + 1) % 3
    return e
}*/
})
