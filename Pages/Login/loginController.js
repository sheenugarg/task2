app.controller('loginctrl',function($scope,$state,loginService,LoginTokenService){
  var email_valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  $scope.login=function()
 {

   if($scope.login_email==undefined || $scope.login_email==null || email_valid.test($scope.login_email.toLowerCase())==false)
   {
     $scope.ValidateLoginEmail=true;
     return;
   }
   if($scope.login_password==null || $scope.login_password==undefined)
   {
     $scope.ValidateLoginPassword=true;
     return;
   }
   var response=loginService.login($scope.login_email,$scope.login_password);
   response.then(function(success){
     if(success.data.error==0)
     {
       //successfull
       $scope.Login_Messages=true;
       $scope.LoginMessages="Successfull Logged In";
       //localStorage.setItem("user_token",success.data.token);
       //location.assign("home.html");
       LoginTokenService.AddToken(success.data.token);
       setTimeout(function(){
         $state.go('homepage');
       },1000);
     }
     if(success.data.error==1)
     {
       //invalid
       $scope.Login_Messages=true;
       $scope.LoginMessages=success.data.message;
     }
   },function(err){
     $scope.Login_Messages=true;
     $scope.LoginMessages="Error Occurred In Communicating To Server";
   });
   ClearLoginMessages();
 }
 function clearLoginFields()
  {
    $scope.login_email="";
    $scope.login_password="";
  }
  function ClearLoginMessages()
  {
    setTimeout(function(){
      $scope.Login_Messages=false;
      $scope.LoginMessages="";
      clearLoginFields();
      $scope.$apply();
    },5000);
  }
})
