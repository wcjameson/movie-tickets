function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = 12;
}

Ticket.prototype.priceOfAge = function() {
  if (this.age <= 12) {
    return this.price -= 2;
  }
  else if (this.age > 12 && this.age < 18) {
    return this.price -= 1;
  }
  else if (this.age >= 55) {
    return this.price -= 6;
  }
  else return this.price;
}

Ticket.prototype.matinee = function() {
  if (this.time === "3:00pm") {
    return this.price -= 2;
  }
  else return this.price;
}

Ticket.prototype.priceOfMovie = function() {
  if (this.movie === "Cars") {
    return this.price -= 2;
  }
  else return this.price;
}


