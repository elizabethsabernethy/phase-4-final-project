# Phase 4 Final Project: Off the Arts

This project utilized create-react-app to structure a basic react website, which I adjusted to meet the specific parameters for the app I wanted to create. I also forked and cloned a backend Ruby repository from the Flatiron school (https://github.com/learn-co-curriculum/project-template-react-rails-api) and added the required migrations and request routes in the application controller to allow an easy connection between the frontend and backend. Function-based components are the primary features of React which this app uses to create the optimal user experience. The backend utilizes Ruby on Rails to create enhanced functionality primarily through validations and serializers. 

## Purpose of Project

The purpose of this website is to act as a platform for users to post their paintings. Non-account holders are able to view the homepage, as well as the museums page, in which they are able to further view respective paintings and artists associated with the museums. The primary focus of the website however requires a user to have an account. Through having an account, a user can add paintings, edit their respective paintings, delete their paintings, and even add museums if their paintings are featured somewhere not already listed. 

## Prerequisites
### Ruby 2.7.4
Verify which version of Ruby you're running by entering this in the terminal:
```
$ ruby -v
```
Reccomended version is 2.7.4. If you need to upgrade you can install it using rvm:
```
$ rvm install 2.7.4 --default
```
You should also install the latest versions of `bundler` and `rails`:
```
$ gem install bundler
$ gem install rails
```
### NodeJS (v16), and npm
Verify you are running a recent version of Node with:
```
$ node -v
```
If your Node version is not 16.x.x, install it and set it as the current and default version with:
```
$ nvm install 16
$ nvm use 16
$ nvm alias default 16
```
You can also update your npm version with:
```
$ npm i -g npm
```
### Postgresql
#### WSL Install
To install Postgres for WSL, run the following commands from your Ubuntu terminal:
```
$ sudo apt update
$ sudo apt install postgresql postgresql-contrib libpq-dev
```
Then confirm that Postgres was installed successfully:
```
$ psql --version
```
Run this command to start the Postgres service:
```
$ sudo service postgresql start
```
Finally, you'll also need to create a database user so that you are able to connect to the database from Rails. First, check what your operating system username is:
```
$ whoami
```
If your username is "ian", for example, you'd need to create a Postgres user with that same name. To do so, run this command to open the Postgres CLI:
```
$ sudo -u postgres -i
```
From the Postgres CLI, run this command (replacing "ian" with your username):
```
$ createuser -sr ian
```
Then enter control + d or type logout to exit.

#### Postgresql Installation for OSX
To install Postgres for OSX, you can use Homebrew:
```
$ brew install postgresql
```
Once Postgres has been installed, run this command to start the Postgres service:
```
$ brew services start postgresql
```

## Functionality Walk-Through
When a user first enters the website, they will see the Off the Arts homepage. Here they are able to view the navigation bar which houses the home tab, the museums tab, and a button for users to login (or sign-up). As mentioned before, if not logged into an account, the only thing a user can do is interact with the featured museums.

![museum-gif](https://imgur.com/urDPPUy.gif)

Once they have viewed the respective artists, and paintings for whichever museums they desired, they may decide to sign-up or log into their account.

![signup-gif](https://imgur.com/xO0kvLU.gif)
![login-gif](https://imgur.com/u5ek5vH.gif)

Once logged in, a user is taken to their profile page. Here they can view their paintings, add paintings, and see the museums their paintings are currently featured in. Being logged in also allows users to add museums, if they navigate back to the museums page. Both adding a painting and a museum have similar functionality and are added without the need for a page refresh. The primary difference between paintings and museums, however, is the capability to edit and/or delete paintings. When a painting is added, edited, or deleted, these changes are reflected both in the user's profile, as well as the museum which houses the painting. 

![painting-gif](https://imgur.com/8jdr7ea.gif)

Once the user is finished with whatever they're doing, they can click the logout button, and they will return to the homepage.

![logout-gif](https://imgur.com/b4qCN9N.gif)

## Contributing
If you would like to contribute to this project, please check out this link and follow the steps!
https://docs.github.com/en/get-started/quickstart/contributing-to-projects

# Sources/ References

Youtube Walk-through: https://www.youtube.com/watch?v=f3qZ9PVQ0bE
