import claims from '/imports/claims'

Template.myEndorsements.helpers({
    endorsements: () => Meteor.user().profile.endorsements.filter((e) => e.share === undefined && e.result)
        .map((e) => {
            const endorser = Meteor.users.findOne(e.endorser)
            return {...e, name: endorser.profile.name, picture: endorser.profile.picture, statement: claims[e.claim]}
        })
})

Template.myEndorsements.events({
    'click i': (e) => {
        const claim = parseInt(e.target.getAttribute('data-claim'))
        const endorsements = Meteor.user().profile.endorsements
        const action = e.target.getAttribute('data-action')
        const share = action === 'share'
            ? true
            : false
        const newEndorsements =
            endorsements.map((e) => e.claim === claim
                ? {...e, share: share}
                : e
            )
        Meteor.users.update(Meteor.userId(), {$set: {'profile.endorsements': newEndorsements}})
    }
})