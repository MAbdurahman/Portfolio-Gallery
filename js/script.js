/*-------------- Script Sheet for Portfolio-Gallery ----------------*/
$(document).ready(function(){
    /** Add smooth scrolling to all links in navigation bar */
    $("#top-navigation li a").on('click', function(event) {

        /** Make sure this.hash has a value before overriding default behavior */
        if (this.hash !== "") {
            /** Prevent default anchor click behavior */
            event.preventDefault();

            /* Store hash in variable */
            var hash = this.hash;

            /**
             * Using jQuery's animate() method to add smooth page scroll to sections.  The optional
             * number appears to be 1000 milliseconds it takes to scroll to the specified section.
             */
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){

                /** Add hash (#) to URL when done scrolling (default click behavior) */
                window.location.hash = hash;
            });

        }
    });//end of the event function

    /**Add smooth scrolling to the navbar-brand */
    $("#brand").on('click', function(event) {

        /** Make sure this.hash has a value before overriding default behavior */
        if (this.hash !== "") {
            /** Prevent default anchor click behavior */
            event.preventDefault();

            /* Store hash in variable */
            var hash = this.hash;

            /**
             * Using jQuery's animate() method to add smooth page scroll to sections.  The optional
             * number appears to be 1000 milliseconds it takes to scroll to the specified section.
             */
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){

                /** Add hash (#) to URL when done scrolling (default click behavior) */
                window.location.hash = hash;
            });

        }
    });//end of the event function

    /**Portfolio Section */
    $(".button").click(function() {
        var value = $(this).attr("data-filter");
        if (value == "all")  {
            $(".filter").show("1100");

        } else {
            $(".filter").not("." + value).hide("1100");
            $(".filter").filter("."+ value).show("1100");
        }
    })
    /**Add and remove active class */
    $("ul .button").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })//end of the functions for Portfolio Section

});//end of the ready function