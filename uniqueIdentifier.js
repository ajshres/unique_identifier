var identifiers = [];
function getRandomString(){
    return buildTimestampIdentifier() + buildUniqueIdentifier() + buildUniqueIdentifier();
}

function buildUniqueIdentifier(){
	return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
}


/*
*	Returns 8letter hexdecimal value
*/
function buildTimestampIdentifier(){
	var newDate =  new Date().getTime()
				.toString(16);
	var length = newDate.length;
	return newDate.substring(length-8,length);
}
function getUniqueIdentifier(){
	var identifier = null;
	do {
		identifier = getRandomString();
	} while(identifiers.indexOf(identifier)!=-1);
	return identifier;
}
