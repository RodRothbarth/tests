import Aux from '../SlotEnum';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Reel extends cc.Component {
  @property({ type: cc.Node })
  public reelAnchor = null;

  @property({ type: cc.Enum(Aux.Direction) })
  public spinDirection = Aux.Direction.Down;

  @property({ type: [cc.Node], visible: false })
  private tiles = [];

  @property({ type: cc.Prefab })
  public _tilePrefab = null;

  @property({ type: cc.Prefab })
  get tilePrefab(): cc.Prefab {
    return this._tilePrefab;
  }

  set tilePrefab(newPrefab: cc.Prefab) {
    this._tilePrefab = newPrefab;
    this.reelAnchor.removeAllChildren();
    this.tiles = [];

    if (newPrefab !== null) {
      this.createReel();
      this.shuffle();
    }
  }

  private result: Array<number> = [];

  public stopSpinning = false;

  createReel(): void {
    let newTile: cc.Node;
    for (let i = 0; i < 5; i++) {
      newTile = cc.instantiate(this.tilePrefab);
      this.reelAnchor.addChild(newTile);
      this.tiles[i] = newTile;
    }
  }

  shuffle(): void {
    for (let i = 0; i < this.tiles.length; i++) {
      this.tiles[i].getComponent('Tile').setRandom();
    }
  }

  //preparation for reel's next spin
  readyStop(newResult: Array<number>): void {
    const check = this.spinDirection === Aux.Direction.Down || newResult == null;
    this.result = check ? newResult : newResult.reverse();
    this.stopSpinning = true;
  }

  //enables the spinning randomization for spin initiation
  changeCallback(element: cc.Node = null): void {
    const el = element;
    const dirModifier = this.spinDirection === Aux.Direction.Down ? -1 : 1;
    if (el.position.y * dirModifier > 288) {
      el.position = cc.v3(0, -288 * dirModifier);
//^^the elements don't star the spin in the same y ramdomizing even more the spin^^
//eliminates previous results
      let pop = null;
      if (this.result != null && this.result.length > 0) {
        pop = this.result.pop();
      }

      if (pop != null && pop >= 0) {
        el.getComponent('Tile').setTile(pop);
      } else {
        el.getComponent('Tile').setRandom();
      }
    }
  }

  checkEndCallback(element: cc.Node = null): void {
    const el = element;
    if (this.stopSpinning) {
      this.getComponent(cc.AudioSource).play();
      this.doStop(el);
    } else {
      this.doSpinning(el);
    }
  }

  //moviment animation, setting the stop motion delay 
  doSpin(windUp: number): void {
    this.stopSpinning = false;

    this.reelAnchor.children.forEach(element => {
      const dirModifier = this.spinDirection === Aux.Direction.Down ? -1 : 1;

      const delay = cc.tween(element).delay(windUp);
      const start = cc.tween(element).by(0.25, { position: cc.v2(0, 144 * dirModifier) }, { easing: 'backIn' });
      const doChange = cc.tween().call(() => this.changeCallback(element));
      const callSpinning = cc.tween(element).call(() => this.doSpinning(element, 5));

      delay
        .then(start)
        .then(doChange)
        .then(callSpinning)
        .start();
    });
  }

  doSpinning(element: cc.Node = null, times = 1): void {
    const dirModifier = this.spinDirection === Aux.Direction.Down ? -1 : 1;

    const move = cc.tween().by(0.04, { position: cc.v2(0, 144 * dirModifier) });
    const doChange = cc.tween().call(() => this.changeCallback(element));
    const repeat = cc.tween(element).repeat(times, move.then(doChange));
    const checkEnd = cc.tween().call(() => this.checkEndCallback(element));

    repeat.then(checkEnd).start();
  }

  //stopping motion reset the game
  doStop(element: cc.Node = null): void {
    const dirModifier = this.spinDirection === Aux.Direction.Down ? -1 : 1;

    const move = cc.tween(element).by(0.04, { position: cc.v2(0, 144 * dirModifier) });
    const doChange = cc.tween().call(() => this.changeCallback(element));
    const end = cc.tween().by(0.2, { position: cc.v2(0, 144 * dirModifier) }, { easing: 'bounceOut' });

    
    move
      .then(doChange)
      .then(move)
      .then(doChange)
      .then(end)
      .then(doChange)
      .start();
  }
}
