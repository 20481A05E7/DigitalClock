function digitalClock(){
    var dateObject=new Date();
    var seconds=dateObject.getSeconds();
    var day=dateObject.getDay();
    var date=dateObject.getDate();
    var month=dateObject.getMonth();
    var fullYear=dateObject.getFullYear();
    var hours=dateObject.getHours();
    var minutes=dateObject.getMinutes();
    var dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById("day_heading").innerText=dayArray[day];
    document.getElementById("date_heading").innerText=`${addZeroes(date)}/${monthArray[month]}/${fullYear}`;
    document.getElementById("time_heading").innerText=`${addZeroes(hours)}:${addZeroes(minutes)}`;
    document.getElementById("seconds_heading").innerText=addZeroes(seconds);

    function addZeroes(value){
        if(value<10){
            return "0"+value;
        }
        else{
            return value;
        }
    }
}
setInterval(digitalClock,1000);