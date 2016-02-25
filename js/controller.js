angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService){
  if(localStorageService.get("angular-todolist")){
    $scope.todo = localStorageService.get("angular-todolist");
  }
  else {
    $scope.todo = [];
  }
  /*
    {
      descripcion: 'Terminar el curso angular',
      fecha: '3-03-16 2:00pm'
    }
  */
  $scope.$watchCollection('todo',function(newValue,oldValue) {
    localStorageService.set("angular-todolist",$scope.todo);
  })
  $scope.addActv = function(){
    $scope.todo.push($scope.newActv);
    $scope.newActv = {};
    localStorageService.set("angular-todolist",$scope.todo);
  }
  $scope.clean = function(){
    $scope.todo = []

  }
});
