Webcam.set({
    width: 360,
    height: 360,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  camera=document.getElementById("camera");
  Webcam.attach("#camera");

  function take_snapshot(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML='<img id="captured_image" src="' + data_uri + '">';
      });
      
  }

  console.log('ml5 version',ml5.version);
  classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XsYAci7OH/model.json',modelLoaded);

  function modelLoaded(){
      console.log("model Loaded");
  }

  function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The prediction is" + prediction_1 ;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
    
  }

  function check(){
  }
  
  function gotResult(){

  }