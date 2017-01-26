var linecart = angular.module('app',[]);


linecart.controller('lineCtrl',['$scope','$http',function($scope,$http) {
    $http.get("https://year2016.herokuapp.com/terror").success(function(data){
        $scope.terror = data; 
        //console.log(data);
        var xElement = new Array();
        var yElement = new Array();
        for(var i=0; i<data.length; i++){
          //console.log(data[i].date);
          //console.log(data[i].num);
          xElement.push(data[i].date);
          yElement.push(data[i].num);
        }
        console.log(xElement);
        console.log(yElement);
      
        var ctx = document.getElementById("lineChart");
        var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: '# of Votes',
            data: yElement,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });

  
});
}]);


