function MattermostAction(request) {
	var jsonContent = request.getAsJsonContent();
	for (var jsonElementItr = jsonContent.iterator(); jsonElementItr.hasNext(); ) {
		var jsonElement = jsonElementItr.next();
		if(jsonElement.getName() == 'text') {
			jsonElement.valueFor('incident', 'short_description');
		}
	}
}
