FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("main", {content: "home"});
    },
    name:"home"
});
