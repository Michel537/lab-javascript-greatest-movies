// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const allDirectors = moviesArray.map(function(name){
        return name.director;
   });   

   return allDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }


    const stevenDrama = moviesArray.filter(function(element){
        return (element.genre.includes("Drama") && element.director === "Steven Spielberg" )
    })

    return stevenDrama.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }

    let total = moviesArray.reduce(function(acc,cv){
        if( typeof cv.score !== "number" ){
            cv.score = 0;
        }

        return acc + cv.score;
    },0)

    return Math.round( (total/moviesArray.length)*100 )/100;
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(function(drama){
        return drama.genre.includes("Drama");
    }) 

    return this.scoresAverage(dramaMovies); 

    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = [...moviesArray];
    newArray.sort(function (a,b){        
        return a.year - b.year;
    })  
  

    return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const cloneArray = [...moviesArray];       
    const newArray = [];
    cloneArray.forEach(function (element, i){     
      if(i < 20){
        newArray.push(element.title);
      }        
      
    })    

   return newArray.sort();    
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
