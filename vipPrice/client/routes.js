FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("website", {content: "home"});
    },
    name:"home"
});

