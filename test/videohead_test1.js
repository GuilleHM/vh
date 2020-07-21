const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://videohead.netlify.app');

driver.findElement(By.xpath('//*[@id="react-tabs-3"]/section/div[1]/div/a'))
    .then(function (element) {
        element.click().then(function () {
            driver.sleep(2000).then(function () {
                driver.getTitle().then(function (title) {
                    if (title === 'The Godfather | TMDb - Gatsby') {
                        console.log('Test passed');
                    } else {
                        console.log('Test failed');
                    }
                    driver.quit();
                });
            });
        }).catch(function (err) {
            console.log('Clicking Failure');
        });
    }).catch(function (err) {
        console.log(err.name);
    });

