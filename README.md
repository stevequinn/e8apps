# Edge80 Applications #
The following applications can be used with the Edge80 platform. 

## combinejs ##
Combine all `<script>` elements found on an HTML page into a single external `<script>` asset, and modify the HTML page to only serve this asset. 

When used with Edge80 this happens automatically at the edge. 

## head_noscript ##
Move `<noscript>` elements from the `<head>` element to the top of the `<body>` element. This is required as `<noscript>` in `<head>` is technically illegal HTML and libxml does some weird things when it tries to parse a document that has this kind of structure. Weird things include removing all attributes from the `<body>` element. 

[www.edge80.com](http://www.edge80.com)
