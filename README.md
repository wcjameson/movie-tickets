Describe priceOfAge();

Test: "It should return a modified price based on user input age"
Code: let newMovie = new Ticket("movie", "3:00", 10);
newMovie.priceOfAge();
Expected Output: 10

Describe matinee();

Test: "It should return price minus 2 if movie time is a 3:00pm matinee"
Code: let newMovie = new Ticket("Cars", "3:00pm", 55);
newMovie.matinee();
Expected Outcome: 10