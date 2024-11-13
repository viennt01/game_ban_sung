"use strict";
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