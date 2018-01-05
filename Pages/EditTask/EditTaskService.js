app.service('EditTaskService',function($http){
  this.UpdateTask=function(mytoken,taskid,taskname)
  {
      return $http({
        method: 'POST',
        url: ipAddress+'/edit_task',
        headers: {
          'Content-Type': "application/json",
          'access_token':mytoken,
          'task_id':taskid
          },
        data: { task:taskname}
      });
  }
})
