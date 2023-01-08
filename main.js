

$(document).ready(function(){


 

  var el=document.getElementById('text')
  console.log("el in vanilla js", el);

  console.log("el in jquery", $(el));


 
  $('#go-button').hover(function(){
    alert("you clicked me");
  });



$('[data-trigger="dropdown"]').on('mouseenter', function(){
  var submenu=$(this).parent().find('.submenu');
  submenu.fadeIn(500);


  $('.profile-menu').on('mouseleave', function(){
     submenu.fadeOut(500);
  });


});

   $('#prepend, #append, #replace').on('click', function(e){

    console.log(e);
    var el= $(e.currentTarget);
    var action=el.attr('id');
    var content=$('.text').val();

    if(action=='prepend'){
      console.log("prepending");
      $('#main').prepend('<a href="#">'+ content + '</a>' );

    }
    else if(action=='append'){
      console.log("appending")
      $('#main').append('<a href="#">'+ content + '</a>' );

    }
    else if(action=="replace"){
      console.log("replacing")
      $('#main').html(content);

    }
    $('.text').val('')

   })


});

function myfunction(){
  alert('value changed')
}

