import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }


  getBooks() {
    return [

        {
          name: "Clean Code",
          author: "Robert C Martin",
          image: "https://m.media-amazon.com/images/I/41xShlnTZTL._AC_SY780_.jpg",
          amount: 700
        },
        {

          name: "Pragmatic Programmer",
          author: "David Tomas",
          image: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
          amount: 700
        },
        {

          name: "Art of Computer Programming",
          author: "Donalad E.KNUTH",
          image: "https://images-na.ssl-images-amazon.com/images/I/41msKv2oN9L._AC_UL600_SR600,600_.jpg",
          amount: 700
        },
        {

          name: "Art of Computer Programming",
          author: "CHARLES E.LEISRSON",
          image: "https://m.media-amazon.com/images/I/41SNoh5ZhOL._AC_SY780_.jpg",
          amount: 700
        },
      ];
  }
}

