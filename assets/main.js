window.onload = function() {
    /* Replace all Google Maps links with Apple links, if on iPhone or iPad. */
    if ((navigator.userAgent.match(/iPhone/i))
	|| (navigator.userAgent.match(/iPod/i))) {
	var links = document.getElementsByTagName("a");
	for (var i=0; i < links.length; ++i) {
	    var e = links[i]
	    if (e.dataset && e.dataset.linkType=='address') {
		e.href = e.href.replace(/maps\.google\.com/, "maps.apple.com")
	    }
	}
    }

    /* Remove Xs in all mailto: links. */
    var links = document.getElementsByTagName("a");
    for (var i=0; i < links.length; ++i) {
	var e = links[i]
	if (e.dataset && e.dataset.linkType=='mailto') {
	    e.href = e.href.replace(/x/g, "")
	}
    }
}