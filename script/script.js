$(function(){
  $(".mainmenu").hover(function(){
    $("#sub").stop().slideDown();
  },
  function(){
    $("#sub").stop().slideUp();
  });
});

// 팝업
$(function(){
  $(".event1").click(function(){
    $(".popup1").show()
  });

  $(".close").click(function(){
    $(".popup1").hide()
  });
})

$(function(){
  $(".event2").click(function(){
    $(".popup2").show()
  });

  $(".close").click(function(){
    $(".popup2").hide()
  });
})

$(function(){
  $(".event3").click(function(){
    $(".popup3").show()
  });

  $(".close").click(function(){
    $(".popup3").hide()
  });
})
