/* global $, a, i*/
$(document).ready(function() {
  var style;
  switch ((localStorage.getItem(style))) {
    case '1':
      $('.mepage, .intpagexs, .intpage, .contact, .skillspage, .bookspage , .gamespage, .videospage, .audiospage').hide();
      $('body, div.container').removeClass('mepage intpagexs intpage contact skillspage bookspage gamespage videospage audiospage');
      $('body, div.container').addClass('startpage');
      $('.startpage').show();
      $('title').text('Start');
      break;
    case '2':
      $('.startpage, .intpagexs, .intpage, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
      $('body, div.container, #links2').removeClass('startpage intpagexs intpage contact skillspage bookspage gamespage videospage audiospage');
      $('body, div.container, #links2').addClass('mepage');
      $('.mepage').show();
      $('.allnav').css('background-color', '#B0FFD8');
      $('#ame').css('width', '105%');
      $('#ame').css('background-color', '#327F59');
      if ($(window).width() > 991) {
        $('#ask, #acon, #ahob').css('width', '100%');
      }
      else {
        $('#ask, #acon, #ahob').css('width', '90%');
      }
      $('title').text('Me');
      break;
    case '3':
      $('.startpage, .mepage, intpagexs, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
      $('body, div.container, #links2').removeClass('mepage intpagexs startpage contact skillspage bookspage gamespage videospage audiospage');
      $('body, div.container, #links2').addClass('intpage');
      $('.allnav').css('background-color', '#EFEEEB');
      $('.intpage').show();
      $('#ahob').css('width', '105%');
      $('#ahob').css('background-color', '#6F674C');
      if ($(window).width() > 991) {
        $('#ask, #acon, #ame').css('width', '100%');
      }
      else {
        $('#ask, #acon, #ame').css('width', '90%');
      }
      $('title').text('Interests');
      break;
    case '4':
      $('.startpage, .intpage, .mepage, .skillspage, .intpagexs, .bookspage, .gamespage, .videospage, .audiospage').hide();
      $('body, div.container, #links2').removeClass('mepage intpage skillspage intpagexs startpage bookspage gamespage videospage audiospage');
      $('body, div.container, #links2').addClass('contact');
      $('.allnav').css('background-color', '#7F7F7F');
      $('.contact').show();
      $('#acon').css('width', '105%');
      $('#acon').css('background-color', '#946868');
      if ($(window).width() > 991) {
        $('#ask, #ame, #ahob').css('width', '100%');
      }
      else {
        $('#ask, #ame, #ahob').css('width', '90%');
      }
      $('title').text('Contacts');
      break;
    case '5':
      $('.startpage, .intpage, .contact, .mepage, .bookspage, .intpagexs, .gamespage, .videospage, .audiospage').hide();
      $('body, div.container, #links2').removeClass('mepage intpage contact intpagexs startpage bookspage gamespage videospage audiospage');
      $('body, div.container, #links2').addClass('skillspage');
      $('.allnav').css('background-color', '#B2A1A1');
      $('.skillspage').show();
      $('#ask').css('width', '105%');
      $('#ask').css('background-color', '#FE9A9A');
      if ($(window).width() > 991) {
        $('#ame, #acon, #ahob').css('width', '100%');
      }
      else {
        $('#ame, #acon, #ahob').css('width', '90%');
      }
      $('title').text('Skills');
      break;
    case '6':
      $('.intpage, .gamespage, .videospage, .audiospage, .startpage').hide();
      $('body, div.container').removeClass('intpage gamespage videospage audiospage startpage');
      $('body, div.container').addClass('bookspage');
      $('.bookspage').show();
      $('title').text('Books');
      $('#bklinkbooks').css('width', '115%');
      $('#bklinkbooks').css('height', '15%');
      $('#bklinkbooks').css('top', '5%');
      $('#bklinkvideos, #bklinkmusic, #bklinkgames').css('width', '100%');
      $('#bklinkvideos, #bklinkmusic, #bklinkgames').css('height', '25%');
      $('#bklinkvideos').css('top', '25%');
      $('#bklinkmusic').css('top', '50%');
      $('#bklinkgames').css('top', '75%');
      break;
    case '7':
      $('.intpage, .audiospage, .bookspage, .videospage, .startpage').hide();
      $('body, div.container').removeClass('intpage bookspage videospage audiospage startpage');
      $('body, div.container').addClass('gamespage');
      $('.gamespage').show();
      $('title').text('Games');
      $('#bklinkgames').css('width', '115%');
      $('#bklinkgames').css('height', '15%');
      $('#bklinkgames').css('top', '80%');
      $('#bklinkvideos, #bklinkmusic, #bklinkbooks').css('width', '100%');
      $('#bklinkvideos, #bklinkmusic, #bklinkbooks').css('height', '25%');
      $('#bklinkvideos').css('top', '25%');
      $('#bklinkmusic').css('top', '50%');
      $('#bklinkbooks').css('top', '0%');
      break;
    case '8':
      $('.intpage, .bookspage, .gamespage, .audiospage, .startpage').hide();
      $('body, div.container').removeClass('intpage bookspage gamespage audiospage startpage');
      $('body, div.container').addClass('videospage');
      $('.videospage').show();
      $('title').text('Videos');
      $('#bklinkvideos').css('width', '115%');
      $('#bklinkvideos').css('height', '15%');
      $('#bklinkvideos').css('top', '30%');
      $('#bklinkgames, #bklinkmusic, #bklinkbooks').css('width', '100%');
      $('#bklinkgames, #bklinkmusic, #bklinkbooks').css('height', '25%');
      $('#bklinkgames').css('top', '75%');
      $('#bklinkmusic').css('top', '50%');
      $('#bklinkbooks').css('top', '0%');
      break;
    case '9':
      $('.intpage, .bookspage, .gamespage, .videospage, .startpage').hide();
      $('body, div.container').removeClass('intpage bookspage gamespage videospage startpage');
      $('body, div.container').addClass('audiospage');
      $('.audiospage').show();
      $('title').text('Music');
      $('#bklinkmusic').css('width', '115%');
      $('#bklinkmusic').css('height', '15%');
      $('#bklinkmusic').css('top', '55%');
      $('#bklinkgames, #bklinkvideos, #bklinkbooks').css('width', '100%');
      $('#bklinkgames, #bklinkvideos, #bklinkbooks').css('height', '25%');
      $('#bklinkgames').css('top', '75%');
      $('#bklinkvideos').css('top', '25%');
      $('#bklinkbooks').css('top', '0%');
      break;
    default:
      $('.mepage, .intpagexs, .intpage, .contact, .skillspage, .bookspage , .gamespage, .videospage, .audiospage').hide();
      $('body, div.container').removeClass('mepage intpagexs intpage contact skillspage bookspage gamespage videospage audiospage');
      $('body, div.container').addClass('startpage');
      $('.startpage').show();
      $('title').text('start');
  }
  $('#stlinkcontacts').on('mouseenter', function() {
    if ($(window).width() > 991) {
      $(this).toggleClass('backgroundcontacts bgfa').animate({
        'bottom': '5%',
        'left': '15%'
      }, 'slow');
      $('.linktextc').toggle('slow');
    }
    else if ($(window).width() > 767) {
      $(this).toggleClass('backgroundcontacts bgfa').animate({
        'left': '10%',
        'margin': '0 0'
      }, 'slow');
      $('.linktextc').toggle('slow');
    }
    else {
      $(this).css('background-color', '#1C1C1C')
      $(this).css('color', 'yellow')
    }
  });
  $('#stlinkcontacts').on('mouseleave', function() {
    if ($(window).width() > 991) {
      $(this).toggleClass('backgroundcontacts bgfa').animate({
        'bottom': '10%',
        'left': '0'
      }, 'slow');
      $('.linktextc').toggle('slow');
    }
    else if ($(window).width() > 767) {
      $(this).toggleClass('backgroundcontacts bgfa').animate({
        'left': '0%'
      }, 'slow');
      $('.linktextc').toggle('slow');
    }
    else {
      $(this).css('background-color', '')
      $(this).css('color', '#1C1C1C')
    }
  });
  $('#stlinkskills').on('mouseenter', function() {
    if ($(window).width() > 991) {
      $(this).toggleClass('backgroundskills bgfa').animate({
        'top': '5%',
        'left': '15%'
      }, 'slow');
      $('.linktexts').toggle('slow');
    }
    else if ($(window).width() > 767) {
      $(this).toggleClass('backgroundskills bgfa').animate({
        'left': '10%',
        'margin': '0 0'
      }, 'slow');
      $('.linktexts').toggle('slow');
    }
    else {
      $(this).css('background-color', '#1C1C1C')
      $(this).css('color', 'yellow')
    }
  });
  $('#stlinkskills').on('mouseleave', function() {
    if ($(window).width() > 991) {
      $(this).toggleClass('backgroundskills bgfa').animate({
        'top': '10%',
        'left': '0%'
      }, 'slow');
      $('.linktexts').toggle('slow');
    }
    else if ($(window).width() > 767) {
      $(this).toggleClass('backgroundskills bgfa').animate({
        'left': '0%'
      }, 'slow');
      $('.linktexts').toggle('slow');
    }
    else {
      $(this).css('background-color', '')
      $(this).css('color', '#1C1C1C')
    }
  });
  $('#stlinkme').on('mouseenter', function() {
    if ($(window).width() > 991) {
      $(this).toggleClass('backgroundsme bgfa').animate({
        'top': '5%',
        'left': '-5%'
      }, 'slow');
      $('.linktextm').toggle('slow');
    }
    else if ($(window).width() > 767) {
      $(this).toggleClass('backgroundsme bgfa').animate({
        'left': '10%'
      }, 'slow');
      $('.linktextm').toggle('slow');
    }
    else {
      $(this).css('background-color', '#1C1C1C')
      $(this).css('color', 'yellow')
    }
  });
  $('#stlinkme').on('mouseleave', function() {
    if ($(window).width() > 991) {
      $(this).toggleClass('backgroundsme bgfa').animate({
        'top': '10%',
        'left': '0%'
      }, 'slow');
      $('.linktextm').toggle('slow');
    }
    else if ($(window).width() > 767) {
      $(this).toggleClass('backgroundsme bgfa').animate({
        'left': '0%'
      }, 'slow');
      $('.linktextm').toggle('slow');
    }
    else {
      $(this).css('background-color', '')
      $(this).css('color', '#1C1C1C')
    }
  });
  $('#stlinkhobbies').on('mouseenter', function() {
    if ($(window).width() > 991) {
      $(this).toggleClass('backgroundshobbies bgfa').animate({
        'bottom': '5%',
        'left': '-5%'
      }, 'slow');
      $('.linktexth').toggle('slow');
    }
    else if ($(window).width() > 767) {
      $(this).toggleClass('backgroundshobbies bgfa').animate({
        'left': '10%'
      }, 'slow');
      $('.linktexth').toggle('slow');
    }
    else {
      $(this).css('background-color', '#1C1C1C')
      $(this).css('color', 'yellow')
    }
  });
  $('#stlinkhobbies').on('mouseleave', function() {
    if ($(window).width() > 991) {
      $(this).toggleClass('backgroundshobbies bgfa').animate({
        'bottom': '10%',
        'left': '0%'
      }, 'slow');
      $('.linktexth').toggle('slow');
    }
    else if ($(window).width() > 767) {
      $(this).toggleClass('backgroundshobbies bgfa').animate({
        'left': '0%'
      }, 'slow');
      $('.linktexth').toggle('slow');
    }
    else {
      $(this).css('background-color', '');
      $(this).css('color', '#1C1C1C');
    }
  });
  $('#intlinkbooks').on('mouseenter', function() {
    if ($(window).width() > 768) {
      $(this).css('background-image', 'url(style/imgs/intrefs/intbook.jpg)');
      $(this).css('background-size', '100% 100%');
      $(this).css('height', '60%');
      $('#bookhide').css('display', 'none');
      $(this).css('width', '60%');
    }
  });
  $('#intlinkbooks').on('mouseleave', function() {
    $(this).css('background-image', '');
    $(this).css('height', '0%');
    $('#bookhide').css('display', 'block');
    $(this).css('width', '0%');
  });
  $('#intlinkgames').on('mouseenter', function() {
    if ($(window).width() > 768) {
      $(this).css('background-image', 'url(style/imgs/intrefs/intgame.jpg)');
      $(this).css('background-size', '100% 100%');
      $(this).css('height', '60%');
      $('#gamehide').css('display', 'none');
      $(this).css('width', '60%');
    }
  });
  $('#intlinkgames').on('mouseleave', function() {
    $(this).css('background-image', '');
    $(this).css('height', '0%');
    $('#gamehide').css('display', 'block');
    $(this).css('width', '0%');
  });
  $('#intlinkvideos').on('mouseenter', function() {
    if ($(window).width() > 768) {
      $(this).css('background-image', 'url(style/imgs/intrefs/intfilm.jpg)');
      $(this).css('background-size', '100% 100%');
      $(this).css('height', '60%');
      $('#videohide').css('display', 'none');
      $(this).css('width', '60%');
    }
  });
  $('#intlinkvideos').on('mouseleave', function() {
    $(this).css('background-image', '');
    $(this).css('height', '0%');
    $('#videohide').css('display', 'block');
    $(this).css('width', '0%');
  });
  $('#intlinkmusic').on('mouseenter', function() {
    if ($(window).width() > 768) {
      $(this).css('background-image', 'url(style/imgs/intrefs/intmus.jpg)');
      $(this).css('background-size', '100% 100%');
      $(this).css('height', '60%');
      $('#mushide').css('display', 'none');
      $(this).css('width', '60%');
    }
  });
  $('#intlinkmusic').on('mouseleave', function() {
    $(this).css('background-image', '');
    $(this).css('height', '0%');
    $('#mushide').css('display', 'block');
    $(this).css('width', '0%');
  });
  $('#linkfb, #linkvk').on('mouseenter', function() {
    if ($(window).width() > 768) {
      $(this).css('width', '6%');
      $(this).css('height', '40%');
      $(this).css('background-size', '100% 100%')
    }
  });
  $('#linkfb, #linkvk').on('mouseleave', function() {
    $(this).css('width', '30px');
    $(this).css('height', '30px');
  });
  $('#stlinkme, #intlinkme, #clinkme, #sklinkme, #bklinkme, #mlinkme').on('click', function() {
    $('.startpage, .intpagexs, .intpage, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container, #links2').removeClass('startpage intpagexs intpage contact skillspage bookspage gamespage videospage audiospage');
    $('body, div.container, #links2').addClass('mepage');
    $('.mepage').show();
    $('.allnav').css('background-color', '#B0FFD8');
    $('#ame').css('width', '105%');
    if ($(window).width() > 991) {
      $('#ask, #acon, #ahob').css('width', '100%');
    }
    else {
      $('#ask, #acon, #ahob').css('width', '90%');
    }
    $('#ame').css('background-color', '#327F59');
    $('title').text('Me');
    localStorage.setItem(style, 2);
    a = localStorage.getItem(style);
  });
  $('#mlinkstart, #intlinkstart, #clinkstart, #sklinkstart, #bklinkstart').on('click', function() {
    $('.mepage, .intpage, .intpagexs, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container').removeClass('mepage intpage intpagexs contact skillspage bookspage gamespage videospage audiospage');
    $('body, div.container').addClass('startpage');
    $('.startpage').show();
    $('title').text('Start');
    localStorage.setItem(style, 1);
    a = localStorage.getItem(style);
  });
  $('#stlinkhobbies, #mlinkhobbies, #clinkhobbies, #sklinkhobbies, #bklinkhobbies').on('click', function() {
    $('.startpage, .mepage, intpagexs, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container, #links2').removeClass('mepage intpagexs startpage contact skillspage bookspage gamespage videospage audiospage');
    $('body, div.container, #links2').addClass('intpage');
    $('.allnav').css('background-color', '#EFEEEB');
    $('.intpage').show();
    $('#ahob').css('width', '105%');
    $('#ahob').css('background-color', '#6F674C');
    if ($(window).width() > 991) {
      $('#ask, #ame, #acon').css('width', '100%');
    }
    else {
      $('#ask, #ame, #acon').css('width', '90%');
    }
    $('title').text('Interests');
    localStorage.setItem(style, 3);
    a = localStorage.getItem(style);
  });
  $('#stlinkcontacts, #mlinkcontacts, #intlinkcontacts, #sklinkcontacts, #bklinkcontacts').on('click', function() {
    $('.startpage, .intpage, .mepage, .skillspage, .intpagexs, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container, #links2').removeClass('mepage intpage skillspage intpagexs startpage bookspage gamespage videospage audiospage');
    $('body, div.container, #links2').addClass('contact');
    $('.allnav').css('background-color', '#7F7F7F');
    $('.contact').show();
    $('#acon').css('background-color', '#946868');
    $('#acon').css('width', '105%');
    if ($(window).width() > 991) {
      $('#ask, #ame, #ahob').css('width', '100%');
    }
    else {
      $('#ask, #ame, #ahob').css('width', '90%');
    }
    $('title').text('Contacts');
    localStorage.setItem(style, 4);
    a = localStorage.getItem(style);
  });
  $('#stlinkskills, #mlinkskills, #intlinkskills, #clinkskills, #bklinkskills').on('click', function() {
    $('.startpage, .intpage, .contact, .mepage, .bookspage, .intpagexs, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container, #links2').removeClass('mepage intpage contact intpagexs startpage bookspage gamespage videospage audiospage');
    $('body, div.container, #links2').addClass('skillspage');
    $('.allnav').css('background-color', '#B2A1A1');
    $('.skillspage').show();
    $('#ask').css('width', '105%');
    if ($(window).width() > 991) {
      $('#ame, #acon, #ahob').css('width', '100%');
    }
    else {
      $('#ame, #acon, #ahob').css('width', '90%');
    }
    $('#ask').css('background-color', '#FE9A9A');
    $('title').text('Skills');
    localStorage.setItem(style, 5);
    a = localStorage.getItem(style);
  });
  $('#clik1').one('mouseenter', function() {
    if ($(window).width() > 991) {
      var pirduha = document.getElementById('clik1');
      pirduha.innerHTML = pirduha.innerHTML + '-Native';
    }
  });
  $('#clik1').on('mouseenter', function() {
    if ($(window).width() > 991) {
      $('#ukr').css('display', 'block');
      var countries = document.getElementById("ukr").getContext("2d");
      var pieData = [{
        value: 100,
        color: "blue"
      }];
      var pieOptions = {
        segmentShowStroke: true,
        animateScale: true
      };
      new Chart(countries).Pie(pieData, pieOptions);
    }
  });
  $('#clik1').on('mouseleave', function() {
    $('#ukr').css('display', 'none');
  });
  $('#clik2').one('mouseenter', function() {
    if ($(window).width() > 991) {
      var pirduha = document.getElementById('clik2');
      pirduha.innerHTML = pirduha.innerHTML + '-Advanced';
    }
  });
  $('#clik2').on('mouseenter', function() {
    if ($(window).width() > 991) {
      $('#rus').css('display', 'block');
      var countries = document.getElementById("rus").getContext("2d");
      var pieData = [{
        value: 85,
        color: "white"
      }, {
        value: 15,
        color: "red"
      }];
      var pieOptions = {
        segmentShowStroke: true,
        animateScale: true
      };
      new Chart(countries).Pie(pieData, pieOptions);
    }
  });
  $('#clik2').on('mouseleave', function() {
    $('#rus').css('display', 'none');
  });
  $('#clik3').one('mouseenter', function() {
    if ($(window).width() > 991) {
      var pirduha = document.getElementById('clik3');
      pirduha.innerHTML = pirduha.innerHTML + '-Lower-Intermediate';
    }
  });
  $('#clik3').on('mouseenter', function() {
    if ($(window).width() > 991) {
      $('#eng').css('display', 'block');
      var countries = document.getElementById("eng").getContext("2d");
      var pieData = [{
        value: 42,
        color: "blue"
      }, {
        value: 58,
        color: "red"
      }];
      var pieOptions = {
        segmentShowStroke: true,
        animateScale: true
      };
      new Chart(countries).Pie(pieData, pieOptions);
    }
  });
  $('#clik3').on('mouseleave', function() {
    $('#eng').css('display', 'none');
  });
  $('#clik4').one('mouseenter', function() {
    if ($(window).width() > 991) {
      var pirduha = document.getElementById('clik4');
      pirduha.innerHTML = pirduha.innerHTML + '-Good';
    }
  });
  $('#clik4').on('mouseenter', function() {
    if ($(window).width() > 991) {
      $('#html').css('display', 'block');
      var countries = document.getElementById("html").getContext("2d");
      var pieData = [{
        value: 50,
        color: "blue"
      }, {
        value: 50,
        color: "black"
      }];
      var pieOptions = {
        segmentShowStroke: true,
        animateScale: true
      };
      new Chart(countries).Pie(pieData, pieOptions);
    }
  });
  $('#clik4').on('mouseleave', function() {
    $('#html').css('display', 'none');
  });
  $('#clik5').one('mouseenter', function() {
    if ($(window).width() > 991) {
      var pirduha = document.getElementById('clik5');
      pirduha.innerHTML = pirduha.innerHTML + '-Good';
    }
  });
  $('#clik5').on('mouseenter', function() {
    if ($(window).width() > 991) {
      $('#css').css('display', 'block');
      var countries = document.getElementById("css").getContext("2d");
      var pieData = [{
        value: 50,
        color: "blue"
      }, {
        value: 50,
        color: "black"
      }];
      var pieOptions = {
        segmentShowStroke: true,
        animateScale: true
      };
      new Chart(countries).Pie(pieData, pieOptions);
    }
  });
  $('#clik5').on('mouseleave', function() {
    $('#css').css('display', 'none');
  });
  $('#clik6').one('mouseenter', function() {
    if ($(window).width() > 991) {
      var pirduha = document.getElementById('clik6');
      pirduha.innerHTML = pirduha.innerHTML + '-Basic';
    }
  });
  $('#clik6').on('mouseenter', function() {
    if ($(window).width() > 991) {
      $('#js').css('display', 'block');
      var countries = document.getElementById("js").getContext("2d");
      var pieData = [{
        value: 25,
        color: "blue"
      }, {
        value: 75,
        color: "black"
      }];
      var pieOptions = {
        segmentShowStroke: true,
        animateScale: true
      };
      new Chart(countries).Pie(pieData, pieOptions);
    }
  });
  $('#clik6').on('mouseleave', function() {
    $('#js').css('display', 'none');
  });
  $('#intlinkbooks, #bklinkbooks').on('click', function() {
    $('.intpage, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container').removeClass('intpage gamespage videospage audiospage');
    $('body, div.container').addClass('bookspage');
    $('.bookspage').show();
    $('title').text('Books');
    $('#bklinkbooks').css('width', '115%');
    $('#bklinkbooks').css('height', '15%');
    $('#bklinkbooks').css('top', '5%');
    $('#bklinkvideos, #bklinkmusic, #bklinkgames').css('width', '100%');
    $('#bklinkvideos, #bklinkmusic, #bklinkgames').css('height', '25%');
    $('#bklinkvideos').css('top', '25%');
    $('#bklinkmusic').css('top', '50%');
    $('#bklinkgames').css('top', '75%');
    localStorage.setItem(style, 6);
    a = localStorage.getItem(style);
  });
  $('#intlinkgames, #bklinkgames').on('click', function() {
    $('.intpage, .audiospage, .bookspage, .videospage').hide();
    $('body, div.container').removeClass('intpage bookspage videospage audiospage');
    $('body, div.container').addClass('gamespage');
    $('.gamespage').show();
    $('title').text('Games');
    $('#bklinkgames').css('width', '115%');
    $('#bklinkgames').css('height', '15%');
    $('#bklinkgames').css('top', '80%');
    $('#bklinkvideos, #bklinkmusic, #bklinkbooks').css('width', '100%');
    $('#bklinkvideos, #bklinkmusic, #bklinkbooks').css('height', '25%');
    $('#bklinkvideos').css('top', '25%');
    $('#bklinkmusic').css('top', '50%');
    $('#bklinkbooks').css('top', '0%');
    localStorage.setItem(style, 7);
    a = localStorage.getItem(style);
  });
  $('#intlinkvideos, #bklinkvideos').on('click', function() {
    $('.intpage, .bookspage, .gamespage, .audiospage').hide();
    $('body, div.container').removeClass('intpage bookspage gamespage audiospage');
    $('body, div.container').addClass('videospage');
    $('.videospage').show();
    $('title').text('Videos');
    $('#bklinkvideos').css('width', '115%');
    $('#bklinkvideos').css('height', '15%');
    $('#bklinkvideos').css('top', '30%');
    $('#bklinkgames, #bklinkmusic, #bklinkbooks').css('width', '100%');
    $('#bklinkgames, #bklinkmusic, #bklinkbooks').css('height', '25%');
    $('#bklinkgames').css('top', '75%');
    $('#bklinkmusic').css('top', '50%');
    $('#bklinkbooks').css('top', '0%');
    localStorage.setItem(style, 8);
    a = localStorage.getItem(style);
  });
  $('#intlinkmusic, #bklinkmusic').on('click', function() {
    $('.intpage, .bookspage, .gamespage, .videospage').hide();
    $('body, div.container').removeClass('intpage bookspage gamespage videospage');
    $('body, div.container').addClass('audiospage');
    $('.audiospage').show();
    $('title').text('Music');
    $('#bklinkmusic').css('width', '115%');
    $('#bklinkmusic').css('height', '15%');
    $('#bklinkmusic').css('top', '55%');
    $('#bklinkgames, #bklinkvideos, #bklinkbooks').css('width', '100%');
    $('#bklinkgames, #bklinkvideos, #bklinkbooks').css('height', '25%');
    $('#bklinkgames').css('top', '75%');
    $('#bklinkvideos').css('top', '25%');
    $('#bklinkbooks').css('top', '0%');
    localStorage.setItem(style, 9);
    a = localStorage.getItem(style);
  });
  $(function() {
    $('#btn-send').click(function() {
      $.ajax({
          url: "https://formspree.io/bogdya.linnik@gmail.com",
          method: "POST",
          data: {
            message: sender.value + ': ' + message.value,
            email: email.value
          },
          dataType: "json"
        }).done(function() {})
        .fail(function(jqXHR, textStatus) {});
    });
  });
});
