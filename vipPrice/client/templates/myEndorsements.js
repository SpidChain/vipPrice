Template.myEndorsements.helpers({
    endorsements: () => Meteor.user().profile.endorsements
})

Template.myEndorsements.events({
    'submit': (e) => {
        e.preventDefault()
        const sharedEndorsements = []
        const checked = document.querySelectorAll('input[name="endorsements"]:checked')
        for(let i = 0; i < checked.length; i ++) {
            sharedEndorsements.push(checked[i].value)
        }
        const endorsements = Meteor.user().profile.endorsements
        const newEndorsements =
            endorsements.map((e) => sharedEndorsements.indexOf(e.claim) !== -1
                ? {...e, share: true}
                : e
            )
        Meteor.users.update(Meteor.userId(), {$set: {'profile.endorsements': newEndorsements}})
    }
})