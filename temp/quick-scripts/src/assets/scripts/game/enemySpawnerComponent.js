"use strict";
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