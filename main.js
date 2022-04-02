$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.nav').removeClass('nav-toggle');

    if($(window).scrollTop() > 10){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

  });

  $('.facility').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

});
//assigning contents
overLay=()=>{
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
  overlay.scrollIntoView();

  //getting image here
  const blogmg = document.getElementById("blogmg").src;
  document.getElementById("overmg").src = blogmg;

  //getting title here
  const title = document.getElementById("mntitl").innerHTML;
  document.getElementById('overtitl').innerHTML = title;

  //getting blogs here
  const writes = document.querySelector(".fulblog").innerHTML;
  document.getElementById("overp").innerHTML = writes;
}
blogTo=()=>{
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
  overlay.scrollIntoView();

  //getting image here
  const blogmg = document.getElementById("secimg").src;
  document.getElementById("overmg").src = blogmg;

  //getting title here
  const title = document.getElementById("sectitl").innerHTML;
  document.getElementById('overtitl').innerHTML = title;

  //getting blogs here
  const writes = document.getElementById("secwrite").innerHTML;
  document.getElementById("overp").innerHTML = writes;
};
console.table({Coder:"Rishabh Tripathi", contact:"Rishabhtripathi2001@rediffmail.com"});
blogth=()=>{
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
  overlay.scrollIntoView();

  //getting image here
  const blogmg = document.getElementById("thrdimg").src;
  document.getElementById("overmg").src = blogmg;

  //getting title here
  const title = document.getElementById("thtitl").innerHTML;
  document.getElementById('overtitl').innerHTML = title;

  //getting blogs here
  const writes = document.getElementById("thrdwrite").innerHTML;
  document.getElementById("overp").innerHTML = writes;
}

//handling clicks
closeIt=()=>{
  document.querySelector(".overlay").style.display = "none";
  let blogcont = document.querySelector(".post");
  blogcont.scrollIntoView();
}

galLery=()=>{
  confirm("Hello I'm Shagun & Welcome My Dear Reader, So are you Ready For Thrilling Blogs?")
}


