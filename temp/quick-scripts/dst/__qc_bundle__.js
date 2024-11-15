
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');
require('./assets/scripts/Game');
require('./assets/scripts/bad');
require('./assets/scripts/game/bulletManagerComponent');
require('./assets/scripts/game/enemySpawnerComponent');
require('./assets/scripts/game/scoreManagerComponent');
require('./assets/scripts/movement');
require('./assets/scripts/movement/characterMovementComponent');
require('./assets/scripts/movement/characterRotationComponent');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0889b6x7URCmYEv4JNg77Bc', 'use_v2.1-2.2.1_cc.Toggle_event');
// migration/use_v2.1-2.2.1_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with the v2.1.0 ～ 2.2.1 version.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 ~ 2.2.1 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */

if (cc.Toggle) {
  // Whether to trigger 'toggle' and 'checkEvents' events when modifying 'toggle.isChecked' in the code
  // 在代码中修改 'toggle.isChecked' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_isChecked = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMS0yLjIuMV9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsRUFBRSxDQUFDQyxNQUFNLEVBQUU7RUFDWDtFQUNBO0VBQ0FELEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQywrQkFBK0IsR0FBRyxJQUFJO0FBQ3BEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdGhlIHYyLjEuMCDvvZ4gMi4yLjEgdmVyc2lvbi5cbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLlRvZ2dsZSBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cbiAqXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wIH4gMi4yLjEg54mI5pys55qE5bel56iL77yMXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXG4gKi9cblxuaWYgKGNjLlRvZ2dsZSkge1xuICAgIC8vIFdoZXRoZXIgdG8gdHJpZ2dlciAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgd2hlbiBtb2RpZnlpbmcgJ3RvZ2dsZS5pc0NoZWNrZWQnIGluIHRoZSBjb2RlXG4gICAgLy8g5Zyo5Luj56CB5Lit5L+u5pS5ICd0b2dnbGUuaXNDaGVja2VkJyDml7bmmK/lkKbop6blj5EgJ3RvZ2dsZScg5LiOICdjaGVja0V2ZW50cycg5LqL5Lu2XG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9pc0NoZWNrZWQgPSB0cnVlO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/movement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b745p+p5NBiapvojEOeJna', 'movement');
// scripts/movement.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var MainCharacterComponent = /** @class */ (function (_super) {
    __extends(MainCharacterComponent, _super);
    function MainCharacterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainCharacterComponent.prototype.onLoad = function () {
        this.node.addComponent('CharacterMovementComponent');
        this.node.addComponent('CharacterRotationComponent');
    };
    MainCharacterComponent = __decorate([
        ccclass
    ], MainCharacterComponent);
    return MainCharacterComponent;
}(cc.Component));
exports.default = MainCharacterComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW92ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQW9ELDBDQUFZO0lBQWhFOztJQUtBLENBQUM7SUFKRyx1Q0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFKZ0Isc0JBQXNCO1FBRDFDLE9BQU87T0FDYSxzQkFBc0IsQ0FLMUM7SUFBRCw2QkFBQztDQUxELEFBS0MsQ0FMbUQsRUFBRSxDQUFDLFNBQVMsR0FLL0Q7a0JBTG9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5DaGFyYWN0ZXJDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDb21wb25lbnQoJ0NoYXJhY3Rlck1vdmVtZW50Q29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudCgnQ2hhcmFjdGVyUm90YXRpb25Db21wb25lbnQnKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/movement/characterMovementComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68c76NDEvlMXLC/EQ2u/Ol5', 'characterMovementComponent');
// scripts/movement/characterMovementComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
// File path: assets/scripts/components/CharacterMovementComponent.ts
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CharacterMovementComponent = /** @class */ (function (_super) {
    __extends(CharacterMovementComponent, _super);
    function CharacterMovementComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 200; // Tốc độ di chuyển của nhân vật
        _this.direction = cc.v2(0, 0); // Hướng di chuyển hiện tại
        return _this;
    }
    CharacterMovementComponent.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    CharacterMovementComponent.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.direction.y = 1;
                break;
            case cc.macro.KEY.s:
                this.direction.y = -1;
                break;
            case cc.macro.KEY.a:
                this.direction.x = -1;
                break;
            case cc.macro.KEY.d:
                this.direction.x = 1;
                break;
        }
    };
    CharacterMovementComponent.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
            case cc.macro.KEY.s:
                this.direction.y = 0;
                break;
            case cc.macro.KEY.a:
            case cc.macro.KEY.d:
                this.direction.x = 0;
                break;
        }
    };
    CharacterMovementComponent.prototype.update = function (dt) {
        if (this.direction.x !== 0 || this.direction.y !== 0) {
            var moveDistance = this.direction.normalize().mul(this.speed * dt);
            var newPosition = this.node.position.add(moveDistance);
            this.node.setPosition(newPosition);
        }
    };
    CharacterMovementComponent.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    __decorate([
        property
    ], CharacterMovementComponent.prototype, "speed", void 0);
    CharacterMovementComponent = __decorate([
        ccclass
    ], CharacterMovementComponent);
    return CharacterMovementComponent;
}(cc.Component));
exports.default = CharacterMovementComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW92ZW1lbnRcXGNoYXJhY3Rlck1vdmVtZW50Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBcUU7QUFDL0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0QsOENBQVk7SUFBcEU7UUFBQSxxRUF5Q0M7UUF2Q0csV0FBSyxHQUFXLEdBQUcsQ0FBQyxDQUFDLGdDQUFnQztRQUU3QyxlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7O0lBcUN6RSxDQUFDO0lBbkNHLDJDQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsOENBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ2pELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ2xELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ2xELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUMsTUFBTTtTQUNwRDtJQUNMLENBQUM7SUFFRCw0Q0FBTyxHQUFQLFVBQVEsS0FBSztRQUNULFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDakQsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBQyxNQUFNO1NBQ3BEO0lBQ0wsQ0FBQztJQUVELDJDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDckUsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELDhDQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBdENEO1FBREMsUUFBUTs2REFDVztJQUZILDBCQUEwQjtRQUQ5QyxPQUFPO09BQ2EsMEJBQTBCLENBeUM5QztJQUFELGlDQUFDO0NBekNELEFBeUNDLENBekN1RCxFQUFFLENBQUMsU0FBUyxHQXlDbkU7a0JBekNvQiwwQkFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGaWxlIHBhdGg6IGFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvQ2hhcmFjdGVyTW92ZW1lbnRDb21wb25lbnQudHNcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3Rlck1vdmVtZW50Q29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDIwMDsgLy8gVOG7kWMgxJHhu5kgZGkgY2h1eeG7g24gY+G7p2EgbmjDom4gduG6rXRcclxuXHJcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogY2MuVmVjMiA9IGNjLnYyKDAsIDApOyAvLyBIxrDhu5tuZyBkaSBjaHV54buDbiBoaeG7h24gdOG6oWlcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzogdGhpcy5kaXJlY3Rpb24ueSA9IDE7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOiB0aGlzLmRpcmVjdGlvbi55ID0gLTE7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOiB0aGlzLmRpcmVjdGlvbi54ID0gLTE7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOiB0aGlzLmRpcmVjdGlvbi54ID0gMTsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5VXAoZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczogdGhpcy5kaXJlY3Rpb24ueSA9IDA7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOiB0aGlzLmRpcmVjdGlvbi54ID0gMDsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbi54ICE9PSAwIHx8IHRoaXMuZGlyZWN0aW9uLnkgIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbW92ZURpc3RhbmNlID0gdGhpcy5kaXJlY3Rpb24ubm9ybWFsaXplKCkubXVsKHRoaXMuc3BlZWQgKiBkdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZChtb3ZlRGlzdGFuY2UpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/movement/characterRotationComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35843RIQAtP6aeZkpVyfl/g', 'characterRotationComponent');
// scripts/movement/characterRotationComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
// File path: assets/scripts/components/CharacterRotationComponent.ts
var ccclass = cc._decorator.ccclass;
var CharacterRotationComponent = /** @class */ (function (_super) {
    __extends(CharacterRotationComponent, _super);
    function CharacterRotationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterRotationComponent.prototype.onLoad = function () {
        this.node.parent.on('mousemove', this.onMouseMove, this);
    };
    CharacterRotationComponent.prototype.onMouseMove = function (event) {
        var playerPosition = cc.v2(this.node.position.x, this.node.position.y);
        var mousePosition = event.getLocation();
        mousePosition = this.node.parent.convertToNodeSpaceAR(mousePosition);
        var directionVector = mousePosition.sub(playerPosition);
        if (directionVector.mag() > 0) {
            var angle = directionVector.signAngle(cc.v2(1, 0));
            var angleD = cc.misc.radiansToDegrees(angle);
            angleD = (angleD * -1) - 90;
            this.node.angle = angleD;
        }
    };
    CharacterRotationComponent.prototype.onDestroy = function () {
        this.node.parent.off('mousemove', this.onMouseMove, this);
    };
    CharacterRotationComponent = __decorate([
        ccclass
    ], CharacterRotationComponent);
    return CharacterRotationComponent;
}(cc.Component));
exports.default = CharacterRotationComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW92ZW1lbnRcXGNoYXJhY3RlclJvdGF0aW9uQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBcUU7QUFDN0QsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBd0QsOENBQVk7SUFBcEU7O0lBc0JBLENBQUM7SUFyQkcsMkNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZ0RBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JFLElBQU0sZUFBZSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFMUQsSUFBSSxlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsOENBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBckJnQiwwQkFBMEI7UUFEOUMsT0FBTztPQUNhLDBCQUEwQixDQXNCOUM7SUFBRCxpQ0FBQztDQXRCRCxBQXNCQyxDQXRCdUQsRUFBRSxDQUFDLFNBQVMsR0FzQm5FO2tCQXRCb0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmlsZSBwYXRoOiBhc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL0NoYXJhY3RlclJvdGF0aW9uQ29tcG9uZW50LnRzXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlclJvdGF0aW9uQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllclBvc2l0aW9uID0gY2MudjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICBsZXQgbW91c2VQb3NpdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobW91c2VQb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uVmVjdG9yID0gbW91c2VQb3NpdGlvbi5zdWIocGxheWVyUG9zaXRpb24pO1xyXG5cclxuICAgICAgICBpZiAoZGlyZWN0aW9uVmVjdG9yLm1hZygpID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IGRpcmVjdGlvblZlY3Rvci5zaWduQW5nbGUoY2MudjIoMSwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGVEID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKGFuZ2xlKTtcclxuICAgICAgICAgICAgYW5nbGVEID0gKGFuZ2xlRCAqIC0xKSAtIDkwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBhbmdsZUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9mZignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/bulletManagerComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '301b0bc0KdCDI5z99QxtUz5', 'bulletManagerComponent');
// scripts/game/bulletManagerComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletManagerComponent = /** @class */ (function (_super) {
    __extends(BulletManagerComponent, _super);
    function BulletManagerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bullet = null;
        _this.gunSound = null;
        _this.soldier = null; // Tham chiếu tới nhân vật chính
        _this.posX = 0;
        _this.posY = 0;
        return _this;
    }
    BulletManagerComponent.prototype.spawnBullet = function (event) {
        var newBullet = cc.instantiate(this.bullet);
        newBullet.setPosition(this.soldier.position.x, this.soldier.position.y);
        this.node.addChild(newBullet);
        // Chuyển vị trí chuột sang tọa độ trong không gian node
        var mousePosition = event.getLocation();
        mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
        this.posX = mousePosition.x;
        this.posY = mousePosition.y;
        var actionMove = cc.moveTo(0.2, cc.v2(this.posX, this.posY));
        var destroyBullet = cc.callFunc(function () {
            newBullet.destroy();
        }, this);
        var actionSequence = cc.sequence(actionMove, destroyBullet);
        newBullet.runAction(actionSequence);
        cc.audioEngine.playEffect(this.gunSound, false);
    };
    BulletManagerComponent.prototype.onLoad = function () {
        this.node.on('mousedown', this.spawnBullet, this);
    };
    __decorate([
        property(cc.Prefab)
    ], BulletManagerComponent.prototype, "bullet", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], BulletManagerComponent.prototype, "gunSound", void 0);
    __decorate([
        property(cc.Node)
    ], BulletManagerComponent.prototype, "soldier", void 0);
    BulletManagerComponent = __decorate([
        ccclass
    ], BulletManagerComponent);
    return BulletManagerComponent;
}(cc.Component));
exports.default = BulletManagerComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcYnVsbGV0TWFuYWdlckNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUF1Q0M7UUFyQ0csWUFBTSxHQUFjLElBQUksQ0FBQztRQUt6QixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUc5QixhQUFPLEdBQVksSUFBSSxDQUFDLENBQUMsZ0NBQWdDO1FBRXpELFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsVUFBSSxHQUFXLENBQUMsQ0FBQzs7SUEwQnJCLENBQUM7SUF4QkcsNENBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5Qix3REFBd0Q7UUFDeEQsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFFNUIsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDOUIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRTlELFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFwQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDSztJQUt6QjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUztTQUNyQixDQUFDOzREQUM0QjtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNNO0lBVlAsc0JBQXNCO1FBRDFDLE9BQU87T0FDYSxzQkFBc0IsQ0F1QzFDO0lBQUQsNkJBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q21ELEVBQUUsQ0FBQyxTQUFTLEdBdUMvRDtrQkF2Q29CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXRNYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBidWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgIH0pXHJcbiAgICBndW5Tb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNvbGRpZXI6IGNjLk5vZGUgPSBudWxsOyAvLyBUaGFtIGNoaeG6v3UgdOG7m2kgbmjDom4gduG6rXQgY2jDrW5oXHJcblxyXG4gICAgcG9zWDogbnVtYmVyID0gMDtcclxuICAgIHBvc1k6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc3Bhd25CdWxsZXQoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBuZXdCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldCk7XHJcbiAgICAgICAgbmV3QnVsbGV0LnNldFBvc2l0aW9uKHRoaXMuc29sZGllci5wb3NpdGlvbi54LCB0aGlzLnNvbGRpZXIucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0J1bGxldCk7XHJcblxyXG4gICAgICAgIC8vIENodXnhu4NuIHbhu4sgdHLDrSBjaHXhu5l0IHNhbmcgdOG7jWEgxJHhu5kgdHJvbmcga2jDtG5nIGdpYW4gbm9kZVxyXG4gICAgICAgIGxldCBtb3VzZVBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBtb3VzZVBvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG1vdXNlUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMucG9zWCA9IG1vdXNlUG9zaXRpb24ueDtcclxuICAgICAgICB0aGlzLnBvc1kgPSBtb3VzZVBvc2l0aW9uLnk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbk1vdmUgPSBjYy5tb3ZlVG8oMC4yLCBjYy52Mih0aGlzLnBvc1gsIHRoaXMucG9zWSkpO1xyXG4gICAgICAgIGNvbnN0IGRlc3Ryb3lCdWxsZXQgPSBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ld0J1bGxldC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uU2VxdWVuY2UgPSBjYy5zZXF1ZW5jZShhY3Rpb25Nb3ZlLCBkZXN0cm95QnVsbGV0KTtcclxuXHJcbiAgICAgICAgbmV3QnVsbGV0LnJ1bkFjdGlvbihhY3Rpb25TZXF1ZW5jZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmd1blNvdW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbignbW91c2Vkb3duJywgdGhpcy5zcGF3bkJ1bGxldCwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/enemySpawnerComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2dd8OOTtJKuLgrL8/VEQ8t', 'enemySpawnerComponent');
// scripts/game/enemySpawnerComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemySpawnerComponent = /** @class */ (function (_super) {
    __extends(EnemySpawnerComponent, _super);
    function EnemySpawnerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.badguy = null;
        _this.positions = [
            cc.v2(-778, 458), cc.v2(778, -458), cc.v2(779, 6), cc.v2(-700, 20),
            cc.v2(778, 700), cc.v2(-778, -758), cc.v2(779, 200), cc.v2(-700, 20),
            cc.v2(779, -200), cc.v2(-250, 0), cc.v2(-250, -150), cc.v2(-250, 100),
            cc.v2(-250, 500)
        ];
        return _this;
    }
    EnemySpawnerComponent.prototype.spawnEnemy = function () {
        var newBadGuy = cc.instantiate(this.badguy);
        var randomPosition = this.positions[Math.floor(Math.random() * this.positions.length)];
        newBadGuy.setPosition(randomPosition);
        this.node.addChild(newBadGuy);
    };
    EnemySpawnerComponent.prototype.onLoad = function () {
        this.schedule(this.spawnEnemy, 1, cc.macro.REPEAT_FOREVER, 3);
    };
    __decorate([
        property(cc.Prefab)
    ], EnemySpawnerComponent.prototype, "badguy", void 0);
    EnemySpawnerComponent = __decorate([
        ccclass
    ], EnemySpawnerComponent);
    return EnemySpawnerComponent;
}(cc.Component));
exports.default = EnemySpawnerComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcZW5lbXlTcGF3bmVyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQXFCQztRQW5CRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRWpCLGVBQVMsR0FBYztZQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDbEUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ3BFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDckUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDbkIsQ0FBQzs7SUFZTixDQUFDO0lBVkcsMENBQVUsR0FBVjtRQUNJLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLFNBQVMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDSztJQUZSLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBcUJ6QztJQUFELDRCQUFDO0NBckJELEFBcUJDLENBckJrRCxFQUFFLENBQUMsU0FBUyxHQXFCOUQ7a0JBckJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlTcGF3bmVyQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBiYWRndXk6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwb3NpdGlvbnM6IGNjLlZlYzJbXSA9IFtcclxuICAgICAgICBjYy52MigtNzc4LCA0NTgpLCBjYy52Mig3NzgsIC00NTgpLCBjYy52Mig3NzksIDYpLCBjYy52MigtNzAwLCAyMCksXHJcbiAgICAgICAgY2MudjIoNzc4LCA3MDApLCBjYy52MigtNzc4LCAtNzU4KSwgY2MudjIoNzc5LCAyMDApLCBjYy52MigtNzAwLCAyMCksXHJcbiAgICAgICAgY2MudjIoNzc5LCAtMjAwKSwgY2MudjIoLTI1MCwgMCksIGNjLnYyKC0yNTAsIC0xNTApLCBjYy52MigtMjUwLCAxMDApLFxyXG4gICAgICAgIGNjLnYyKC0yNTAsIDUwMClcclxuICAgIF07XHJcblxyXG4gICAgc3Bhd25FbmVteSgpIHtcclxuICAgICAgICBjb25zdCBuZXdCYWRHdXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhZGd1eSk7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBvc2l0aW9ucy5sZW5ndGgpXTtcclxuICAgICAgICBuZXdCYWRHdXkuc2V0UG9zaXRpb24ocmFuZG9tUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCYWRHdXkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd25FbmVteSwgMSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/scoreManagerComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2d3c3Gh8ZODrP9oJN3aEHS', 'scoreManagerComponent');
// scripts/game/scoreManagerComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScoreManagerComponent = /** @class */ (function (_super) {
    __extends(ScoreManagerComponent, _super);
    function ScoreManagerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.score = 0;
        return _this;
    }
    ScoreManagerComponent.prototype.addScore = function () {
        this.score += 1;
        this.scoreLabel.string = "SCORE: " + this.score.toString();
    };
    __decorate([
        property(cc.Label)
    ], ScoreManagerComponent.prototype, "scoreLabel", void 0);
    ScoreManagerComponent = __decorate([
        ccclass
    ], ScoreManagerComponent);
    return ScoreManagerComponent;
}(cc.Component));
exports.default = ScoreManagerComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcc2NvcmVNYW5hZ2VyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQVVDO1FBUkcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFcEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFNOUIsQ0FBQztJQUpHLHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBUEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2REFDUztJQUZYLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBVXpDO0lBQUQsNEJBQUM7Q0FWRCxBQVVDLENBVmtELEVBQUUsQ0FBQyxTQUFTLEdBVTlEO2tCQVZvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVNYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGFkZFNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gXCJTQ09SRTogXCIgKyB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c0fev234pLRYhyZA8zwdJO', 'Game');
// scripts/Game.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bullet = null;
        _this.badguy = null;
        _this.scoreLabel = null;
        _this.gun = null;
        // LIFE-CYCLE CALLBACKS:
        _this.posX = 0;
        _this.posY = 0;
        _this.score = 0;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.addScore = function () {
        this.score += 1;
        this.scoreLabel.string = "SCORE :" + this.score.toString();
    };
    NewClass.prototype.spawn = function (event) {
        var newBullet = cc.instantiate(this.bullet);
        newBullet.setPosition(this.node.getChildByName('soldier1').position.x, this.node.getChildByName('soldier1').position.y);
        this.node.addChild(newBullet);
        var mousePosition = event.getLocation();
        mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
        this.posX = mousePosition.x;
        this.posY = mousePosition.y;
        var actionBy = cc.moveTo(0.2, cc.v2(this.posX, this.posY));
        var destruction = cc.callFunc(function () {
            newBullet.destroy();
        }, this);
        var sequence = cc.sequence(actionBy, destruction);
        newBullet.runAction(sequence);
        cc.audioEngine.playEffect(this.gun, false);
    };
    NewClass.prototype.createBad = function () {
        var newBadGuy = cc.instantiate(this.badguy);
        var positions = [
            cc.v2(-778, 458), cc.v2(778, -458), cc.v2(779, 6), cc.v2(-700, 20),
            cc.v2(778, 700), cc.v2(-778, -758), cc.v2(779, 200), cc.v2(-700, 20), cc.v2(779, -200), cc.v2(-250, 0),
            cc.v2(-250, -150), cc.v2(-250, 100), cc.v2(-250, 500)
        ];
        var badGuyPosition = Math.floor(Math.random() * positions.length);
        newBadGuy.setPosition(positions[badGuyPosition]);
        this.node.addChild(newBadGuy);
    };
    NewClass.prototype.onLoad = function () {
        this.node.on('mousedown', this.spawn, this);
        this.schedule(this.createBad, 1, cc.macro.REPEAT_FOREVER, 3);
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "bullet", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "badguy", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "scoreLabel", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], NewClass.prototype, "gun", void 0);
    __decorate([
        property
    ], NewClass.prototype, "posX", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUMsTUFBTSxDQUFDOzRDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUTtJQU0zQjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUztTQUNwQixDQUFDO3lDQUNPO0lBR1Q7UUFEQyxRQUFROzBDQUNPO0lBbEJDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvRTVCO0lBQUQsZUFBQztDQXBFRCxBQW9FQyxDQXBFcUMsRUFBRSxDQUFDLFNBQVMsR0FvRWpEO2tCQXBFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYnVsbGV0OmNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYmFkZ3V5OmNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmVMYWJlbDpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwXHJcbiAgICB9KVxyXG4gICAgZ3VuPW51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcG9zWDpudW1iZXIgPSAwO1xyXG4gICAgcG9zWTpudW1iZXIgPSAwO1xyXG4gICAgc2NvcmU6bnVtYmVyID0gMDtcclxuXHJcbiAgICBhZGRTY29yZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBcIlNDT1JFIDpcIiArIHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHNwYXduKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIHZhciBuZXdCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldCk7XHJcbiAgICAgICAgbmV3QnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc29sZGllcjEnKS5wb3NpdGlvbi54LHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc29sZGllcjEnKS5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3QnVsbGV0KTtcclxuXHJcbiAgICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIG1vdXNlUG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIobW91c2VQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5wb3NYID0gbW91c2VQb3NpdGlvbi54O1xyXG4gICAgICAgIHRoaXMucG9zWSA9IG1vdXNlUG9zaXRpb24ueTtcclxuXHJcbiAgICAgICAgdmFyIGFjdGlvbkJ5ID0gY2MubW92ZVRvKDAuMixjYy52Mih0aGlzLnBvc1gsdGhpcy5wb3NZKSk7XHJcbiAgICAgICAgdmFyIGRlc3RydWN0aW9uID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbmV3QnVsbGV0LmRlc3Ryb3koKTtcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgICAgIHZhciBzZXF1ZW5jZSA9IGNjLnNlcXVlbmNlKGFjdGlvbkJ5LGRlc3RydWN0aW9uKTtcclxuICAgICAgICBuZXdCdWxsZXQucnVuQWN0aW9uKHNlcXVlbmNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ3VuLGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUJhZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG5ld0JhZEd1eSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFkZ3V5KTtcclxuICAgICAgICB2YXIgcG9zaXRpb25zID0gW1xyXG4gICAgICAgICAgICBjYy52MigtNzc4LDQ1OCksY2MudjIoNzc4LC00NTgpLGNjLnYyKDc3OSw2KSxjYy52MigtNzAwLDIwKSxcclxuICAgICAgICAgICAgY2MudjIoNzc4LDcwMCksY2MudjIoLTc3OCwtNzU4KSxjYy52Mig3NzksMjAwKSxjYy52MigtNzAwLDIwKSxjYy52Mig3NzksLTIwMCksY2MudjIoLTI1MCwwKSxcclxuICAgICAgICAgICAgY2MudjIoLTI1MCwtMTUwKSxjYy52MigtMjUwLDEwMCksY2MudjIoLTI1MCw1MDApXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgYmFkR3V5UG9zaXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcG9zaXRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3QmFkR3V5LnNldFBvc2l0aW9uKHBvc2l0aW9uc1tiYWRHdXlQb3NpdGlvbl0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCYWRHdXkpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ21vdXNlZG93bicsdGhpcy5zcGF3bix0aGlzKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY3JlYXRlQmFkLDEsY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsMyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
