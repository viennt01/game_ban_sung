
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/movement/characterRotationComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW92ZW1lbnRcXGNoYXJhY3RlclJvdGF0aW9uQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBcUU7QUFDN0QsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBd0QsOENBQVk7SUFBcEU7O0lBc0JBLENBQUM7SUFyQkcsMkNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZ0RBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JFLElBQU0sZUFBZSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFMUQsSUFBSSxlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsOENBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBckJnQiwwQkFBMEI7UUFEOUMsT0FBTztPQUNhLDBCQUEwQixDQXNCOUM7SUFBRCxpQ0FBQztDQXRCRCxBQXNCQyxDQXRCdUQsRUFBRSxDQUFDLFNBQVMsR0FzQm5FO2tCQXRCb0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmlsZSBwYXRoOiBhc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL0NoYXJhY3RlclJvdGF0aW9uQ29tcG9uZW50LnRzXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlclJvdGF0aW9uQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllclBvc2l0aW9uID0gY2MudjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICBsZXQgbW91c2VQb3NpdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobW91c2VQb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uVmVjdG9yID0gbW91c2VQb3NpdGlvbi5zdWIocGxheWVyUG9zaXRpb24pO1xyXG5cclxuICAgICAgICBpZiAoZGlyZWN0aW9uVmVjdG9yLm1hZygpID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IGRpcmVjdGlvblZlY3Rvci5zaWduQW5nbGUoY2MudjIoMSwgMCkpO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGVEID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKGFuZ2xlKTtcclxuICAgICAgICAgICAgYW5nbGVEID0gKGFuZ2xlRCAqIC0xKSAtIDkwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBhbmdsZUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9mZignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIl19