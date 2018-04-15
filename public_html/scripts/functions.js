function getParameter(parameter) {
    var url = window.location.search.substring(1);
    var urlVars = url.split('&');

    for (var i = 0; i < urlVars.length; i++) {
        var param = urlVars[i].split('=');

        if (param[0] == parameter) {
            return param[1];
        }
    }
}

function removeParameter(parameter) {
	var url = window.location.href;
	var urlParts = url.split("?");

	if (urlParts.length >= 2) {
		var urlBase = urlParts.shift();
		var queryString = urlParts.join("?");
		var prefix = encodeURIComponent(parameter) +"=";
		var parts = queryString.split(/[&;]/g);

		for (var i = parts.length; i-- > 0; ) {
			if (parts[i].lastIndexOf(prefix, 0) !== -1) {
				parts.splice(i, 1);
			}
		}

		if(parts.length > 0) {
			url = urlBase + "?" + parts.join("&");
		} else {
			url = urlBase;
		}
	}

	window.history.pushState(null, "", url);
}

function validateForm(form) {
	var valid = true;
	var inputs = $(form + " [required]");
	$(form).addClass("was-validated");

	for(var i = 0; i < inputs.length; i++) {
		if($(inputs[i]).attr("type") == "captcha") {
			if(grecaptcha.getResponse().length == 0) {
				$(inputs[i]).children()
					.css("border", "1px solid red")
					.css("border-radius", "3px");


				$(inputs[i]).next().show();
				valid =  false;
			}
		} else {
			if(!inputs[i].checkValidity()) {
				valid = false;
			}
		}
	}

	return valid;
}

function copyText(input) {
	input.select();
	document.execCommand("Copy");
}

function formatCode() {
	$("pre.coding").each(function(pre) {
	  var lines = $(this).html().split("\n");
	  var matches;
	  var indentation = (matches = /^\s+/.exec(lines[0])) != null ? matches[0] : null;

	  if (!!indentation) {
	    lines = lines.map(function(line) {
	      return line.replace(indentation, "");
	    });

	    return $(this).html(lines.join("\n").trim());
	  }
	});
}