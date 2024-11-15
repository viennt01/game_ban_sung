
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
var ccclass = cc._decorator.ccclass;
var MainCharacterComponent = /** @class */ (function (_super) {
    __extends(MainCharacterComponent, _super);
    function MainCharacterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainCharacterComponent.prototype.onLoad = function () {
        this.node.addComponent('CharacterMovementComponent');
        this.node.addComponent('CharacterRotationComponent');
    };
    MainCharacterComponent = __decorate([
        ccclass
    ], MainCharacterComponent);
    return MainCharacterComponent;
}(cc.Component));
exports.default = MainCharacterComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW92ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQW9ELDBDQUFZO0lBQWhFOztJQUtBLENBQUM7SUFKRyx1Q0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFKZ0Isc0JBQXNCO1FBRDFDLE9BQU87T0FDYSxzQkFBc0IsQ0FLMUM7SUFBRCw2QkFBQztDQUxELEFBS0MsQ0FMbUQsRUFBRSxDQUFDLFNBQVMsR0FLL0Q7a0JBTG9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5DaGFyYWN0ZXJDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDb21wb25lbnQoJ0NoYXJhY3Rlck1vdmVtZW50Q29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudCgnQ2hhcmFjdGVyUm90YXRpb25Db21wb25lbnQnKTtcclxuICAgIH1cclxufVxyXG4iXX0=