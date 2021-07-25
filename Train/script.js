'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMuvieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};


      for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?','');
              if (a!=null && b!=null && a!='' && b!='' && a.length <50) {
                personalMuvieDB.movies[a] =b;
                console.log('done');
              } else {
                  console.log('error');
                  i --;
              }       
      }
      if (personalMuvieDB.count < 10) {
          console.log('Просмотрено довольно мало фильмов');
      } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
          console.log('Вы хороший зритель!');
      } else if (personalMuvieDB.count >= 30) {
          console.log('Вы киноман!');
      } else {
          console.log('Error');
      }

      console.log(personalMuvieDB);

