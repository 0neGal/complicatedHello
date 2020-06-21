/* Copyrighted by 0neGuyDev */
console.time("it done in")
// Congrats, you're wasting time
// There's abosolutely no fucking reason you're here.
// You won't get anything out of it
// Yet you're still here
// Whatever, do as you please

var result = "010001000100100000101101010100000100110000101101010000010101001100101101010000010101001100101101010011110100100100101101001011010101011101011001001011010100111101001001001011010101010001001000001011010100000101010011001011010100011001001000001011010100101001010011"; // This will be the variable we'll be experimenting with throughout this whole waste of time, in the end it'll become "Hello World!" I know craaazy!

function binaryAndStuff(string) {
	string = string.match(/.{1,8}/g).join(" ") // If I remember regEx correctly this will add a space every eight characters.
	
	let bits = string.split(" ") // turn the shit into an array of BITS, vevy cooul
	let endResult = [];
	
	for (let i = 0; i < bits.length; i++) {
		endResult.push(String.fromCharCode(parseInt(bits[i], 2)))
	}; return endResult.join(""); 
}

// Be prepared to see fuckery-doo
// DH-PL-AS-AS-OI--WY-OI-TH-AS-FH-JS
function myThing(string) {
	return string.replace(/--/g, " ").replace(/-/g, "").replace(/DH/g, "H").replace(/PL/g, "e").replace(/AS/g, "l").replace(/OI/g, "o").replace(/WY/g, "W").replace(/TH/g, "r").replace(/FH/g, "d").replace(/JS/g, "!") // fuck you this is efficient
	// Encryption standard = 100
}

function basefuck4(string) {
	
	// I would like to congratulate node...
	// It's terrible and should burn in hell
	// WHY THE FUCK IS BTOA() AND ATOB() NOT A THING?
	
	let b64 = Buffer.from(string).toString("base64")
	b64 = Buffer.from(b64, "base64").toString("ascii")
	
	// This is ineffective.
	// Stop complaining
	// That's the fucking point
	
	return b64;	
}

// I don't give a shit what you say it's efficient to make it in functions and change the variable each time.
result = binaryAndStuff(result)
result = myThing(result)
result = basefuck4(result)

console.log(result.replace("Hello ", "World").replace("World!", "Hello").replace("Hello", "World!").replace("World", "Hello ")) // This is the fucking result now fuck off.
console.timeEnd("it done in")