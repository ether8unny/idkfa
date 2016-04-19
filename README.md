###### Note: Might not always be up to date ######

### Liber Primus Translator ###

Takes Futhark and keys to produce clear text.
Calculates IoC and matches produced clear text against a dictionary.

Will output: Text shifted up/down from left to right along a forward and reverse Gematria. It's IoC and matched words.

Use js/config.js to configure the app.

##### Selecting segments #####

Liber can be split by (w)ord, (c)lause, (p)aragraph (s)egment (l)ine or (q)age (page).

```node

"select": {s:[]}					// Will get every segment
"select": {s:[15, 16]}				// Will get segment 15 and 16
"select": {c:[2, 3], p[10, 11]}		// Will get clause 2 and 3, and paragraph 10 and 11
```

##### Selecting keys #####

Keys can be added as string ('divinity') or array [2, 3, 5, 7]. Keys will be added with forword or reverse offsets depending on param direction.

Note: Selecting OEIS keys has been disabled until a proper function to handle the output is implemented.
Though you may still select keys from ./data/oeis by name ('A010000'), index or range/offset, just include the module in engine.js.

```node

//config.js

"keys":
[
	[[0]],
	['divinity', 1]
]

//engine.js

K.add('divinity', 1);
K.add([0, 1, 2, 3, 4, 5]);
```

Key streams can be mapped against each other with multiple modifiers.

```node

// Stream of primes
var key01 = N.prime(current.maxchar);			// [2, 3, 5, 7, 11, ..]

// Stream of totients
var key02 = N.phi(current.maxchar);				// [0, 1, 1, 2, 2, ..]

// Sum of key01 and key02
var key03 = N.map(key01, key02, 's', 0);		// [2, 4, 6, 9, 13, ..]

// Difference of key01 and key02
var key04 = N.map(key01, key02, 'd', 0);		// [2, 2, 4, 5, 9, ..]

// Product of key01 and key02
var key05 = N.map(key01, key02, 'p', 0);		// [0, 3, 5, 14, 22, ..]

// Interweave key01 and key02
var key07 = N.weave(key01, key02);				// [2, 0, 3, 1, 5, ..]

// Stream of zeros
var key08 = N.stream(0, current.maxchar);		// [0, 0, 0, 0, 0, ..]

// Stream of primes -1
var key09 = N.map(key01, key08, 's', - 1);		// [1, 2, 4, 6, 10, ..]
```

To do multiple iterations of chunk with continuous key, pass iterations to E.process(data, iterations);

```node

E.process(data, 2);
```

### Setup ###

Edit js/config.js for selecting chunks and keys, and ./js/lib/engine.js to play with keys (keys as function).

```bash

$ npm install
$ node ./js
```

### Contribution guidelines ###

Please use tabs (width 4) and break {} to nl.

### Who do I talk to? ###

bugfixer@freenode
bugfixer@jabber.calyxinstitute.org