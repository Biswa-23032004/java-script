// let an examples of filter() to see how does it work

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // if user wish to read   books of genre History
  
  let userbooks = books.filter( (bok) => bok.genre === 'History')
   console.log(userbooks);
   /*
   [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
   */

//  user want to see the book publish after 2000

userbooks = books.filter( (bok) => {
    return bok.publish >= 2000
} )
// make sure use return element while scope id open.
console.log(userbooks);
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/

//while user want see the books of genre history and also publish after 1995

userbooks = books.filter( (bok) => {
    return bok.genre === 'History' && bok.publish >= 1995
} )

console.log(userbooks);

/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/