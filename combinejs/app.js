
// Note: This is untested as we do not currently support
// the length parameter on an element list.

// Check for the e8apps object and create it if it doesn't exist
var e8apps = e8apps || {};
e8apps.combinejs = e8apps.combinejs || {};

// Combine JS application
(function(o){

	o.asset_urls = function(){
		var assets = request.query.split(',');
		for(var i = 0; i < assets.length; i++){
			assets[i] = decodeURIComponent(assets[i]);
		}
		return assets;
	};

	o.combine_scripts = function(){
		var scripts = dombuf.dom.xpath("//script[@src]");
		var scriptlen = scripts.length;
		var urls = [];
		for(var i = 0; i < scriptlen; i++){
			urls.push(encodeURIComponent(scripts[i].getAttribute('src')));

			if((i + 1) == scriptlen){
				// Replace the final script src with the new script src.
				var e8_src = "/_e8/combinejs/?" + urls.join(',');
				scripts[i].setAttribute('src', e8_src);
			}
			else{
				scripts[i].remove();
			}
		}
	};

})(e8apps.combinejs);

