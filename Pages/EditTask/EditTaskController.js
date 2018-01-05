app.controller('EditTaskCtrl',function($scope,$state,EditTaskService,EditDetailsService,LoginTokenService){
var obj=EditDetailsService.GetDetails();
var mytoken=LoginTokenService.GetToken();
$scope.EditTaskId=obj.id;
$scope.EditTaskName=obj.name;
$scope.UpdateTask=function()
  {
    if($scope.EditTaskNewName==null || $scope.EditTaskNewName==undefined|| $scope.EditTaskNewName=="")
    {
      $scope.ValidateNewName=true;
      return;
    }
    var response=EditTaskService.UpdateTask(mytoken,$scope.EditTaskId,$scope.EditTaskNewName);
    response.then(function(success){
      if(success.data.error==0)
      {
        $scope.Edit_Messages=true;
        $scope.EditMessages=success.data.message;
      }
      else {
        $scope.Edit_Messages=true;
        $scope.EditMessages="Error Occurred While Updating Task";
      }
    },function(error){
      $scope.Edit_Messages=true;
      $scope.EditMessages="Error Occurred While Updating Task....Try Again Later!!!";
    });
    ClearEditMessages();
  }
  function ClearEditMessages()
  {
    setTimeout(function(){
      $state.go('homepage.ViewAllTasks');
      $scope.Edit_Messages=false;
      $scope.EditMessages="";
      ClearEditFields();
      $scope.$apply();
    },2000);
  }
  function ClearEditFields()
  {
    $scope.EditTaskId="";
    $scope.EditTaskName="";
    $scope.EditTaskNewName="";
  }
})
