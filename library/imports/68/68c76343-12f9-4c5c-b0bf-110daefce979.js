"use strict";
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