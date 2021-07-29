'use strict';

const personalMuvieDB = {
count: 0,
movies: {},
actors: {},
genres: [],
privat: false,
start: function() {
    personalMuvieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMuvieDB.count == '' || personalMuvieDB.count == null || isNaN(personalMuvieDB.count)) {
        personalMuvieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
},

rememberMyFilms: function  (){
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
},

detectPersonalLevel: function(){
    if (personalMuvieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
        console.log('Вы хороший зритель!');
    } else if (personalMuvieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Error');
    }
  },

  showMyDB: function (hidden){
    if (!hidden){
        console.log(personalMuvieDB);
    }
},

togleVisibleMyDB: function(){
if (personalMuvieDB.privat) {
    (personalMuvieDB.privat) = false;
} else {
    (personalMuvieDB.privat) = true;
}

},

writeYourGenres: function() {
    for (let i=1; i <=3; i++){
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);

if (genre === '' || genre === null) {
console.log('Вы ввели некорректные данные');
i--;   
} else {
    personalMuvieDB[i - 1] = genre;
}
}

personalMuvieDB.genres.forEach((item, i) => {
console.log(`Любимый жанр ${i + 1} - это ${item}`);
});
}


};





      

