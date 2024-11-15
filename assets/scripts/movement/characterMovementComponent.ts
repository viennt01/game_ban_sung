// File path: assets/scripts/components/CharacterMovementComponent.ts
const { ccclass, property } = cc._decorator;

@ccclass
export default class CharacterMovementComponent extends cc.Component {
    @property
    speed: number = 200; // Tốc độ di chuyển của nhân vật

    private direction: cc.Vec2 = cc.v2(0, 0); // Hướng di chuyển hiện tại

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w: this.direction.y = 1; break;
            case cc.macro.KEY.s: this.direction.y = -1; break;
            case cc.macro.KEY.a: this.direction.x = -1; break;
            case cc.macro.KEY.d: this.direction.x = 1; break;
        }
    }

    onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
            case cc.macro.KEY.s: this.direction.y = 0; break;
            case cc.macro.KEY.a:
            case cc.macro.KEY.d: this.direction.x = 0; break;
        }
    }

    update(dt) {
        if (this.direction.x !== 0 || this.direction.y !== 0) {
            const moveDistance = this.direction.normalize().mul(this.speed * dt);
            const newPosition = this.node.position.add(moveDistance);
            this.node.setPosition(newPosition);
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
}
