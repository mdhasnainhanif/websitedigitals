


document.addEventListener("DOMContentLoaded", function () {
            setTimeout(function () {
                document.getElementById("footerLottie").play();
            }, 5000);
        });
        
        
$(window).on('load', function () {
        
        const blogHTML = $('#blog-template').html();
        $('#blog-section-placeholder').html(blogHTML);
        
        $(".blog-slider").owlCarousel({
          loop: true,
          margin: 30,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsiveClass: true,
          navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              nav: false,
              dots: true
            },
            600: {
              items: 1,
              nav: false,
              dots: true
            },
            1000: {
              items: 4,
              nav: true,
              dots: false
            }
          }
        });

    });
    
        
$(document).ready(function () {
        $('img').each(function () {
            if ($(this).closest('.parallex-effect').length === 0) {
                $(this).attr('loading', 'lazy');
            } else {
                $(this).removeAttr('loading'); // Ensure no lazy loading inside parallex-effect
            }
        });
    });
    
    
$(document).ready(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) { // Change 50 to the scroll position where you want to add the class
                    $('.header').addClass('scrolled');
                } else {
                    $('.header').removeClass('scrolled');
                }
            });
        });
        
        
document.addEventListener('DOMContentLoaded', function() {
            // Get the current page URL
            var currentUrl = window.location.href;
    
            // Select all menu items
            var menuItems = document.querySelectorAll('.menu li a');
            if (currentUrl) {
                
                if (currentUrl.includes("/industry/")) {
                    document.querySelector(".industries-click").classList.add("active");
                } else if(
                    currentUrl.includes("/custom-website-design") 
                    || currentUrl.includes("/content-writing")
                    || currentUrl.includes("/digital-marketing")
                    || currentUrl.includes("/video-animation")
                    || currentUrl.includes("/logo-design")
                ) {
                    document.querySelector(".services-click").classList.add("active");
                } else {
                    // Iterate through the menu items
                    menuItems.forEach(function(item) {
                        // Get the href attribute of each link
                        var linkUrl = item.getAttribute('href');
                        
                        if (currentUrl.indexOf(linkUrl) !== -1) {
                            // Add the active class to the parent li element
                            item.parentElement.classList.add('active');
                        }
                    });
                }
            }
        });
        
        
$('.industries-click > a').on('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
        
            var $this = $(this); // Store reference to the clicked link
            var $parent = $this.closest('.industries-click'); // Find the parent .industries-click
            var $dropdown = $parent.find('.industries-dropdown'); // Find the corresponding dropdown
            
            // Close all dropdowns and remove 'active' class from all industries-click elements
            $('.industries-dropdown').not($dropdown).hide();
            $('.industries-click').not($parent).removeClass('active');
            $('.industries-click > a').not($this).find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
        
            // Toggle the current dropdown and active class
            $dropdown.toggle();
            $parent.toggleClass('active');
        
            // Toggle the icon for the clicked item
            $this.find('.fa-solid').toggleClass('fa-angle-down fa-angle-up');
        });
        
        $('.industries-dropdown a').on('click', function(e) {
            e.stopPropagation(); // Prevent event from propagating to parent elements
        });
        
        $('.services-click > a').on('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
    
            // Toggle the 'active' class on the industries-dropdown
            $('.megaMenuArea').toggle();
            $('.services-click').addClass("active");
            $('.industries-dropdown').hide();
            $('.industries-click').removeClass("active");
            
             // Toggle the icon
            $('.services-click a').find('.fa-solid').toggleClass('fa-angle-down fa-angle-up');
            $('.industries-click a').find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
        });
        
        $('.services-click a').on('click', function(e) {
            // Allow default action for links
            e.stopPropagation(); // Stop click event from propagating up to the parent
        });
        
        
document.addEventListener('DOMContentLoaded', function() {
        const bannerForm = document.getElementById('bannerForm');
        const companyNameInput = document.getElementById('companyNameInput');
        const logoBriefCname = document.getElementById('logo-brief-cname');
        const submitBannerForm = document.getElementById('submitBannerForm');
        
        if (companyNameInput) {
            companyNameInput.addEventListener("input", function(e) {
                e.target.value = e.target.value.replace(/[^a-zA-Z0-9 ]/g, '');
            })
        }
        
        if (logoBriefCname) {
            logoBriefCname.addEventListener("input", function(e) {
                e.target.value = e.target.value.replace(/[^a-zA-Z0-9 ]/g, '');
            })
        }
        
    });
    
    
jQuery(document).ready(function(){
        setTimeout(function(){
             //var tag_new = jQuery("template").eq(38).attr("id");
             var tag_new = jQuery("template").last().attr("id");
             console.log(tag_new);
             //alert(tag_new);
             jQuery("#" + tag_new).css("display", "none");
             jQuery("#" + tag_new).next().next().css("display", "none");
        }, 100);
        });
        
        
$(window).on('load', function() {
            // Set a timeout to delay the style injection
            setTimeout(function() {
                // Define the CSS rules as a string
                var bookacallcss = `
                    .headerbookacall::before {
                        content: "";
                        position: absolute;
                        top: -133%;
                        left: -50%;
                        width: 22%;
                        height: 410%;
                        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
                        animation: shine 1.1s linear infinite;
                        transform: rotate(45deg);
                        transform-origin: center;
                    }
                    
                    .letsGetStated-popup .letsGetStated-toggle::before{
                        content: "";
                        position: absolute;
                        top: -136%;
                        left: -50%;
                        width: 50%;
                        height: 280%;
                        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
                        animation: shinesidebar 1.1s linear infinite;
                        transform: rotate(45deg);
                        transform-origin: center;
                    }
                `;
                
                // Inject the CSS into the <style> element
                $('#delayed-style').text(bookacallcss);
            }, 5000); // Delay in milliseconds (e.g., 1000ms = 1 second)
        });
        
        
 $(document).ready(function() {
            $('.counter').each(function () {
                let $this = $(this);
                let countTo = $this.hasClass('percent') ? 100 : parseInt($this.text()); // Check for percentage
    
                $this.prop('Counter', 0).animate({
                    Counter: countTo
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        if ($this.hasClass('percent')) {
                            $this.text(Math.ceil(now) + '%'); // Add "%" for percentage
                        } else {
                            $this.text(Math.ceil(now) + '+'); // Add "+" for other counters
                        }
                    }
                });
            });
            
            $('.trusted-logos-one').owlCarousel({
                loop:true,
                margin:30,
                dots: false,
                nav:false,
                autoplay:true,
                autoplayTimeout:2000,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            });
        });
        
        
function toggleParagraph(heading) {
            // Hide all paragraphs
            const paragraphs = document.querySelectorAll('.heading-para-div p');
            paragraphs.forEach(p => {
                p.style.display = 'none';
            });
        
            // Reset all headings' opacity
            const headings = document.querySelectorAll('.heading-para-div h3');
            headings.forEach(h => {
                h.classList.remove('active');
                h.style.opacity = '0.3';
            });
        
            // Show the clicked heading's paragraph
            const activeParagraph = document.querySelector(`.${heading}-para`);
            activeParagraph.style.display = 'block'; // Show the corresponding paragraph
        
            // Set the clicked heading's opacity to 1
            const activeHeading = document.querySelector(`.${heading}-heading`);
            activeHeading.classList.add('active');
            activeHeading.style.opacity = '1';
        }
        
        // Initially show the first paragraph and set the first heading as active
        document.addEventListener("DOMContentLoaded", function() {
            const firstHeading = document.querySelector('.first-heading');
            if (firstHeading) {
                firstHeading.click(); // Simulate a click to show the first paragraph
            }
        });
        
        
        $('.first-webdesign-logos-slider').owlCarousel({
            loop:true,
            margin:40,
            nav:false,
            dots:false,
            autoplay: true,
            autoPlaySpeed: 1000,
            autoPlayTimeout: 3000,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        
        $('.second-webdesign-logos-slider').owlCarousel({
            rtl:true,
            loop:true,
            margin:40,
            nav:false,
            dots:false,
            autoplay: true,
            autoPlaySpeed: 1000,
            autoPlayTimeout: 3000,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        
        $('.first-trustedwebdesignlogo').owlCarousel({
            loop:true,
            margin:40,
            nav:false,
            dots:false,
            autoplay: true,
            autoPlaySpeed: 1000,
            autoPlayTimeout: 3000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        
        $('.second-trustedwebdesignlogo').owlCarousel({
            rtl:true,
            loop:true,
            margin:40,
            nav:false,
            dots:false,
            autoplay: true,
            autoPlaySpeed: 1000,
            autoPlayTimeout: 3000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        
        
$(document).ready(function() {
            $(".servicedropdownrow .col-lg-2:nth-child(1) ul li").hover(function() {
                // Get the index of the hovered <li> in the first column
                var index = $(this).index();
                
                // Add the 'hovered' class to the corresponding .dropdown-col-inner-div in the other columns
                $(".servicedropdownrow .col-lg-2:nth-child(" + (index + 2) + ") .dropdown-col-inner-div").addClass("hovered");
            }, function() {
                // On mouseout, remove the 'hovered' class from all .dropdown-col-inner-div elements
                $(".servicedropdownrow .col-lg-2 .dropdown-col-inner-div").removeClass("hovered");
            });
        });
        
        
$(document).ready(function() {
        // Show submenus on hover
        $('.navbar-nav .dropdown-submenu').hover(function() {
          $(this).children('.dropdown-menu').stop(true, true).slideDown(200);
        }, function() {
          $(this).children('.dropdown-menu').stop(true, true).slideUp(200);
        });
      });
      
      
// Plain JavaScript
        window.onscroll = function() {
            toggleHeaderFixed();
        };
        
        function toggleHeaderFixed() {
            var header = document.getElementById("main-header");
        
            // If the scroll position is greater than 50px, add the fixed-header class
            if (window.scrollY > 50) {
                header.classList.add("fixed-header");
            } 
            else {
                header.classList.remove("fixed-header");
            }
        }
        
        
/*$(document).ready(function () {
  function startCounter() {
    $('.simple-counter').each(function () {
      var $this = $(this);
      if ($this.hasClass('counted')) return;

      var winTop = $(window).scrollTop();
      var winBottom = winTop + $(window).height();
      var elTop = $this.offset().top;

      
      if (elTop < winBottom) {
        $this.addClass('counted');
        $({ Counter: 0 }).animate({ Counter: $this.data('countto') }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
            $this.text(Math.ceil(now));
          }
        });
      }
    });
  }

  
  $(window).on('scroll', startCounter);
  startCounter();
});*/

        
        
$(document).ready(function() {
    // Function to check if the screen size is mobile
    function isMobile() {
        return $(window).width() <= 850; // Adjust this value for your desired mobile screen size
    }

    // Run the script only on mobile
    if (isMobile()) {
        
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) { // Scroll distance in pixels (change this value)
                $('.mobile_header').addClass('scrolled'); // Add class when scrolled
            } else {
                $('.mobile_header').removeClass('scrolled'); // Remove class when back to top
            }
        });
        
        // Function to open the mobile menu
        function openMenu() {
            $("#mobile-menu").addClass("open");
        }

        // Function to close the mobile menu
        function closeMenu() {
            $("#mobile-menu").removeClass("open");
        }

        // Event listener for the hamburger icon
        $("#menu-toggle").click(function() {
            openMenu();
        });

        // Event listener for the close button inside the menu
        $("#close-menu").click(function() {
            closeMenu();
        });

        // Event listener for any "Services" menu item to open the sub-menu
        $("a[id^='services-link']").click(function(event) {
            event.preventDefault(); // Prevent default link behavior

            var submenu = $(this).next(".sub-menu"); // Find the submenu associated with the clicked service link

            // If submenu is already visible, slide it out
            if (submenu.hasClass("show")) {
                submenu.removeClass("show").animate({ left: '100%' }, 300, function() {
                    submenu.hide(); // Hide the submenu after it slides out
                });
            } else {
                // Slide out any previously opened sub-menu
                $(".sub-menu.show").removeClass("show").animate({ left: '100%' }, 300, function() {
                    $(this).hide(); // Hide the previously opened submenu
                });

                // Slide in the sub-menu from right to left
                submenu.show().addClass("show").animate({ left: '0%' }, 300); // Animate in to 0% (left)
            }
        });

        $("a[id^='inner-link']").click(function(event) {
            event.preventDefault(); // Prevent default link behavior

            var innersubmenu = $(this).next("#inner-submenu"); // Find the submenu associated with the clicked service link

            // If submenu is already visible, slide it out
            if (innersubmenu.hasClass("show")) {
                innersubmenu.removeClass("show").animate({ left: '100%' }, 300, function() {
                    innersubmenu.hide(); // Hide the submenu after it slides out
                });
            } else {
                // Slide out any previously opened sub-menu
                $(".inner-submenu.show").removeClass("show").animate({ left: '100%' }, 300, function() {
                    $(this).hide(); // Hide the previously opened submenu
                });

                // Slide in the sub-menu from right to left
                innersubmenu.show().addClass("show").animate({ left: '0%' }, 300); // Animate in to 0% (left)
            }
        });

        // Event listener for the back button inside any sub-menu
        $("a[id^='back-btn']").click(function(event) {
            event.preventDefault(); // Prevent the default link behavior

            var submenu = $(this).closest('.sub-menu'); // Get the parent submenu of the back button

            // Slide the submenu back out to the right (left: 100%) smoothly
            submenu.animate({ left: '100%' }, 300, function() {
                submenu.removeClass("show"); // Remove the 'show' class after animation

                // Use setTimeout to delay the hiding of the submenu
                setTimeout(function() {
                    submenu.hide(); // Hide the submenu after the animation is complete
                }, 300); // Timeout delay equal to the animation time
            });
        });
    }
});
    
    
    



$(document).ready(function () {
    
    $(".casestudyslider").owlCarousel({
          loop: true,
          margin: 30,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsiveClass: true,
          navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1,
              nav: false,
              dots: true
            },
            600: {
              items: 1,
              nav: false,
              dots: true
            },
            1000: {
              items: 3,
              nav: true,
              dots: false
            }
          }
        });
        

});



/*$(document).ready(function () {
  
    const input = document.getElementById('logo-brief-cname');
  const placeholderText = "Enter Your Business Name";
  let index = 0;

  function typePlaceholder() {
    if (index <= placeholderText.length) {
      input.setAttribute("placeholder", placeholderText.slice(0, index));
      index++;
      setTimeout(typePlaceholder, 100);
    } else {
      // Wait 1.5 seconds, then clear and restart
      setTimeout(() => {
        index = 0;
        input.setAttribute("placeholder", "");
        typePlaceholder();
      }, 1500);
    }
  }

  typePlaceholder(); // Start typing loop
});*/







$(document).ready(function () {
  const input = document.getElementById('logo-brief-cname');
  const placeholderText = "Enter Your Business Name";
  let index = 0;
  let hasStarted = false;

  function typePlaceholder() {
    if (index <= placeholderText.length) {
      input.setAttribute("placeholder", placeholderText.slice(0, index));
      index++;
      setTimeout(typePlaceholder, 100);
    } else {
      setTimeout(() => {
        index = 0;
        input.setAttribute("placeholder", "");
        typePlaceholder();
      }, 1500);
    }
  }

  const section = document.getElementById('newsletter-webbuilder');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasStarted) {
        hasStarted = true;
        typePlaceholder(); // Start animation
        observer.unobserve(section); // Optional: run only once
      }
    });
  }, { threshold: 0.5 }); // Adjust visibility threshold

  observer.observe(section);
});

  
  
  



$(document).ready(function () {
  $('a').each(function () {
    const $link = $(this);
    const href = $link.attr('href');

    if (
      href &&
      !href.endsWith('/') &&
      !href.startsWith('#') &&
      !href.includes('#') &&
      !href.startsWith('tel:') &&
      !href.startsWith('mailto:')
    ) {
      $link.attr('href', href + '/');
    }
  });
});








$(document).ready(function(){
  $(".badges-slider").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: true
      },
      600: {
        items: 3,
        nav: false,
        dots: true
      },
      1000: {
        items: 7,
        nav: true,
        dots: false
      }
    }
  });
});

  