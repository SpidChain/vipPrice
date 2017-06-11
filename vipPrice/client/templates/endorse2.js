const createEndorsements = (user) => [
  `A ${user} piacciono le automobili vintage`,
  `A ${user} andra in vacanza al mare quest'estate`,
  `${user} si sta per sposare`,
]

let i = 0
let n = 3

Template.endorse2.onCreated(function () {
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
  )
})

Template.endorse2.helpers({
  endorsement: function (){
    console.log(Template.instance())
    const e = Template.instance().endorsements[i]
    //n = (n + 1) % 3
    return e
  }
})


