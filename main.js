//https://teachablemachine.withgoogle.com/models/bvM8SqCj9/
function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bvM8SqCj9/model.json", modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    console.log("Got Results")
}