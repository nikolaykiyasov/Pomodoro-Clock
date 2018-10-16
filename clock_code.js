var flag = false;
 $('button').click(function(){
  var val1,val2,val3,val4;
  val1 = $('#1').html();
  val2 = $('#2').html();
  val3 = $('#3').html();
  val4 = $('#4').html();
  switch($(this).val()){
    case '-1': $("#1").html(Number(val1) - 1); break;
    case '+1': $('#1').html(Number(val1) + 1); break;
    case '-2': $("#2").html(Number(val2) - 1); break; 
    case '+2': $("#2").html(Number(val2) + 1); break;
    case '-3': $("#3").html(Number(val3) - 1); break;
    case '+3': $("#3").html(Number(val3) + 1); break;
    case '-4': $("#4").html(Number(val4) - 1); break;
    case '+4': $("#4").html(Number(val4) + 1); break;
   }
   $('#second').html($('#4').html());
   $('#minute').html($('#3').html());
 });
$("#start").click(function(){
  var second = $('#4').html();
  var minute = $('#3').html();
var intervalID = setInterval(function timer(){
  
 
   $("#stop").click(function(){
     clearInterval(intervalID); 
   });
  
  
if( second > 0 ) second--;
    else{
        second = 59;
         
        if( minute > 0 ) minute--;
        else{
            second = 59;
            
        }
    }
 $('#second').html(second);
 $('#minute').html(minute);
 
   if((second == 0)&&(minute == 0)){
     if( flag == false){
       $('#second').html($('#2').html());
       $('#minute').html($('#1').html());
       second = $('#second').html();
       minute = $('#minute').html();
       flag = true;
     } else {
       $('#second').html($('#4').html()); 
       $('#minute').html($('#3').html());
       second = $('#second').html();
       minute = $('#minute').html();
       flag = false;
     }
   }

},1000);
});
