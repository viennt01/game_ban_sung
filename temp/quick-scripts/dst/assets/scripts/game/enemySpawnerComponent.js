
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