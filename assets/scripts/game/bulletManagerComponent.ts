const { ccclass, property } = cc._decorator;

@ccclass
export default class BulletManagerComponent extends cc.Component {
    @property(cc.Prefab)
    bullet: cc.Prefab = null;

    @property({
        type: cc.AudioClip
    })
    gunSound: cc.AudioClip = null;

    @property(cc.Node)
    soldier: cc.Node = null; // Tham chiếu tới nhân vật chính

    posX: number = 0;
    posY: number = 0;

    spawnBullet(event) {
        const newBullet = cc.instantiate(this.bullet);
        newBullet.setPosition(this.soldier.position.x, this.soldier.position.y);
        this.node.addChild(newBullet);

        // Chuyển vị trí chuột sang tọa độ trong không gian node
        let mousePosition = event.getLocation();
        mousePosition = this.node.convertToNodeSpaceAR(mousePosition);
        this.posX = mousePosition.x;
        this.posY = mousePosition.y;

        const actionMove = cc.moveTo(0.2, cc.v2(this.posX, this.posY));
        const destroyBullet = cc.callFunc(() => {
            newBullet.destroy();
        }, this);
        const actionSequence = cc.sequence(actionMove, destroyBullet);

        newBullet.runAction(actionSequence);
        cc.audioEngine.playEffect(this.gunSound, false);
    }

    onLoad() {
        this.node.on('mousedown', this.spawnBullet, this);
    }
}
