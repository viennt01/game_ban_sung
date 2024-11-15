const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemySpawnerComponent extends cc.Component {
    @property(cc.Prefab)
    badguy: cc.Prefab = null;

    private positions: cc.Vec2[] = [
        cc.v2(-778, 458), cc.v2(778, -458), cc.v2(779, 6), cc.v2(-700, 20),
        cc.v2(778, 700), cc.v2(-778, -758), cc.v2(779, 200), cc.v2(-700, 20),
        cc.v2(779, -200), cc.v2(-250, 0), cc.v2(-250, -150), cc.v2(-250, 100),
        cc.v2(-250, 500)
    ];

    spawnEnemy() {
        const newBadGuy = cc.instantiate(this.badguy);
        const randomPosition = this.positions[Math.floor(Math.random() * this.positions.length)];
        newBadGuy.setPosition(randomPosition);
        this.node.addChild(newBadGuy);
    }

    onLoad() {
        this.schedule(this.spawnEnemy, 1, cc.macro.REPEAT_FOREVER, 3);
    }
}
