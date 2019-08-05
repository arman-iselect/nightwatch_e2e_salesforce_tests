module.exports = 
    {
        "src_folders" : ["tests"],
        "page_objects_path" : ["page_objects"],
        "globals_path": "globals",
        "output_folder": "reports",
        "test_workers": { "enabled": true,
                            "workers": "auto"

        },
      
        "webdriver" : {
          "start_process": true,
          "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
          "port": 9515
        },
      
        "test_settings" : {
          "default" :  {
            "desiredCapabilities": {
              "browserName": "chrome"/*,
              "chromeOptions": {
                  "args": ["--headless"]
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