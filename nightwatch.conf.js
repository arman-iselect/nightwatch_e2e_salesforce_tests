module.exports = 
    {
        "src_folders" : ["tests"],
        "page_objects_path" : ["page_objects"],
        "globals_path": "globals",
        "output_folder": "reports",
        "log_path": ["logs"],
        "test_workers": { "enabled": false,
                            "workers": "auto" },

        "skip_testcases_on_fail": false,
        "screenshots" : {
          "enabled" : true,
          "path" : "reports/verifyfail_screenshots",
          "on_failure": true,
          "on_error": false,
          "log_screenshot_data": true, },
        
        
        "webdriver" : {
          "start_process": true,
          "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
          "port": 9515
        },
      
      
        "test_settings" : {
          "default" :  {
            "desiredCapabilities": {
              "browserName": "chrome",
              "chromeOptions": {
                  "args": [//"--headless",
                            "incognito",
                            "window-size=1366,768",
                            "disable-shader-name-hashing",
                             "disable-logging",
                             "disable-popup-blocking",
                             "disable-web-security",
                             //"ignore-certificate-errors",
                             "test-type=browser"
              ]
              }
              /*,
              "chromeOptions": {
                "args": ["--headless"]
              }*/
            }
          },

          "firefox" :  {
            "desiredCapabilities": {
              "browserName": "firefox",
              "firefoxOptions": {
                  "args": ["--headless", 
                            "window-size=1366,768",
                             "--disable-logging",
                             "disable-web-security",
                             "ignore-certificate-errors",
                             "--test-type"
              ]
              }
              /*,
              "chromeOptions": {
                "args": ["--headless"]
              }*/
            }
          },

            "test_runner" : {
              "type" : "mocha",
              "options" : {
                "ui" : "bdd",
                "reporter" : "list"
              }
          }
        }
      };