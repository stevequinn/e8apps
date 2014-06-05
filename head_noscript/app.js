// ************************************************************
//
// The following script uses regex and javascript string
// manipulation to extract <noscript> elements that are
// in the <head> element, as this is technically illegal
// HTML. This operation is performed on an unstructured
// string, instead of a structured DOM.
//
// The reason for keeping the manipulation in unstructured
// form is due to a bug in libxml2 which strips out the
// <body> attributes if a <noscript> element is found within
// the <head>. This means that as soon as the buffer is
// converted to a dom, the <body> attributes are lost.
//
// Note: This must be called before any structured operation
// has been performed on the buffer.
//
// Usage: dombuf.value = e8apps.head_noscript.move_to_body(dombuf.value)
//
// ************************************************************

var e8apps = e8apps || {};
e8apps.head_noscript = e8apps.head_noscript || {};

(function(o) {
	o.move_to_body = function(s){
		var match;
		var head_noscript = [];
		var re = /<noscript>[^`]+?<\/noscript>/gi;
		var sdom = s;
		var head_index = sdom.indexOf("</head>");

		while(match = re.exec(sdom)){
			if(match.index < head_index){
				head_noscript.push(match[0]);
				// Remove the <noscript> element from the head node
				sdom = sdom.substr(0, match.index) + sdom.substr(match.index + match[0].length, sdom.length);
			}
		}
		sdom = sdom.replace(/(<body[^>]+>)/gi, "$1" + head_noscript.join(''));

		return sdom;
	};
})(e8apps.head_noscript);
