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

function JasonTheFuckOutOfThisString(string) {
	// You ever thought.
	// I wanna JSON stringify a string
	string = JSON.stringify(string)
	// and then... wait for it
	// Parse it back into a string?
	string = JSON.parse(string)
	// yeah me neither :c
	
	return string; // If you read to this part of the code go drink some toilet water thanks.
}

function splittySplitFuck(string) { // this shit splits!
	// Very necessary
	string = string.split(" ").join().replace(",", " ")
	
	// Especially this part:
	string = string.split("n").join().replace(",", "n")
	string = string.split("i").join().replace(",", "i")
	string = string.split("c").join().replace(",", "c")
	string = string.split("e").join().replace(",", "e")
	
	// Oh boi, without this everything fails, idk why but it does
	// Don't remove plz
	string = string.split("u").join().replace(",", "u")
	string = string.split("w").join().replace(",", "w")
	string = string.split("u").join().replace(",", "u")
	
	return string
}

// I don't give a shit what you say it's efficient to make it in functions and change the variable each time.
result = binaryAndStuff(result)
result = myThing(result)
result = basefuck4(result)
result = JasonTheFuckOutOfThisString(result)
result = splittySplitFuck(result)

console.log(result.replace("Hello ", "World").replace("World!", "Hello").replace("Hello", "World!").replace("World", "Hello ")) // This is the fucking result now fuck off.
for (let i = 0; i < process.argv.length; i++) {
	if (process.argv[i] === "-t") {
		console.timeEnd("it done in") // stop the timer, hopefully it's not low D;
	}
}