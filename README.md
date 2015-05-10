## Website Performance Optimization portfolio project

To begin the website, open the index.html file using a web browser. The home screen should display a profile image with info and a welcome message along with four links to other pages.

The first link routes to a page dedicated to builing your own 2048. This page shows an image with a brief description of what the image shows, as well as some bacon ipsum at the bottom of the page.

The second link routes to a page dedicated to those who have taken the web performance optimization class. There is a message thanking those who have taken it and a meme of the course creator, as well as some bacon ipsum at the bottom of the page.

The third link routes to a page dedicated to mobile web development. There is a message encouraging others to take a mobile web development class and an image, as well as some bacon ipsum over top and underneath the image.

The fourth link routes to Cam's Pizzeria webpage. This is the home page of this place of business, and it contains interactive functionalities, such as moving pizzas in the background, resizeable pizzas on the seleciton menu, and links that direct to different sections of the page.

For the index.html file, several changes were made in order to avoid render blocking and increase page speed. The entire style.css file was inlined. Also, the call for the web fonts was moved to the bottom of the screen. In addition, an async was added to all .js files.

For the pizza.html file, several changes were made within the main.js file in order to reach a load speed of 60 fps. In the changePizzaSizes() function, two variables were placed on the outside of a "for" loop to avoid unnecessary run time for those particular variables. The same was done with the elements of a variable within the updatePositions() funciton that were being redefined as the same exact value for every loop iteration; certain elements of the variable "elem" were placed outside of the "for" loop. Within that same "for" loop, a variable "newelem" was cloned for each iteration, so that every single clone could be drawn on the screen. Also, the document.querySelectorAll() function was replaced throughout the entire code with the function call document.getElementsByClassName() to increase access speed to the DOM elements; when each was replaced the period in front of the argument was removed, since this was not needed.

P.S. All added comments are in all caps.

