$(window).on('load', function(){
  console.log("loaded sucsessfully");

  var vidSize = $(".vidWrap video").height();
  console.log(".vidWrap Height: " + vidSize);

  $(".bannerTxt").height(vidSize-5);
});
