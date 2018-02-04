/* global $ */
$(document).ready(function() {
    
    // adding transparent navigation bar on scroll
    $(window).scroll(function() {

        var screenPosition = $(document).scrollTop();

        if (screenPosition > 40) {
            $('.navbar').addClass('shrink');
        } else {
            $('.navbar').removeClass('shrink');
        }

    });
    
    // adding smooth scrolling across the page
    $('.nav-link').click(function(e) {


        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 40
        }, 1000);
        e.preventDefault();
    });
        // Typewriter function
    $(function() {
        var index = 0,
            count = 0;
        var word = '';
        var words = ["a programmer", "a developer", "a challenge-seeker", "a space enthusiast", "a hobby chef", "looking for work!"];
        untype();

        function type(word) {
            setTimeout(function() {
                if (word.length > 0) {
                    $('.typer').append(word.shift());
                    type(word);
                } else if (word.length === 0) {
                    pause();
                }
            }, 180)
        }

        function untype() {
            setTimeout(function() {
                word = $('.typer').html().split('');
                word.pop();
                if (word.length > 0) {
                    $('.typer').empty().append(word);
                    untype();
                } else if (word.length === 0) {
                    $('.typer').empty();
                    nextWord();
                }
            }, 100);
        }

        function pause() {
            setTimeout(function() {
                untype();
            }, 500);
        }

        function nextWord() {
            index = count % 6;
            count++;
            word = words[index].split('');
            type(word);
        }
    });

        //Setting elements height correctly for animations

    $(".wow").each(function() {

        var progress = $('.progress');
        var progressbar = $('.progress-bar');
        var elementHeight = $(this).height();
        $(this).attr("data-wow-offset", elementHeight);

        $(this).on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        
            function displayProgressBar() {
                $(progress).removeClass('progress-invisible');
                $(progress).addClass('progress-custom');
                $(progressbar).addClass('progress-bar-custom');

            });




    });
    
    // Setting up scrollspy which doesn't work cause I messed with bootstrap classes
    $('body').scrollspy({
        target: '#nav-scrollspy'
    });
});


// A shout-out to my awesome mentors from "The informal school of IT"!
// You rock!!