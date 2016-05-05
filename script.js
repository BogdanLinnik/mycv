var $;
$(document).ready(function() {
  $('.mepage, .intpage, .contact, .skillspage, .bookspage , .gamespage, .videospage, .audiospage').hide();
  $('body, header').removeClass('mepage intpage contact skillspage bookspage gamespage videospage audiospage');
  $('body, header').addClass('startpage');
  $('.startpage').show();
  $('#stlinkcontacts').on('mouseenter', function() {
    $(this).toggleClass('backgroundcontacts bgfa').animate({'bottom':'5%','right':'5%'},'slow');
    $('.linktextc').toggle('slow');
  });
  $('#stlinkcontacts').on('mouseleave', function() {
    $(this).toggleClass('backgroundcontacts bgfa').animate({'bottom':'10%','right':'10%'},'slow');
    $('.linktextc').toggle('slow');
  });
  $('#stlinkskills').on('mouseenter', function() {
    $(this).toggleClass('backgroundskills bgfa').animate({'top':'5%','right':'5%'},'slow');
    $('.linktexts').toggle('slow');
  });
  $('#stlinkskills').on('mouseleave', function() {
    $(this).toggleClass('backgroundskills bgfa').animate({'top':'10%','right':'10%'},'slow');
    $('.linktexts').toggle('slow');
  });
  $('#stlinkme').on('mouseenter', function() {
    $(this).toggleClass('backgroundsme bgfa').animate({'top':'5%','left':'5%'},'slow');
    $('.linktextm').toggle('slow');
  });
  $('#stlinkme').on('mouseleave', function() {
    $(this).toggleClass('backgroundsme bgfa').animate({'top':'10%','left':'10%'},'slow');
    $('.linktextm').toggle('slow');
  });
  $('#stlinkhobbies').on('mouseenter', function() {
    $(this).toggleClass('backgroundshobbies bgfa').animate({'bottom':'5%','left':'5%'},'slow');
    $('.linktexth').toggle('slow');
  });
  $('#stlinkhobbies').on('mouseleave', function() {
    $(this).toggleClass('backgroundshobbies bgfa').animate({'bottom':'10%','left':'10%'},'slow');
    $('.linktexth').toggle('slow');
  });
    $('#stlinkme, #intlinkme, #clinkme, #sklinkme, #bklinkme').on('click', function() {
    $('.startpage, .intpage, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, header').removeClass('startpage intpage contact skillspage bookspage gamespage videospage audiospage');
    $('body, header').addClass('mepage');
    $('.mepage').show();
    $('title').text('Me');
  });
    $('#mlinkstart, #intlinkstart, #clinkstart, #sklinkstart, #bklinkstart').on('click', function() {
    $('.mepage, .intpage, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, header').removeClass('mepage intpage contact skillspage bookspage gamespage videospage audiospage');
    $('body, header').addClass('startpage');
    $('.startpage').show();
    $('title').text('Start');
  });
    $('#stlinkhobbies, #mlinkhobbies, #clinkhobbies, #sklinkhobbies, #bklinkhobbies').on('click', function() {
    $('.startpage, .mepage, .contact, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, header').removeClass('mepage startpage contact skillspage bookspage gamespage videospage audiospage');
    $('body, header').addClass('intpage');
    $('.intpage').show();
    $('title').text('Interests');
  });
  $('#stlinkcontacts, #mlinkcontacts, #intlinkcontacts, #sklinkcontacts, #bklinkcontacts').on('click', function() {
    $('.startpage, .intpage, .mepage, .skillspage, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, header').removeClass('mepage intpage skillspage startpage bookspage gamespage videospage audiospage');
    $('body, header').addClass('contact');
    $('.contact').show();
    $('title').text('Contacts');
  });
  $('#stlinkskills, #mlinkskills, #intlinkskills, #clinkskills, #bklinkskills').on('click', function() {
    $('.startpage, .intpage, .contact, .mepage, .bookspage, .gamespage, .videospage, .audiospage').hide();
    $('body, header').removeClass('mepage intpage contact startpage bookspage gamespage videospage audiospage');
    $('body, header').addClass('skillspage');
    $('.skillspage').show();
    $('title').text('Skills');
  });
  $('#intlinkbooks, #bklinkbooks').on('click', function() {
    $('.intpage, .gamespage, .videospage, .audiospage').hide();
    $('body, header').removeClass('intpage gamespage videospage audiospage');
    $('body, header').addClass('bookspage');
    $('.bookspage').show();
    $('title').text('Books');
  });
  $('#intlinkgames, #bklinkgames').on('click', function() {
    $('.intpage, .bookspage, .videospage, .audiospage').hide();
    $('body, header').removeClass('intpage bookspage videospage audiospage');
    $('body, header').addClass('gamespage');
    $('.gamespage').show();
    $('title').text('Games');
  });
  $('#intlinkvideos, #bklinkvideos').on('click', function() {
    $('.intpage, .bookspage, .gamespage, .audiospage').hide();
    $('body, header').removeClass('intpage bookspage gamespage audiospage');
    $('body, header').addClass('videospage');
    $('.videospage').show();
    $('title').text('Videos');
  });
  $('#intlinkmusic, #bklinkmusic').on('click', function() {
    $('.intpage, .bookspage, .gamespage, .videospage').hide();
    $('body, header').removeClass('intpage bookspage gamespage videospage');
    $('body, header').addClass('audiospage');
    $('.audiospage').show();
    $('title').text('Music');
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
    })
    })
  });
 
