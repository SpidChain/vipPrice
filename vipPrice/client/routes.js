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


FlowRouter.route('/claims', {
    action: function() {
        BlazeLayout.render("main", {content: "claims"});
    },
    name:"claims"
});
