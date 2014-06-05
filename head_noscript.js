// ************************************************************
//
// The following script uses regex and javascript string
// manipulation to extract illegal <noscript> elements
// that are in the <head> element. This operation is
// performed on a string, instead of a structured DOM.
//
// The reason for keeping the manipulation in unstructured
// form is due to a bug in libxml2 which will strip out the
// <body> attributes if a <noscript> node is found within the
// <head>
//
// ************************************************************

var match, head_noscript;
var re = /<noscript>[^`]+?<\/noscript>/gi;
var head_index = dombuf.value.indexOf("</head>");

while(match = re.exec(dombuf.value)){
	if(match.index < head_index){
		head_noscript += match[0];
		// Remove the <noscript> element from the head node
		dombuf.value = dombuf.value.substr(0, match.index) + dombuf.value.substr(match.index + match[0].length, dombuf.value.length);
	}
}
dombuf.value.replace(/(<body[^>]+>)/gi, "$1" + head_noscript);