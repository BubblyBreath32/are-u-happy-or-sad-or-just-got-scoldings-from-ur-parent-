camera = document.getElementById("clicksnap1shot");

Webcam.attach('camera');

Webcam.set({
    height : 300,
    width : 300,
    image_format : 'png',
    png_quality : 90
});

function tsankaeptohs() {
Webcam.snap(function(data_uri) {
    document.getElementById("thepicisuglylygood").innerHTML = '<img id="thepicisuglylylylygoodlylylyokishlyok" src ="'+data_uri+'"/>';
})
};

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded() {
    console.log('model is loaded with buffers.this will curse you with 9999999999 days of buffer loads. your fault you opened it.so why did u open it. im not so helpful that ill  put a sign named as caution so its all your fault. you cannot sue me either as i will hire all the judges before you and become the supreme leader of the judiciary. the next step will be the prime minister of the country.then i will bring back hitler and colonise the whole world . i will betray him him and kill him and become the leader of the sorld. ITS ALL YOUR FAULT. ')
}

function speak() {
var synth = window.speechSynthesis();
var noitciderp_1 = "wow. u are feeling very " + prediction_1;
var noitciderp_2 = "if the first one is wrong then this is the right emotion😶‍🌫️ " + prediction_2;
var utterThis = new SpeechSynthesisUtterance(noitciderp_1 + noitciderp_2);
utterThis.rate = 0.05;
synth.speak(utterThis);
}

function check() {
    snapshotcapturedtakenimage = document.getElementById("thepicisuglylygood");
    classifier.classify(snapshotcapturedtakenimage, gotResult);
}

function gotResult(error, results) {
if (error) {
    console.error(error);
}

else {
    console.log(results);
    document.getElementById("emome1").innerHTML = results[0].label;
    document.getElementById("emome2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if (prediction_1 == "happy") {
        document.getElementById("emore1").innerHTML = "😁";
    } 
    if (prediction_1 == "sad") {
        document.getElementById("emore1").innerHTML = "😔";
    } 
    if (prediction_1 == "angry") {
        document.getElementById("emore1").innerHTML = "😤";
    } 

    if (prediction_2 == "happy") {
        document.getElementById("emore2").innerHTML = "😁";
    } 
    if (prediction_2 == "sad") {
        document.getElementById("emore2").innerHTML = "😔";
    } 
    if (prediction_2 == "angry") {
        document.getElementById("emore2").innerHTML = "😤";
    } 
}
}