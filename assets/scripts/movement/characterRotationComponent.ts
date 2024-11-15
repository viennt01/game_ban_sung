// File path: assets/scripts/components/CharacterRotationComponent.ts
const { ccclass } = cc._decorator;

@ccclass
export default class CharacterRotationComponent extends cc.Component {
    onLoad() {
        this.node.parent.on('mousemove', this.onMouseMove, this);
    }

    onMouseMove(event) {
        const playerPosition = cc.v2(this.node.position.x, this.node.position.y);
        let mousePosition = event.getLocation();
        mousePosition = this.node.parent.convertToNodeSpaceAR(mousePosition);
        const directionVector = mousePosition.sub(playerPosition);

        if (directionVector.mag() > 0) {
            const angle = directionVector.signAngle(cc.v2(1, 0));
            let angleD = cc.misc.radiansToDegrees(angle);
            angleD = (angleD * -1) - 90;
            this.node.angle = angleD;
        }
    }

    onDestroy() {
        this.node.parent.off('mousemove', this.onMouseMove, this);
    }
}
