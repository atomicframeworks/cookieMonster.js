/*
    
       ##    #####      Copyright (c) - Kevin McGinty
     # _ #  ###        
    #   #  #            AtomicFrameworks
    
*/
/*global document*/
/*jslint plusplus: true */

// Cookies manager with unicode support
var cookieMonster = (function () {
    "use strict";
	
    return {

        // Get cookie value
        get: function (opts) {
            // Init vars
            var c = document.cookie.split('; '), i = c.length - 1, cookies = {}, C;
            
			// Loop cookies and get values
            for (i; i >= 0; --i) {
                C = c[i].split('=');
                cookies[C[0]] = c[i].substring(C[0].length + 1);
            }
			
			// If cookie exists return the value
            if (cookies[encodeURIComponent(opts.name)]) {
                return decodeURIComponent(cookies[encodeURIComponent(opts.name)]);
            }
        },

        // Set a cookie
        set: function (opts) {
            // Init vars & set defaults
            var date = new Date(),
				val = opts.value || '';
            if (typeof opts.expires === 'number') {
                // If expires is a number - treat as setting expires in n days
                date.setDate(date.getDate() + opts.expires);
            } else if (opts.expires instanceof Date) {				
                // If expires is a Date object - set to the expires date object
                date = opts.expires;
            } else if (typeof opts.expires === 'string') {				
                // If it is a string assume they have formatted string to convert to date
                date = new Date(opts.expires);
            }
			
			// Set the cookie
			document.cookie = [
				encodeURIComponent(opts.name) + '=' + encodeURIComponent(opts.value),
				opts.expires ? '; expires=' + date.toUTCString() : '',
				opts.domain ? '; domain=' + opts.domain : '',
				opts.path ? '; path=' + opts.path : '',
				opts.secure ? '; secure' : ''
			].join('');
			
            return true;
        },
		
        // Expire the cookie
        expire: function (opts) {
			// Set the expiry to Unix epoch
			opts.expires = new Date(0);
            return this.set(opts);
        },

        // Check for existance of cookie
        check: function (name) {
            return (document.cookie.search(new RegExp('(;\\s{0,1}|^)' + encodeURIComponent(name) + '\\s*\\=', 'g')) !== -1);
        },
		
        // Return all cookie keys
        keys: function () {
			// Init vars
            var c = document.cookie.split('; '), l = c.length - 1, arr = [], i;
            
			// Loop cookies
            for (l; l >= 0; --l) {
                // Slice out key
                i = c[l].indexOf('=');
                if (i !== -1) {
                    arr.push(c[l].substring(0, i));
                }
            }
			
            return arr.reverse();
        }
    };
}());