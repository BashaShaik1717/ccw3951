function MattermostCondition(request) {
	if (request.path.indexOf('/api/now/know17/createincident') > -1) {
		return true;
	}	
	return false;
}
