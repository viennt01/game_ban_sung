
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/movement.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b745p+p5NBiapvojEOeJna', 'movement');
// scripts/movement.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 200; // Tốc độ di chuyển của nhân vật, có thể điều chỉnh
        _this.direction = cc.v2(0, 0); // Lưu trữ hướng di chuyển hiện tại của nhân vật
        _this.targetPosition = null; // Lưu trữ vị trí chuột để xoay
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // Xử lý sự kiện bàn phím
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // Lắng nghe sự kiện chuột để xoay nhân vật
        this.node.parent.on('mousemove', this.positionXY, this);
    };
    NewClass.prototype.onKeyDown = function (event) {
        // Xử lý khi nhấn phím
        switch (event.keyCode) {
            case cc.macro.KEY.w: // Phím W
                this.direction.y = 1; // Di chuyển lên
                break;
            case cc.macro.KEY.s: // Phím S
                this.direction.y = -1; // Di chuyển xuống
                break;
            case cc.macro.KEY.a: // Phím A
                this.direction.x = -1; // Di chuyển sang trái
                break;
            case cc.macro.KEY.d: // Phím D
                this.direction.x = 1; // Di chuyển sang phải
                break;
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
        // Xử lý khi thả phím
        switch (event.keyCode) {
            case cc.macro.KEY.w: // Phím W
                this.direction.y = 0; // Dừng di chuyển theo trục Y
                break;
            case cc.macro.KEY.s: // Phím S
                this.direction.y = 0; // Dừng di chuyển theo trục Y
                break;
            case cc.macro.KEY.a: // Phím A
                this.direction.x = 0; // Dừng di chuyển theo trục Y
                break;
            case cc.macro.KEY.d: // Phím D
                this.direction.x = 0; // Dừng di chuyển theo trục X
                break;
        }
    };
    NewClass.prototype.positionXY = function (event) {
        // Tính toán góc xoay của nhân vật theo chuột
        var playerPosition = cc.v2(this.node.position.x, this.node.position.y);
        var mousePosition = event.getLocation();
        // Chuyển đổi vị trí chuột sang không gian của node
        mousePosition = this.node.parent.convertToNodeSpaceAR(mousePosition);
        // Tính vector hướng từ nhân vật đến chuột
        var directionVector = mousePosition.sub(playerPosition);
        // Nếu vector hướng không phải là vector không
        if (directionVector.mag() > 0) {
            var angle = directionVector.signAngle(cc.v2(1, 0)); // Tính góc theo trục X
            // Chuyển góc sang độ
            var angleD = cc.misc.radiansToDegrees(angle);
            angleD = (angleD * -1) - 90; // Điều chỉnh góc cho phù hợp
            // Cập nhật góc của nhân vật
            this.node.angle = angleD;
        }
    };
    NewClass.prototype.update = function (dt) {
        // Di chuyển nhân vật theo các phím WASD
        if (this.direction.x !== 0 || this.direction.y !== 0) {
            // Di chuyển nhân vật theo hướng hiện tại
            var moveDistance = this.direction.normalize().mul(this.speed * dt);
            var newPosition = this.node.position.add(moveDistance);
            this.node.setPosition(newPosition);
        }
    };
    NewClass.prototype.onDestroy = function () {
        // Hủy bỏ sự kiện khi đối tượng bị hủy
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.parent.off('mousemove', this.positionXY, this);
    };
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW92ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNEZDO1FBMUZHLFdBQUssR0FBVyxHQUFHLENBQUMsQ0FBQyxtREFBbUQ7UUFFaEUsZUFBUyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO1FBQ2xGLG9CQUFjLEdBQVksSUFBSSxDQUFDLENBQUMsK0JBQStCOztJQXVGM0UsQ0FBQztJQXJGRyx5QkFBTSxHQUFOO1FBQ0kseUJBQXlCO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXZFLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsc0JBQXNCO1FBQ3RCLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTO2dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7Z0JBQ3RDLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTO2dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtnQkFDekMsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVM7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO2dCQUM3QyxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUztnQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO2dCQUM1QyxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLEtBQUs7UUFDVCxxQkFBcUI7UUFDckIsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ25CLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVM7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtnQkFDbkQsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVM7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtnQkFDbkQsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVM7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtnQkFDbkQsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVM7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtnQkFDbkQsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osNkNBQTZDO1FBQzdDLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV4QyxtREFBbUQ7UUFDbkQsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXJFLDBDQUEwQztRQUMxQyxJQUFJLGVBQWUsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXhELDhDQUE4QztRQUM5QyxJQUFJLGVBQWUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1lBRTNFLHFCQUFxQjtZQUNyQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtZQUUxRCw0QkFBNEI7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsd0NBQXdDO1FBQ3hDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsRCx5Q0FBeUM7WUFDekMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNuRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLHNDQUFzQztRQUN0QyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQXpGRDtRQURDLFFBQVE7MkNBQ1c7SUFGSCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNEY1QjtJQUFELGVBQUM7Q0E1RkQsQUE0RkMsQ0E1RnFDLEVBQUUsQ0FBQyxTQUFTLEdBNEZqRDtrQkE1Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwOyAvLyBU4buRYyDEkeG7mSBkaSBjaHV54buDbiBj4bunYSBuaMOibiB24bqtdCwgY8OzIHRo4buDIMSRaeG7gXUgY2jhu4luaFxyXG5cclxuICAgIHByaXZhdGUgZGlyZWN0aW9uOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7IC8vIEzGsHUgdHLhu68gaMaw4bubbmcgZGkgY2h1eeG7g24gaGnhu4duIHThuqFpIGPhu6dhIG5ow6JuIHbhuq10XHJcbiAgICBwcml2YXRlIHRhcmdldFBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDsgLy8gTMawdSB0cuG7ryB24buLIHRyw60gY2h14buZdCDEkeG7gyB4b2F5XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIFjhu60gbMO9IHPhu7Ega2nhu4duIGLDoG4gcGjDrW1cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEzhuq9uZyBuZ2hlIHPhu7Ega2nhu4duIGNodeG7mXQgxJHhu4MgeG9heSBuaMOibiB24bqtdFxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oJ21vdXNlbW92ZScsIHRoaXMucG9zaXRpb25YWSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gWOG7rSBsw70ga2hpIG5o4bqlbiBwaMOtbVxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OiAvLyBQaMOtbSBXXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi55ID0gMTsgLy8gRGkgY2h1eeG7g24gbMOqblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6IC8vIFBow61tIFNcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgPSAtMTsgLy8gRGkgY2h1eeG7g24geHXhu5FuZ1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6IC8vIFBow61tIEFcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnggPSAtMTsgLy8gRGkgY2h1eeG7g24gc2FuZyB0csOhaVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6IC8vIFBow61tIERcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnggPSAxOyAvLyBEaSBjaHV54buDbiBzYW5nIHBo4bqjaVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5VXAoZXZlbnQpIHtcclxuICAgICAgICAvLyBY4butIGzDvSBraGkgdGjhuqMgcGjDrW1cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzogLy8gUGjDrW0gV1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSA9IDA7IC8vIEThu6tuZyBkaSBjaHV54buDbiB0aGVvIHRy4bulYyBZXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczogLy8gUGjDrW0gU1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSA9IDA7IC8vIEThu6tuZyBkaSBjaHV54buDbiB0aGVvIHRy4bulYyBZXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTogLy8gUGjDrW0gQVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IDA7IC8vIEThu6tuZyBkaSBjaHV54buDbiB0aGVvIHRy4bulYyBZXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDogLy8gUGjDrW0gRFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IDA7IC8vIEThu6tuZyBkaSBjaHV54buDbiB0aGVvIHRy4bulYyBYXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb25YWShldmVudCkge1xyXG4gICAgICAgIC8vIFTDrW5oIHRvw6FuIGfDs2MgeG9heSBj4bunYSBuaMOibiB24bqtdCB0aGVvIGNodeG7mXRcclxuICAgICAgICB2YXIgcGxheWVyUG9zaXRpb24gPSBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHZhciBtb3VzZVBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgduG7iyB0csOtIGNodeG7mXQgc2FuZyBraMO0bmcgZ2lhbiBj4bunYSBub2RlXHJcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobW91c2VQb3NpdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVMOtbmggdmVjdG9yIGjGsOG7m25nIHThu6sgbmjDom4gduG6rXQgxJHhur9uIGNodeG7mXRcclxuICAgICAgICB2YXIgZGlyZWN0aW9uVmVjdG9yID0gbW91c2VQb3NpdGlvbi5zdWIocGxheWVyUG9zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE7hur91IHZlY3RvciBoxrDhu5tuZyBraMO0bmcgcGjhuqNpIGzDoCB2ZWN0b3Iga2jDtG5nXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvblZlY3Rvci5tYWcoKSA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGFuZ2xlID0gZGlyZWN0aW9uVmVjdG9yLnNpZ25BbmdsZShjYy52MigxLCAwKSk7IC8vIFTDrW5oIGfDs2MgdGhlbyB0cuG7pWMgWFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2h1eeG7g24gZ8OzYyBzYW5nIMSR4buZXHJcbiAgICAgICAgICAgIHZhciBhbmdsZUQgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoYW5nbGUpO1xyXG4gICAgICAgICAgICBhbmdsZUQgPSAoYW5nbGVEICogLTEpIC0gOTA7IC8vIMSQaeG7gXUgY2jhu4luaCBnw7NjIGNobyBwaMO5IGjhu6NwXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBD4bqtcCBuaOG6rXQgZ8OzYyBj4bunYSBuaMOibiB24bqtdFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBhbmdsZUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIERpIGNodXnhu4NuIG5ow6JuIHbhuq10IHRoZW8gY8OhYyBwaMOtbSBXQVNEXHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uLnggIT09IDAgfHwgdGhpcy5kaXJlY3Rpb24ueSAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBEaSBjaHV54buDbiBuaMOibiB24bqtdCB0aGVvIGjGsOG7m25nIGhp4buHbiB04bqhaVxyXG4gICAgICAgICAgICB2YXIgbW92ZURpc3RhbmNlID0gdGhpcy5kaXJlY3Rpb24ubm9ybWFsaXplKCkubXVsKHRoaXMuc3BlZWQgKiBkdCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQobW92ZURpc3RhbmNlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIEjhu6d5IGLhu48gc+G7sSBraeG7h24ga2hpIMSR4buRaSB0xrDhu6NuZyBi4buLIGjhu6d5XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLnBvc2l0aW9uWFksIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==