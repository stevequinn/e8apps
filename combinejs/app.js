
// Check for the e8apps object and create it if it doesn't exist
var e8apps = e8apps || {};
e8apps.combinejs = e8apps.combinejs || {};

// Combine JS application
(function(o){

	o.asset_urls = function(){
		assets = request.query().split(',');
		for(var a in assets){
			assets[a] = decodeURIComponent(assets[a]);
		}
		return assets;
	};

	o.combine_scripts = function(){
		scripts = dombuf.dom.xpath("//script[@src]");
		urls = [];
		for(var i = 0; i < scripts.length; i++){
			urls.push(encodeURIComponent(scripts[i].getAttribute('src')));

			if((i + 1) == scripts.length){
				// Replace the final script src with the new script src.
				e8_src = "/_e8/combinejs/?" + urls.join(',');
				scripts[i].setAttribute('src', e8_src);
			}
			else{
				scripts[s].parentNode.removeChild(scripts[s]);
			}
		}
	};

})(e8apps.combinejs);

