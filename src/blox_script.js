/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

widget.on('domready', function() {
	var elements = document.getElementsByClassName("blox-date-format");
	for (var i = 0; i < elements.length; i++) {
		var sep = '/'
		var pos1 = 4
		var pos2 = 6
		var dt = elements[i].innerText
		dt = dt.replaceAll('/', '').trim()
		dt = [dt.slice(0, pos1), sep, dt.slice(pos1,pos2), sep, dt.slice(pos2)].join('')
		elements[i].innerText = dt
	}
})
