function submit(e) {
    e.preventDefault();
    var e1 = document.getElementById('element_1').textContent
    var div = document.getElementById('footer')
    if (e1 == '') {
        div.textContent = 'Error name'
    }
    var p=document.getElementById('element_1')
    var br=document.createElement("br")
   // br.textContent="\n"
    p.appendChild(br);
    var e2=document.getElementById('element_2').textContent
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e2)))
    {
        div.textContent += '    invalid email'
    }
    var e3 = document.getElementById('element_3').textContent.length
    if (e3 < 8) {
        div.textContent += '\n'+'    Error pass'
    }
    var e4_1 = document.getElementsByName('element_4_1').checked
    var e4_2 = document.getElementById('element_4_2').checked
    if (!e4_1 && !e4_2) {
        div.textContent += '    must choose gender'
    }
    var e5 = [],i=0;
    e5[0] = document.getElementById('element_5_1').checked
    e5[1] = document.getElementById('element_5_2').checked
    e5[2] = document.getElementById('element_5_3').checked
    e5[3] = document.getElementById('element_5_4').checked
    for(var j=0;j<4;j++ )
    {
        if(e5[j])
        {
            i++
        }
    }
    if(i<2)
    {
        div.textContent += '    must choose at least two'
    }
    var e6 = document.getElementById('element_6')
    if(e6[0].value=="")
    {
        div.textContent += '    must choose country'
    }

}

var form=document.getElementById('form_1085147')
form.addEventListener('submit',submit)