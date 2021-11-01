function show() {
    if (document.getElementById('share').style.display == '' || document.getElementById('share').style.display == 'none')
        {
            document.getElementById('share').style.display = 'flex';
            document.getElementById('button').style.backgroundColor = 'hsl(217, 19%, 35%)';
            document.getElementById('button').getElementsByTagName('div')[0].style.filter = 'brightness(3)';
            if(window.innerWidth < 600)
            {
                document.getElementById('button').style.backgroundColor = 'hsl(212, 23%, 69%)';
                document.getElementById('button').style.zIndex = '1';
                document.getElementById('button').style.bottom = '-10px';
            }
        }    
    else
    {
        document.getElementById('share').style.display = 'none';
        document.getElementById('button').style.zIndex = '0';
        document.getElementById('button').style.bottom = 'auto';
        document.getElementById('button').style.backgroundColor = 'hsl(210, 46%, 95%)';
        document.getElementById('button').getElementsByTagName('div')[0].style.filter = 'brightness(1)';
    }
}