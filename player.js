var audioContext;
var audioBuffer;
var bufferSourceNode;
var fftOutput;

window.onload=function(){
	audioContext = new AudioContext();
};

function loadFile(file){
	var fileReader = new FileReader();
	fileReader.onload = fileLoaded;
	fileReader.readAsArrayBuffer(file);
}

function fileLoaded(e){
audioContext.decodeAudioData(e.target.result, audioFileDecoded, audioFileDecodeFailed);
}

function audioFileDecoded(decodedBuffer){
	audioBuffer = decodedBuffer;

}

function audioFileDecodeFailed(e){
	alert("The audio file cannot be decoded");
}

function play(){
	if(audioBuffer){
		if(bufferSourceNode) bufferSourceNode.stop();
		bufferSourceNode = audioContext.createBufferSource();
		bufferSourceNode.buffer = audioBuffer;
		bufferSourceNode.connect(audioContext.destination);
		bufferSourceNode.start();
	}
}