(function (w) {
    //1.2 食 物
    function Food(width,height,left,top,bgc) {
        this.width = width || 20;
        this.height = height || 20;
        this.left = left || 0;
        this.top = top || 0;
        this.bgc = bgc || getRandom();
    };
    //将食物 渲染到页面 DOM树中
    Food.prototype.render = function (map) {
        //渲染 页面 3部曲
        // 1.创建空 标签 div
        var div = document.createElement('div');
        //2. 设置样式的属性
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.position = 'absolute';
        // 求随机位置
        //a 求格子数量
        var geziX  = map.offsetWidth / this.width 
        var geziY = map.offsetHeight / this.height ;  //800 / 20 = 40
        console.log(geziX);
        //b 求随机格子  需要用math.random
        var x = Math.floor(Math.random() * geziX);
        var y = Math.floor(Math.random() * geziY); // 13
        console.log(x);
        //c 设置 位置
        div.style.left = (this.left || x * this.width) + 'px';
        console.log(this.width);
        div.style.top = (this.top || y * this.height) + 'px';
        div.style.backgroundColor = this.bgc;
        //3. 添加到页面 DOM树
        map.appendChild(div)
        //设置ele 用于移除刷新食物
        this.ele = div;
    }
    w.Food = Food;
    
    function getRandom() {
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);

        return 'rgb('+ r + ',' + g + ','+ b + ')'
    }
})(window);