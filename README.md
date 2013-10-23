# cookieMonster.js
JavaScript cookie manager with unicode support. <br>

## Installation
1. Include the source script in your html. <br>
This script will create the cookieMonster object that can be used to access cookies.
```html
<script src="cookieMonster.js"></script>
```

## cookieMonster Object Methods
The cookieMonster object contains five methods: get(), set(), check(), .expire(), and .keys()

### Baisc Usage
Using the cookieMonster object you can: <br> 
    .get('cookieName') the value of a cookie. <br>
    .set('cookieName', 'value') the value of a cookie. <br>
    .check('cookieName') for the existance of a cookie. <br>
    .expire('cookieName') a cookie. <br>
    .keys() to return an array of the current cookie keys. <br>


### cookieMonster.get('cookieName');
Return the value of 'cookieName'.  If there is no cookie set returns undefined.
###### Arguments: <br>
    cookieName - The name of the cookie to get the value of

### cookieMonster.set('cookieName', 'value', 'expires', 'path', 'domain', secure);
Sets a cookie named 'cookieName' with 'value' that will expire in 'expires' days.  Returns true.
###### Arguments: <br>
    cookieName - The name of the cookie to set the value of
    value - The value to store
    expires - (Optional) If undefined the expiry date will be set to Fri, 31 Dec 9999 23:59:59 GMT. 
        If expires is a Number object sets the expiry date to n days in the future.
        If expires is a Date object sets the expiry date to that date. <br>
        If expires is a string it will convert it to a Date Object for the expiry date.
    path - (Optional) Sets the path scope of the cookie. If undefined the default path will be used.
    domain - (Optional) Sets the domain scope of the cookie. If undefined the default domain will be used.
    secure - (Optional) Boolean to indicate if the cookie should be transferred over Https only.
                
### cookieMonster.check('cookieName');
Checks for the existance of the cookie 'cookieName'.  Returns true / false.
###### Arguments: <br>
    cookieName - The name of the cookie to check the existance of

### cookieMonster.expire('cookieName', 'path', 'domain');
Expire the cookie 'cookieName'.  Returns true.
###### Arguments: <br>
    cookieName - The name of the cookie to check to expire
    path - (Optional) The path scope of the cookie to expire. If undefined the default path will be used. <br>
    domain - (Optional) The domain scope of the cookie to expire. If undefined the default domain will be used. <br>

### cookieMonster.keys();
Return an array of the current cookie keys.

## License 
cookieMonster.js is released under the MIT license <br>
[www.opensource.org/licenses/MIT](www.opensource.org/licenses/MIT)