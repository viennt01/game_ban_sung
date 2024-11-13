"use strict";
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