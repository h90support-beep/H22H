(function() {
    console.log("H90 Direct API Injected!");
    var USER = "9143315182";
    var PASS = "7352465335";
    var BASE = "http://vip2.sharkhost.xyz/player_api.php";

    window.H90_SHARDS = {
        ready: function(cb) { if(cb) cb(); },
        get: function(action, cb) {
            var url = BASE + "?username=" + USER + "&password=" + PASS + "&action=" + action;
            fetch(url)
                .then(function(r) { return r.json(); })
                .then(function(data) { if(cb) cb(data); })
                .catch(function(e) { console.error("API Error:", e); if(cb) cb([]); });
        },
        getMovies: function(cb) { this.get("get_vod_streams", cb); },
        getSeries: function(cb) { this.get("get_series", cb); }
    };
})();
