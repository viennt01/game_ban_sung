"use strict";
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