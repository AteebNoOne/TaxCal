// Add this script in a separate JavaScript file, e.g., iframe-protection.js

// Set the X-Frame-Options header to deny if the current website is not ateeb.com
console.log("Host: ",window.location.host);
if (window.location.host !== 'ateeb.com') {
    document.addEventListener('DOMContentLoaded', function () {
      // Set the X-Frame-Options header to deny
      document.header = 'X-Frame-Options: DENY';
    });
  }
  
    var parentURL = window.parent.location.href;
    console.log("Parent url" , parentURL);
