Nightwatch
--Requirements

	Java jdk
	node.js
	nightwatch
	drivers

	1. Install Java jdk
		--https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html
	2. Install node.js
		--https://nodejs.org/en/download/
	3. Install nightwatch (or clone the repository and run npm i)
		--npm i nightwatch --save-dev
	4. Install Drivers
		--npm i chromedriver --save-dev (Chrome)
		--npm i geckodriver --save-dev (Firefox)
	
--Page Object Pattern Configuration
	
	1. Create a Project Folder
	2. Create package.json
		--npm init -y
	3. Create nightwatch.conf.js (Copy the Config File)
		https://nightwatchjs.org/gettingstarted#installation
	4. Create globals.js file
	5. Define the ff from nightwatch.conf.js
		--Your page_objects_path
		--globals_path
		--test_workers

--Running your tests via npm commandline

	1. Run specific script
		--npm run <env_><scripts>
		ie: npm run bat_sp650 (Will run sp650 in bat environment / see package.json for customized scripts)
	2. Run all tests
		--npm tests
