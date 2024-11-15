
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/movement/characterMovementComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW92ZW1lbnRcXGNoYXJhY3Rlck1vdmVtZW50Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBcUU7QUFDL0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0QsOENBQVk7SUFBcEU7UUFBQSxxRUF5Q0M7UUF2Q0csV0FBSyxHQUFXLEdBQUcsQ0FBQyxDQUFDLGdDQUFnQztRQUU3QyxlQUFTLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7O0lBcUN6RSxDQUFDO0lBbkNHLDJDQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsOENBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ2pELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ2xELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFBQyxNQUFNO1lBQ2xELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUMsTUFBTTtTQUNwRDtJQUNMLENBQUM7SUFFRCw0Q0FBTyxHQUFQLFVBQVEsS0FBSztRQUNULFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDakQsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBQyxNQUFNO1NBQ3BEO0lBQ0wsQ0FBQztJQUVELDJDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDckUsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELDhDQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBdENEO1FBREMsUUFBUTs2REFDVztJQUZILDBCQUEwQjtRQUQ5QyxPQUFPO09BQ2EsMEJBQTBCLENBeUM5QztJQUFELGlDQUFDO0NBekNELEFBeUNDLENBekN1RCxFQUFFLENBQUMsU0FBUyxHQXlDbkU7a0JBekNvQiwwQkFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGaWxlIHBhdGg6IGFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvQ2hhcmFjdGVyTW92ZW1lbnRDb21wb25lbnQudHNcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3Rlck1vdmVtZW50Q29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDIwMDsgLy8gVOG7kWMgxJHhu5kgZGkgY2h1eeG7g24gY+G7p2EgbmjDom4gduG6rXRcclxuXHJcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogY2MuVmVjMiA9IGNjLnYyKDAsIDApOyAvLyBIxrDhu5tuZyBkaSBjaHV54buDbiBoaeG7h24gdOG6oWlcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzogdGhpcy5kaXJlY3Rpb24ueSA9IDE7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOiB0aGlzLmRpcmVjdGlvbi55ID0gLTE7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOiB0aGlzLmRpcmVjdGlvbi54ID0gLTE7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOiB0aGlzLmRpcmVjdGlvbi54ID0gMTsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5VXAoZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczogdGhpcy5kaXJlY3Rpb24ueSA9IDA7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOiB0aGlzLmRpcmVjdGlvbi54ID0gMDsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbi54ICE9PSAwIHx8IHRoaXMuZGlyZWN0aW9uLnkgIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbW92ZURpc3RhbmNlID0gdGhpcy5kaXJlY3Rpb24ubm9ybWFsaXplKCkubXVsKHRoaXMuc3BlZWQgKiBkdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZChtb3ZlRGlzdGFuY2UpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==