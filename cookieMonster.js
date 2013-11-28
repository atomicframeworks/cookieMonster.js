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
        // Get cookie value by cookie name
        get: function (name) {
            // Init vars
            var c = document.cookie.split('; '), i = c.length - 1, cookies = {}, C;
            // Loop cookies
            for (i; i >= 0; --i) {
                C = c[i].split('=');
                cookies[C[0]] = c[i].substring(C[0].length + 1);
            }
            if (cookies[encodeURIComponent(name)]) {
                return decodeURIComponent(cookies[encodeURIComponent(name)]);
            }
        },

        // Set a cookie
        set: function (name, value, expires, path, domain, secure) {
            // Init vars & set defaults
            var date = new Date(), expiry = expires || 'Fri, 31 Dec 9999 23:59:59 GMT', val = value || '';
            if (typeof expiry === 'number') {
                // If expires is a number - treat as setting expires in n days
                date.setDate(date.getDate() + expiry);
            } else if (expires instanceof Date) {
                // If expires is a Date object - set to the expires date object
                date = expiry;
            } else if (typeof expires === 'string') {
                // If it is a string assume they have formatted string to convert to date
                date = new Date(expiry);
            }
            document.cookie = [
                encodeURIComponent(name) + '=' + encodeURIComponent(val),
                expiry ? '; expires=' + date.toUTCString() : '',
                domain ? '; domain=' + domain : '',
                path ? '; path=' + path : '',
                secure ? '; secure' : ''
            ].join('');
            return true;
        },
        // Expire the cookie by setting date to Unix epoch
        expire: function (name, path, domain) {
            return this.set(name, '', new Date(0), path, domain);
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