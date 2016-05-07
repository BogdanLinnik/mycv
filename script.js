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
      $('.allnav').css('background-color','#B0FFD8');
      $('title').text('Me');
      break;
    case '3':
      $('.startpage, .mepage, intpagexs, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
      $('body, div.container, #links2').removeClass('mepage intpagexs startpage contact skillspage bookspage gamespage videospage audiospage');
      $('body, div.container, #links2').addClass('intpage');
      $('.allnav').css('background-color','#EFEEEB');
      $('.intpage').show();
      $('title').text('Interests');
      break;
    case '4':
      $('.startpage, .intpage, .mepage, .skillspage, .intpagexs, .bookspage, .gamespage, .videospage, .audiospage').hide();
      $('body, div.container, #links2').removeClass('mepage intpage skillspage intpagexs startpage bookspage gamespage videospage audiospage');
      $('body, div.container, #links2').addClass('contact');
      $('.allnav').css('background-color','#7F7F7F');
      $('.contact').show();
      $('title').text('Contacts');
      break;
    case '5':
      $('.startpage, .intpage, .contact, .mepage, .bookspage, .intpagexs, .gamespage, .videospage, .audiospage').hide();
      $('body, div.container, #links2').removeClass('mepage intpage contact intpagexs startpage bookspage gamespage videospage audiospage');
      $('body, div.container, #links2').addClass('skillspage');
      $('.allnav').css('background-color','#B2A1A1');
      $('.skillspage').show();
      $('title').text('Skills');
      break;
    case '6':
      $('.intpage, .gamespage, .videospage, .audiospage, .startpage').hide();
      $('body, div.container').removeClass('intpage gamespage videospage audiospage startpage');
      $('body, div.container').addClass('bookspage');
      $('.bookspage').show();
      $('title').text('Books');
      break;
    case '7':
      $('.intpage, .audiospage, .bookspage, .videospage, .startpage').hide();
      $('body, div.container').removeClass('intpage bookspage videospage audiospage startpage');
      $('body, div.container').addClass('gamespage');
      $('.gamespage').show();
      $('title').text('Games');
      break;
    case '8':
      $('.intpage, .bookspage, .gamespage, .audiospage, .startpage').hide();
      $('body, div.container').removeClass('intpage bookspage gamespage audiospage startpage');
      $('body, div.container').addClass('videospage');
      $('.videospage').show();
      $('title').text('Videos');
      break;
    case '9':
      $('.intpage, .bookspage, .gamespage, .videospage, .startpage').hide();
      $('body, div.container').removeClass('intpage bookspage gamespage videospage startpage');
      $('body, div.container').addClass('audiospage');
      $('.audiospage').show();
      $('title').text('Music');
      break;
    default:
      $('.mepage, .intpagexs, .intpage, .contact, .skillspage, .bookspage , .gamespage, .videospage, .audiospage').hide();
      $('body, div.container').removeClass('mepage intpagexs intpage contact skillspage bookspage gamespage videospage audiospage');
      $('body, div.container').addClass('startpage');
      $('.startpage').show();
      $('title').text('start');
  }
  $('#stlinkcontacts').on('mouseenter', function() {
    if($(window).width()>991){
      $(this).toggleClass('backgroundcontacts bgfa').animate({'bottom':'15%'},'slow');
      $('.linktextc').toggle('slow');
    }else if($(window).width()>767){
      $(this).toggleClass('backgroundcontacts bgfa').animate({'left':'10%','margin':'0 0'},'slow');
      $('.linktextc').toggle('slow');
    }else {
      $(this).css('background-color','#1C1C1C')
      $(this).css('color','yellow')
    }
    });
  $('#stlinkcontacts').on('mouseleave', function() {
    if($(window).width()>991){
      $(this).toggleClass('backgroundcontacts bgfa').animate({'bottom':'10%'},'slow');
      $('.linktextc').toggle('slow');
    }else if($(window).width()>767){
      $(this).toggleClass('backgroundcontacts bgfa').animate({'left':'0%'},'slow');
      $('.linktextc').toggle('slow');
    } else {
      $(this).css('background-color','')
      $(this).css('color','#1C1C1C')
    }
    });
  $('#stlinkskills').on('mouseenter', function() {
    if($(window).width()>991){
      $(this).toggleClass('backgroundskills bgfa').animate({'top':'15%'},'slow');
      $('.linktexts').toggle('slow');
    }else if($(window).width()>767){
      $(this).toggleClass('backgroundskills bgfa').animate({'left':'10%','margin':'0 0'},'slow');
      $('.linktexts').toggle('slow');
    }else {
      $(this).css('background-color','#1C1C1C')
      $(this).css('color','yellow')
    }
    });
  $('#stlinkskills').on('mouseleave', function() {
    if($(window).width()>991){
      $(this).toggleClass('backgroundskills bgfa').animate({'top':'10%'},'slow');
      $('.linktexts').toggle('slow');
    }else if($(window).width()>767){
      $(this).toggleClass('backgroundskills bgfa').animate({'left':'0%'},'slow');
      $('.linktexts').toggle('slow');
    } else {
      $(this).css('background-color','')
      $(this).css('color','#1C1C1C')
    }
    });
  $('#stlinkme').on('mouseenter', function() {
    if($(window).width()>991){
      $(this).toggleClass('backgroundsme bgfa').animate({'top':'15%','left':'5%'},'slow');
      $('.linktextm').toggle('slow');
    }else if($(window).width()>767){
      $(this).toggleClass('backgroundsme bgfa').animate({'left':'10%'},'slow');
      $('.linktextm').toggle('slow');
    }else {
      $(this).css('background-color','#1C1C1C')
      $(this).css('color','yellow')
    }
    });
  $('#stlinkme').on('mouseleave', function() {
    if($(window).width()>991){
      $(this).toggleClass('backgroundsme bgfa').animate({'top':'10%','left':'0%'},'slow');
      $('.linktextm').toggle('slow');
    }else if($(window).width()>767){
      $(this).toggleClass('backgroundsme bgfa').animate({'left':'0%'},'slow');
      $('.linktextm').toggle('slow');
    } else {
      $(this).css('background-color','')
      $(this).css('color','#1C1C1C')
    }
    });
  $('#stlinkhobbies').on('mouseenter', function() {
    if($(window).width()>991){
      $(this).toggleClass('backgroundshobbies bgfa').animate({'bottom':'15%','left':'5%'},'slow');
      $('.linktexth').toggle('slow');
    }else if($(window).width()>767){
      $(this).toggleClass('backgroundshobbies bgfa').animate({'left':'10%'},'slow');
      $('.linktexth').toggle('slow');
    }else {
      $(this).css('background-color','#1C1C1C')
      $(this).css('color','yellow')
    }
    });
  $('#stlinkhobbies').on('mouseleave', function() {
    if($(window).width()>991){
      $(this).toggleClass('backgroundshobbies bgfa').animate({'bottom':'10%','left':'0%'},'slow');
      $('.linktexth').toggle('slow');
    }else if($(window).width()>767){
      $(this).toggleClass('backgroundshobbies bgfa').animate({'left':'0%'},'slow');
      $('.linktexth').toggle('slow');
    } else {
      $(this).css('background-color','')
      $(this).css('color','#1C1C1C')
    }
  });
  $('#stlinkme, #intlinkme, #clinkme, #sklinkme, #bklinkme, #mlinkme').on('click', function() {
    $('.startpage, .intpagexs, .intpage, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container, #links2').removeClass('startpage intpagexs intpage contact skillspage bookspage gamespage videospage audiospage');
    $('body, div.container, #links2').addClass('mepage');
    $('.mepage').show();
    $('.allnav').css('background-color','#B0FFD8');
    $('title').text('Me');
    localStorage.setItem(style,2);
    a=localStorage.getItem(style);
  });
  $('#mlinkstart, #intlinkstart, #clinkstart, #sklinkstart, #bklinkstart').on('click', function() {
    $('.mepage, .intpage, .intpagexs, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container').removeClass('mepage intpage intpagexs contact skillspage bookspage gamespage videospage audiospage');
    $('body, div.container').addClass('startpage');
    $('.startpage').show();
    $('title').text('Start');
    localStorage.setItem(style,1);
    a=localStorage.getItem(style);
  });
  $('#stlinkhobbies, #mlinkhobbies, #clinkhobbies, #sklinkhobbies, #bklinkhobbies').on('click', function() {
    $('.startpage, .mepage, intpagexs, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container, #links2').removeClass('mepage intpagexs startpage contact skillspage bookspage gamespage videospage audiospage');
    $('body, div.container, #links2').addClass('intpage');
    $('.allnav').css('background-color','#EFEEEB');
    $('.intpage').show();
    $('title').text('Interests');
    localStorage.setItem(style,3);
    a=localStorage.getItem(style);
  });
  $('#stlinkcontacts, #mlinkcontacts, #intlinkcontacts, #sklinkcontacts, #bklinkcontacts').on('click', function() {
    $('.startpage, .intpage, .mepage, .skillspage, .intpagexs, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container, #links2').removeClass('mepage intpage skillspage intpagexs startpage bookspage gamespage videospage audiospage');
    $('body, div.container, #links2').addClass('contact');
    $('.allnav').css('background-color','#7F7F7F');
    $('.contact').show();
    $('title').text('Contacts');
    localStorage.setItem(style,4);
    a=localStorage.getItem(style);
  });
  $('#stlinkskills, #mlinkskills, #intlinkskills, #clinkskills, #bklinkskills').on('click', function() {
    $('.startpage, .intpage, .contact, .mepage, .bookspage, .intpagexs, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container, #links2').removeClass('mepage intpage contact intpagexs startpage bookspage gamespage videospage audiospage');
    $('body, div.container, #links2').addClass('skillspage');
    $('.allnav').css('background-color','#B2A1A1');
    $('.skillspage').show();
    $('title').text('Skills');
    localStorage.setItem(style,5);
    a=localStorage.getItem(style);
  });
  $('#intlinkbooks, #bklinkbooks').on('click', function() {
    $('.intpage, .gamespage, .videospage, .audiospage').hide();
    $('body, div.container').removeClass('intpage gamespage videospage audiospage');
    $('body, div.container').addClass('bookspage');
    $('.bookspage').show();
    $('title').text('Books');
    localStorage.setItem(style,6);
    a=localStorage.getItem(style);
  });
  $('#intlinkgames, #bklinkgames').on('click', function() {
    $('.intpage, .audiospage, .bookspage, .videospage').hide();
    $('body, div.container').removeClass('intpage bookspage videospage audiospage');
    $('body, div.container').addClass('gamespage');
    $('.gamespage').show();
    $('title').text('Games');
    localStorage.setItem(style,7);
    a=localStorage.getItem(style);
  });
  $('#intlinkvideos, #bklinkvideos').on('click', function() {
    $('.intpage, .bookspage, .gamespage, .audiospage').hide();
    $('body, div.container').removeClass('intpage bookspage gamespage audiospage');
    $('body, div.container').addClass('videospage');
    $('.videospage').show();
    $('title').text('Videos');
    localStorage.setItem(style,8);
    a=localStorage.getItem(style);
  });
  $('#intlinkmusic, #bklinkmusic').on('click', function() {
    $('.intpage, .bookspage, .gamespage, .videospage').hide();
    $('body, div.container').removeClass('intpage bookspage gamespage videospage');
    $('body, div.container').addClass('audiospage');
    $('.audiospage').show();
    $('title').text('Music');
    localStorage.setItem(style,9);
    a=localStorage.getItem(style);
  });
  $(function() {
    $('#btn-send').click(function() {
        $.ajax({
            url: "https://formspree.io/bogdya.linnik@gmail.com", 
            method: "POST",
            data: {name: name.value,email: email.value,message: message.value},
            dataType: "json"
        }).done(function () {
            $('#fieldsetcontact1').html('<h1>Thank you!</h1>');
        })
        .fail(function (jqXHR, textStatus) {
            $('#fieldsetcontact1').html('<h1>Error!</h1><br>'+textStatus);
        });
    });
    });
  });
 
