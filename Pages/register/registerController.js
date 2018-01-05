app.controller('registerCtrl',function($scope,$state,registerService){
  var email_valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  $scope.signup=function()
    {
      if($scope.user_email==undefined || $scope.user_email==null || email_valid.test($scope.user_email.toLowerCase())==false)
      {
        $scope.ValidateEmail=true;
        return;
      }
      if($scope.user_password==null || $scope.user_password==undefined)
      {
        $scope.ValidatePassword=true;
        return;
      }
      if($scope.user_confirm_password==null || $scope.user_confirm_password==undefined)
      {
        $scope.ValidateConfirmPassword=true;
        return;
      }
      if($scope.user_password!=$scope.user_confirm_password)
      {
        $scope.ValidateConfirmPassword=true;
        return;
      }
      var response=registerService.signup($scope.user_email,$scope.user_password,$scope.user_confirm_password);
      response.then(function(success){
        $scope.Register_Messages=true;
        $scope.RegisterMessages=success.data.message;
        setTimeout(function(){
          $state.go('mainpage_login');
        },1000);
      },function(err){
        $scope.Register_Messages=true;
        $scope.RegisterMessages=err.data.message;
      });
      clearRegistrationMessage();
    }
  function clearRegisterationFields()
  {
    $scope.user_email="";
    $scope.user_password="";
    $scope.user_confirm_password="";
  }
  function clearRegistrationMessage()
  {
    setTimeout(function(){
      $scope.RegisterMessages = '';
      $scope.Register_Messages=false;
      clearRegisterationFields();
      $scope.$apply();
    },3000);
  }
})
