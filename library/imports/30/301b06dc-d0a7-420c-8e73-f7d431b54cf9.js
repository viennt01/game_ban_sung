"use strict";
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