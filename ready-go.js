var j=0;
function ready_go()
{
    //var j=0;
    var img=document.getElementsByTagName("img")
    for(var i=0;i<3;i++) {
        img[i].setAttribute('src', 'gray.png');
    }
    if(j==0)
    {
        img[j].setAttribute('src', 'red.png');
    }
    else if(j==1)
    {
        img[j].setAttribute('src', 'orange.png');
    }
    else
    {
        img[j].setAttribute('src', 'green.png');
    }
    j++;
    if(j==3)
    {
        j=0
    }
}

setInterval(ready_go,3000)