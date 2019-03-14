$("#submitButton").click(function (){
    var kidrockurl = "https://cbsnews1.cbsistatic.com/hub/i/2017/09/07/8100cffa-e6d5-4bd8-89d6-647d9a9642b5/gettyimages-519932046.jpg";
    var eligible = false;
    var age = parseInt($("#ageInput").val());
    var inPrison = $("#inPrisonInput").val();
    var politician = $("#voteInput").val();
    //console.log(inPrison);
    
    if(age===NaN || inPrison==="" || politician===""){
        console.log("please stop");
        $("#result").append("give good inputs");
    }
    else if(age >= 18 && inPrison === "yes"){
        eligible=true;
    }
    
    if(!eligible){
        $("#result").append("<div id='sorry'><p>The election is a Tie! There is a perfect 269-269 tie in the electoral college and in the confusion Kid Rock seizes control of the country!</p><img src=\"" + kidrockurl+"\"></div>");
    }
    
    if(eligible){
        $("#result").append("<p>your single vote turns the tide of the election and </p>" + politician + " wins!");
    }
});