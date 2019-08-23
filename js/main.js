let title = "";
let image = "";
let subtitle = "";
let text = "";
let entry = {};
$("#submit").click(function(){
title = $("#title").val();
image = $("#image").val();
subtitle = $("#subtitle").val();
text = $("#text").val();
entry =  {title,image,subtitle,text};
$.ajax({
  method:"POST",
  url: "https://database-test-46142.firebaseio.com/.json",
  data: JSON.stringify(entry)
})
})
