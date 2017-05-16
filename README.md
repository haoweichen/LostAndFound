# LostAndFound

**1. Introduction to LOST&FOUND**
    The LOST&FOUND is a web app developed by Node.JS, which is the platform for the Stevens community. Either people find something or people lost something will head here. We gather every lost item in the Stevens and try to match them with their owners. If you lost something, be sure to check here out first!

**2. How do we develop LOST&FOUND?**
  <br>Node.JS: as our backend requirements</br>
  <br>Express: handle our server</br>
  <br>MongoDB: make the functionality webpages</br>
  <br>HTML and CSS: make valid webpages</br>
  <br>GOOGLE MAP API: position marks of lost-and-found</br>

**3. How to use LOST&FOUND?**
   1. Download the package of the code, open the terminal and switch to the folder where the package is.
	 2. Run “npm install” to install all dependencies.
	 3. Run “npm start”
	    After the code successful running, then go to the browser

	  p.s database connection have been set under mongoConnection.js 
  
  	```javascript
  	const mongodbConfig = {
  	'serverUrl': 'mongodb://cgu:cgusamuel@ds159200.mlab.com:59200/',
  	'database': 'cgu_lost_and_found'
  	}
  	```
  
  	 4. Type in the url “http://localhost:3000/”, where you can see our LOST&FOUND main page.
         5. An existing admin
	 email: 1@1.com
	 password: 1
	
  	6. An existing user
	 email: 2@1.com
	 password: 1



**4. Privilege**
![image](https://github.com/haoweichen/LostAndFound/blob/master/Screen%20Shot%202017-05-16%20at%2012.16.07%20PM.png)

**5. Structure**
	models – mongoCollections.js
		 mongoConnection.js
		 found.js
		 index.js
		 lost.js
		 user.js

	public – css – bootstrap.css
		       bootstrap.min.css
		       style.css
		– images
 		– js – bootstrap.js
		       dialog.js
		       js.js
                       tabEvents.js
		– fonts

	routes – index.js(defining all routes)
		 dashboard.js
		 found.js
		 home.js
        	 login.js
                 logout.js
                 lost.js
		 map.js
                 register.js

	views – layouts – main.handlebars
		dashboard.handlebars
		found-detail.handlebars
		found.handlebars
		googlemap.html
		home.handlebars
		login.handlebars
		lost-detail.handlebars
		lost.handlebars
		map.handlebars
		register.handlebars

app.js(creates, configures, and runs the server)

package.json
