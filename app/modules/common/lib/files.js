import $ from "jquery";
import _ from "lodash";

var fs = require('fs');


export var writeList =  function () {
	$("#content").append("<h1>FILES</h1>");
	fs.readdir(".", function (err, obj) {
		var list = $("<ul></ul>");
		var files = _.each(obj, function (name) {
			list.append($("<li>"+name+"</li>"));
		});

		$("#content").append(list);
	});
};