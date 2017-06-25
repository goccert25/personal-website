var margin_top = 0;
var rest_of_name_1_width = 0;
var rest_of_name_2_width = 0;
var intro_font_size = 0;
var final_navbar_fontsize = 18;
var navbar_height = 0;
var nav_stickied = false;
var padding_above_initials = 0;
var padding_below_initials = 0;
var margin_above_initials = 0;
var margin_below_initials = 0;
var secondHalfScrollLength = 0;
var secondHalfScrollLengthRemaining = 0;
var animationStoppingPoint = 0;
var notSetUp = true;
var lengthOfMainCircle;
var rightPath;
var leftPath;
var currentState = null;
var initialNavSize;
var start = null;
var navAnimationDuration = 500;
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var currentNavState;

const NAV_STATE = {
  MIDDLE: "MIDDLE",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
}

const STATE = {
  ONE: 'ONE',
  TWO: 'TWO',
  THREE: 'THREE'
};


function navAnimation (centerPointLeft,
                        centerPointTop,
                        clockwise,
                        leftIconStart,
                        rightIconStart,
                        activeIconStart,
                        radius){
  start = null;

  if (clockwise){

    return function step(timestamp){
      if (!start) start = timestamp;
      var progress = timestamp - start;
      //do stuff to top and left
      if (progress < navAnimationDuration){

      let leftIconLeftPosition = ((rightIconStart.left - leftIconStart.left) * progress/navAnimationDuration) + leftIconStart.left;
      let leftIconTopPosition = -1 * Math.sqrt(Math.pow(radius,2) - Math.pow(leftIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      let rightIconLeftPosition = rightIconStart.left - ((rightIconStart.left - activeIconStart.left) * progress/navAnimationDuration);
      let rightIconTopPosition = Math.sqrt(Math.pow(radius,2) - Math.pow(rightIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      let activeIconLeftPosition = activeIconStart.left - ((activeIconStart.left - leftIconStart.left) * progress/navAnimationDuration);
      let activeIconTopPosition = Math.sqrt(Math.pow(radius,2) - Math.pow(activeIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      $('.icon-left').css({'top':leftIconTopPosition, 'left': leftIconLeftPosition});
      $('.icon-right').css({'top':rightIconTopPosition, 'left': rightIconLeftPosition});
      $('.icon-active').css({'top':activeIconTopPosition, 'left': activeIconLeftPosition});

        window.requestAnimationFrame(step);
      }else{
        $('.icon-left').css({'top':rightIconStart.top, 'left': rightIconStart.left});
        $('.icon-right').css({'top':activeIconStart.top, 'left': activeIconStart.left});
        $('.icon-active').css({'top':leftIconStart.top, 'left': leftIconStart.left});
        $('.icon-left').addClass('ir');
        $('.icon-left').removeClass('icon-left');
        $('.icon-active').addClass('il');
        $('.icon-active').removeClass('icon-active');
        $('.icon-right').addClass('ia');
        $('.icon-right').removeClass('icon-right');
        $('.ia').addClass('icon-active').removeClass('ia');
        $('.il').addClass('icon-left').removeClass('il');
        $('.ir').addClass('icon-right').removeClass('ir');

        $('.icon-right').click(animationFunction("clockwise"));
        $('.icon-left').click(animationFunction("counter-clockwise"));
      }
    }
  }else{

    return function step(timestamp){
      if (!start) start = timestamp;
      var progress = timestamp - start;
      //do stuff to top and left
      if (progress < navAnimationDuration){

      let rightIconLeftPosition = rightIconStart.left - ((rightIconStart.left - leftIconStart.left) * progress/navAnimationDuration);
      let rightIconTopPosition = -1 * Math.sqrt(Math.pow(radius,2) - Math.pow(rightIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      let leftIconLeftPosition = leftIconStart.left + ((activeIconStart.left - leftIconStart.left) * progress/navAnimationDuration);
      let leftIconTopPosition = Math.sqrt(Math.pow(radius,2) - Math.pow(leftIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      let activeIconLeftPosition = activeIconStart.left + ((rightIconStart.left - activeIconStart.left) * progress/navAnimationDuration);
      let activeIconTopPosition = Math.sqrt(Math.pow(radius,2) - Math.pow(activeIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      $('.icon-left').css({'top':leftIconTopPosition, 'left': leftIconLeftPosition});
      $('.icon-right').css({'top':rightIconTopPosition, 'left': rightIconLeftPosition});
      $('.icon-active').css({'top':activeIconTopPosition, 'left': activeIconLeftPosition});

        window.requestAnimationFrame(step);
      }else{
        $('.icon-left').css({'top':activeIconStart.top, 'left': activeIconStart.left});
        $('.icon-right').css({'top':leftIconStart.top, 'left': leftIconStart.left});
        $('.icon-active').css({'top':rightIconStart.top, 'left': rightIconStart.left});
        $('.icon-left').addClass('ia');
        $('.icon-left').removeClass('icon-left');
        $('.icon-active').addClass('ir');
        $('.icon-active').removeClass('icon-active');
        $('.icon-right').addClass('il');
        $('.icon-right').removeClass('icon-right');
        $('.ia').addClass('icon-active').removeClass('ia');
        $('.il').addClass('icon-left').removeClass('il');
        $('.ir').addClass('icon-right').removeClass('ir');

        $('.icon-right').click(animationFunction("clockwise"));
        $('.icon-left').click(animationFunction("counter-clockwise"));
      }
    }
  }
}

$(document).ready(function(){
  rest_of_name_1_width = $('#rest_of_name_1').width();
  rest_of_name_2_width = $('#rest_of_name_2').width();
  intro_font_size = ($('#intro_heading').css('font-size')).split('px');
  intro_font_size = parseInt(intro_font_size[0]);
  currentNavState = NAV_STATE.MIDDLE;
  adjustHeight();
  populateCaptions();

});

function animationFunction(direction){

  return function(){

    $('.icon-right').unbind('click');
    $('.icon-left').unbind('click');
    $('.icon-active').unbind('click');

    let r = $('#right_content');
    let m = $('#middle_content');
    let l = $('#left_content');
    if (direction === "clockwise"){
      if (currentNavState === NAV_STATE.MIDDLE){
        m.removeClass('active transform-100').addClass('inactive transform-200');
        r.removeClass('inactive transform-100').addClass('active transform-200');
        l.removeClass('transform-100').addClass('transform100');
        currentNavState = NAV_STATE.RIGHT;
      }else if (currentNavState === NAV_STATE.RIGHT){
        r.removeClass('active transform-200').addClass('transform-300 inactive');
        l.removeClass('inactive transform100').addClass('active transform0');
        m.removeClass('transform-200').addClass('transform0');
        currentNavState = NAV_STATE.LEFT;
      }else{
        l.removeClass('active transform0').addClass('inactive transform-100');
        m.removeClass('transform-200 inactive').addClass('active transform-100');
        r.removeClass('transform-300').addClass('transform-100');
        currentNavState = NAV_STATE.MIDDLE;
      }
    }else{
      if (currentNavState === NAV_STATE.MIDDLE){
        m.removeClass('active transform-100').addClass('inactive transform0');
        r.removeClass('transform-100').addClass('transform-300');
        l.removeClass('inactive transform-100').addClass('active transform0');
        currentNavState = NAV_STATE.LEFT;
      }else if (currentNavState === NAV_STATE.LEFT){
        l.removeClass('active transform0').addClass('inactive transform100');
        r.removeClass('inactive transform-300').addClass('active transform-200');
        m.removeClass('transform0').addClass('transform-200');
        currentNavState = NAV_STATE.RIGHT;
      }else{
        m.removeClass('inactive transform-200').addClass('active transform-100');
        r.removeClass('active transform-200').addClass('inactive transform-100');
        l.removeClass('transform100').addClass('transform-100');
        currentNavState = NAV_STATE.MIDDLE;
      }
    }

    var leftPos = $('.icon-left').position();
    leftPos.top = leftPos.top + margin_above_initials;
    leftPos.left = leftPos.left + margin_above_initials;
    console.log(leftPos.left, " ", leftPos.top);

    var rightPos = $('.icon-right').position();
    rightPos.top = rightPos.top + margin_above_initials;
    rightPos.left = rightPos.left + margin_above_initials;

    console.log(rightPos.left, " ", rightPos.top);
    var activePos = $('.icon-active').position();
    activePos.top = activePos.top + margin_above_initials;
    activePos.left = activePos.left + margin_above_initials;

    console.log(activePos.left, " ", activePos.top);

    var radius = (rightPos.left - leftPos.left)/2;
    var centerPointLeft = activePos.left;
    var centerPointTop = leftPos.top;

    console.log('radius ' + radius + ' centerLeft ' + centerPointLeft + ' centerTop ' + centerPointTop);

    // (x - center of circle)^2 + (y-center of circle) ^2 = radius ^2;
    //use requestAnimationFrame to set the x value based on time, then find y value based on that.
    window.requestAnimationFrame(navAnimation (centerPointLeft,
                            centerPointTop,
                            (direction === "clockwise"),
                            leftPos,
                            rightPos,
                            activePos,
                            radius));
  }
}

function adjustHeight(){
  var name = $("#intro_heading");

  padding_above_initials = (name.css('padding-top')).split('px');
  padding_above_initials = parseInt(padding_above_initials[0]);
  padding_below_initials = (name.css('padding-bottom')).split('px');
  padding_below_initials = parseInt(padding_below_initials[0]);
  margin_below_initials = (name.css('margin-bottom')).split('px');
  margin_below_initials = parseInt(margin_below_initials[0]);
  margin_above_initials = (name.css('margin-top')).split('px');
  margin_above_initials = parseInt(margin_above_initials[0]);

  initialNavSize = name.height() +
    padding_below_initials +
    padding_above_initials +
    margin_below_initials +
    margin_above_initials;

  var wordHeight = $(window).height() - initialNavSize;

  wordHeight = wordHeight/2;
  margin_top = wordHeight;
  // animationStoppingPoint = margin_top * 5/2;
  animationStoppingPoint = $(window).height() - initialNavSize;
  $('#intro_background_color').css('height', $(window).height());
  $('#intro_background').css('height', $(window).height());
  $("#top_intro_heading").css('height', wordHeight.toString() + "px");

}

$(window).on('scroll', function(){
  var midway_point = margin_top/2;
  var scrollTop = $(this).scrollTop();

  let top_intro_heading_height = margin_top - scrollTop;
  if (top_intro_heading_height < 0) top_intro_heading_height = 0;

  $('#top_intro_heading').css('height', top_intro_heading_height);

  if (scrollTop < midway_point){

    if(currentState !== STATE.ONE){
      adjustToState1(midway_point, scrollTop);
    }

    var calc = (midway_point - scrollTop)/midway_point;
    if (calc < 0) calc = 0;
    $('#intro_background').css({ 'opacity': calc });
    $('#rest_of_name_1').css({ 'opacity': calc });
    $('#rest_of_name_2').css({ 'opacity': calc });

  }else if (scrollTop > midway_point && scrollTop < margin_top){

    if(currentState !== STATE.TWO){
      adjustToState2();
    }

    let scale = (1 - (scrollTop - midway_point)/midway_point);
    var calc_one = scale * rest_of_name_1_width;
    var calc_two = scale * rest_of_name_2_width;
    var font_size = (scale * (intro_font_size - final_navbar_fontsize)) + final_navbar_fontsize;
    if (font_size < final_navbar_fontsize) font_size = final_navbar_fontsize;
    if (calc_one < 0) calc_one = 0;
    if (calc_two < 0) calc_two = 0;
    $('#rest_of_name_1').css({ 'width': calc_one, 'opacity': 0 });
    $('#rest_of_name_2').css({ 'width': calc_two, 'opacity': 0 });
    $('#intro_heading').css({'font-size': font_size});

  }else if (scrollTop > margin_top && scrollTop < animationStoppingPoint){

    if(currentState !== STATE.THREE){
      adjustToState3();
    }

    let lengthTraveledSoFar = scrollTop-margin_top;

    if (notSetUp){
      setUpNavbar();
    }

    ratio = lengthTraveledSoFar/margin_top;

    let offset =  (lengthOfMainCircle/2) * (1 - ratio) + (lengthOfMainCircle/2) - 1;

    console.log(ratio);
    $('.icon').css({'opacity': ratio});

    rightPath.style.strokeDashoffset = offset;
    leftPath.style.strokeDashoffset = offset;
  }else if (scrollTop >= animationStoppingPoint){
    top_intro_heading_height = 0;
    $('#top_intro_heading').css('height', top_intro_heading_height);

    adjustToState3();

    if (notSetUp){
      setUpNavbar();
    }
    rightPath.style.strokeDashoffset = 0;
    leftPath.style.strokeDashoffset = 0;
    $('.icon').css({'opacity': 1});
    $(window).unbind("scroll");
    $('#intro_background_color').css({'height': $('#intro_heading').outerHeight(true), 'background-color': "#F1F2F3"});
    $('#intro_background').css({'height': $('#intro_heading').outerHeight(true)});
    $('#nav_sticky').addClass("bottom_border");
    $('#intro_background_color').removeClass('bottom_border');
    window.scrollTo(0,0);
    $('.icon-right').click(animationFunction("clockwise"));
    $('.icon-left').click(animationFunction("counter-clockwise"));

    navbarHeight = $('#nav_sticky').outerHeight();

    $(window).scroll(function(event){
      didScroll = true;
    });
  }
});

function setUpNavbar(){

  animationStoppingPoint = animationStoppingPoint + initialNavSize - $('#intro_heading').outerHeight(true);

  notSetUp = false;
  var constantSpaceBetweenCircleAndTop = parseInt((($('#intro_heading').css('margin-top')).split('px'))[0]);
  console.log(constantSpaceBetweenCircleAndTop);
  var constantSpaceBetweenCircleAndContent = 20;

  $('#intro_heading').css({'font-size': final_navbar_fontsize});

  navbar_height = $('#intro_heading').height() +
    padding_above_initials +
    padding_below_initials +
    constantSpaceBetweenCircleAndContent +
    constantSpaceBetweenCircleAndTop;

  //set up the svg
  svg_values = navbar_height - constantSpaceBetweenCircleAndContent - constantSpaceBetweenCircleAndTop;

  $('#right_half_circle_box').attr('width', svg_values.toString());
  $('#right_half_circle_box').attr('height', svg_values.toString());
  $('#right_half_circle_box').css({'margin-top': constantSpaceBetweenCircleAndTop});
  $('#right_half_circle').attr('cx', (svg_values/2).toString());
  $('#right_half_circle').attr('cy', 0);
  $('#right_half_circle').attr('r', ((svg_values-5)/2).toString());
  $('#left_half_circle_box').attr('width', svg_values.toString());
  $('#left_half_circle_box').attr('height', svg_values.toString());
  $('#left_half_circle_box').css({'margin-top': constantSpaceBetweenCircleAndTop});
  $('#left_half_circle').attr('cx', (svg_values/2).toString());
  $('#left_half_circle').attr('cy', 0);
  $('#left_half_circle').attr('r', ((svg_values-5)/2).toString());

  $('#nav').css({'display':'block', 'opacity':'0'});

  rightPath = document.querySelector('#right_half_circle');
  // length;
  if (rightPath.getTotalLength){
    lengthOfMainCircle = rightPath.getTotalLength();
  }else{
    lengthOfMainCircle = 2 * Math.PI * rightPath.getAttribute('r');
  }

  rightPath.style.strokeDasharray = lengthOfMainCircle + ' ' + lengthOfMainCircle;
  rightPath.style.strokeDashoffset = 0;

  leftPath = document.querySelector('#left_half_circle');
  if (leftPath.getTotalLength){
    lengthOfMainCircle = leftPath.getTotalLength();
  }else{
    lengthOfMainCircle = 2 * Math.PI * leftPath.getAttribute('r');
  }
  leftPath.style.strokeDasharray = lengthOfMainCircle + ' ' + lengthOfMainCircle;
  leftPath.style.strokeDashoffset = 0;

  setTimeout(function(){$('#nav').css({'opacity':'1'})}, 10);
}

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled(){
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta){
    return;
  }
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    console.log("hasscrolled", navbarHeight);
    $('#nav').css({'top': (-1 * navbarHeight)});
    $('#nav_sticky').css({'top': (-1 * navbarHeight)});
  } else {
    // Scroll Up
    // If did not scroll past the document (possible on mac)...
    if(st + $(window).height() < $(document).height()) {
      $('#nav').css({'top': 0});
      $('#nav_sticky').css({'top': 0});    }
  }
  lastScrollTop = st;
}

function adjustToState1(midway_point, scrollTop){
  currentState = STATE.ONE;

  $('#rest_of_name_1').css({ 'width': rest_of_name_1_width });
  $('#rest_of_name_2').css({ 'width': rest_of_name_2_width });
  $('#intro_heading').css({'font-size': intro_font_size});
  $('#nav_sticky').css({'background-color':'transparent'});

  $('.icon-circle').css({'opacity': '0'});
  $('.icon').css({'opacity': 0});

  if(!notSetUp){
    rightPath.style.strokeDashoffset = lengthOfMainCircle;
    leftPath.style.strokeDashoffset = lengthOfMainCircle;
  }
}

function adjustToState2(){
  currentState = STATE.TWO;

  $('#intro_background').css({ 'opacity': 0 });
  $('#rest_of_name_1').css({ 'opacity': 0 });
  $('#rest_of_name_2').css({ 'opacity': 0 });
  // $('#nav_sticky').css({'background-color':'#8A432C'});
  $('#nav_sticky').css({'background-color':'#A2B6D8'});
  // $('#nav_sticky').css({'background-color':'#F1F2F3'});

  $('.icon-circle').css({'opacity': 0});
  $('.icon').css({'opacity': 0});

  if(!notSetUp){
    rightPath.style.strokeDashoffset = lengthOfMainCircle;
    leftPath.style.strokeDashoffset = lengthOfMainCircle;
  }
}

function adjustToState3(){
  currentState = STATE.THREE;

  $('#intro_background').css({ 'opacity': 0 });
  $('#rest_of_name_1').css({ 'width': 0, 'opacity': 0 });
  $('#rest_of_name_2').css({ 'width': 0, 'opacity': 0 });
  $('#intro_heading').css({'font-size': final_navbar_fontsize});
  // $('#nav_sticky').css({'background-color':'#8A432C'});
  $('#nav_sticky').css({'background-color':'#A2B6D8'});
  // $('#nav_sticky').css({'background-color':'#F1F2F3'});

  $('.icon-circle').css({'opacity': '1'});

}



function openModal() {
  document.getElementById('myModal').style.height = $(window).height() + "px";
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function populateCaptions(){
  var captions = document.getElementsByClassName("thumbnail-caption");
  var modal_captions = document.getElementsByClassName("caption-container");

  for(var i = 0; i < modal_captions.length; i++){
    modal_captions[i].innerHTML = captions[i].innerHTML;
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var images = document.getElementsByClassName("modal-image");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  var imgToLoad = new Image();

  imgToLoad.onload = function() {
      images[slideIndex-1].src = imgToLoad.src;
  };

  imgToLoad.src = images[slideIndex-1].getAttribute('data-src');

  slides[slideIndex-1].style.display = "flex";
  // images[slideIndex-1].src = images[slideIndex-1].getAttribute('data-src');
}
