function LiveFeedAction(request) {
	var jsonContent = request.postParams.sysparm_data.getAsJsonContent();
	for (var jsonArrayItr = jsonContent.iterator(); jsonArrayItr.hasNext(); ) {
		var arrayElement = jsonArrayItr.next();
		for (var jsonParamItr = arrayElement.iterator(); jsonParamItr.hasNext(); ) {
			var jsonParam = jsonParamItr.next();
			if (jsonParam.getName() != 'data') {continue;}
			for (var jsonPropertyItr = jsonParam.iterator(); jsonPropertyItr.hasNext(); ) {
				var jsonProperty = jsonPropertyItr.next();
				jsonProperty.valueFor('live_message', jsonProperty.getName());
			}
		}
	}
}

