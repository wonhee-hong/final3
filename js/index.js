$(document).ready(function(){
 
for(var i = 0; i < 680; i++) {
  $(".background").append(
    "<div class = 'lego' color_state='basic'number='" + i + "''></div>"
    );
}
$(".lego").on("click",function(){
  console.log($(this).attr("color_state"));
  if ($(this).attr("color_state") === "red"){
    $(this).css("background-image", "url(img/lego_blue.png)")
  } else {
    $(this).attr("color_state","red");
    $(this).css("background-image","url(img/lego_red.png")
  }
 });
});
