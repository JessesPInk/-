/*
** Create by 张晓坤 on 2018/11/8
*/
window.onload = function (  ) {
    var map = document.getElementById('map');
    for (var i = 0;i<=map.offsetHeight/20;i++){
        var hr = document.createElement('hr');
        hr.style.position = 'absolute';
        hr.style.border = '0px';
        hr.style.height = '1px';
        hr.style.width = map.offsetWidth + 'px';
        hr.style.top = (i-1)*20+'px';
        hr.style.backgroundColor = 'red';
        hr.style.marginTop = '20px';
        map.appendChild(hr);
    }

    for (var i = 0;i<=map.offsetWidth/20;i++){
        var hr = document.createElement('hr');
        hr.style.position = 'absolute';
        hr.style.border = '0px';
        hr.style.height = map.offsetHeight + 'px';
        hr.style.width = '1px'
        hr.style.left = (i-1)*20+'px';
        hr.style.top = '0px';
        hr.style.backgroundColor = 'red';
        hr.style.marginLeft = '20px';
        hr.style.marginTop = '0px';
        map.appendChild(hr);
    }
}
