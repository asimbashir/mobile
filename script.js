//var backend_url = 'http://localhost/mobile_be/index.php/';
//var backend_url = 'http://vfixit.netii.net/index.php/';
var backend_url = 'http://vfixitmobile.22startups.com/index.php/';

function log(data) {
  console.log(data);
}

function checkSesion() {
  if (localStorage.uid && parseInt(localStorage.uid) > 0) {
    return true;
  }

  window.location = 'signup.html';
}

$(document).on("pageinit", function(event) {
  var activePage = $(event.target);
  
  if (activePage[0].id != 'splash_screen' && activePage[0].id != 'signup_page' && activePage[0].id != 'login_page' && activePage[0].id != 'home_page' && activePage[0].id != 'services_page' && activePage[0].id != 'contact_page'
          && (!localStorage.uid || !parseInt(localStorage.uid))) {
    window.location = 'signup.html';
  }

  if ((activePage[0].id == 'signup_page' || activePage[0].id == 'login_page') 
          && (localStorage.uid && parseInt(localStorage.uid) > 0)) {
    window.location = 'services.html';
  }

});

$(document).bind("mobileinit", function() {
  $('.spalsh').on('touchmove', false);
  $('a').attr('data-role', 'false');
  $.mobile.ajaxEnabled = false;
});

$(document).bind("pageshow", function() {
  var height = window.innerHeight ? window.innerHeight : $(window).height();
  $('.ui-content').height((height - (107+35+20+10))); // Header+footer+padding(top,bottom)+margin-bottom
});

$(document).ready(function() {
  $('a').attr('data-ajax', 'false');
  var height = window.innerHeight ? window.innerHeight : $(window).height();
  var width = window.innerWidth ? window.innerWidth : $(window).width();

  if(width > 300){
    $('.splash').css({'left': ((width-300)/2)});
  } else{
    $('.splash').css({'left': 0});
  }
  if(height > 175){
    $('.splash').css({'top': ((height-175)/2.5)});
  } else{
    $('.splash').css({'top': 0});
  }
});

function getUrlVars()
{
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function bottomTabs(){
  if (!localStorage.uid || !parseInt(localStorage.uid)) {
    $("#bottom-left").html('Sign up');
    $("#bottom-left").attr('href','signup.html');
    $("#bottom-right").html('Login');
    $("#bottom-right").attr('href','login.html');
  }

  if (localStorage.uid && parseInt(localStorage.uid) > 0) {
    $("#bottom-left").html('Services');
    $("#bottom-left").attr('href','services.html');
    $("#bottom-right").html('Contact');
    $("#bottom-right").attr('href','contact.html');
  }
}