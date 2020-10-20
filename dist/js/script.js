// $(document).ready(function () {

//     var page_url = window.location.href;
//     var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
//     // alert(page_id);
//     if (page_id == "Herren") {
//         e.preventDefault();
//         $("html, body").animate({

//             scrollTop: $(page_id).offset().top



//         }, 1000);
//     }
// });






// (function () {
//     var scroll = new LocomotiveScroll();
// })();

// $(document).ready(function () {


// });

// to top right away
// if (window.location.hash) scroll(0, 0);
// // void some browsers issue
// setTimeout(function () {
//     scroll(0, 0);
// }, 1);

// // any position
// $(function () {
//     // your current click function
//     $('.scroll').on('click', function (e) {
//         e.preventDefault();
//         // console.log('works');
//         $('html, body').animate({
//             scrollTop: $($(this).attr('href')).offset().top + 'px'
//         }, 1000, 'swing');
//     });
//     // *only* if we have anchor on the url
//     if (window.location.hash) {
//         // smooth scroll to the anchor id
//         $('html, body').animate({
//             scrollTop: $(window.location.hash).offset().top + 'px'
//         }, 1000, 'swing');
//     }
// });