/*Declaration of Control Variables of Function ActionOne and ActionTwo*/
    var ControlOne = document.getElementById("ButtonOne").control;
    var ControlTwo = document.getElementById("ButtonTwo").control;

/*Function that coordinates the Digital Mode Display*/
function ActionOne(){
    if(ControlOne=="On"){
        document.body.style.background="linear-gradient( 160deg,#0A0A0B, #215BF0)";
        document.getElementById("DisplayOne").style.display="none";
        ControlOne="Off";
    }
    else{
        document.body.style.background="linear-gradient( 70deg,#0A0A0B, #215BF0)";
        document.getElementById("DisplayOne").style.display="flex";
        ControlOne="On";
    }
}

/*Function that coordinates the Analog Mode Display*/
function ActionTwo(){
    if(ControlTwo=="On"){
        document.body.style.background="linear-gradient( 160deg,#0A0A0B, #215BF0)";
        document.getElementById("DisplayTwo").style.display="none";
        ControlTwo="Off";
    }
    else{
        document.body.style.background="linear-gradient( 70deg,#0A0A0B, #215BF0)";
        document.getElementById("DisplayTwo").style.display="flex";
        ControlTwo="On";
    }
}

/*Function that coordinates the all Display and and respective individualities*/
const ActionDate = ()=>{
    /*Declaration of Control Variables of this function*/
    const Doc = document.getElementById("DisplayDigital");
    const CurrentDate = new Date();
    const Hour = CurrentDate.getHours();
    const Minute = CurrentDate.getMinutes();
    const Second = CurrentDate.getSeconds();

    /*Analysis of the searched data and formatting them when necessary for the Digital Display*/
    const NewHour = Hour < 10 ? `0${Hour}` : Hour;
    const NewMinute = Minute < 10 ? `0${Minute}` : Minute;
    const NewSecond = Second < 10 ? `0${Second}` : Second;

    /*Time analysis and time and period printing*/
    if(Hour <12){
        Doc.innerHTML = `${NewHour} : ${NewMinute} : ${NewSecond} AM`;
    }
    else{
        Doc.innerHTML = `${NewHour} : ${NewMinute} : ${NewSecond} PM`;
    }
    
    /*Calculation for setting the Analog Clock*/
    HourRotation = 30 * Hour + Minute / 2;
    MinuteRotation = 6 * Minute;
    SecondRotation = 6 * Second;

    /*Analog Clock Printing*/
    document.getElementById("Hours").style.transform=`rotate(${HourRotation}deg)`;
    document.getElementById("Minutes").style.transform=`rotate(${MinuteRotation}deg)`;
    document.getElementById("Seconds").style.transform=`rotate(${SecondRotation}deg)`;
}

setInterval(()=>{ActionDate()}, 1000)
