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
        get: function (params) {
            // Init vars
            var c = document.cookie.split('; '), i = c.length - 1, cookies = {}, C;
            
			// Loop cookies and get values
            for (i; i >= 0; --i) {
                C = c[i].split('=');
                cookies[C[0]] = c[i].substring(C[0].length + 1);
            }
			
			// If cookie exists return the value
            if (cookies[encodeURIComponent(params.name)]) {
                return decodeURIComponent(cookies[encodeURIComponent(params.name)]);
            }
        },

        // Set a cookie
        set: function (params) {
            // Init vars & set defaults
            var date = new Date(),
				val = params.value || '';
            if (typeof params.expires === 'number') {
                // If expires is a number - treat as setting expires in n days
                date.setDate(date.getDate() + params.expires);
            } else if (params.expires instanceof Date) {				
                // If expires is a Date object - set to the expires date object
                date = params.expires;
            } else if (typeof params.expires === 'string') {				
                // If it is a string assume they have formatted string to convert to date
                date = new Date(params.expires);
            }
			
			// Set the cookie
			document.cookie = [
				encodeURIComponent(params.name) + '=' + encodeURIComponent(val),
				params.expires ? '; expires=' + date.toUTCString() : '',
				params.domain ? '; domain=' + params.domain : '',
				params.path ? '; path=' + params.path : '',
				params.secure ? '; secure' : ''
			].join('');
			
            return true;
        },
		
        // Expire the cookie
        expire: function (params) {
			// Set the expiry to Unix epoch
			params.expires = new Date(0);
            return this.set(params);
        },

        // Check for existance of cookie
        check: function (params) {
            return (document.cookie.search(new RegExp('(;\\s{0,1}|^)' + encodeURIComponent(params.name) + '\\s*\\=', 'g')) !== -1);
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