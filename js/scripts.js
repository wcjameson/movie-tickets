function Ticket() {
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.age = age;
  this.price = 12;
}

Ticket.prototype.priceOfAge = function(age) {
  if (this.age <= 12) {
    return this.price -= 2;
  }
  else if (this.age > 12 || this.age < 18) {
    return this.price -= 1;
  }
  else if (this.age >= 55) {
    return this.price -= 6;
  }
  else return this.price;
}

Ticket.prototype.priceOfTime = function(time) {
  if (this.time  )
}

Ticket.prototype.priceOfMovie = function(movie) {

}