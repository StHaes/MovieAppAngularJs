/**
 * Created by jeansmits on 26/06/15.
 */
function searchCtrl($scope,$http,apiUrl,$log,$location){
    $scope.message = "Hello world";
    $scope.searchMovie=function(title){
        $log.debug(title);
        var url = apiUrl +'Movies/search?title='+title;
        $http.get(url).success(function(data){
           $scope.results =data;
           $log.debug(data);
        });
    $scope.selectMovie =function(id) {
            $scope.selectedId = id;
        };
    $scope.addMovie=function(id){
        var url = apiUrl +'Movies/'+ id;
        $http.post(url).success(function(){
            $location.url('/collection');
        });
    }
    $log.debug('Run');
    }

}

angular.module('movieApp.controllers')
    .controller('searchCtrl', searchCtrl);


