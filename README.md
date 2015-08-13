# technicolor-states

This is an AngularJs implementation of problem statement. This app is stand alone. In service layer, I am mocking the responses, though the real REST implementations are commented out
For this demo, I have not worked much on UI front. The main motive here, as I perceive, is to showcase the implementation and the overall code structure.

## Build & development

Need node & grunt pre-installed, run npm install and bower install for installing dependencies
Run `grunt` for building and `grunt serve` for preview.

## Testing
Not included


##Questions
Q: What URL should be used to access your application? 
A: After installing node and grunt globally, navigate to folder, through console, and run grunt serve. App then runs at 'localhost:9000' to change the port go to gruntfile.js:71 and change port.
if dependencies are not there simply do a npm install

Q: What libraries did you use to write your application?
A: I used Yeoman for scaffolding, no fancy libraries were actually used which are there in app.js (ngCookie, resource, etc), reason being "time constraints"

Q: What influenced the design of your user interface?
A: I couldn't put much of an effort on UI, but the overall thought was to keep the UI efforts to the minimum and make vary basic UI using no or limited custom classes, Rather to reuse bootstrap classes as much as possible

Q: What steps did you take to make your application user friendly?
A: Being an SPA, it should separation of concerns is vital. To achieve that, I made 3 views, one for login, another for states and last one for guest messages. The functionality is designed on a classic HTML4 style, not css included, pretty old school but thats one thing that EVERY user know well.

Q: What steps did you take to insure your application was secure?
A: I am checking if user is logged in at the time of every controller load. If not I am redirecting him to login page.

Q: What could be done to the front end or back end to make it more secure?
A: As of now, the app is not that secure, the username and passwords are not encrypted, also being a standalone app there's no authentication token for the service calls. We can manage states on the backend as well as frontend, like putting timeouts on Auth tokens. Other than that we can go for a distributed DB and have separate authentication on that level.
