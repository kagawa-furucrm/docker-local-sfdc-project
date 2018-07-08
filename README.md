# sfdc-sfa-app-prototype

# Summary

In many cases your clients want to you present your prototype on sfdc platform 
before go close deal or go next phase. But your front-end engineer has not experienced in
developing SPA on salesforce and familiar with vf and apex code. 
So we need to create local and might share this app enviroment to team-coworker
In this sample we user Jsforce to connect to Salesforce to get Account data


# Prepare

## Docker

1. Install [Docker](https://www.docker.com/products/docker)
2. Share your application's folder 

## SFDC OAuth Setting

### 1. Create Connected App

### 2. Setting OAuth

- Callback url（default: http://localhost:3000/）
you can change port in jsforce.config.js,docker-compose.yml
- OAuth scope:  only allow access api for access data
- Web application start url （default http://localhost:3000/）

### 3. Usage of Connected App's consumer key

copy your consumer key and paster into this file app/static/js/jsforce.config.js
 as following 

if (!jsfConn) {
    jsforce.browser.init({
        clientId: 'salesforce's connected app cosumer key',
        redirectUri: 'http://localhost:3000/',
        proxyUrl: 'http://localhost:3123/proxy/'
    });
    var jsfConn = jsforce.browser.connection;

    // In case of can not get Access token redirect to login  
    if (!jsfConn.accessToken) {
        jsforce.browser.login();
    }
}
```

## Start app and proxy server

```
> docker-compose up -d
```

## App folder's public resources

app/static

## Launch sample code

```
bower install
```

Run http://localhost:3000/



# Reference Site

- [docker-sfdc](https://qiita.com/comefigo/items/d819f8bb36d3b404204a)
- [jsforce](https://jsforce.github.io/)
- [jsforce ajax proxy](https://github.com/jsforce/jsforce-ajax-proxy)
- [tyoshikawa1106のブログ](http://tyoshikawa1106.hatenablog.com/entry/2016/03/17/011316)
