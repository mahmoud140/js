var j=0,z=0,global;
var img=document.getElementsByTagName('img');
function slid_show()
{
    j++;
    if(j==3)
    {
        j=0
    }

    //console.log(img)
  //var slid=[img.setAttribute('src','red.png'),img.setAttribute('src','orange.png'),img.setAttribute('src','green')]
    if(j-1==0)
    {
        img[0].setAttribute('src', 'red.png');
    }
    else if(j-1==1)
    {
        img[0].setAttribute('src', 'orange.png');
    }
    else
    {
        img[0].setAttribute('src', 'green.png');
    }

}
function left() {
    j--;
    console.log(j)
    if(j==-1)
    {
        j=2;
    }
    if(j-1==0)
    {
        img[0].setAttribute('src', 'red.png');
    }
    else if(j-1==1)
    {
        img[0].setAttribute('src', 'orange.png');
    }
    else
    {
        img[0].setAttribute('src', 'green.png');
    }
}
function play_fn() {
   // var slid=[img[0].setAttribute('src','red.png'),img[0].setAttribute('src','orange.png'),img[0].setAttribute('src','green.png')]
    //slid[z]
    if(z==0)
    {
        img[0].setAttribute('src','red.png')
    }
    else if(z==1)
    {
        img[0].setAttribute('src','orange.png')
    }
    else if(z==2)
    {
        img[0].setAttribute('src','green.png')
    }
    z++;
    if(z==3)
    {
        z=0;
    }

}
var btn=document.getElementById('right')
btn.addEventListener('click',slid_show)
var left1=document.getElementById('left')
left1.addEventListener('click',left)
var play=document.getElementById('play')
play.addEventListener('click',st)
function st() {
    global=setInterval(play_fn,3000)
}
var stop1=document.getElementById('stop')
stop1.addEventListener('click',stop_fn)
function stop_fn() {
    clearInterval(global)
}


