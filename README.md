# Gofore - books app challenge 

# What is this?
This app lets users
1. search for books by searching for a title,
2. view the results as grid or list,
3. view 10, 20, 50 books per page,
4. enhance thumbnail to fullsize image by clicking on it,
5. use mobile or desktop. 


# How to setup the project
Start this project by typing: "npm start", 
Then open localhost:3000 in your browser.


# Libraries / Frameworks / Tools used
- React
- ReactPaginate
- written in Node v.16.13.1 with some ES6 syntax


# Decisions
1. Functional components were used for better code readability and easily structured component seperation.
2. A component in this project needs to have its own function, compared to elements who only increase reusability by abstracting them plus increase readability but don't necessarily have their own function.  


# If this was a bigger project
Had this been a production level project, I would have
1. done unit tests,
2. changed architecture to prevent props drilling,
3. used Firebase to make a login feature so books can be saved for later reading,
4. maybe used Gatsby do increase speed
5. Added a footer with GDPR compliant Data Protection Info