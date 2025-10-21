/*----------------- signup-zopim.js ------------------*/

var waitForZopimsignup = setInterval(function () {
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            }
            
            $zopim(function() {
                $zopim.livechat.setOnUnreadMsgs(unread);
                function unread(number) {
                    if (number>=1) {
                        var ua = navigator.userAgent.toLowerCase(), platform = navigator.platform.toLowerCase();
                        platformName = ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0],
                        isMobile = /ios|android|webos/.test(platformName);
                        if (!isMobile) {
                            $zopim.livechat.window.show();
                        }
                        $zopim.livechat.window.hide();
                    }
                }
            }); 
            clearInterval(waitForZopimsignup);
        }, 3000);
        
        
        jQuery("#signup_name").change(function(e) {
            let signup_name = jQuery("#signup_name").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimsignup) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Name: "+signup_name);
                        $zopim.livechat.appendNotes("Customer Name: "+signup_name);
                    });    
                }
            }
        });
        
  
        jQuery("#signup_service").change(function(e) {
            var selectedOption = jQuery(this).find('option:selected');
            var signup_service = selectedOption.data('service');
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimsignup) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Service: "+signup_service);
                        $zopim.livechat.appendNotes("Service: "+signup_service);
                    });    
                }
            }
        });
        
        
         jQuery("#signup_email").change(function(e) {
            let signup_email = jQuery("#signup_email").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimsignup) {
                    $zopim(function() {
                       
                        $zopim.livechat.addTags("Customer Email: "+signup_email);
                        $zopim.livechat.appendNotes("Customer Email: "+signup_email);
                    });    
                }
            }
        });
        
        jQuery("#signup_phone").change(function(e) {
            let signup_phone = jQuery("#signup_phone").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimsignup) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Phone: "+signup_phone);
                        $zopim.livechat.appendNotes("Customer Phone: "+signup_phone);
                    });    
                }
            }
        });
        
        
        
/*----------------- popupform-zopim.js ------------------*/

  var waitForZopimpopup = setInterval(function () {
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            }
            
            $zopim(function() {
                $zopim.livechat.setOnUnreadMsgs(unread);
                function unread(number) {
                    if (number>=1) {
                        var ua = navigator.userAgent.toLowerCase(), platform = navigator.platform.toLowerCase();
                        platformName = ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0],
                        isMobile = /ios|android|webos/.test(platformName);
                        if (!isMobile) {
                            $zopim.livechat.window.show();
                        }
                        $zopim.livechat.window.hide();
                    }
                }
            }); 
            clearInterval(waitForZopimpopup);
        }, 3000);
        
        
        jQuery("#popup_name").change(function(e) {
            let popup_name = jQuery("#popup_name").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimpopup) {
                    $zopim(function() {
                       
                        $zopim.livechat.addTags("Customer Name: "+popup_name);
                        $zopim.livechat.appendNotes("Customer Name: "+popup_name);
                    });    
                }
            }
        });
        
  
        jQuery("#popup_service").change(function(e) {
            var selectedOption = jQuery(this).find('option:selected');
            var popup_service = selectedOption.data('service');
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimpopup) {
                    $zopim(function() {
                         
                        $zopim.livechat.addTags("Service: "+popup_service);
                        $zopim.livechat.appendNotes("Service: "+popup_service);
                    });    
                }
            }
        });
        
        
         jQuery("#popup_email").change(function(e) {
            let popup_email = jQuery("#popup_email").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimpopup) {
                    $zopim(function() {
                         
                        $zopim.livechat.addTags("Customer Email: "+popup_email);
                        $zopim.livechat.appendNotes("Customer Email: "+popup_email);
                    });    
                }
            }
        });
        
        jQuery("#popup_phone").change(function(e) {
            let popup_phone = jQuery("#popup_phone").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimpopup) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Phone: "+popup_phone);
                        $zopim.livechat.appendNotes("Customer Phone: "+popup_phone);
                    });    
                }
            }
        });



/*----------------- growthpopup-zopim.js ------------------*/

  var waitForZopimgrowth = setInterval(function () {
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            }
            
            $zopim(function() {
                $zopim.livechat.setOnUnreadMsgs(unread);
                function unread(number) {
                    if (number>=1) {
                        var ua = navigator.userAgent.toLowerCase(), platform = navigator.platform.toLowerCase();
                        platformName = ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0],
                        isMobile = /ios|android|webos/.test(platformName);
                        if (!isMobile) {
                            $zopim.livechat.window.show();
                        }
                        $zopim.livechat.window.hide();
                    }
                }
            }); 
            clearInterval(waitForZopimgrowth);
        }, 3000);
        

        jQuery("#growth_name").change(function(e) {
            let growth_name = jQuery("#growth_name").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimgrowth) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Name: "+growth_name);
                        $zopim.livechat.appendNotes("Customer Name: "+growth_name);
                    });    
                }
            }
        });
        
  
        jQuery("#growth_service").change(function(e) {
            var selectedOption = jQuery(this).find('option:selected');
            var growth_service = selectedOption.data('service');
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimgrowth) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Service: "+growth_service);
                        $zopim.livechat.appendNotes("Service: "+growth_service);
                    });    
                }
            }
        });
        
        
         jQuery("#growth_email").change(function(e) {
            let growth_email = jQuery("#growth_email").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimgrowth) {
                    $zopim(function() {
                       
                        $zopim.livechat.addTags("Customer Email: "+growth_email);
                        $zopim.livechat.appendNotes("Customer Email: "+growth_email);
                    });    
                }
            }
        });
        
        jQuery("#growth_phone").change(function(e) {
            let growth_phone = jQuery("#growth_phone").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimgrowth) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Phone: "+growth_phone);
                        $zopim.livechat.appendNotes("Customer Phone: "+growth_phone);
                    });    
                }
            }
        });
        
        

/*----------------- lpbannersec-zopim.js ------------------*/

  var waitForZopimlpbannersec = setInterval(function () {
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            }
            
            $zopim(function() {
                $zopim.livechat.setOnUnreadMsgs(unread);
                function unread(number) {
                    if (number>=1) {
                        var ua = navigator.userAgent.toLowerCase(), platform = navigator.platform.toLowerCase();
                        platformName = ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0],
                        isMobile = /ios|android|webos/.test(platformName);
                        if (!isMobile) {
                            $zopim.livechat.window.show();
                        }
                        $zopim.livechat.window.hide();
                    }
                }
            }); 
            clearInterval(waitForZopimlpbannersec);
        }, 3000);
        
        
        jQuery("#lpbanner_name").change(function(e) {
            let lpbanner_name = jQuery("#lpbanner_name").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimlpbannersec) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Name: "+lpbanner_name);
                        $zopim.livechat.appendNotes("Customer Name: "+lpbanner_name);
                    });    
                }
            }
        });
 
        
        jQuery("#lpbanner_email").change(function(e) {
            let lpbanner_email = jQuery("#lpbanner_email").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimlpbannersec) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Email: "+lpbanner_email);
                        $zopim.livechat.appendNotes("Customer Email: "+lpbanner_email);
                    });    
                }
            }
        });
        
         jQuery("#lpbanner_phone").change(function(e) {
            let lpbanner_phone = jQuery("#lpbanner_phone").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimlpbannersec) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Phone: "+lpbanner_phone);
                        $zopim.livechat.appendNotes("Customer Phone: "+lpbanner_phone);
                    });    
                }
            }
        });
        

        
        jQuery("#lpbanner_message").change(function(e) {
            let lpbanner_message = jQuery("#lpbanner_message").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimlpbannersec) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Message: "+lpbanner_message);
                        $zopim.livechat.appendNotes("Message: "+lpbanner_message);
                    });    
                }
            }
        });
        

/*----------------- contactsec-zopim.js ------------------*/
        
  var waitForZopimcontactsec = setInterval(function () {
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            }
            
            $zopim(function() {
                $zopim.livechat.setOnUnreadMsgs(unread);
                function unread(number) {
                    if (number>=1) {
                        var ua = navigator.userAgent.toLowerCase(), platform = navigator.platform.toLowerCase();
                        platformName = ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0],
                        isMobile = /ios|android|webos/.test(platformName);
                        if (!isMobile) {
                            $zopim.livechat.window.show();
                        }
                        $zopim.livechat.window.hide();
                    }
                }
            }); 
            clearInterval(waitForZopimcontactsec);
        }, 3000);
        
        
        jQuery("#contactsec_fname").change(function(e) {
            let contactsec_fname = jQuery("#contactsec_fname").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimcontactsec) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Firstname: "+contactsec_fname);
                        $zopim.livechat.appendNotes("Customer Firstname: "+contactsec_fname);
                    });    
                }
            }
        });
        
        jQuery("#contactsec_lname").change(function(e) {
            let contactsec_lname = jQuery("#contactsec_lname").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimcontactsec) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Lastname: "+contactsec_lname);
                        $zopim.livechat.appendNotes("Customer Lastname: "+contactsec_lname);
                    });    
                }
            }
        });
        
        
        jQuery("#contactsec_businessemail").change(function(e) {
            let contactsec_businessemail = jQuery("#contactsec_businessemail").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimcontactsec) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Email: "+contactsec_businessemail);
                        $zopim.livechat.appendNotes("Customer Email: "+contactsec_businessemail);
                    });    
                }
            }
        });
        
         jQuery("#contactsec_phone").change(function(e) {
            let contactsec_phone = jQuery("#contactsec_phone").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimcontactsec) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Customer Phone: "+contactsec_phone);
                        $zopim.livechat.appendNotes("Customer Phone: "+contactsec_phone);
                    });    
                }
            }
        });
        
         jQuery("#contactsec_companyname").change(function(e) {
            let contactsec_companyname = jQuery("#contactsec_companyname").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimcontactsec) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Company Name: "+contactsec_companyname);
                        $zopim.livechat.appendNotes("Company Name: "+contactsec_companyname);
                    });    
                }
            }
        });
        
        
  
        jQuery("#contactsec_service").change(function(e) {
            var selectedOption = jQuery(this).find('option:selected');
            var contactsec_service = selectedOption.data('service');
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimcontactsec) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Service: "+contactsec_service);
                        $zopim.livechat.appendNotes("Service: "+contactsec_service);
                    });    
                }
            }
        });
        
        
        jQuery("#contactsec_message").change(function(e) {
            let contactsec_message = jQuery("#contactsec_message").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopimcontactsec) {
                    $zopim(function() {
                      
                        $zopim.livechat.addTags("Message: "+contactsec_message);
                        $zopim.livechat.appendNotes("Message: "+contactsec_message);
                    });    
                }
            }
        });        
