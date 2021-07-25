'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
          numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMuvieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};


      

function rememberMyFilms(){
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
}


// rememberMyFilms();


     

      function detectPersonalLevel(){
        if (personalMuvieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
            console.log('Вы хороший зритель!');
        } else if (personalMuvieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Error');
        }
      }

    //   detectPersonalLevel();


      function showMyDB(hidden){
            if (!hidden){
                console.log(personalMuvieDB);
            }
      }

      showMyDB(personalMuvieDB.privat);


      function writeYourGenres() {
          for (let i=1; i <=3; i++){
              personalMuvieDB[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
          }
      }


      writeYourGenres();

      

