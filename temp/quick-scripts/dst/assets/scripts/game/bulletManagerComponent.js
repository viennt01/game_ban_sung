
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