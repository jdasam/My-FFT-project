(function (Sink) {
2	
3	(function(){
4	
5	/**
6	 * If method is supplied, adds a new interpolation method to Sink.interpolation, otherwise sets the default interpolation method (Sink.interpolate) to the specified property of Sink.interpolate.
7	 *
8	 * @arg {String} name The name of the interpolation method to get / set.
9	 * @arg {Function} !method The interpolation method.
10	*/
11	
12	function interpolation(name, method) {
13	    if (name && method) {
14	        interpolation[name] = method;
15	    } else if (name && interpolation[name] instanceof Function) {
16	        Sink.interpolate = interpolation[name];
17	    }
18	    return interpolation[name];
19	}
20	
21	Sink.interpolation = interpolation;
22	
23	
24	/**
25	 * Interpolates a fractal part position in an array to a sample. (Linear interpolation)
26	 *
27	 * @param {Array} arr The sample buffer.
28	 * @param {number} pos The position to interpolate from.
29	 * @return {Float32} The interpolated sample.
30	*/
31	interpolation('linear', function (arr, pos) {
32	    var first   = Math.floor(pos),
33	        second  = first + 1,
34	        frac    = pos - first;
35	    second      = second < arr.length ? second : 0;
36	    return arr[first] * (1 - frac) + arr[second] * frac;
37	});
38	
39	/**
40	 * Interpolates a fractal part position in an array to a sample. (Nearest neighbour interpolation)
41	 *
42	 * @param {Array} arr The sample buffer.
43	 * @param {number} pos The position to interpolate from.
44	 * @return {Float32} The interpolated sample.
45	*/
46	interpolation('nearest', function (arr, pos) {
47	    return pos >= arr.length - 0.5 ? arr[0] : arr[Math.round(pos)];
48	});
49	
50	interpolation('linear');
51	
52	}());
53	
54	
55	/**
56	 * Resamples a sample buffer from a frequency to a frequency and / or from a sample rate to a sample rate.
57	 *
58	 * @static Sink
59	 * @name resample
60	 *
61	 * @arg {Buffer} buffer The sample buffer to resample.
62	 * @arg {Number} fromRate The original sample rate of the buffer, or if the last argument, the speed ratio to convert with.
63	 * @arg {Number} fromFrequency The original frequency of the buffer, or if the last argument, used as toRate and the secondary comparison will not be made.
64	 * @arg {Number} toRate The sample rate of the created buffer.
65	 * @arg {Number} toFrequency The frequency of the created buffer.
66	 *
67	 * @return The new resampled buffer.
68	*/
69	Sink.resample   = function (buffer, fromRate /* or speed */, fromFrequency /* or toRate */, toRate, toFrequency) {
70	    var
71	        argc        = arguments.length,
72	        speed       = argc === 2 ? fromRate : argc === 3 ? fromRate / fromFrequency : toRate / fromRate * toFrequency / fromFrequency,
73	        l       = buffer.length,
74	        length      = Math.ceil(l / speed),
75	        newBuffer   = new Float32Array(length),
76	        i, n;
77	    for (i=0, n=0; i<l; i += speed) {
78	        newBuffer[n++] = Sink.interpolate(buffer, i);
79	    }
80	    return newBuffer;
81	};
82	
83	}(this.Sink));