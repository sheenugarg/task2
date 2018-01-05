app.config(function($stateProvider,$urlRouterProvider) {
/*
    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'Pages/register/register.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'Pages/Login/login.html'
        })
*/
$stateProvider
    .state('mainpage_login', {
      views: {
      'header': {
        templateUrl: 'Pages/header/header.html'
      },
      'body': {
        templateUrl: 'Pages/Login/login.html'
      }
    }
    })
    .state('mainpage_register', {
      views: {
        'header': {
          templateUrl: 'Pages/header/header.html'
        },
      'body': {
        templateUrl: 'Pages/register/register.html'
      }
    }
    })
    .state('homepage', {
      views: {
        'header': {
          templateUrl: 'Pages/header/header.html'
        },
      'body': {
        templateUrl: 'Pages/Homepage/homepage.html'
      }
    }
    })
    .state('homepage.AddTask', {
      templateUrl: 'Pages/AddTask/addTask.html'
    })
    .state('homepage.ViewAllTasks', {
      templateUrl: 'Pages/ViewTask/ViewTask.html'
    })
    .state('homepage.editTask', {
      templateUrl: 'Pages/EditTask/EditTask.html'
    })
})
