$(document).ready(function(){
    function getYearFunc() {
        var d = new Date();
        var n = d.getFullYear();
        document.getElementById("year").innerHTML = n;
      }
      getYearFunc();
});
