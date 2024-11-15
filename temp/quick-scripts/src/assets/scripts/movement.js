"use strict";
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