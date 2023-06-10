📝 **NOTE** Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Week 1 Assignment: Flixster

Submitted by: **Maria Fernanda Palacios Martinez**

Estimated time spent: **20** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### Core Features

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### Stretch Features

- [ ] Deploy website using GitHub Pages.
- [ ] Allow user to view more details about a movie within a popup.
- [ ] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZO-yu8E5C34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Learning about connecting th html file to the java script file using the DOM was extremely helpful especially when it came to functions. For example, my button to load more movie options wouldn't stay under all the movies especially when I loaded more. To solve this I had to make sure all movies were treated as one HTML section to help the movie cards obtain a dynamic nature. All movie cards were treated as one once I define a grid in the HTML file and accessed it in the java script file using .querySelector.

Learning about the fetch was also very helpful as (essentially) it allowed me to use a very extensive list without having to explicitly write it into my file. Before we learned about API's in class, we wanted to make progress so we added a Fake API file that took up unecessary space. Fetch helped me use a list of 7k+ movies without taking up additional space!

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
A feature I would like to implement is displaying streaming service where you could find the movie.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Although I did not demo my project this week, I was not planning on my previous lack of js knowledge to interfere with my coding. I was very wrong as this made me have to put in extra research to make sure I wasn't mistaking a syntax error for a logical error.

Something a peer is doing is researching js using the https://javascript.info/ page. I would like to review this over the weekend as it would be productive to spend energy on the logic instead of the syntax.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Sammy, an instructor, was very helpful. He got me to find the right track for creating a button that would generate more movies without explicitly giving me the answer. Instead, he reminded me of tools that I may find helpful in it's creation. 