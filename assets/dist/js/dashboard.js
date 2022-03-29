
(
  setInterval(function () {
    skf = new Date();
    'use strict'
    var res;
    feather.replace({ 'aria-hidden': 'true' })
    function parseStr(dataSet) {
      const dataArr = new XMLParser().parseFromString(dataSet).children;
      console.log(dataArr);
    }
    async function getAPI() {
      function day(){
        var value = [];
        var formatDate = function(date){
         var myMonth = date.getMonth()+1; 
            var myWeekDay = date.getDate();
            
            var addZero = function(num){
             if (num < 10){
              num = "0"+num;
             }
             return num;
            }
            var md = addZero(myMonth)+addZero(myWeekDay);
            
            return md;
        }
        
              var now = new Date(); 
              var nowDayOfWeek = now.getDay(); 
              var nowDay = now.getDate(); 
              var nowMonth = now.getMonth(); 
              var nowYear = now.getYear(); 
              nowYear += (nowYear < 2000) ? 1900 : 0; 
              var weekStartDate = new Date(nowYear, nowMonth, nowDay - 7); 
              var weekEndDate = new Date(nowYear, nowMonth, nowDay);
              value.push(nowYear+formatDate(weekStartDate));
              value.push(nowYear+formatDate(weekEndDate));
              
              return value;
        }
        var startweek = day()[0] - 2;
        console.log(`http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=SICw%2Fa8P0oJn8tDKvMAJyfr15wHQAWqr5pufldiNp9QeybYSrhrKlu1OhMAfoCNaQubQpyAzH8u7S3DgCXTHKQ%3D%3D&pageNo=1&numOfRows=20&startCreateDt=${startweek}&endCreateDt=${day()[1]}`)
      await axios({
          method: "get",
          url: `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=SICw%2Fa8P0oJn8tDKvMAJyfr15wHQAWqr5pufldiNp9QeybYSrhrKlu1OhMAfoCNaQubQpyAzH8u7S3DgCXTHKQ%3D%3D&pageNo=1&numOfRows=20&startCreateDt=${startweek}&endCreateDt=${day()[1]}`,
        }).then(function (response) {
          const dataSet = response.data.response.body.items.item;
          // Graphs
          console.log(dataSet[0]);
          var ctx = document.getElementById('myChart')
          // eslint-disable-next-line no-unused-vars
          console.log(dataSet[0].decideCnt-dataSet[1].decideCnt);
          var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: [
                `7 days ago`,
                `6 days ago`,
                `5 days ago`,
                `4 days ago`,
                `3 days ago`,
                `2 days ago`,
                `Today`,
                
              ],
              datasets: [{
                data: [
                  dataSet[7].decideCnt-dataSet[8].decideCnt,
                  dataSet[6].decideCnt-dataSet[7].decideCnt,
                  dataSet[4].decideCnt-dataSet[5].decideCnt,
                  dataSet[3].decideCnt-dataSet[4].decideCnt,
                  dataSet[2].decideCnt-dataSet[3].decideCnt,
                  dataSet[1].decideCnt-dataSet[2].decideCnt,
                  dataSet[0].decideCnt-dataSet[1].decideCnt
                ],
                lineTension: 0,
                backgroundColor: 'transparent',
                borderColor: '#007bff',
                borderWidth: 4,
                pointBackgroundColor: '#007bff',
                backgroundColor : '#007bff'
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },
              legend: {
                display: false
              }
            }
          })
                
              });
            }
            getAPI();
          
            

           
           
           
            
  },86400000)
  )()
  