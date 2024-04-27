import Utilities from "../Utilities";

export default class MainGame extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name = "MainGame";
	shark: Phaser.GameObjects.Sprite;

	public preload(): void {
		// Preload as needed.
	}

	public create(): void {
		Utilities.LogSceneMethodEntry("MainGame", "create");
		this.input.keyboard.on("keydown-SPACE", this.bite, this);
		this.input.keyboard.on("keyup-SPACE", this.open, this);

		this.shark = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, "ChompSharkOpen");
		let open = true;
		this.shark.displayWidth = 200;
		this.shark.scaleY = this.shark.scaleX;
	}
	bite() {
		this.shark.setTexture("ChompSharkClosed")
	}
	open() {
		this.shark.setTexture("ChompSharkOpen")
	}
}
