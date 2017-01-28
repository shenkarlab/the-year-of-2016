var firstWeek = angular.module('MEH',['ngRoute']);


firstWeek.controller('commonCtrl',['$scope','$http', function($scope,$http) {
  
  
    $http.get("https://year2016.herokuapp.com/commonFirstWeek").success(function(data){
        $scope.commonFirstWeek = data; 

   });
   
    $http.get("https://year2016.herokuapp.com/commyear").success(function(data){
        $scope.commonYear = data; 

   });
   
    $http.get("https://year2016.herokuapp.com/commonSecondtWeek").success(function(data){
        $scope.secondWeek = data; 

   });
   
       $http.get("https://year2016.herokuapp.com/terror").success(function(data){
        $scope.terror = data; 
		
   });
   
$scope.page4marked = ['family', 'american', 'free'];
$scope.page5marked =  ['trump', 'clinton'];
$scope.page6marked =  ['trump', 'clinton'];
$scope.page9marked =  ['david', 'bowie'];
   
}]);


firstWeek.controller('lineCtrl',['$scope','$http',function($scope,$http) {
    $http.get("https://year2016.herokuapp.com/terror").success(function(data){
        $scope.terror = data; 

        var xElement = new Array();
        var yElement = new Array();
        for(var i=0; i<data.length; i++){

          xElement.push(data[i].date);
          yElement.push(data[i].num);
        }
        
      
        var ctx = document.getElementById("lineChart");
        var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: 'Articles',
            data: yElement,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
              xAxes: [
            {
            display: false,
          
            
            }
            
            ]
        },
        
         title: {
            display: true,
            text: 'Terror'
        }
    }
  });

  
});




//Syria war

   $http.get("https://year2016.herokuapp.com/syria").success(function(data){

        $scope.syria = data.war; 

        var xElement = new Array();
        var yElement = new Array();
        for(var i=0; i<data.war.length; i++){
          xElement.push(data.war[i].date);
          yElement.push(data.war[i].num);
        }

      
        var ctx = document.getElementById("syriaLineChart");
        var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: 'Articles',
            data: yElement,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
              xAxes: [
            {
            display: false
            }
            
            ]
        }
    }
  });

  
});

//Syria war + refugees

   $http.get("https://year2016.herokuapp.com/syria").success(function(data){

        $scope.syriaWar = data.war; 
         $scope.syriaRefugees = data.refugees; 

        var xElementWar = new Array();
        var yElementWar = new Array();
        for(var i=0; i<data.war.length; i++){
         
          xElementWar.push(data.war[i].date);
          yElementWar.push(data.war[i].num);
        }
        
                var xElementRefugees = new Array();
        var yElementRefugees = new Array();
        for(var i=0; i<data.refugees.length; i++){
          
          xElementRefugees.push(data.refugees[i].date);
          yElementRefugees.push(data.refugees[i].num);
        }
        
        var ctx = document.getElementById("syriaLineChart2");
        var myChart = new Chart(ctx, {
    
    type: 'line',
    data: {
        labels: xElementWar,
        datasets: [{
            label: 'War',
             fill: false,
            data: yElementWar,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }, 
        
        {
            label: 'Refugees',
             fill: false,
            data: yElementRefugees,
            backgroundColor: '#19181e',
            borderColor: '#4ec2ff',
            borderWidth: 2
        }
        
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
              xAxes: [
            {
            display: false
            }
            
            ]
        }
    }
  });

  
});


//Obituary David

     $http.get("https://year2016.herokuapp.com/davidCelebrity").success(function(data){

        $scope.syriaWar = data.david; 
         $scope.syriaRefugees = data.celebrity; 
        
        var xElementDavid = new Array();
        var yElementDavid = new Array();
        for(var i=0; i<data.david.length; i++){

          xElementDavid.push(data.david[i].date);
          yElementDavid.push(data.david[i].num);
        }
        
                var xElementCeleb = new Array();
        var yElementCeleb = new Array();
        for(var i=0; i<data.celebrity.length; i++){

          xElementCeleb.push(data.celebrity[i].date);
          yElementCeleb.push(data.celebrity[i].num);
        }

      
        var ctx = document.getElementById("obituaryDavid");
        var myChart = new Chart(ctx, {
    
    type: 'line',
    data: {
        labels: xElementCeleb,
        datasets: [{
            label: 'David Bowie',
             fill: false,
            data: yElementDavid,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }, 
        
        {
            label: 'Celebrity Deaths',
             fill: false,
            data: yElementCeleb,
            backgroundColor: '#19181e',
            borderColor: '#4ec2ff',
            borderWidth: 2
        }
        
        ]
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


//Obituary Prince

     $http.get("https://year2016.herokuapp.com/princeCelebrity").success(function(data){

        $scope.syriaWar = data.prince; 
         $scope.syriaRefugees = data.celebrity; 

        var xElementPrince = new Array();
        var yElementPrince = new Array();
        for(var i=0; i<data.prince.length; i++){

          xElementPrince.push(data.prince[i].date);
          yElementPrince.push(data.prince[i].num);
        }
        
                var xElementCeleb = new Array();
        var yElementCeleb = new Array();
        for(var i=0; i<data.celebrity.length; i++){

          xElementCeleb.push(data.celebrity[i].date);
          yElementCeleb.push(data.celebrity[i].num);
        }

      
        var ctx = document.getElementById("obituaryPrince");
        var myChart = new Chart(ctx, {
    
    type: 'line',
    data: {
        labels: xElementCeleb,
        datasets: [{
            label: 'Prince',
             fill: false,
            data: yElementPrince,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }, 
        
        {
            label: 'Celebrity Deaths',
             fill: false,
            data: yElementCeleb,
            backgroundColor: '#19181e',
            borderColor: '#4ec2ff',
            borderWidth: 2
        }
        
        ]
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


//Obituary All (david, prince, alan, mohammad, fidel, carrie, debby)

     $http.get("https://year2016.herokuapp.com/allCelebrity").success(function(data){


        var xElement = new Array();

        var yElementDavid = new Array();
        for(var i=0; i<data.prince.length; i++){
         
          xElement.push(data.david[i].date);
          yElementDavid.push(data.david[i].num);
        }
        
        var yElementPrince = new Array();
        for(var i=0; i<data.prince.length; i++){

          yElementPrince.push(data.prince[i].num);
        }
        
                var yElementAlan = new Array();
        for(var i=0; i<data.alan.length; i++){

          yElementAlan.push(data.alan[i].num);
        }
        
                var yElementMohammad = new Array();
        for(var i=0; i<data.mohammad.length; i++){

          yElementMohammad.push(data.mohammad[i].num);
        }
        
                var yElementFidel = new Array();
        for(var i=0; i<data.fidel.length; i++){

          yElementFidel.push(data.fidel[i].num);
        }
        
                var yElementCarrie = new Array();
        for(var i=0; i<data.carrie.length; i++){

          yElementCarrie.push(data.carrie[i].num);
        }
        
                var yElementDebby = new Array();
        for(var i=0; i<data.debby.length; i++){

          yElementDebby.push(data.debby[i].num);
        }
        
        
        var ctxDavid = document.getElementById("obituaryDavidYear");
        var chartDavid = new Chart(ctxDavid, {
    
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: 'David Bowie',
             fill: false,
            data: yElementDavid,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }
        ]
    },
    options: {
        scales: {
            yAxes: [
            {ticks: { beginAtZero:true},
            display: false
            }
            
            ],
            
            xAxes: [
            {
            display: false
            }
            
            ]
        	
        }
    }
  });
        
        

      
        var ctxPrince = document.getElementById("obituaryPrinceYear");
        var chartPrince = new Chart(ctxPrince, {
    
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: 'Prince',
             fill: false,
            data: yElementPrince,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }
        ]
    },
    options: {
                scales: {
            yAxes: [
            {ticks: { beginAtZero:true},
            display: false
            }
            
            ],
            
            xAxes: [
            {
            display: false
            }
            
            ]
        	
        }
    }
  });
  
  
  
          var ctxAlan = document.getElementById("obituaryAlanYear");
        var chartAlan = new Chart(ctxAlan, {
    
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: 'Alan Rickman',
             fill: false,
            data: yElementAlan,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }
        ]
    },
    options: {
                scales: {
            yAxes: [
            {ticks: { beginAtZero:true},
            display: false
            }
            
            ],
            
            xAxes: [
            {
            display: false
            }
            
            ]
        	
        }
    }
  });
  
  
            var ctxMohammad = document.getElementById("obituaryMohammadYear");
        var chartMohammad = new Chart(ctxMohammad, {
    
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: 'Mohammad Ali',
             fill: false,
            data: yElementMohammad,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }
        ]
    },
    options: {
        scales: {
            yAxes: [
            {ticks: { beginAtZero:true},
            display: false
            }
            
            ],
            
            xAxes: [
            {
            display: false
            }
            
            ]
        	
        }
    }
  });


  var ctxFidel = document.getElementById("obituaryFidelYear");
        var chartFidel = new Chart(ctxFidel, {
    
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: 'Fidel Castro',
             fill: false,
            data: yElementFidel,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }
        ]
    },
    options: {
        scales: {
            yAxes: [
            {ticks: { beginAtZero:true},
            display: false
            }
            
            ],
            
            xAxes: [
            {
            display: false
            }
            
            ]
        	
        }
    }
  });
  
  
  
  var ctxCarrie = document.getElementById("obituaryCarrieYear");
        var chartCarrie = new Chart(ctxCarrie, {
    
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: 'Carrie Fisher',
             fill: false,
            data: yElementCarrie,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }
        ]
    },
    options: {
        scales: {
            yAxes: [
            {ticks: { beginAtZero:true},
            display: false
            }
            
            ],
            
            xAxes: [
            {
            display: false
            }
            
            ]
        	
        }
    }
  });
  
  
  
  
  var ctxDebby = document.getElementById("obituaryDebbyYear");
        var chartDebby = new Chart(ctxDebby, {
    
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: 'Debby Reynolds',
             fill: false,
            data: yElementDebby,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }
        ]
    },
    options: {
        scales: {
            yAxes: [
            {ticks: { beginAtZero:true},
            display: false
            }
            
            ],
            
            xAxes: [
            {
            display: false
            }
            
            ]
        	
        }
    }
  });
  
  
  
});






//Zika + Ebola

     $http.get("https://year2016.herokuapp.com/zikaEbola").success(function(data){


        var xElement = new Array();

        var yElementZika = new Array();
        for(var i=0; i<data.zika.length; i++){
         
          xElement.push(data.zika[i].date);
          yElementZika.push(data.zika[i].num);
        }
        
        var yElementEbola = new Array();
        for(var i=0; i<data.ebola.length; i++){

          yElementEbola.push(data.ebola[i].num);
        }
        
       
        
        var ctxZika = document.getElementById("zika");
        var chartZika = new Chart(ctxZika, {
    
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: 'Zika',
             fill: false,
            data: yElementZika,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
            	display: false,
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [
            {
            display: false
            }
            
            ]
        }
    }
  });
        
        

      
        var ctxEbola = document.getElementById("ebola");
        var chartEbola = new Chart(ctxEbola, {
    
    type: 'line',
    data: {
        labels: xElement,
        datasets: [{
            label: 'Ebola',
             fill: false,
            data: yElementEbola,
            backgroundColor: '#19181e',
            borderColor: '#ff44fd',
            borderWidth: 2
        }
        ]
    },
    gridLines: {
    	display: false
    },
    options: {
        scales: {
            yAxes: [{
            	display: false,
                ticks: {
                    beginAtZero:true,
                    
                }
            }],
            xAxes: [
            {
            display: false
            }
            
            ]
        }
    }
  });
  
  
  
  
});


}]);