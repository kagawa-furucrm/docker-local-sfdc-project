if (!jsfConn) {
    jsforce.browser.init({
	loginUrl : 'https://login.salesforce.com',
	//input your connected app's consumer key here
        clientId: 'Add connected app's consumerkey here',
        redirectUri: 'http://localhost:8082/',
        proxyUrl: 'http://localhost:3123/proxy/'
    });
    var jsfConn = jsforce.browser.connection;

    // Redirected to login page if there is not accessToken
    if (!jsfConn.accessToken) {
        jsforce.browser.login();
    }
}
