
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
require('./assets/scripts/movement');

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 200; // Tốc độ di chuyển của nhân vật, có thể điều chỉnh
        _this.direction = cc.v2(0, 0); // Lưu trữ hướng di chuyển hiện tại của nhân vật
        _this.targetPosition = null; // Lưu trữ vị trí chuột để xoay
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // Xử lý sự kiện bàn phím
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // Lắng nghe sự kiện chuột để xoay nhân vật
        this.node.parent.on('mousemove', this.positionXY, this);
    };
    NewClass.prototype.onKeyDown = function (event) {
        // Xử lý khi nhấn phím
        switch (event.keyCode) {
            case cc.macro.KEY.w: // Phím W
                this.direction.y = 1; // Di chuyển lên
                break;
            case cc.macro.KEY.s: // Phím S
                this.direction.y = -1; // Di chuyển xuống
                break;
            case cc.macro.KEY.a: // Phím A
                this.direction.x = -1; // Di chuyển sang trái
                break;
            case cc.macro.KEY.d: // Phím D
                this.direction.x = 1; // Di chuyển sang phải
                break;
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
        // Xử lý khi thả phím
        switch (event.keyCode) {
            case cc.macro.KEY.w: // Phím W
            case cc.macro.KEY.s: // Phím S
                this.direction.y = 0; // Dừng di chuyển theo trục Y
                break;
            case cc.macro.KEY.a: // Phím A
            case cc.macro.KEY.d: // Phím D
                this.direction.x = 0; // Dừng di chuyển theo trục X
                break;
        }
    };
    NewClass.prototype.positionXY = function (event) {
        // Tính toán góc xoay của nhân vật theo chuột
        var playerPosition = cc.v2(this.node.position.x, this.node.position.y);
        var mousePosition = event.getLocation();
        // Chuyển đổi vị trí chuột sang không gian của node
        mousePosition = this.node.parent.convertToNodeSpaceAR(mousePosition);
        // Tính vector hướng từ nhân vật đến chuột
        var directionVector = mousePosition.sub(playerPosition);
        // Nếu vector hướng không phải là vector không
        if (directionVector.mag() > 0) {
            var angle = directionVector.signAngle(cc.v2(1, 0)); // Tính góc theo trục X
            // Chuyển góc sang độ
            var angleD = cc.misc.radiansToDegrees(angle);
            angleD = (angleD * -1) - 90; // Điều chỉnh góc cho phù hợp
            // Cập nhật góc của nhân vật
            this.node.angle = angleD;
        }
    };
    NewClass.prototype.update = function (dt) {
        // Di chuyển nhân vật theo các phím WASD
        if (this.direction.x !== 0 || this.direction.y !== 0) {
            // Di chuyển nhân vật theo hướng hiện tại
            var moveDistance = this.direction.normalize().mul(this.speed * dt);
            var newPosition = this.node.position.add(moveDistance);
            this.node.setPosition(newPosition);
        }
    };
    NewClass.prototype.onDestroy = function () {
        // Hủy bỏ sự kiện khi đối tượng bị hủy
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.parent.off('mousemove', this.positionXY, this);
    };
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW92ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0ZDO1FBdEZHLFdBQUssR0FBVyxHQUFHLENBQUMsQ0FBQyxtREFBbUQ7UUFFaEUsZUFBUyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO1FBQ2xGLG9CQUFjLEdBQVksSUFBSSxDQUFDLENBQUMsK0JBQStCOztJQW1GM0UsQ0FBQztJQWpGRyx5QkFBTSxHQUFOO1FBQ0kseUJBQXlCO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXZFLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsc0JBQXNCO1FBQ3RCLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTO2dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMs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R0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksc0NBQXNDO1FBQ3RDLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVFLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBckZEO1FBREMsUUFBUTsyQ0FDVztJQUZILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3RjVCO0lBQUQsZUFBQztDQXhGRCxBQXdGQyxDQXhGcUMsRUFBRSxDQUFDLFNBQVMsR0F3RmpEO2tCQXhGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDA7IC8vIFThu5FjIMSR4buZIGRpIGNodXnhu4NuIGPhu6dhIG5ow6JuIHbhuq10LCBjw7MgdGjhu4MgxJFp4buBdSBjaOG7iW5oXHJcblxyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IGNjLlZlYzIgPSBjYy52MigwLCAwKTsgLy8gTMawdSB0cuG7ryBoxrDhu5tuZyBkaSBjaHV54buDbiBoaeG7h24gdOG6oWkgY+G7p2EgbmjDom4gduG6rXRcclxuICAgIHByaXZhdGUgdGFyZ2V0UG9zaXRpb246IGNjLlZlYzIgPSBudWxsOyAvLyBMxrB1IHRy4buvIHbhu4sgdHLDrSBjaHXhu5l0IMSR4buDIHhvYXlcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gWOG7rSBsw70gc+G7sSBraeG7h24gYsOgbiBwaMOtbVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTOG6r25nIG5naGUgc+G7sSBraeG7h24gY2h14buZdCDEkeG7gyB4b2F5IG5ow6JuIHbhuq10XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbignbW91c2Vtb3ZlJywgdGhpcy5wb3NpdGlvblhZLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpIHtcclxuICAgICAgICAvLyBY4butIGzDvSBraGkgbmjhuqVuIHBow61tXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6IC8vIFBow61tIFdcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgPSAxOyAvLyBEaSBjaHV54buDbiBsw6puXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczogLy8gUGjDrW0gU1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSA9IC0xOyAvLyBEaSBjaHV54buDbiB4deG7kW5nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTogLy8gUGjDrW0gQVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IC0xOyAvLyBEaSBjaHV54buDbiBzYW5nIHRyw6FpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDogLy8gUGjDrW0gRFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IDE7IC8vIERpIGNodXnhu4NuIHNhbmcgcGjhuqNpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChldmVudCkge1xyXG4gICAgICAgIC8vIFjhu60gbMO9IGtoaSB0aOG6oyBwaMOtbVxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OiAvLyBQaMOtbSBXXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6IC8vIFBow61tIFNcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgPSAwOyAvLyBE4burbmcgZGkgY2h1eeG7g24gdGhlbyB0cuG7pWMgWVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6IC8vIFBow61tIEFcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDogLy8gUGjDrW0gRFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IDA7IC8vIEThu6tuZyBkaSBjaHV54buDbiB0aGVvIHRy4bulYyBYXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb25YWShldmVudCkge1xyXG4gICAgICAgIC8vIFTDrW5oIHRvw6FuIGfDs2MgeG9heSBj4bunYSBuaMOibiB24bqtdCB0aGVvIGNodeG7mXRcclxuICAgICAgICB2YXIgcGxheWVyUG9zaXRpb24gPSBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHZhciBtb3VzZVBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgduG7iyB0csOtIGNodeG7mXQgc2FuZyBraMO0bmcgZ2lhbiBj4bunYSBub2RlXHJcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobW91c2VQb3NpdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVMOtbmggdmVjdG9yIGjGsOG7m25nIHThu6sgbmjDom4gduG6rXQgxJHhur9uIGNodeG7mXRcclxuICAgICAgICB2YXIgZGlyZWN0aW9uVmVjdG9yID0gbW91c2VQb3NpdGlvbi5zdWIocGxheWVyUG9zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE7hur91IHZlY3RvciBoxrDhu5tuZyBraMO0bmcgcGjhuqNpIGzDoCB2ZWN0b3Iga2jDtG5nXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvblZlY3Rvci5tYWcoKSA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGFuZ2xlID0gZGlyZWN0aW9uVmVjdG9yLnNpZ25BbmdsZShjYy52MigxLCAwKSk7IC8vIFTDrW5oIGfDs2MgdGhlbyB0cuG7pWMgWFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2h1eeG7g24gZ8OzYyBzYW5nIMSR4buZXHJcbiAgICAgICAgICAgIHZhciBhbmdsZUQgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoYW5nbGUpO1xyXG4gICAgICAgICAgICBhbmdsZUQgPSAoYW5nbGVEICogLTEpIC0gOTA7IC8vIMSQaeG7gXUgY2jhu4luaCBnw7NjIGNobyBwaMO5IGjhu6NwXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBD4bqtcCBuaOG6rXQgZ8OzYyBj4bunYSBuaMOibiB24bqtdFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBhbmdsZUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIERpIGNodXnhu4NuIG5ow6JuIHbhuq10IHRoZW8gY8OhYyBwaMOtbSBXQVNEXHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uLnggIT09IDAgfHwgdGhpcy5kaXJlY3Rpb24ueSAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBEaSBjaHV54buDbiBuaMOibiB24bqtdCB0aGVvIGjGsOG7m25nIGhp4buHbiB04bqhaVxyXG4gICAgICAgICAgICB2YXIgbW92ZURpc3RhbmNlID0gdGhpcy5kaXJlY3Rpb24ubm9ybWFsaXplKCkubXVsKHRoaXMuc3BlZWQgKiBkdCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQobW92ZURpc3RhbmNlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIEjhu6d5IGLhu48gc+G7sSBraeG7h24ga2hpIMSR4buRaSB0xrDhu6NuZyBi4buLIGjhu6d5XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLnBvc2l0aW9uWFksIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
