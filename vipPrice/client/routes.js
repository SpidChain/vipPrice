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

<<<<<<< HEAD

FlowRouter.route('/claims', {
    action: function() {
        BlazeLayout.render("main", {content: "claims"});
    },
    name:"claims"
=======
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

FlowRouter.route('/myEndorsements', {
    action: function() {
        BlazeLayout.render("main", {content: "myEndorsements"});
    },
    name: 'myEndorsements'
>>>>>>> ffc34e7135293d66ef2de4a0dbca7c23941b23f5
});
