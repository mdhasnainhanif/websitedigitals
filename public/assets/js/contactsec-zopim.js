  var waitForZopim = setInterval(function () {
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
            clearInterval(waitForZopim);
        }, 3000);
        
        
        jQuery("#contactsec_fname").change(function(e) {
            let contactsec_fname = jQuery("#contactsec_fname").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopim) {
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
                if(waitForZopim) {
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
                if(waitForZopim) {
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
                if(waitForZopim) {
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
                if(waitForZopim) {
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
                if(waitForZopim) {
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
                if(waitForZopim) {
                    $zopim(function() {
                      
                        $zopim.livechat.addTags("Message: "+contactsec_message);
                        $zopim.livechat.appendNotes("Message: "+contactsec_message);
                    });    
                }
            }
        });