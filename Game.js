(function (w) {
    function Game() {
        this.map = document.getElementById('map') ;
        this.snake = new Snake();
        this.food = new Food();

        this.food.render(this.map);
        this.snake.render(this.map);


        Game.prototype.start = function () {
            //2. window.onkeydown (键盘按下)
        window.onkeydown = function (e) {
            //适配 
            var code = e.keyCode || e.which || e.charCode;
            console.log(code);
            switch (code) {
                case 37:
                    if (this.snake.derection != 'right') {
                        this.snake.derection = 'left'
                    }
                    break;
                case 38:
                    if (this.snake.derection != 'bottom') {
                        this.snake.derection = 'top'
                    }
                    break;
                case 39:
                    if (this.snake.derection != 'left') {
                        this.snake.derection = 'right'
                    }
                    break;
                case 40:
                    if (this.snake.derection != 'top') {
                        this.snake.derection = 'bottom'
                    }
                    break;

                default:
                    return
                    break;
            };
            //3 . 事件处理函数
            //3.1 蛇移动
            this.snake.move(map);
            //3.2  边界检测
            if (this.snake.body[0].x < 0 || this.snake.body[0].x > map.offsetWidth / this.snake.width - 1) {
                this.end();
            }
            if (this.snake.body[0].y < 0 || this.snake.body[0].y > map.offsetHeight / this.snake.height - 1) {
                this.end();
            };
            //3.3 吃食物
            if (this.snake.body[0].x * this.snake.width == this.food.ele.offsetLeft && this.snake.body[0].y * this.snake.height == this.food.ele.offsetTop) {
                this.snake.eat(map, this.food);
                map.removeChild(this.food.ele);
                this.food = new Food();
                this.food.render(map)
            };
        }.bind(this);
        };
        
    };
    //结束游戏  
    Game.prototype.end = function () {
        alert('游戏结束');
        window.location.reload();
    }
    w.Game = Game;
})(window);