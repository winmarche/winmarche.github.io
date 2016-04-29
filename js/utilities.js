/*utilities.js
	This JavaScript file provides the website features such as,
	displaying the current year, without having to manually
	change it each year and without the need of PHP. The file
	also forces the website to be loaded using HTTPS. This file
	is used, for making the HTML code cleaner.*/

//Makes website load with a secure connection if it's not
if(window.location.protocol != "https:")
{
	window.location.protocol = "https";
}

/*showYear() function:
	Function for displaying current year*/
function showYear()
{
	document.write(new Date().getFullYear());
}