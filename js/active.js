 $(function () {
     SyntaxHighlighter.all();
 });
 $(window).load(function () {
     $('.flexslider').flexslider({
         animation: "slide",
         controlNav: "thumbnails",
         start: function (slider) {
             $('body').removeClass('loading');
         }
     });
 });




 $(".verticalCarousel").verticalCarousel({
     currentItem: 1,
     showItems: 4,

 });

 var icons = {
     header: "ui-icon-circle-plus",
     activeHeader: "ui-icon-circle-minus"
 };
 $("#accordion").accordion({
     icons: icons
 });
 document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    setTimeout(ToSlideShow, 3000);
});

function skip_video()
{
    var doc = document.getElementsByClassName("wrapper")[0];
    doc.style.display = "block";
    var video = document.getElementsByClassName("start-video")[0];
    video.style.display="none";
    
}

function ToSlideShow() {
    moveSlide(1);
    setTimeout(ToSlideShow, 5000); // Change image every  3 seconds
}
function moveSlide(m){
    var row = document.getElementById("slide-id");
    var w = parseInt(row.scrollWidth);
    var element = document.getElementsByClassName("slide-col");
    var n = element.length;
    var elemntLength = element[0].offsetWidth

    var leftpos= parseInt(row.scrollLeft);
    var x1 = Math.round(leftpos/elemntLength);

    var newleftpos=0;
    var bullet = document.getElementsByClassName("bullets");

    if((leftpos===0)&&(m===-1))
        newleftpos = (n-1)*elemntLength;
    else if((leftpos>(n-2)*elemntLength)&&(m===1))
        newleftpos=0;
    else
        newleftpos = (x1+(m)*1)*elemntLength;
    var x2 = Math.round(newleftpos/elemntLength);
    bullet[x1].classList.remove("active-bullet");
    bullet[x2].classList.add("active-bullet");
    row.scrollTo({left:newleftpos,behavior: 'smooth'});
}
