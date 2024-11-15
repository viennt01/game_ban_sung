const { ccclass, property } = cc._decorator;

@ccclass
export default class ScoreManagerComponent extends cc.Component {
    @property(cc.Label)
    scoreLabel: cc.Label = null;

    private score: number = 0;

    addScore() {
        this.score += 1;
        this.scoreLabel.string = "SCORE: " + this.score.toString();
    }
}
