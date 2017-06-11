Template.endorseCard.events({
    'click': () => {
        FlowRouter.go('endorseUser', {id: Template.currentData()._id})
    }
})