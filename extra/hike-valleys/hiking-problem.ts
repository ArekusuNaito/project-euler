
function takeHike(hikeRoute)
{
    var currentLevel = 0;
    var seaLevelTimes = 0;
    hikeRoute.forEach(step => 
    {
        step = step.toUpperCase();
        if(step=='D')currentLevel--;
        if(step=='U')currentLevel++;
        if(currentLevel==0 && step == 'U') //if im coming up but reached the sea level... I CAME FROM a valley
        {
            seaLevelTimes++;
        }

    });
    return seaLevelTimes;
}



console.log(takeHike(['D','D','D','U','U','U']));
console.log(takeHike(['D','U','D','U','D','U']));
console.log(takeHike(['U','U','U','D','D','D']));