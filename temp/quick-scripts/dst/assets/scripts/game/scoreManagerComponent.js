
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game/scoreManagerComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2d3c3Gh8ZODrP9oJN3aEHS', 'scoreManagerComponent');
// scripts/game/scoreManagerComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScoreManagerComponent = /** @class */ (function (_super) {
    __extends(ScoreManagerComponent, _super);
    function ScoreManagerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.score = 0;
        return _this;
    }
    ScoreManagerComponent.prototype.addScore = function () {
        this.score += 1;
        this.scoreLabel.string = "SCORE: " + this.score.toString();
    };
    __decorate([
        property(cc.Label)
    ], ScoreManagerComponent.prototype, "scoreLabel", void 0);
    ScoreManagerComponent = __decorate([
        ccclass
    ], ScoreManagerComponent);
    return ScoreManagerComponent;
}(cc.Component));
exports.default = ScoreManagerComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZVxcc2NvcmVNYW5hZ2VyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQVVDO1FBUkcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFcEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFNOUIsQ0FBQztJQUpHLHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBUEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2REFDUztJQUZYLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBVXpDO0lBQUQsNEJBQUM7Q0FWRCxBQVVDLENBVmtELEVBQUUsQ0FBQyxTQUFTLEdBVTlEO2tCQVZvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVNYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGFkZFNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gXCJTQ09SRTogXCIgKyB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIl19