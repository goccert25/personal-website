var margin_top = 0;
var rest_of_name_1_width = 0;
var rest_of_name_2_width = 0;
var intro_font_size = 0;
var final_navbar_fontsize = 36;
var navbar_height = 0;
var padding_above_initials = 0;
var padding_below_initials = 0;
var margin_above_initials = 0;
var margin_below_initials = 0;
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
var top_intro_heading;
var rest_of_name_1;
var rest_of_name_2;
var intro_background;
var intro_heading;
var icons;
var shortened = false;

var NAV_STATE = {
  MIDDLE: "MIDDLE",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
}

var STATE = {
  ONE: 'ONE',
  TWO: 'TWO',
  THREE: 'THREE',
  FOUR: 'FOUR'
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

    return function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      //do stuff to top and left
      if (progress < navAnimationDuration){

      var leftIconLeftPosition = ((rightIconStart.left - leftIconStart.left) * progress/navAnimationDuration) + leftIconStart.left;
      var leftIconTopPosition = -1 * Math.sqrt(Math.pow(radius,2) - Math.pow(leftIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      var rightIconLeftPosition = rightIconStart.left - ((rightIconStart.left - activeIconStart.left) * progress/navAnimationDuration);
      var rightIconTopPosition = Math.sqrt(Math.pow(radius,2) - Math.pow(rightIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      var activeIconLeftPosition = activeIconStart.left - ((activeIconStart.left - leftIconStart.left) * progress/navAnimationDuration);
      var activeIconTopPosition = Math.sqrt(Math.pow(radius,2) - Math.pow(activeIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      $('.icon-left').css({'top':leftIconTopPosition, 'left': leftIconLeftPosition});
      $('.icon-right').css({'top':rightIconTopPosition, 'left': rightIconLeftPosition});
      $('.icon-active').css({'top':activeIconTopPosition, 'left': activeIconLeftPosition});

        window.requestAnimationFrame(step);
      }else{
        var icon_left = $('.icon-left');
        var icon_right = $('.icon-right');
        var icon_active = $('.icon-active');

        icon_left.css({'top':rightIconStart.top, 'left': rightIconStart.left}).removeClass('icon-left').addClass('icon-right');
        icon_right.css({'top':activeIconStart.top, 'left': activeIconStart.left}).removeClass('icon-right').addClass('icon-active');
        icon_active.css({'top':leftIconStart.top, 'left': leftIconStart.left}).removeClass('icon-active').addClass('icon-left');

        $('html, body').animate({
          scrollTop: (animationStoppingPoint+50)
        }, 500, function () {
          $(".inactive").addClass("cutoff");
        });

        $('.icon-right').click(animationFunction("clockwise"));
        $('.icon-right').css({"transition": "top 0.2s ease-in-out"});
        $('.icon-left').click(animationFunction("counter-clockwise"));
        $('.icon-left').css({"transition": "top 0.2s ease-in-out"});
      }
    }
  }else{

    return function step(timestamp){
      if (!start) start = timestamp;
      var progress = timestamp - start;
      //do stuff to top and left
      if (progress < navAnimationDuration){

      var rightIconLeftPosition = rightIconStart.left - ((rightIconStart.left - leftIconStart.left) * progress/navAnimationDuration);
      var rightIconTopPosition = -1 * Math.sqrt(Math.pow(radius,2) - Math.pow(rightIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      var leftIconLeftPosition = leftIconStart.left + ((activeIconStart.left - leftIconStart.left) * progress/navAnimationDuration);
      var leftIconTopPosition = Math.sqrt(Math.pow(radius,2) - Math.pow(leftIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      var activeIconLeftPosition = activeIconStart.left + ((rightIconStart.left - activeIconStart.left) * progress/navAnimationDuration);
      var activeIconTopPosition = Math.sqrt(Math.pow(radius,2) - Math.pow(activeIconLeftPosition - centerPointLeft,2)) + centerPointTop;

      $('.icon-left').css({'top':leftIconTopPosition, 'left': leftIconLeftPosition});
      $('.icon-right').css({'top':rightIconTopPosition, 'left': rightIconLeftPosition});
      $('.icon-active').css({'top':activeIconTopPosition, 'left': activeIconLeftPosition});

        window.requestAnimationFrame(step);
      }else{

        var icon_left = $('.icon-left');
        var icon_right = $('.icon-right');
        var icon_active = $('.icon-active');

        icon_left.css({'top':activeIconStart.top, 'left': activeIconStart.left}).addClass('icon-active').removeClass('icon-left');
        icon_right.css({'top':leftIconStart.top, 'left': leftIconStart.left}).addClass('icon-left').removeClass('icon-right');
        icon_active.css({'top':rightIconStart.top, 'left': rightIconStart.left}).addClass('icon-right').removeClass('icon-active');

        $('html, body').animate({
          scrollTop: (animationStoppingPoint+50)
        }, 500, function () {
          $(".inactive").addClass("cutoff");
        });

        $('.icon-right').css({"transition": "top 0.2s ease-in-out"});
        $('.icon-right').click(animationFunction("clockwise"));
        $('.icon-left').css({"transition": "top 0.2s ease-in-out"});
        $('.icon-left').click(animationFunction("counter-clockwise"));
      }
    }
  }
}

$(window).load(function () {

  rest_of_name_1 = $('#rest_of_name_1');
  rest_of_name_2 = $('#rest_of_name_2');
  intro_heading = $('#intro_heading');
  top_intro_heading = $('#top_intro_heading');
  intro_background = $('#intro_background');
  icons = $('.icon');

  intro_font_size = (intro_heading.css('font-size')).split('px');
  intro_font_size = parseInt(intro_font_size[0]);
  currentNavState = NAV_STATE.MIDDLE;

  adjustHeight();
  populateCaptions();

  rest_of_name_1_width = rest_of_name_1.width();
  rest_of_name_2_width = rest_of_name_2.width();
  scrollHandler();

  $(window).on('scroll', scrollHandler);

});

function circleAnimation(direction){

      $('.icon-right').unbind('click');
      $('.icon-right').css({"transition": "none"});
      $('.icon-left').unbind('click');
      $('.icon-left').css({"transition": "none"});
      $('.icon-active').unbind('click');
      $('.icon-active').css({"transition": "none"});

      var r = $('#right_content');
      var m = $('#middle_content');
      var l = $('#left_content');
      if (direction === "clockwise"){
        if (currentNavState === NAV_STATE.MIDDLE){
          m.removeClass('active transform-100').addClass('inactive transform-200');
          r.removeClass('inactive transform-100 cutoff').addClass('active transform-200');
          l.removeClass('transform-100').addClass('transform100');
          currentNavState = NAV_STATE.RIGHT;
        }else if (currentNavState === NAV_STATE.RIGHT){
          r.removeClass('active transform-200').addClass('transform-300 inactive');
          l.removeClass('inactive transform100 cutoff').addClass('active transform0');
          m.removeClass('transform-200').addClass('transform0');
          currentNavState = NAV_STATE.LEFT;
        }else{
          l.removeClass('active transform0').addClass('inactive transform-100');
          m.removeClass('transform-200 inactive cutoff').addClass('active transform-100');
          r.removeClass('transform-300').addClass('transform-100');
          currentNavState = NAV_STATE.MIDDLE;
        }
      }else{
        if (currentNavState === NAV_STATE.MIDDLE){
          m.removeClass('active transform-100').addClass('inactive transform0');
          r.removeClass('transform-100').addClass('transform-300');
          l.removeClass('inactive transform-100 cutoff').addClass('active transform0');
          currentNavState = NAV_STATE.LEFT;
        }else if (currentNavState === NAV_STATE.LEFT){
          l.removeClass('active transform0').addClass('inactive transform100');
          r.removeClass('inactive transform-300 cutoff').addClass('active transform-200');
          m.removeClass('transform0').addClass('transform-200');
          currentNavState = NAV_STATE.RIGHT;
        }else{
          m.removeClass('inactive transform-200 cutoff').addClass('active transform-100');
          r.removeClass('active transform-200').addClass('inactive transform-100');
          l.removeClass('transform100').addClass('transform-100');
          currentNavState = NAV_STATE.MIDDLE;
        }
      }

      var leftPos = $('.icon-left').position();
      leftPos.top = leftPos.top + margin_above_initials;
      leftPos.left = leftPos.left + margin_above_initials;

      var rightPos = $('.icon-right').position();
      rightPos.top = rightPos.top + margin_above_initials;
      rightPos.left = rightPos.left + margin_above_initials;

      var activePos = $('.icon-active').position();
      activePos.top = activePos.top + margin_above_initials;
      activePos.left = activePos.left + margin_above_initials;

      var radius = (rightPos.left - leftPos.left)/2;
      var centerPointLeft = activePos.left;
      var centerPointTop = leftPos.top;

      // (x - center of circle)^2 + (y-center of circle) ^2 = radius ^2;
      //use requestAnimationFrame to set the x value based on time, then find y value based on that.
      window.requestAnimationFrame(navAnimation(centerPointLeft,
                              centerPointTop,
                              (direction === "clockwise"),
                              leftPos,
                              rightPos,
                              activePos,
                              radius));
}

function animationFunction(direction){

  return function(){
    if (shortened){
      unshorten();
      setTimeout(function(){
        circleAnimation(direction);
      }, 200);
    }
    else{
      circleAnimation(direction);
    }
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

  // initialNavSize = name.height() +
  initialNavSize = final_navbar_fontsize +
    padding_below_initials +
    padding_above_initials +
    margin_below_initials +
    margin_above_initials;

  var wordHeight = $(window).height() - initialNavSize;

  wordHeight = wordHeight/2;
  margin_top = wordHeight;
  animationStoppingPoint = $(window).height() - initialNavSize;
  $('#intro_background_color').css('height', $(window).height());
  intro_background.css('height', $(window).height());
  top_intro_heading.height(wordHeight);

}

function scrollHandler(){

  var midway_point = margin_top/2;
  var scrollTop = $(this).scrollTop();

  var top_intro_heading_height = margin_top - scrollTop;
  if (top_intro_heading_height < 0) top_intro_heading_height = 0;

  top_intro_heading.height(top_intro_heading_height);

  if (scrollTop < midway_point){

    if(currentState !== STATE.ONE){
      adjustToState1(midway_point, scrollTop);
    }

    var calc = (midway_point - scrollTop)/midway_point;
    if (calc < 0) calc = 0;
    intro_background.css({ 'opacity': calc });
    rest_of_name_1.css({ 'opacity': calc });
    rest_of_name_2.css({ 'opacity': calc });

  }else if (scrollTop > midway_point && scrollTop < margin_top){

    if(currentState !== STATE.TWO){
      adjustToState2();
    }

    var scale = (1 - (scrollTop - midway_point)/midway_point);
    if (scale <= 1) {
      var calc_one = scale * rest_of_name_1_width;
      var calc_two = scale * rest_of_name_2_width;
      var font_size = (scale * (intro_font_size - final_navbar_fontsize)) + final_navbar_fontsize;
      if (font_size < final_navbar_fontsize) font_size = final_navbar_fontsize;
      if (calc_one < 0) calc_one = 0;
      if (calc_two < 0) calc_two = 0;
      rest_of_name_1.css({ 'width': calc_one });
      rest_of_name_2.css({ 'width': calc_two });
      intro_heading.css({ 'font-size': font_size });
    }

  }else if (scrollTop > margin_top && scrollTop < animationStoppingPoint){

    //necessary so setUpNavbar doesn't get janked
    intro_heading.css({ 'font-size': final_navbar_fontsize });

    if (notSetUp){
      setUpNavbar();
    }

    if(currentState !== STATE.THREE){
      adjustToState3();
    }

    var lengthTraveledSoFar = scrollTop-margin_top;

    ratio = lengthTraveledSoFar/margin_top;

    var offset = (lengthOfMainCircle/2) * (1 - ratio) + (lengthOfMainCircle/2) - 1;

    icons.css({'opacity': ratio});

    rightPath.style.strokeDashoffset = offset;
    leftPath.style.strokeDashoffset = offset;

  }else if (scrollTop >= animationStoppingPoint){

    //necessary so setUpNavbar doesn't get janked
    intro_heading.css({ 'font-size': final_navbar_fontsize });

    if (notSetUp){
      setUpNavbar();
    }

    if(currentState !== STATE.FOUR){
      adjustToState4();
    }

    $(window).scroll(function(event){
      didScroll = true;
    });
  }
}

function setUpNavbar(){

  animationStoppingPoint = animationStoppingPoint + initialNavSize - intro_heading.outerHeight(true);

  notSetUp = false;
  var constantSpaceBetweenCircleAndTop = parseInt(((intro_heading.css('margin-top')).split('px'))[0]);
  var constantSpaceBetweenCircleAndContent = 20;

  intro_heading.css({'font-size': final_navbar_fontsize});

  navbar_height = intro_heading.height() +
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
  leftPath = document.querySelector('#left_half_circle');

  if (rightPath.getTotalLength){
    lengthOfMainCircle = rightPath.getTotalLength();
  }else{
    lengthOfMainCircle = 2 * Math.PI * rightPath.getAttribute('r');
  }

  rightPath.style.strokeDasharray = lengthOfMainCircle + ' ' + lengthOfMainCircle;
  rightPath.style.strokeDashoffset = 0;
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
  if (st > lastScrollTop && st > (navbarHeight/2) && st > (animationStoppingPoint+75)){
    // Scroll Down
    if (!shortened) shorten();
  } else {
    // Scroll Up
    // If did not scroll past the document (possible on mac)...
    if(st + $(window).height() < $(document).height()) {
      if (shortened) unshorten();
    }
  }
  lastScrollTop = st;
}

function shorten(){
  $('#left_half_circle').addClass("line").removeClass('circle');
  $('#right_half_circle').addClass("line").removeClass('circle');

  $('#nav').css({'top': (-1 * navbarHeight/1.4)});
  $('#nav_sticky').css({'top': (-1 * navbarHeight/1.4)});
  $('.icon-left').css({'top' : '95.5%'});
  $('.icon-right').css({'top':'95.5%'});
  shortened = true;
}

function unshorten(){
  $('#nav').css({'top': 0});
  $('#nav_sticky').css({'top': 0});
  $('.icon-left').css({'top' : '55%'});
  $('.icon-right').css({'top': '55%'});
  $('#left_half_circle').removeClass("line").addClass('circle');
  $('#right_half_circle').removeClass("line").addClass('circle');
  shortened = false;
}

function adjustToState1(){
  currentState = STATE.ONE;

  rest_of_name_1.css({ 'width': rest_of_name_1_width });
  rest_of_name_2.css({ 'width': rest_of_name_2_width });
  intro_heading.css({'font-size': intro_font_size});
  $('#nav_sticky').css({'background-color':'transparent'});

  $('.icon-circle').css({'opacity': '0'});
  icons.css({'opacity': 0});

  $('.icon-right').unbind('click');
  $('.icon-left').unbind('click');
  $('#nav_sticky').removeClass("bottom_border");
  $('#intro_background_color').addClass('bottom_border');

  if(!notSetUp){
    rightPath.style.strokeDashoffset = lengthOfMainCircle;
    leftPath.style.strokeDashoffset = lengthOfMainCircle;
  }
}

function adjustToState2(){
  currentState = STATE.TWO;

  intro_background.css({ 'opacity': 0 });
  rest_of_name_1.css({ 'opacity': 0 });
  rest_of_name_2.css({ 'opacity': 0 });
  $('#nav_sticky').css({'background-color':'#A2B6D8'});

  $('.icon-circle').css({'opacity': 0});
  icons.css({'opacity': 0});


  $('.icon-right').unbind('click');
  $('.icon-left').unbind('click');
  $('#nav_sticky').removeClass("bottom_border");
  $('#intro_background_color').addClass('bottom_border');

  if(!notSetUp){
    rightPath.style.strokeDashoffset = lengthOfMainCircle;
    leftPath.style.strokeDashoffset = lengthOfMainCircle;
  }
}

function adjustToState3(){
  currentState = STATE.THREE;

  intro_background.css({ 'opacity': 0 });
  rest_of_name_1.css({ 'width': 0, 'opacity': 0 });
  rest_of_name_2.css({ 'width': 0, 'opacity': 0 });
  intro_heading.css({'font-size': final_navbar_fontsize});
  $('#nav_sticky').css({'background-color':'#A2B6D8'});

  $('.icon-circle').css({'opacity': '1'});

  $('.icon-right').unbind('click');
  $('.icon-left').unbind('click');
  $('.icon-right').click(animationFunction("clockwise"));
  $('.icon-left').click(animationFunction("counter-clockwise"));

  $('#nav_sticky').removeClass("bottom_border");
  $('#intro_background_color').addClass('bottom_border');

}

function adjustToState4(){
  currentState = STATE.FOUR;

  intro_background.css({ 'opacity': 0 });
  rest_of_name_1.css({ 'width': 0, 'opacity': 0 });
  rest_of_name_2.css({ 'width': 0, 'opacity': 0 });
  intro_heading.css({'font-size': final_navbar_fontsize});
  $('#nav_sticky').css({'background-color':'#A2B6D8'});
  $('.icon-circle').css({'opacity': '1'});

  top_intro_heading_height = 0;
  top_intro_heading.css('height', top_intro_heading_height);
  rightPath.style.strokeDashoffset = 0;
  leftPath.style.strokeDashoffset = 0;
  icons.css({'opacity': 1});
  $('#nav_sticky').addClass("bottom_border");
  $('#intro_background_color').removeClass('bottom_border');


  $('.icon-right').unbind('click');
  $('.icon-left').unbind('click');
  $('.icon-right').click(animationFunction("clockwise"));
  $('.icon-left').click(animationFunction("counter-clockwise"));

  navbarHeight = $('#nav_sticky').outerHeight();
}


function openModal() {
  $('body').css({'overflow-y':'hidden'});
  $('.entireBodyWrapper').css({'overflow-y':'hidden'});

  document.getElementById('myModal').style.height = $(window).height() + "px";
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  $('body').css({'overflow-y':'scroll'});
  $('.entireBodyWrapper').css({'overflow-y':'scroll'});
}

var slideIndex = 1;

function plusSlides(n) {
  if (n === 1){
    if (slideIndex === 27){
      slideIndex = 0;
    }else if (slideIndex === 60){
      slideIndex = 27;
    }
    showSlides(slideIndex += n);
  }
  else if (n === -1){
    if (slideIndex === 28){
      slideIndex = 61;
    }else if (slideIndex === 1){
      slideIndex = 28;
    }
    showSlides(slideIndex += n);
  }
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
}
