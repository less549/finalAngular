'use strict';

angular.module('ChModule')
.controller('ChallengerController' , ['$scope', '$interval','$location', function($scope, $interval, $location){

  var challenge = [];
  
  challenge.push({

    detail: new Challenge({
      name: "winterChallenge",
      title: "Winter Challenge",
      description: "It's that time of the year to get cozy and draw a lot!",
      image: "img/winter.png",
      procedure: ".",
    }),
    
  });

  challenge.push({
    detail: new Challenge({
      name: "holidays",
      title: "Holidays",
      description: "The end of the year is near! Celebrate it with our community, and share your drawings to the whole world!",
      image: "img/holidays.png",
      procedure: ".",
    }),
      
  });


 function Challenge(args) {
          this.name = args.name;
          this.title = args.title;
          this.description = args.description;
          this.image = args.image;
          this.related = {};
          this.procedure = args.procedure;
      }

$scope.$watch('currentExerciseDuration', function(arg1){
  
        if (arg1 == $scope.currentExercise.duration){
            startExercise(exercise.shift());
            numberExercise++;
        }

   })
  var startExercise = function (exercisePlan) {

    if(exercise.length >= numberExercise){
      $scope.currentExercise = exercisePlan;
      $scope.currentExerciseDuration = 0;
      $interval(function(){
        ++$scope.currentExerciseDuration;

      },1000, $scope.currentExercise.duration);
    }else{
        $location.path('/finish');
      }

    
    
   }
      startExercise(exercise.shift());
}]);

/* all funcion */
/* beginner funcion */
/* season funcion */
/* random funcion */
