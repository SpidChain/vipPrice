FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("main", {content: "home"});
    },
    name:"home"
});


FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render("main", {content: "login"});
    },
    name:"login"
});

//inviteFriends
FlowRouter.route('/inviteFriends', {
    action: function() {
        BlazeLayout.render("main", {content: "inviteFriends"});
    },
    name:"inviteFriends"
});

FlowRouter.route('/endorse', {
    action: function() {
        BlazeLayout.render("main", {content: "endorse"});
    },
    name:"endorse"
});

FlowRouter.route('/endorse/:id', {
    action: function() {
        BlazeLayout.render("main", {content: "endorseUser"});
    },
    name:"endorseUser"
});
