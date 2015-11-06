function chromagram_IF(d, sr, fftlen = 2048, nbin = 12, f_ctr = 1000, f_sd =1){

	var A0 = 27.5;
	var A440 = 440;

	var f_ctr_log = Math.log(f_ctr/A0) / Math.log(2);

	var fmax = octs2hz(hz2octs(f_ctr)-2*f_sd);
	var fminu = octs2hz(hz2octs(f_ctr)-f_sd);
	var fmaxl = octs2hz(hz2octs(f_ctr)+f_sd);
	var fmaxu = octs2hz(hz2octs(f_ctr)+2*f_sd);	

	var ffthop = fftlen/4;
	var nchr = 12;







}


function octs2hz(octs, A440 = 440){

	return (A440/16) * Math.pow(2,octs)
}


function hz2octs(freq, A440 = 440){

	return Math.log(freq/(A440/16))/Math.log(2)
}


function ifptrack(d, w, sr, fminl = 150, fminu = 300, fmaxl = 2000, fmaxu = 4000){


}

function ifgram(X, N = 256, W = N; H = W/2; SR = 1){
	var s = X.length;

	var win = new Array(W);
	for(var i =0; i<W; i++){
		win[i] = 0.5 *(1 - Math.cos(i/W*2*Math.PI));
	}

	var T = W/SR;
	var dwin = new Array(W);
	for(var i =0; i<W; i++){
		dwin[i] = -Math.PI / T * Math.sin(i/W*2*Math.PI);
	}

	var norm = 2/sum(win);
	var nhops = 1+ Math.floor((s-W)/H);

	var F = new Array(1+N/2);
	var D = new Array(1+N/2);

	var nmw1 = Math.floor( (N-W) / 2);
	var nmw2 = N-W -nmw1;

	ww = new Array(N);
	for(var i =0; i<N; i++){
		ww = 2* Math.PI * i * SR/N;
	}

	var u = new Array(nhops)
	for (var i = 0; i < nhops){

	}
}





