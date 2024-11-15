"use strict";
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