# FORM E-MAIL FORWARD-ER

This is a small express app. 

The root POST route will recieve a request from an HTML form.  It will parse the contents of the request
into very basic HTML formatting, then forward that request on to the specified email.

It has nodemailer, body-parser and express as dependencies.

In my case, I created a dummy e-mail to SEND the emails from, and the destination email is the one that I want 
to get my messages at.  

Further, the app relies heavily on environment variables where the e-mail addresses - and the username and password 
are stored locally.  For this case, nodemailer is configured to use gmail by default - to change this, refer to the nodemailer
documentation.

This app could be expanded to as many POST routes as needed.


