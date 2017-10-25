# Bucket List - Client

## About the application:
This is an application where you can list the things you want to do the most, the experiences you want to encounter, the adventures you want to experience and all the things you want to do to live life to the fullest.

To use the app, you'll need to sign up to create an account and then sign in to start your list.  All you have to do is start entering items and click the "Drop In the Bucket" button to add and save them to your list.

You can also edit and delete items you've added.

## Links
Bucket List Application: https://jago425.github.io/bucket-list-client/
Bucket List API Repo: https://github.com/jago425/jagos-bucket-list-api
Deployed API: https://fathomless-lake-16939.herokuapp.com/

## Technologies Used
* HTML
* CSS
* Bootstrap
* JQuery
* Handlebars
* JavaScript

## Future Enhancements/Fixes
* Change the item_description input field so it can handle more text
* Update to allow a checkbox column to mark items as being completed
* Update to allow goal dates along with notifications when date is nearing
* Add the ability to create other lists such as "My Favorite Things" and "Resolutions"
* Add the ability to filter list items as the user wishes
* Refactor the app to be mobile-friendly
* Refactor code to be more organized
* Upload photo capability
* Integrate with or link out to travel sites, adventure sites, etc.
* Enhance authentication process to be more seamless

## Planning and Development Process
I started out determining the scope of my MVP and came up with an ERD (attached in Bucket List API Repo).  Then devised my user stories and wrote out a project plan.  I wanted to use Trello to build a sprint board but I couldn't break out tasks by user stories and also have swim lanes so I went basic and wrote out my user stories and tasks in Excel.  Each tab was an epic.  This ended up being a nice document to have (albeit tedious) because I also used to it log defects as well as keep track of my progress.

While setting up my resource and the API, I was on schedule.  I was also on schedule when setting up authentication. However, once I began working on the client for the list itself, I had a lot of trouble.  This was mostly due to not having tasked out my user stories well enough in addition to not being able to figure out a design that would work while being simple enough for me (a novice) to be able to work out.  I even ended up needing to remove a column from my resource because I couldn't figure out how to reconcile it on the client.

My biggest struggles were figuring out how to use Handlebars and dealing with Bootstrap modals.  The UPDATE functionality on the list itself took me almost 3 days due to issues with the edit modal.  I referenced application documentation, online forums and reached out to fellow developers when I hit problems I just couldn't figure out as well as to troubleshoot when using elements like modals and a navigation bar for the first time.

### My most important learnings:
* take the time to think through tasks and methodically plan
* stay organized
* slow down and do one thing at a time


### Link to project plan: https://drive.google.com/open?id=0B2kD4C7RUmLsbmxFSzZZVHQ4NWc

## User Stories
### Authentication
#### As a user...
1. I need to be able to sign up
2. I need to be able to sign in
3. I need to be able to sign out
4. I need to be able to change my password
5. I need to see feedback when my sign up is successful
6. I need to see feedback when my sign up has failed
7. I need to see feedback when my sign in is successful
8. I need to see feedback when my sign in has failed
9. I need to see feedback when my change password is successful
10. I need to see feedback when my change password has failed
11. I need to see feedback when my sign-out is successful
12. I need to see feedback when my sign-out has failed
13. I cannot create multiple accounts with the same username

### Session State
#### As a user...
1. After I sign-in successfully, I don't want to see the sign-up or sign-in fields anymore
2. After I sign out successfully, I only want to see the sign-in and sign-up fields.
3. If I'm a newly created user, I want to see an empty list after I sign in.
4. If I'm a returning user, I want to see my list in the same state as I left it when I last logged out.

### List
#### As a user...
1. I want to create a new list if I don't have one
2. I want to add items to my list
3. I want to delete items from my list
4. I want changes I make to my list to persist
5. I want to be able to edit items on my list
6. I want to be able to check off items on my list if I've completed them
7. I don't want other users to be able to see my list

## Wireframes

https://i.imgur.com/nv4qAiH.jpg
