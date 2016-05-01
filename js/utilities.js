/* 	@licstart
	The MIT License (MIT)

	Copyright (c) 2016 Winston Mark Cheng

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be included
	in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
	CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	@licend*/

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