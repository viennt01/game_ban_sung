const { ccclass } = cc._decorator;

@ccclass
export default class MainCharacterComponent extends cc.Component {
    onLoad() {
        this.node.addComponent('CharacterMovementComponent');
        this.node.addComponent('CharacterRotationComponent');
    }
}
