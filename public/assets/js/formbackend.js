
jQuery( document ).ready(function() {
    
    
    /*jQuery("#contactformsec").on("submit", function (event) {
        event.preventDefault();
        getfields = jQuery(this).serialize();
        console.log(getfields);
        
        jQuery.ajax({
            type: "POST",
            url: ajaxurl, // Replace with the actual path to your PHP script
            data: getfields + '&action=contact_form_sec',
            success: function (response) {
                jQuery('.contactsecnpagealert .alert-success').fadeIn();
                jQuery('#contactformsec')[0].reset(); 
                jQuery('#contactformsec').find('select').each(function() {
                    this.selectedIndex = 0;
                });
                
            },
            error: function () {
                jQuery('.contactsecnpagealert .alert-danger').fadeIn();
            }
        });
    });*/
    
    
    
     
    
    jQuery("#contactformsec").on("submit", function (event) {
        event.preventDefault();
        var getfields = jQuery(this).serialize();
        const fname = jQuery("input[name='fname']").val(); 
        const lname = jQuery("input[name='lname']").val();

        const fullName = fname + ' ' + lname;
        localStorage.setItem('fullName', fullName);
        
        if (get_session_storage('gclid') !== null) {
            getfields += `&gclid=${get_session_storage('gclid')}`;
        }
        
        console.log(getfields);
    
        jQuery.ajax({
            type: "POST",
            url: window.Laravel.routes.storeContactForm+"/", // Replace with the actual path to your PHP script
            data: getfields,
            success: function (response) {
                let data = JSON.parse(response);
                /*jQuery('.contactsecnpagealert .alert-success').fadeIn();*/
                
                jQuery('#contactformsec')[0].reset(); 
                jQuery('#contactformsec').find('select').each(function() {
                    this.selectedIndex = 0;
                });
                
                if(get_session_storage('gclid') !== null) {
                    gtag_report_conversion();
                }
                            
                // Redirect to the thank-you page
                window.location.href =  window.Laravel.routes.thankyou + '?customer_name=' + data?.name;
                
            },
            error: function () {
                jQuery('.contactsecnpagealert .alert-danger').fadeIn();
            }
        });
    });
    
     
    jQuery("#bannercontactformsec").on("submit", function (event) {
        event.preventDefault();
        var getfields = jQuery(this).serialize();
        const name = jQuery("input[name='name']").val(); 

        const fullName = name;
        localStorage.setItem('fullName', fullName);
        if (get_session_storage('gclid') !== null) {
            getfields += `&gclid=${get_session_storage('gclid')}`;
        }
        
        console.log(getfields);
    
        jQuery.ajax({
            type: "POST",
            url: window.Laravel.routes.storeBannerForm+"/", // Replace with the actual path to your PHP script
            data: getfields,
            success: function (response) {
                let data = JSON.parse(response);
                /*jQuery('.contactsecnpagealert .alert-success').fadeIn();*/
                
                jQuery('#bannercontactformsec')[0].reset(); 
                jQuery('#bannercontactformsec').find('select').each(function() {
                    this.selectedIndex = 0;
                });
    
                if(get_session_storage('gclid') !== null) {
                    gtag_report_conversion();
                }
                
                // Redirect to the thank-you page
                window.location.href =  window.Laravel.routes.thankyou + '?customer_name=' + data?.name;
                
            },
            error: function () {
                jQuery('.contactsecnpagealert .alert-danger').fadeIn();
            }
        });
    });
    
    
    jQuery("#signupform").on("submit", function (event) {
        event.preventDefault();
        getfields = jQuery(this).serialize();
        console.log(getfields);
        
        const fullName = jQuery("input[name='signupname']").val();
        
        localStorage.setItem('fullName', fullName);
        if (get_session_storage('gclid') !== null) {
            getfields += `&gclid=${get_session_storage('gclid')}`;
        }
        
        jQuery.ajax({
            type: "POST",
            url: window.Laravel.routes.storeSignupForm+"/", // Replace with the actual path to your PHP script
            data: getfields,
            success: function (response) {
                let data = JSON.parse(response);
                /*jQuery('.signupformalert .alert-success').fadeIn();
                jQuery('#signupform').hide();
                jQuery('#signupform')[0].reset(); 
                setTimeout(function () {
                    jQuery('#signupform').fadeIn();
                    jQuery('.signupformalert .alert-success').hide();
                }, 700000);*/
                
                if(get_session_storage('gclid') !== null) {
                    gtag_report_conversion();
                }
                
                window.location.href =  window.Laravel.routes.thankyou + '?customer_name=' + data?.name;
                
            },
            error: function () {
                jQuery('.signupformalert .alert-danger').fadeIn();
            }
        });
    });
    
    jQuery("#signupform-wd5").on("submit", function (event) {
        event.preventDefault();
        getfields = jQuery(this).serialize();
        console.log(getfields);
        
        const fullName = jQuery("input[name='signupname']").val();
        
        localStorage.setItem('fullName', fullName);
        if (get_session_storage('gclid') !== null) {
            getfields += `&gclid=${get_session_storage('gclid')}`;
        }
        
        jQuery.ajax({
            type: "POST",
            url: window.Laravel.routes.storeSignupForm+"/", // Replace with the actual path to your PHP script
            data: getfields,
            success: function (response) {
                let data = JSON.parse(response);
                /*jQuery('.signupformalert .alert-success').fadeIn();
                jQuery('#signupform').hide();
                jQuery('#signupform')[0].reset(); 
                setTimeout(function () {
                    jQuery('#signupform').fadeIn();
                    jQuery('.signupformalert .alert-success').hide();
                }, 700000);*/
                jQuery("#signupform-wd5")[0].reset();
                jQuery("#signupform-wd5").parents(".letsGetStated-popup").addClass("successThank");
                
                if(get_session_storage('gclid') !== null) {
                    gtag_report_conversion();
                }
                
                // window.location.href =  window.Laravel.routes.thankyou + '?customer_name=' + data?.name;
                
            },
            error: function () {
                jQuery('.signupformalert .alert-danger').fadeIn();
            }
        });
    });





    jQuery("#popupform").on("submit", function (event) {
        event.preventDefault();
        getfields = jQuery(this).serialize();
        
        const fullName = jQuery("input[name='popupname']").val();
        localStorage.setItem('fullName', fullName);
        if (get_session_storage('gclid') !== null) {
            getfields += `&gclid=${get_session_storage('gclid')}`;
        }
        
        jQuery.ajax({
            type: "POST",
            url: window.Laravel.routes.storePopupForm+"/", // Replace with the actual path to your PHP script
            data: getfields,
            success: function (response) {
                let data = JSON.parse(response);
                jQuery('#popupform')[0].reset(); 
                
                if(get_session_storage('gclid') !== null) {
                    gtag_report_conversion();
                }
                
                window.location.href = window.Laravel.routes.thankyou + '?customer_name=' + data?.name;
            },
            error: function () {
                jQuery('.popupformalert .alert-danger').fadeIn();
            }
        });
    });
    
    
    
    
    
    jQuery("#popupformsubmit").on("submit", function (event) {
        event.preventDefault();
        getfields = jQuery(this).serialize();
        
        const fullName = jQuery("input[name='name']").val();
        localStorage.setItem('fullName', fullName);
        if (get_session_storage('gclid') !== null) {
            getfields += `&gclid=${get_session_storage('gclid')}`;
        }
        
        jQuery.ajax({
            type: "POST",
            url: window.Laravel.routes.storeSolutionForm+"/", // Replace with the actual path to your PHP script
            data: getfields,
            success: function (response) {
                let data = JSON.parse(response);
                /*jQuery('.popupformalert .alert-success').fadeIn();*/
                jQuery('#popupformsubmit')[0].reset(); 
                
                if(get_session_storage('gclid') !== null) {
                    gtag_report_conversion();
                }
                window.location.href = window.Laravel.routes.thankyou + '?customer_name=' + data?.name;
            },
            error: function () {
                jQuery('.popupformalert .alert-danger').fadeIn();
            }
        });
    });
    
    jQuery("#popupformsubmit-wd5").on("submit", function (event) {
        event.preventDefault();
        getfields = jQuery(this).serialize();
        
        const fullName = jQuery("input[name='name']").val();
        localStorage.setItem('fullName', fullName);
        
        if (get_session_storage('gclid') !== null) {
            getfields += `&gclid=${get_session_storage('gclid')}`;
        }
        
        jQuery.ajax({
            type: "POST",
            url: window.Laravel.routes.storeSolutionForm+"/", // Replace with the actual path to your PHP script
            data: getfields,
            success: function (response) {
                let data = JSON.parse(response);
                /*jQuery('.popupformalert .alert-success').fadeIn();*/
                jQuery('#popupformsubmit-wd5')[0].reset();
                jQuery('#popupformsubmit-wd5').parents(".popup-area").addClass("successThank");
                
                if(get_session_storage('gclid') !== null) {
                    gtag_report_conversion();
                }
                // window.location.href = window.Laravel.routes.thankyou + '?customer_name=' + data?.name;
            },
            error: function () {
                jQuery('.popupformalert .alert-danger').fadeIn();
            }
        });
    });
    
    
    
    jQuery("#consultationform").on("submit", function (event) {
        event.preventDefault();
        getfields = jQuery(this).serialize();
        
        if (get_session_storage('gclid') !== null) {
            getfields += `&gclid=${get_session_storage('gclid')}`;
        }
        
        jQuery.ajax({
            type: "POST",
            url: ajaxurl, // Replace with the actual path to your PHP script
            data: getfields + '&action=consultation_form',
            success: function (response) {
                jQuery('.consultationformalert .alert-success').fadeIn();
                jQuery('#consultationform')[0].reset(); 
                
                if(get_session_storage('gclid') !== null) {
                    gtag_report_conversion();
                }
            },
            error: function () {
                jQuery('.consultationformalert .alert-danger').fadeIn();
            }
        });
    });
    
    jQuery("#solutionform").on("submit", function (event) {
        event.preventDefault();
        getfields = jQuery(this).serialize();
        
        const fullName = jQuery("input[name='industry']").val();
        localStorage.setItem('fullName', fullName);
        if (get_session_storage('gclid') !== null) {
            getfields += `&gclid=${get_session_storage('gclid')}`;
        }
        
        jQuery.ajax({
            type: "POST",
            url: ajaxurl, // Replace with the actual path to your PHP script
            data: getfields + '&action=solution_form',
            success: function (response) {
                
                jQuery('#solutionform')[0].reset(); 
                
                if(get_session_storage('gclid') !== null) {
                    gtag_report_conversion();
                }
                window.location.href = 'https://websitedigitals.com/thank-you/';
            },
            error: function () {
                jQuery('.solutionformalert .alert-danger').fadeIn();
            }
        });
    });
    
    jQuery("#logostepform").on("submit", function (event) {
        event.preventDefault();
        getfields = jQuery(this).serialize();
        
        if (get_session_storage('gclid') !== null) {
            getfields += `&gclid=${get_session_storage('gclid')}`;
        }
        
        console.log(getfields);
        var fieldValuelogo = jQuery(this).find('[name="name"]').val();
        console.log(fieldValuelogo);
        
        localStorage.setItem('fieldValue', fieldValuelogo);
        
        /*jQuery("#briefthankyou").html("Thank You, <strong style='background: #3c7cff; color: #fff; border-radius: 6px; padding: 6px 15px; font-weight: 600;'>" + fieldValuelogo + "</strong>");*/
    
        const brief_section = document.getElementById('brief_section');
        
        var currentUrl = window.location.href;
        var companyName = '';
        
        try {
            // Create a URL object from the current URL
            var url = new URL(currentUrl);
            
            // Get the value of 'company_name' from the search params
            companyName = url.searchParams.get('cname') ? url.searchParams.get('cname') : jQuery(this).find('[name="cname"]').val();
            getfields += '&cname=' + encodeURIComponent(companyName);

            // Log the value to the console
            console.log(companyName);
            
        } 
        catch (error) {
            console.error('Error parsing URL:', error);
        }
        
        const $nextBtn = jQuery(".next-step");
        $nextBtn.prop('disabled', true).addClass('disabled');
    
        $('#final-loader').fadeIn();
        $('#step-7').fadeOut();
    
        jQuery.ajax({
            type: "POST",
            url: window.Laravel.routes.storeLogoBrief+"/", // Replace with the actual path to your PHP script
            data: getfields,
            success: function (response) {
                
                /*const nextBtn = jQuery(".next-step");
                nextBtn.attr("type", "button"); 
                jQuery(nextBtn).trigger("click");
                brief_section.classList.add('logo_brief_step_7');
                jQuery("#brief_logo").attr('src', '` + window.Laravel.imagePath + `/assets/images/logo-white.png');
                jQuery("#brief_header_phone").addClass('brief_header_number');*/
                
                let data = JSON.parse(response);
                console.log(data);
                
                jQuery(document).find('#build-website').attr('href', (data?.data?.url ? data.data.url : '#'));
                
                if(get_session_storage('gclid') !== null) {
                    gtag_report_conversion();
                }
                
                  $('#final-loader').fadeOut();
                
                 window.location.href = window.Laravel.routes.thankyouLogoBrief +'?brief_id=' + data?.id + '&company_name=' + data?.company_name + '&email=' + data?.data?.email + '&customer_name=' + data?.data?.name;
                
                /*const nextBtn = jQuery(".next-step");
                nextBtn.attr("type", "button");
                jQuery(nextBtn).trigger("click");*/
                /*jQuery('.contactsecnpagealert .alert-success').fadeIn();
                jQuery('#logostepform')[0].reset(); 
                jQuery('#logostepform').find('select').each(function() {
                    this.selectedIndex = 0;
                });*/
                
            },
            error: function () {
                 $('#final-loader').fadeOut();
                $('#step-7').fadeIn();
                $nextBtn.prop('disabled', false).removeClass('disabled');
                /*jQuery('.contactsecnpagealert .alert-danger').fadeIn();*/
            }
        });
    });
    
jQuery("#homebrief").on("submit", function (event) {
    event.preventDefault();
    getfields = jQuery(this).serialize();

    var fieldValue = jQuery(this).find('[name="name"]').val();


    localStorage.setItem('fieldValue', fieldValue);
    
    if (get_session_storage('gclid') !== null) {
        getfields += `&gclid=${get_session_storage('gclid')}`;
    }

    var currentUrl = window.location.href;
    var companyName = '';
    var email = jQuery(this).find('[name="email"]').val(); // Assuming the email field has the name attribute 'email'

    try {
        var url = new URL(currentUrl);
        companyName = url.searchParams.get('company_name') ? url.searchParams.get('company_name') : jQuery(this).find('[name="cname"]').val();
        getfields += '&company_name=' + encodeURIComponent(companyName);
        getfields += '&email=' + encodeURIComponent(email);

        console.log(companyName);
        console.log("email:", email);
    } 
    catch (error) {
        console.error('Error parsing URL:', error);
    }
    console.log(getfields);
    
    const $nextBtn = jQuery(".next-step");
    $nextBtn.prop('disabled', true).addClass('disabled');
        
    $('#final-loader').fadeIn();
    $('#step-6').fadeOut();

    jQuery.ajax({
        type: "POST",
        url: window.Laravel.routes.storeWebBrief+"/",
        data: getfields,
        success: function (response) {
            let data = JSON.parse(response);
            jQuery(document).find('#build-website').attr('href', (data?.url ? data.url : '#'));
            if(get_session_storage('gclid') !== null) {
                gtag_report_conversion();
            }
            // $('#final-loader').fadeOut();
            // $('#step-6').fadeIn();
            window.location.href = window.Laravel.routes.thankyouWebBrief +'?brief_id=' + data?.id + '&company_name=' + data?.company_name + '&email=' + email + '&customer_name=' + data?.data?.name + '&url=' + data?.url;
        },
        error: function () {
            $('#final-loader').fadeOut();
            $('#step-6').fadeIn();
            $nextBtn.prop('disabled', false).removeClass('disabled');
            jQuery('.contactsecnpagealert .alert-danger').fadeIn();
        }
    });
    
    // fetch(window.Laravel.routes.storeWebBrief, {
    //     method: 'POST',
    //     headers: {
    //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    //     },
    //     body: getfields
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log("this is URL", data?.url, data.data);
    
    //     document.querySelector('#build-website').setAttribute('href', (data?.url ? data.url : '#'));
    
    //     if (get_session_storage('gclid') !== null) {
    //         gtag_report_conversion();
    //     }
    
    //     window.location.href = window.Laravel.routes.thankyouWebBrief +
    //                           '?brief_id=' + data?.id +
    //                           '&company_name=' + data?.company_name +
    //                           '&email=' + email +
    //                           '&customer_name=' + data?.data?.name +
    //                           '&url=' + data?.url;
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     document.querySelector('.contactsecnpagealert .alert-danger').style.display = 'block';
    // });
});



jQuery("#lpbannerformsec").on("submit", function (event) {
        event.preventDefault();
        var getfields = jQuery(this).serialize();
        const name = jQuery("input[name='name']").val(); 
      
        const fullName = name;
        localStorage.setItem('fullName', fullName);
        if (get_session_storage('gclid') !== null) {
            getfields += `&gclid=${get_session_storage('gclid')}`;
        }
        
        console.log(getfields);
    
        jQuery.ajax({
            type: "POST",
            url: window.Laravel.routes.storeLpBannerForm+"/", // Replace with the actual path to your PHP script
            data: getfields,
            success: function (response) {
                let data = JSON.parse(response);
                /*jQuery('.contactsecnpagealert .alert-success').fadeIn();*/
                
                jQuery('#lpbannerformsec')[0].reset(); 
                jQuery('#lpbannerformsec').find('select').each(function() {
                    this.selectedIndex = 0;
                });
                
                if(get_session_storage('gclid') !== null) {
                    gtag_report_conversion();
                }
                // Redirect to the thank-you page
                window.location.href =  window.Laravel.routes.thankyou + '?customer_name=' + data?.name;
                
            },
            error: function () {
                jQuery('.lpbannerformsecnpagealert .alert-danger').fadeIn();
            }
        });
    });

         
});