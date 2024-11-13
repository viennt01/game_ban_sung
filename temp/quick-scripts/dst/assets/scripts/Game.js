
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvRUM7UUFoRUcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBTTNCLFNBQUcsR0FBQyxJQUFJLENBQUM7UUFDVCx3QkFBd0I7UUFFeEIsVUFBSSxHQUFVLENBQUMsQ0FBQztRQUNoQixVQUFJLEdBQVUsQ0FBQyxDQUFDO1FBQ2hCLFdBQUssR0FBVSxDQUFDLENBQUM7O1FBK0NqQixpQkFBaUI7SUFDckIsQ0FBQztJQTlDRywyQkFBUSxHQUFSO1FBRUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUNELHdCQUFLLEdBQUwsVUFBTSxLQUFLO1FBRVAsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2SCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUU1QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUMxQixTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1IsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBRUksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxTQUFTLEdBQUc7WUFDWixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUM7WUFDM0QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztZQUMzRixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztTQUNuRCxDQUFDO1FBQ0YsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQTdERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUTtJQU0zQjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUztTQUNwQixDQUFDO3lDQUNPO0lBR1Q7UUFEQyxRQUFROzBDQUNPO0lBbEJDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvRTVCO0lBQUQsZUFBQztDQXBFRCxBQW9FQyxDQXBFcUMsRUFBRSxDQUFDLFNBQVMsR0FvRWpEO2tCQXBFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYnVsbGV0OmNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYmFkZ3V5OmNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmVMYWJlbDpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwXHJcbiAgICB9KVxyXG4gICAgZ3VuPW51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcG9zWDpudW1iZXIgPSAwO1xyXG4gICAgcG9zWTpudW1iZXIgPSAwO1xyXG4gICAgc2NvcmU6bnVtYmVyID0gMDtcclxuXHJcbiAgICBhZGRTY29yZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBcIlNDT1JFIDpcIiArIHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHNwYXduKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIHZhciBuZXdCdWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldCk7XHJcbiAgICAgICAgbmV3QnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc29sZGllcjEnKS5wb3NpdGlvbi54LHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc29sZGllcjEnKS5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3QnVsbGV0KTtcclxuXHJcbiAgICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIG1vdXNlUG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIobW91c2VQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5wb3NYID0gbW91c2VQb3NpdGlvbi54O1xyXG4gICAgICAgIHRoaXMucG9zWSA9IG1vdXNlUG9zaXRpb24ueTtcclxuXHJcbiAgICAgICAgdmFyIGFjdGlvbkJ5ID0gY2MubW92ZVRvKDAuMixjYy52Mih0aGlzLnBvc1gsdGhpcy5wb3NZKSk7XHJcbiAgICAgICAgdmFyIGRlc3RydWN0aW9uID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbmV3QnVsbGV0LmRlc3Ryb3koKTtcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgICAgIHZhciBzZXF1ZW5jZSA9IGNjLnNlcXVlbmNlKGFjdGlvbkJ5LGRlc3RydWN0aW9uKTtcclxuICAgICAgICBuZXdCdWxsZXQucnVuQWN0aW9uKHNlcXVlbmNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ3VuLGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUJhZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG5ld0JhZEd1eSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFkZ3V5KTtcclxuICAgICAgICB2YXIgcG9zaXRpb25zID0gW1xyXG4gICAgICAgICAgICBjYy52MigtNzc4LDQ1OCksY2MudjIoNzc4LC00NTgpLGNjLnYyKDc3OSw2KSxjYy52MigtNzAwLDIwKSxcclxuICAgICAgICAgICAgY2MudjIoNzc4LDcwMCksY2MudjIoLTc3OCwtNzU4KSxjYy52Mig3NzksMjAwKSxjYy52MigtNzAwLDIwKSxjYy52Mig3NzksLTIwMCksY2MudjIoLTI1MCwwKSxcclxuICAgICAgICAgICAgY2MudjIoLTI1MCwtMTUwKSxjYy52MigtMjUwLDEwMCksY2MudjIoLTI1MCw1MDApXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgYmFkR3V5UG9zaXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcG9zaXRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgbmV3QmFkR3V5LnNldFBvc2l0aW9uKHBvc2l0aW9uc1tiYWRHdXlQb3NpdGlvbl0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCYWRHdXkpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ21vdXNlZG93bicsdGhpcy5zcGF3bix0aGlzKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY3JlYXRlQmFkLDEsY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIsMyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==