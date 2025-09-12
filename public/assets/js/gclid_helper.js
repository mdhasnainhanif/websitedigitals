function check_storage(){
    if(typeof(Storage) !== "undefined") {
        return true;
    } else {
        throw "Browser Not Supported.";
    }
}

function check_storage_key(key){
    try{
        check_storage();
        if(sessionStorage.getItem(key)){
            return true;
        } else {
            throw "Empty Storage.";
        }
    } catch(err) {
        console.log(err);
    }
}

function set_session_storage(key, value){
    try{
        check_storage();
        sessionStorage.setItem(key,value);    
    } catch(err){
        console.log(err);
    }
}

function get_session_storage(key){
    try{
        check_storage();
        check_storage_key(key);
        
        return sessionStorage.getItem(key);
    } catch(err) {
        console.log(err);
    }
}

function add_gclid_to_zopim(gclid = ""){
    $(document).ready(function() {
        setTimeout(function(){ 
        if(gclid != "") {
            var exist_gclid = (gclid != "" ? " - GCLID: " + gclid : "");
            set_session_storage("gclid", gclid);
            $zopim(function() {
                $zopim.livechat.addTags("SEM Click " + exist_gclid);
                console.log("SEM Click " + exist_gclid);
            });
            console.log("SEM Click " + exist_gclid);
        } else {
            try {
                var gclid = get_session_storage("gclid");
                console.log(gclid);
                $zopim(function() {
                    $zopim.livechat.addTags("SEM Click - GCLID: " + gclid);
                });
            } catch (err) {
                console.log("Empty");
            }
        }
        }, 5000);
    });
}
