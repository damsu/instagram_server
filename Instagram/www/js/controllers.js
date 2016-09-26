angular.module('starter.controllers', [])
angular.module('starter')




//.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

//  $scope.chats = Chats.all();
//  $scope.remove = function(chat) {
//    Chats.remove(chat);
//  };
//})

    .controller('HomeCtrl', function ($scope, $stateParams, Users, Pictures) {
        $scope.some_model = {
            title: 'Thing One',
            liked: false,
        };
        $scope.users = Users.get($stateParams.userId);
        $scope.allusers = Users.all();
        $scope.pictures = Pictures.all();
        $scope.remove = function (picture) {
            Chats.remove(picture);
        };
    })

    .controller('SearchCtrl', function ($scope, Users) {
        $scope.allusers = Users.all();
    })

//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})

.controller('AccountCtrl', function($scope, Pictures) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.pictures = Pictures.all();
})

.controller('FollowersCtrl', function ($scope, $stateParams, Users) {
   
    $scope.users = Users.get($stateParams.userId);
    $scope.allusers = Users.all();
})

    .controller('CameraCtrl', function ($scope) { })


    .controller('NewsCtrl', function ($scope, Users) {
        $scope.allusers = Users.all();
    })


.controller('FollowingCtrl', function ($scope, $stateParams, Users) {
   
    $scope.users = Users.get($stateParams.userId);
    $scope.allusers = Users.all();
})

.controller('UsersCtrl', function ($scope, $stateParams, Users, Pictures) {

    $scope.users = Users.get($stateParams.userId);
    $scope.allusers = Users.all();
    $scope.pictures = Pictures.all();
})

.controller('PicturesCtrl', function ($scope, $stateParams, Users, Pictures) {

    $scope.users = Users.get($stateParams.userId);
    $scope.allusers = Users.all();
    $scope.pictures = Pictures.get($stateParams.pictureId);
});
