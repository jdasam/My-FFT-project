/*
based on Müller and Ewert's Chroma toolbox for Matlab
*/


function audio_to_pitch_via_FB(f_audio){
	var fs_pitch = new Array(128);
	var fs_index = new Array(128);



	for(var i=20; i<59; i++){
		fs_pitch[i] = 882;
		fs_index[i] = 3;
	}

	for(var i=59; i<95; i++){
		fs_pitch[i] = 4410;
		fs_index[i] = 2;
	}

	for(var i=95; i<120; i++){
		fs_pitch[i] = 22050;
		fs_index[i] = 1;
	}

	var pcm_ds = new Array(3);
	pcm_ds[0] = f_audio;

	

}

function resample()