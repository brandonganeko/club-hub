import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});


FlowRouter.route('/add-contact', {
  name: 'Add_Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Contact_Page' });
  },
});

FlowRouter.route('/edit-contact/:_id', {
  name: 'Edit_Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Contact_Page' });
  },
});

FlowRouter.route('/clubs-page', {
  name: 'Clubs_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Clubs_Page' });
  },
});

FlowRouter.route('/create-club-page', {
  name: 'Create_Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Create_Club_Page' });
  },
});

FlowRouter.route('/login-page', {
  name: 'Login_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Login_Page' });
  },
});

FlowRouter.route('/profile-page', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.route('/register-page', {
  name: 'Register_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Register_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
