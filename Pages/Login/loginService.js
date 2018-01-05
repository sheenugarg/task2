app.service('loginService', function($http) {
  this.login=function(email,password)
  {
    return $http
    ({
      method: 'POST',
      url: ipAddress+'/login',
      headers: {
        'Content-Type': "application/json"
        },
      data: { email: email,password:password}
    });

  }
});
