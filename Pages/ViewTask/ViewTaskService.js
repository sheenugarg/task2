app.service('ViewTaskService', function($http) {
  this.ViewAllTasks=function(mytoken)
  {
    return $http({
      method: 'GET',
      url: ipAddress+'/view_all_task',
      headers: {
        'Content-Type': "application/json",
        'access_token':mytoken
        }
    });
  }
  this.ChangeTaskStatus=function(mytoken,taskid)
  {
    return $http({
      method: 'GET',
      url: ipAddress+'/task_status',
      headers: {
        'Content-Type': "application/json",
        'access_token':mytoken,
        'task_id':taskid
      }
    });
  }
  this.DeleteTask=function(mytoken,taskid)
  {
    return $http({
      method: 'DELETE',
      url: ipAddress+'/delete',
      headers: {
        'Content-Type': "application/json",
        'access_token':mytoken,
        'task_id':taskid
        }
    });
  }
});
