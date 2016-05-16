myApp.controller('ListController', function($scope, $http, $filter){
	$http.get('js/data/user.json').success(function (data){
		$scope.users = data;
	});

    $scope.addUser = function(){

		if($scope.isUserExist() instanceof Array  && $scope.isUserExist()[0] == true) {
			alert("This user id already exist!!");
		}
		else {
			$scope.users.push({ id:$scope.userID, forename:$scope.userForename, surname:$scope.userSurname, email:$scope.userEmail, created:  $scope.getTimeStamp() });
		}
		
    },
	
	
   $scope.deleteUser = function (userId) {
	   
       $scope.users.splice(userId, 1);
	   
    },
	
	
	$scope.updateUser = function(){
		
		if($scope.isUserExist() instanceof Array  && $scope.isUserExist()[0] == true) {
			$scope.users[$scope.isUserExist()[1]].surname =  $scope.userSurname;
			$scope.users[$scope.isUserExist()[1]].email =  $scope.userEmail;
			$scope.users[$scope.isUserExist()[1]].created =  $scope.getTimeStamp();
		}
		else {
			alert("There is no user details with this id!!");
		}
		
	},
	
	
	$scope.isUserExist = function(){
		
         for (var i = 0; i < $scope.users.length; i++) {
             if($scope.users[i].id == $scope.userID) {
				  return a = [true, i];
				  break;
             }
         }
		 
    },
    
    $scope.getTotalUsers    =   function(){
		
        return $scope.users.length;
		    
    },
	
	
	$scope.getTimeStamp = function() {
		
			var date = new Date();
			return $filter('date')(new Date(),'MM dd yyyy - HH:mm:ss','UTC/GMT');

	}
        

    
});

