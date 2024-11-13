
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
            case cc.macro.KEY.s: // Phím S
                this.direction.y = 0; // Dừng di chuyển theo trục Y
                break;
            case cc.macro.KEY.a: // Phím A
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW92ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0ZDO1FBdEZHLFdBQUssR0FBVyxHQUFHLENBQUMsQ0FBQyxtREFBbUQ7UUFFaEUsZUFBUyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO1FBQ2xGLG9CQUFjLEdBQVksSUFBSSxDQUFDLENBQUMsK0JBQStCOztJQW1GM0UsQ0FBQztJQWpGRyx5QkFBTSxHQUFOO1FBQ0kseUJBQXlCO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXZFLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsc0JBQXNCO1FBQ3RCLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTO2dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMs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R0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksc0NBQXNDO1FBQ3RDLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVFLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBckZEO1FBREMsUUFBUTsyQ0FDVztJQUZILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3RjVCO0lBQUQsZUFBQztDQXhGRCxBQXdGQyxDQXhGcUMsRUFBRSxDQUFDLFNBQVMsR0F3RmpEO2tCQXhGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSAyMDA7IC8vIFThu5FjIMSR4buZIGRpIGNodXnhu4NuIGPhu6dhIG5ow6JuIHbhuq10LCBjw7MgdGjhu4MgxJFp4buBdSBjaOG7iW5oXHJcblxyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IGNjLlZlYzIgPSBjYy52MigwLCAwKTsgLy8gTMawdSB0cuG7ryBoxrDhu5tuZyBkaSBjaHV54buDbiBoaeG7h24gdOG6oWkgY+G7p2EgbmjDom4gduG6rXRcclxuICAgIHByaXZhdGUgdGFyZ2V0UG9zaXRpb246IGNjLlZlYzIgPSBudWxsOyAvLyBMxrB1IHRy4buvIHbhu4sgdHLDrSBjaHXhu5l0IMSR4buDIHhvYXlcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gWOG7rSBsw70gc+G7sSBraeG7h24gYsOgbiBwaMOtbVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTOG6r25nIG5naGUgc+G7sSBraeG7h24gY2h14buZdCDEkeG7gyB4b2F5IG5ow6JuIHbhuq10XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbignbW91c2Vtb3ZlJywgdGhpcy5wb3NpdGlvblhZLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpIHtcclxuICAgICAgICAvLyBY4butIGzDvSBraGkgbmjhuqVuIHBow61tXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6IC8vIFBow61tIFdcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgPSAxOyAvLyBEaSBjaHV54buDbiBsw6puXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczogLy8gUGjDrW0gU1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueSA9IC0xOyAvLyBEaSBjaHV54buDbiB4deG7kW5nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTogLy8gUGjDrW0gQVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IC0xOyAvLyBEaSBjaHV54buDbiBzYW5nIHRyw6FpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDogLy8gUGjDrW0gRFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IDE7IC8vIERpIGNodXnhu4NuIHNhbmcgcGjhuqNpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChldmVudCkge1xyXG4gICAgICAgIC8vIFjhu60gbMO9IGtoaSB0aOG6oyBwaMOtbVxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OiAvLyBQaMOtbSBXXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6IC8vIFBow61tIFNcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uLnkgPSAwOyAvLyBE4burbmcgZGkgY2h1eeG7g24gdGhlbyB0cuG7pWMgWVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6IC8vIFBow61tIEFcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDogLy8gUGjDrW0gRFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24ueCA9IDA7IC8vIEThu6tuZyBkaSBjaHV54buDbiB0aGVvIHRy4bulYyBYXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb25YWShldmVudCkge1xyXG4gICAgICAgIC8vIFTDrW5oIHRvw6FuIGfDs2MgeG9heSBj4bunYSBuaMOibiB24bqtdCB0aGVvIGNodeG7mXRcclxuICAgICAgICB2YXIgcGxheWVyUG9zaXRpb24gPSBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHZhciBtb3VzZVBvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaHV54buDbiDEkeG7lWkgduG7iyB0csOtIGNodeG7mXQgc2FuZyBraMO0bmcgZ2lhbiBj4bunYSBub2RlXHJcbiAgICAgICAgbW91c2VQb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobW91c2VQb3NpdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVMOtbmggdmVjdG9yIGjGsOG7m25nIHThu6sgbmjDom4gduG6rXQgxJHhur9uIGNodeG7mXRcclxuICAgICAgICB2YXIgZGlyZWN0aW9uVmVjdG9yID0gbW91c2VQb3NpdGlvbi5zdWIocGxheWVyUG9zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE7hur91IHZlY3RvciBoxrDhu5tuZyBraMO0bmcgcGjhuqNpIGzDoCB2ZWN0b3Iga2jDtG5nXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvblZlY3Rvci5tYWcoKSA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGFuZ2xlID0gZGlyZWN0aW9uVmVjdG9yLnNpZ25BbmdsZShjYy52MigxLCAwKSk7IC8vIFTDrW5oIGfDs2MgdGhlbyB0cuG7pWMgWFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2h1eeG7g24gZ8OzYyBzYW5nIMSR4buZXHJcbiAgICAgICAgICAgIHZhciBhbmdsZUQgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoYW5nbGUpO1xyXG4gICAgICAgICAgICBhbmdsZUQgPSAoYW5nbGVEICogLTEpIC0gOTA7IC8vIMSQaeG7gXUgY2jhu4luaCBnw7NjIGNobyBwaMO5IGjhu6NwXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBD4bqtcCBuaOG6rXQgZ8OzYyBj4bunYSBuaMOibiB24bqtdFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBhbmdsZUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIERpIGNodXnhu4NuIG5ow6JuIHbhuq10IHRoZW8gY8OhYyBwaMOtbSBXQVNEXHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uLnggIT09IDAgfHwgdGhpcy5kaXJlY3Rpb24ueSAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBEaSBjaHV54buDbiBuaMOibiB24bqtdCB0aGVvIGjGsOG7m25nIGhp4buHbiB04bqhaVxyXG4gICAgICAgICAgICB2YXIgbW92ZURpc3RhbmNlID0gdGhpcy5kaXJlY3Rpb24ubm9ybWFsaXplKCkubXVsKHRoaXMuc3BlZWQgKiBkdCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQobW92ZURpc3RhbmNlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIEjhu6d5IGLhu48gc+G7sSBraeG7h24ga2hpIMSR4buRaSB0xrDhu6NuZyBi4buLIGjhu6d5XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLnBvc2l0aW9uWFksIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==