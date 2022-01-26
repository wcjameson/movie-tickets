Describe priceOfAge();

* Test: "It should return a modified price based on user input age"
* Code: let newMovie = new Ticket("movie", "3:00", 10);
newMovie.priceOfAge();
* Expected Output: 10

Describe matinee();

* Test: "It should return price minus 2 if movie time is a 3:00pm matinee"
* Code: let newMovie = new Ticket("Cars", "3:00pm", 55);
newMovie.matinee();
* Expected Outcome: 10

* Test: "It shouldn't return price minus 2 if movie time isn't a 3:00pm matinee"
* Code: let newMovie = new Ticket("Cars", "4:00pm", 55);
newMovie.matinee();
* Expected Outcome: 12


Describe priceOfMovie();

* Test: "It should subtract 2 from price if movie = "Cars"
* Code: Let newMovie = new Ticket("Cars", "3:00pm", 55);
newMovie.matinee();
* Expected Outcome: 10

* Test: "It shouldn't subtract 2 from price if movie isn't "Cars"
* Code: Let newMovie = new Ticket("Cars", "3:00pm", 55);
newMovie.matinee();
* Expected Outcome: 12