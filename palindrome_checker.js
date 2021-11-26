function palindrome(str) {
	// Convert string to list
	let strList  = str.split('')

	// Convert string to lower case
	strList = strList.map(string => string.toLowerCase())

	// Remove all non-alphanumeric characters
	strList = strList.filter(string => /[a-z0-9]/.test(string))

	// Create an horizontal flip of string
	let flipStrList = []
	strList.map(string => flipStrList.unshift(string))

	// Convert both lists back to string and compare 
	// their values
	let flipStr = flipStrList.join('')
	str = strList.join('')

	return flipStr == str
}

palindrome("not a palindrome");