(function(w){
    //1.3 蛇
    function Snake(width,height,derection) {
        this.width = width || 20;
        this.height = height || 20;
        this.derection =derection || 'right';//默认蛇头方向
        this.body = [
            {x:3 , y:2 , bgc: 'black'},
            {x:2 , y:2 , bgc: getRandom()},
            {x:1 , y:2 , bgc: getRandom()}
        ];
    };

    // 蛇  渲染到  页面
    Snake.prototype.render = function (map) {
        //给snake添加bodyElements数组 来储存 每一节身体 ,用于刷新
        this.bodyElements = [];
        //循环 Snake 中的 body 
        for(var i =0; i < this.body.length; i++){
            var section =this.body[i];
            //渲染 页面 3部曲
            //1. 创建 空 标签
            var div = document.createElement('div');
            //2.设置样式属性
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.position = 'absolute';
            div.style.left  = section.x * this.width + 'px';
            div.style.top = section.y * this.height + 'px';
            div.style.backgroundColor = section.bgc;
            //3.添加到 页面 DOM树
            map.appendChild(div);
            this.bodyElements.push(div)
        };
    };


    // A.蛇移动的方法  move   
    Snake.prototype.move = function (map) {
        //this: 调用蛇方法的对象
        //倒序遍历  , 默认方向右边 , 设置当前的 元素 为 前一个的位置(每一节都是 前一节的 位置)
        for(var i = this.body.length - 1; i > 0; i--){
            // 1 .每一节都是 前一节的 位置
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        };
        //2. 蛇头位置取决于移动方向
        switch (this.derection) {
                case 'left':
                    this.body[0].x--    
                break;
                case 'right':
                    this.body[0].x++
                break;
                case 'top':
                    this.body[0].y--
                break;
                case 'bottom':
                this.body[0].y++
                break;
            
                default:
                return
                break;
            };
        this.remove();
        this.render(map);
    };

    //B . 移除蛇   remove 方法
    Snake.prototype.remove = function () {
        //this : 调用这个方法的蛇对象
        //移除蛇的bodyElements 中的每一个div
        for(var i = 0; i< this.bodyElements.length;i++){
            this.bodyElements[i].parentNode.removeChild(this.bodyElements[i]);
        };
    };

    //C . 蛇吃  食物 eat  的方法
    Snake.prototype.eat = function (map , food) {
        //this : 调用这个方法的蛇对象
        //1. 记录当前尾巴的位置
        var lastX = this.body[this.body.length - 1].x;
        var lastY = this.body[this.body.length - 1].y;
        //2. 食物添加到 body 最后面
        this.body.push({
            x:lastX,
            y:lastY,
            bgc:food.bgc
        });
        //3. 移除旧蛇
        this.remove();
        //4.显示新蛇
        this.render(map);
    };

    w.Snake = Snake;

    function getRandom() {
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);

        return 'rgb('+ r + ',' + g + ','+ b + ')'
    }
})(window);