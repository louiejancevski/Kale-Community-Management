## Kale Community Management
- Built using the MongoDB, NodeJs, ExpressJS, and ReactJs.
- Made use of the Github API to display the 5 latest repositories of any users that inputs their github username
- JWT authentication
- Redux for state management
- Axios for sending requests to the backend
- Gravatar, Bycrypt, etc.
- Version 2.0

## URL / Live version
To use the live demo of this app:
- [kales.herokuapp.com](https://kales.herokuapp.com)

## About this project
The main idea is to have an easy way to create small communities around your interests.

Users are able to:

- Create an account and a profile
- Write posts
- Like and comment on those same posts
- Delete their comments, unlike posts, and also completely delete those posts as well
- They can create discussions
- Visit other profiles 
- Delete their accounts
- And much more...

## Taking a closer look

You will be welcomed with this simple landing page, in which you can either register or login.

![](https://github.com/louiejancevski/Kale-Community-Management/blob/master/screenshots/landing.png)

For demonstration purposes, you login credentials will be filled out automatically for you to use the demo account.

In that smae demo account you will be granted access to all the private routes that need users to be authenticated.

![](https://github.com/louiejancevski/Kale-Community-Management/blob/master/screenshots/login.png)

![](https://github.com/louiejancevski/Kale-Community-Management/blob/master/screenshots/register.png)

Once you click on login, you will be taken to the dashboard.

It will look something like this:

![](https://github.com/louiejancevski/Kale-Community-Management/blob/master/screenshots/dashboard.png)

Or like this, if no profile has been created for your account yet.

![](https://github.com/louiejancevski/Kale-Community-Management/blob/master/screenshots/no-profile.png)

You can play around with it, but essentially, these will be the main functionalities.

You can create posts:

![](https://github.com/louiejancevski/Kale-Community-Management/blob/master/screenshots/create-post.png)

Each post will have a title and the post content itself.

After a post is created, they will appear below the "write a post" form, like this:

![](https://github.com/louiejancevski/Kale-Community-Management/blob/master/screenshots/posts.png)

In case the user does not have a profile, they can create one very easily on this page.

![](https://github.com/louiejancevski/Kale-Community-Management/blob/master/screenshots/profile-form.png)

They will be asked basic information about themselves, but only two inputs are required. 

- Skills
- Professional Status

All user profiles will then be displayed on this page: 

![](https://github.com/louiejancevski/Kale-Community-Management/blob/master/screenshots/profiles.png)

Which you can use to visit individual profiles. 

Finally, you can also delete your account as well.

![](https://github.com/louiejancevski/Kale-Community-Management/blob/master/screenshots/delete-account.png)

Also, if not route matches the one you're looking for, you get presented with a nice 404 page.

![](https://github.com/louiejancevski/Kale-Community-Management/blob/master/screenshots/404.png)

## Browsers support

Tested the app in these browsers:

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last version| last version| last version| last version| last version| last version


