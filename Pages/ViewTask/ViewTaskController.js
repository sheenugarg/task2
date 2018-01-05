app.controller("ViewTaskCtrl", function($scope,ViewTaskService,LoginTokenService,$state,EditDetailsService) {
  $scope.alltasks=[];
  $scope.taskDeleted="";
  var mytoken=LoginTokenService.GetToken();
  $scope.ViewAllTasks=function()
  {
    var response=ViewTaskService.ViewAllTasks(mytoken);
    response.then(function(success){
      if(success.data.error==0)
      {
        $scope.alltasks=success.data.data;
      }
      else {
        $scope.View_Task_Messages=true;
        $scope.ViewTaskMessages="Error Occurred";
      }
    },function(error){
      $scope.View_Task_Messages=true;
      $scope.ViewTaskMessages="Error Occurred While Communicating To Server!!!";
    });
  }
  $scope.ViewAllTasks();
  $scope.GetTaskStatus=function(status)
  {
    if(status==true)
    {
      return "images/complete.jpg";
    }
    else {
      return "images/incomplete.png";
    }
  }
  $scope.GetClassOnTaskStatus=function(taskDate,taskStatus)
  {
    var today=new Date();
    taskDate=new Date(taskDate);
    if(taskStatus==true)
    {
      return "complete";
    }
    else if(today>taskDate)
    {
      return "overdue";
    }
    else {
      return "normal";
    }
  }
  $scope.ChangeTaskStatus=function(taskid)
  {
    var response=ViewTaskService.ChangeTaskStatus(mytoken,taskid);
    response.then(function(success){
      if(success.data.error==0)
      {
        $scope.View_Task_Messages=true;
        $scope.ViewTaskMessages=success.data.message;
        $scope.ViewAllTasks();
      }
      else {
        $scope.View_Task_Messages=true;
        $scope.ViewTaskMessages="Error occurred while updating task status";
      }
    },function(error){
      $scope.View_Task_Messages=true;
      $scope.ViewTaskMessages="Error occurred while updating task status..........Please Try again later";
    });
    ClearViewTaskMessages();
  }
  function ClearViewTaskMessages()
  {
    setTimeout(function(){
      $scope.View_Task_Messages=false;
      $scope.ViewTaskMessages="";
      $scope.ViewAllTasks();
      $scope.$apply();
    },2000);
  }
  $scope.EditTask=function(id,task)
  {
    EditDetailsService.AddDetails(id,task);
    $state.go('homepage.editTask');
  }
  $scope.DeleteTask=function(taskid)
  {
      $scope.taskDeleted=taskid;
  }
  $scope.ConfirmDeletion=function()
  {
    var response=ViewTaskService.DeleteTask(mytoken,$scope.taskDeleted);
    response.then(function(success){
      if(success.data.error==0)
      {
        $scope.ViewAllTasks();
      }
      else {
        alert("Error Occurred While Deleting Record");
      }
    },function(error){
      alert("Error Occurred....Please Try Again Later");
    });
  }
  $scope.CancelDeletion=function()
  {
    $scope.taskDeleted="";
    $scope.ViewAllTasks();
  }
});
