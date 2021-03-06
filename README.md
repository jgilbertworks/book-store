# book-store

Search and save books from the Google Books API

## Table of Contents 

## Objective 

This application requires at minimum 2 pages, check out the following mockup images for each page:

Search - User can search for books via the Google Books API and render them here. User has the option to “View” a book, bringing them to the book on Google Books, or “Save” a book, saving it to the Mongo database.

Saved - Renders all books saved to the Mongo database. User has an option to “View” the book, bringing them to the book on Google Books, or “Delete” a book, removing it from the Mongo database.

Start by using the 07-Ins_Mern example as a base for your application.

Add code to connect to a MongoDB database named googlebooks using the mongoose npm package.

Using mongoose, then create a Book schema.

At a minimum, books should have each of the following fields:

title - Title of the book from the Google Books API

authors - The books’s author(s) as returned from the Google Books API

description - The book’s description as returned from the Google Books API

image - The Book’s thumbnail image as returned from the Google Books API

link - The Book’s information link as returned from the Google Books API

Creating documents in your books collection similar to the following:

Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show your React components without changing the route within Express.
The layout should include at least two React Components for each page Search and Saved.

Feel free to try out alternative CSS framework to Bootstrap.

Add the following Express routes for your app:
/api/books (get) - Should return all saved books as JSON.

/api/books (post) - Will be used to save a new book to the database.

/api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.

* (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined.

Deploy your application to Heroku once complete. You must use Create React App and current versions of React and React-Router-Dom for this assignment.

### Technologies
Front-End
- [ ] HTML5
- [ ] CSS3/Grid
- [ ] React.js

Back-End
- [ ] Node.js
- [ ] Express.js
- [ ] MongoDB
- [ ] NPM Packages

### Setup 
```
1. git clone https://github.com/jgilbertworks/book-store.git
2. cd book-store in your terminal
3. npm run install
4. npm run start

```
### Requirements 
```
1. MongoDB 
2. Available Port:3000

```


