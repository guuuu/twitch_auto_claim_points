function getElementByXpath(path) {
	return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

claiming = false;

async function click_bonus(){ 
	while (claiming){
		try{
			getElementByXpath("/html/body/div[1]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div/section/div/div[5]/div[2]/div[2]/div[1]/div/div/div/div[2]/div/div/div/button/span").click()
			console.log("Bonus claimed sucessfully...");
			await sleep(60000);
		}
		catch(err){
			console.log("No bonus to claim....");
			await sleep(60000);
		}
	}
}

function turn_on_auto_claiming(){
	claiming = true;
	click_bonus();
}

function turn_off_auto_claiming(){
	claiming = false;
}

turn_on_auto_claiming()