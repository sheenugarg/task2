app.controller('addTaskCtrl',function($scope,$state,LoginTokenService,CreateTaskService){
  var accesstoken=LoginTokenService.GetToken();
  $scope.AddTask=function()
  {
    if($scope.mytask==null || $scope.mytask==undefined || $scope.mytask=="")
    {
      $scope.ValidateTask=true;
      return;
    }
    if($scope.mytaskdate==null || $scope.mytaskdate==undefined || $scope.mytaskdate=="")
    {
      $scope.ValidateTaskDate=true;
      return;
    }
    var response=CreateTaskService.AddTask($scope.mytask,$scope.mytaskdate,accesstoken);
    response.then(function(success){
      if(success.data.error==0)
      {
        $scope.Add_Task_Message=true;
        $scope.AddTaskMessage=success.data.message;
      }
      else {
        $scope.Add_Task_Message=true;
        $scope.AddTaskMessage="error occurred while inserting Task";
      }
    },function(error){
      $scope.Add_Task_Message=true;
      $scope.AddTaskMessage="error occurred while inserting Task.....Please Try Again Later";
    });
    ClearCreateTaskMessage();
  }
  function AddTaskFields()
  {
    $scope.mytask="";
    $scope.mytaskdate="";
  }
  function ClearCreateTaskMessage()
  {
    setTimeout(function(){
      $scope.Add_Task_Message=false;
      $scope.AddTaskMessage="";
      AddTaskFields();
      $scope.$apply();
    },2000);
  }
})
