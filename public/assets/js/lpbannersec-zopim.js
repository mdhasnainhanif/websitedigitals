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
        
        
        jQuery("#lpbanner_name").change(function(e) {
            let lpbanner_name = jQuery("#lpbanner_name").val();
              
            if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                return;
            } else {
                if(waitForZopim) {
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
                if(waitForZopim) {
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
                if(waitForZopim) {
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
                if(waitForZopim) {
                    $zopim(function() {
                        
                        $zopim.livechat.addTags("Message: "+lpbanner_message);
                        $zopim.livechat.appendNotes("Message: "+lpbanner_message);
                    });    
                }
            }
        });