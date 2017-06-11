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

FlowRouter.route('/endorse', {
    action: function() {
        BlazeLayout.render("main", {content: "endorse"});
    },
    name:"endorse"
});

FlowRouter.route('/endorse/:id', {
    action: function() {
        BlazeLayout.render("main", {content: "endorse2"});
    },
    name:"endorseUser"
});

FlowRouter.route('/myEndorsements', {
    action: function() {
        BlazeLayout.render("main", {content: "myEndorsements"});
    },
    name: 'myEndorsements'
});
FlowRouter.route('/endorse2', {
    action: function() {
        BlazeLayout.render("main", {content: "endorse2"});
    },
    name: 'endorse2'
});
