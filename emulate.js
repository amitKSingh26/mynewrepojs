const { openBrowser, goto, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
	//await emulateDevice('Galaxy S5');
	//await setViewPort({width:360, height:740})
	//await emulateNetwork("Regular2G")
	//await resizeWindow({width:600, height:800})
	await goto("http://maps.google.com");
	//await overridePermissions('http://maps.google.com',['geolocation']);
        
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
