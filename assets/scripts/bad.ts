const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    action: cc.ActionInterval;
    soldier: cc.Node;  // Biến để lưu trữ nhân vật chính (soldier)
    speed: number = 100; // Tốc độ di chuyển của con vật, có thể điều chỉnh

    // LIFE-CYCLE CALLBACKS:

    onCollisionEnter(other, self) {
        // Kiểm tra va chạm với đối tượng có tag 2 (có thể là mục tiêu hoặc vật phẩm)
        if (other.tag == 2) {
            this.node.destroy();
            this.node.parent.getComponent('Game').addScore();
        }
        // Kiểm tra va chạm với đối tượng có tag 1 (có thể là va chạm với các đối thủ)
        if (other.tag == 1) {
            cc.director.loadScene("Game");
        }
    }

    moveToPlayer() {
        // Tính toán vector hướng di chuyển tới nhân vật chính (soldier)
        const direction = this.soldier.position.sub(this.node.position).normalize();
        const moveDistance = direction.mul(this.speed);

        // Tạo hành động di chuyển liên tục về phía nhân vật chính
        return cc.moveBy(1, moveDistance.x, moveDistance.y);
    }

    onLoad() {
        // Lấy đối tượng nhân vật chính (soldier)
        this.soldier = this.node.parent.getChildByName('soldier1');

        // Khởi tạo hành động di chuyển và lặp lại liên tục
        const moveAction = this.moveToPlayer();
        const repeatMoveAction = cc.repeatForever(moveAction);

        // Thực thi hành động di chuyển
        this.node.runAction(repeatMoveAction);

        // Kích hoạt hệ thống va chạm
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        
        // Tiền tải cảnh "Game"
        cc.director.preloadScene("Game");
    }

    start() {}

    // update (dt) {}
}
