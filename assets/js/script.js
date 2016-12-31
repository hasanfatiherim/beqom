/*-----------------------------------------------------------------------------------*/
/*	PreLoader
/*-----------------------------------------------------------------------------------*/
$(window).load(function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
})

/*-----------------------------------------------------------------------------------*/
/*	Sliders
/*-----------------------------------------------------------------------------------*/

$("#home").css({ 'height': ($(window).height()) + 'px' });//Fix fullscreen slider height

$(document).ready(function () {
    $(".fullscreen-slider").backstretch([
"assets/img/bg/bg1.jpg",
"assets/img/bg/bg2.jpg"
    ], { duration: 4500, fade: 650 });
});


/*-----------------------------------------------------------------------------------*/
/*	Scroll to Videos
/*-----------------------------------------------------------------------------------*/
var isFirstAttempt = true;
var count = 0;
function scrollToVideos() {

    $.ajax({
        type: 'GET',
        url: 'http://jsonstub.com/beqominterview/'+document.getElementById('txtSearch').value,
        contentType: 'application/json',
        beforeSend: function (request) {
            request.setRequestHeader('JsonStub-User-Key', '84e0aeb9-9302-43c8-8e60-15a0fda7981a');
            request.setRequestHeader('JsonStub-Project-Key', '4d99a9a7-ccbf-4d5b-bd31-8aee887d6460');
        }
    }).done(function (data) {
        debugger
        $('#videos .container').html('');
        var html = "";
        $.each(data, function (index, element) {


            html += '<div class="col-md-4 col-xs-12 item"><div class="item-wrapper">\
                       <h2 class="item-header">'+ element.title + '</h2>\
                        <div class="image-wrap">\
                       <img src="' + element.pic + '" class="item-image img-responsive"/>\
                        <a class="btn-modal" href="#" data-toggle="modal" data-target="#myModal" data-title="' + element.title + '" data-description="' + element.description + '" data-time="' + element.time + '" data-url="' + element.url + '">\
                        <img src="assets/img/play-btn.svg" class="play-btn-img" width="125" height="125"></a></div>\
                       <h4 class="item-description">'+ element.description + '</h4>\
                       <h4 class="item-time">'+ element.time + '</h4>\
                   </div></div>';

        });
        $('#videos .container').append(html);
        var list = new Array();
        $('.item').each(function () {
            list.push($(this));
        })
        for (i = 0; i < 3; i++) {
            $(list[i]).css('display', 'block');
        }
        isFirstAttempt = false;
    }).fail(function () {
        alert("Sorry. Server unavailable. ");
    });
    

    var divPosid = $('#videos');
    if (divPosid.length) {
       
        $('html, body').animate({
            scrollTop: divPosid.offset().top + "px"
        }, 1000, 'easeInOutExpo');
        return false;
    }
};


$("#txtSearch").on("keypress", function (event) {
    if (event.which == 13 && !event.shiftKey) {
        count = 0;
        scrollToVideos();
       
    }
});

/*-----------------------------------------------------------------------------------*/
/*	Mobile Check
/*-----------------------------------------------------------------------------------*/

var isMobile = (function (a) { (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)) })(navigator.userAgent || navigator.vendor || window.opera);

if (isMobile) { $('#txtSearch').keyup(_.debounce(scrollToVideos, 2000)); }//display results without press enter key

/*-----------------------------------------------------------------------------------*/
/*	Load Video Details Inside Modal
/*-----------------------------------------------------------------------------------*/
$('body').on('click', '.btn-modal', function () {

    var btn = $(this);
    var title = btn.data('title');
    var description = btn.data('description');
    var time = btn.data('time');
    var url = btn.data('url');
    var lastIndex = url.lastIndexOf("=");
    var urlExtension = url.substr(lastIndex + 1, 11);
    $('.modal-title').html('');
    $('.modal-description').html('');
    $('.modal-time').html('');
    $('.modal-title').html(title)
    $('.modal-description').html(description)
    $('.modal-time').html(time)
    var src = 'https://www.youtube.com/embed/' + urlExtension;
    $('.modal-iframe').attr('src', src);


})
/*-----------------------------------------------------------------------------------*/
/*	Load Content On Scroll
/*-----------------------------------------------------------------------------------*/


$(window).scroll(function () {

    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {

        count++;
        var list = new Array();
        $('.item').each(function () {
            list.push($(this));
        })

        for (i = 0; i < count * 3; i++) {
            $(list[i]).delay(1050).css('display', 'block');
        }
    }
});
/*-----------------------------------------------------------------------------------*/
/*	Check If There Is An Update
/*-----------------------------------------------------------------------------------*/
function myTimeoutFunction() {
    setTimeout(myTimeoutFunction, 30000);
    if (isFirstAttempt != true) {
        setTimeout(function () {

           
            $('#status').fadeIn();
            $('#preloader').delay(150).fadeIn('slow');
            scrollToVideos()
            $('#status').fadeOut();
            $('#preloader').delay(150).fadeOut('slow');
        }, 30000);
    }
}
myTimeoutFunction();