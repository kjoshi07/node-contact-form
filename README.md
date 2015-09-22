# How to submit a contact form using node.js API MVC

## Installtion Instrcutions
 1. Clone the repository
 2. go to your project directory
 3. run npm install (to installed dependent modules defined in package.js)
 4. Change configuration parameetrs in /app/config/index.js
 5. chnage smpt parametrs to sending email from your credentails in /app/utils/sendEmail.js
 6. run node app.js to start node application on defined port in /app/config/index.js
 7. access your application http://localhost:yourport
 
 ##End Points
 End points can be find in /app/routes.js
 
 End Points	                    URL	                 Description
  GET	                          /                    get welcome message to check api working fine.
  POST	                        /contactRequest	     Create a contact request, save all information in database and send email notification.
  GET                           /contactRequest      get all contact requests saved in database.
