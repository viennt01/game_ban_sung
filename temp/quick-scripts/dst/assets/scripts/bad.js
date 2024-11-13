
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '749bbO5LMlCCagmHxFsxAj/', 'bad');
// scripts/bad.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 100; // Tốc độ di chuyển của con vật, có thể điều chỉnh
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onCollisionEnter = function (other, self) {
        // Kiểm tra va chạm với đối tượng có tag 2 (có thể là mục tiêu hoặc vật phẩm)
        if (other.tag == 2) {
            this.node.destroy();
            this.node.parent.getComponent('Game').addScore();
        }
        // Kiểm tra va chạm với đối tượng có tag 1 (có thể là va chạm với các đối thủ)
        if (other.tag == 1) {
            cc.director.loadScene("Game");
        }
    };
    NewClass.prototype.moveToPlayer = function () {
        // Tính toán vector hướng di chuyển tới nhân vật chính (soldier)
        var direction = this.soldier.position.sub(this.node.position).normalize();
        var moveDistance = direction.mul(this.speed);
        // Tạo hành động di chuyển liên tục về phía nhân vật chính
        return cc.moveBy(1, moveDistance.x, moveDistance.y);
    };
    NewClass.prototype.onLoad = function () {
        // Lấy đối tượng nhân vật chính (soldier)
        this.soldier = this.node.parent.getChildByName('soldier1');
        // Khởi tạo hành động di chuyển và lặp lại liên tục
        var moveAction = this.moveToPlayer();
        var repeatMoveAction = cc.repeatForever(moveAction);
        // Thực thi hành động di chuyển
        this.node.runAction(repeatMoveAction);
        // Kích hoạt hệ thống va chạm
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // Tiền tải cảnh "Game"
        cc.director.preloadScene("Game");
    };
    NewClass.prototype.start = function () { };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtEQztRQS9DRyxXQUFLLEdBQVcsR0FBRyxDQUFDLENBQUMsa0RBQWtEOztRQThDdkUsaUJBQWlCO0lBQ3JCLENBQUM7SUE3Q0csd0JBQXdCO0lBRXhCLG1DQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4Qiw2RUFBNkU7UUFDN0UsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNwRDtRQUNELDhFQUE4RTtRQUM5RSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxnRUFBZ0U7UUFDaEUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUUsSUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0MsMERBQTBEO1FBQzFELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0QsbURBQW1EO1FBQ25ELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEQsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFdEMsNkJBQTZCO1FBQzdCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUV2Qix1QkFBdUI7UUFDdkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHdCQUFLLEdBQUwsY0FBUyxDQUFDO0lBL0NPLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrRDVCO0lBQUQsZUFBQztDQWxERCxBQWtEQyxDQWxEcUMsRUFBRSxDQUFDLFNBQVMsR0FrRGpEO2tCQWxEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgYWN0aW9uOiBjYy5BY3Rpb25JbnRlcnZhbDtcclxuICAgIHNvbGRpZXI6IGNjLk5vZGU7ICAvLyBCaeG6v24gxJHhu4MgbMawdSB0cuG7ryBuaMOibiB24bqtdCBjaMOtbmggKHNvbGRpZXIpXHJcbiAgICBzcGVlZDogbnVtYmVyID0gMTAwOyAvLyBU4buRYyDEkeG7mSBkaSBjaHV54buDbiBj4bunYSBjb24gduG6rXQsIGPDsyB0aOG7gyDEkWnhu4F1IGNo4buJbmhcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgLy8gS2nhu4NtIHRyYSB2YSBjaOG6oW0gduG7m2kgxJHhu5FpIHTGsOG7o25nIGPDsyB0YWcgMiAoY8OzIHRo4buDIGzDoCBt4bulYyB0acOqdSBob+G6t2MgduG6rXQgcGjhuqltKVxyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnR2FtZScpLmFkZFNjb3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEtp4buDbSB0cmEgdmEgY2jhuqFtIHbhu5tpIMSR4buRaSB0xrDhu6NuZyBjw7MgdGFnIDEgKGPDsyB0aOG7gyBsw6AgdmEgY2jhuqFtIHbhu5tpIGPDoWMgxJHhu5FpIHRo4bunKVxyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gMSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9QbGF5ZXIoKSB7XHJcbiAgICAgICAgLy8gVMOtbmggdG/DoW4gdmVjdG9yIGjGsOG7m25nIGRpIGNodXnhu4NuIHThu5tpIG5ow6JuIHbhuq10IGNow61uaCAoc29sZGllcilcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnNvbGRpZXIucG9zaXRpb24uc3ViKHRoaXMubm9kZS5wb3NpdGlvbikubm9ybWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgbW92ZURpc3RhbmNlID0gZGlyZWN0aW9uLm11bCh0aGlzLnNwZWVkKTtcclxuXHJcbiAgICAgICAgLy8gVOG6oW8gaMOgbmggxJHhu5luZyBkaSBjaHV54buDbiBsacOqbiB04bulYyB24buBIHBow61hIG5ow6JuIHbhuq10IGNow61uaFxyXG4gICAgICAgIHJldHVybiBjYy5tb3ZlQnkoMSwgbW92ZURpc3RhbmNlLngsIG1vdmVEaXN0YW5jZS55KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gTOG6pXkgxJHhu5FpIHTGsOG7o25nIG5ow6JuIHbhuq10IGNow61uaCAoc29sZGllcilcclxuICAgICAgICB0aGlzLnNvbGRpZXIgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKCdzb2xkaWVyMScpO1xyXG5cclxuICAgICAgICAvLyBLaOG7n2kgdOG6oW8gaMOgbmggxJHhu5luZyBkaSBjaHV54buDbiB2w6AgbOG6t3AgbOG6oWkgbGnDqm4gdOG7pWNcclxuICAgICAgICBjb25zdCBtb3ZlQWN0aW9uID0gdGhpcy5tb3ZlVG9QbGF5ZXIoKTtcclxuICAgICAgICBjb25zdCByZXBlYXRNb3ZlQWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlcihtb3ZlQWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gVGjhu7FjIHRoaSBow6BuaCDEkeG7mW5nIGRpIGNodXnhu4NuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihyZXBlYXRNb3ZlQWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gS8OtY2ggaG/huqF0IGjhu4cgdGjhu5FuZyB2YSBjaOG6oW1cclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRp4buBbiB04bqjaSBj4bqjbmggXCJHYW1lXCJcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJHYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge31cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==