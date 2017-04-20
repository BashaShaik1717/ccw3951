function LiveFeedCondition(request) {
 	if (request.path.indexOf("livefeed.do") > -1) {
 		return true;
 	}	
 	return false;
}
