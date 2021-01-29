import Aux from '../SlotEnum';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Machine extends cc.Component {
@property(cc.Node)
public game = null;

  @property(cc.Node)
  public button: cc.Node = null;

  @property(cc.Prefab)
  public _reelPrefab = null;

  @property({ type: cc.Prefab })
  get reelPrefab(): cc.Prefab {
    return this._reelPrefab;
  }

  set reelPrefab(newPrefab: cc.Prefab) {
    this._reelPrefab = newPrefab;
    this.node.removeAllChildren();

    if (newPrefab !== null) {
      this.createMachine();
    }
  }

  @property({ type: cc.Integer })
  public _numberOfReels = 3;

  @property({ type: cc.Integer, range: [3, 6], slide: true })
  get numberOfReels(): number {
    return this._numberOfReels;
  }

  set numberOfReels(newNumber: number) {
    this._numberOfReels = newNumber;

    if (this.reelPrefab !== null) {
      this.createMachine();
    }
  }

  private reels = [];

  public spinning = false;
//organizing and shuffling/randomizing the tiles in reels on the spin
  createMachine(): void {
    this.node.destroyAllChildren();
    this.reels = [];

    let newReel: cc.Node;
    for (let i = 0; i < this.numberOfReels; i++) {
      newReel = cc.instantiate(this.reelPrefab);
      this.node.addChild(newReel);
      this.reels[i] = newReel;

      const reelScript = newReel.getComponent('Reel');
      reelScript.shuffle(); //randomizes the game reels 
      reelScript.reelAnchor.getComponent(cc.Layout).enabled = false;
    }

    this.node.getComponent(cc.Widget).updateAlignment();
  }
// activates button so the tiles can spin and changes the button to stop function
  spin(): void {
    this.spinning = true;
    this.button.getChildByName('Label').getComponent(cc.Label).string = 'STOP';

    //alternates the reels spining direction in odd and even rolls
    for (let i = 0; i < this.numberOfReels; i++) {
      const theReel = this.reels[i].getComponent('Reel');
      theReel.node.opacity = 255;

      if (i % 2) {
        theReel.spinDirection = Aux.Direction.Down;
      } else {
        theReel.spinDirection = Aux.Direction.Up;
      }

      theReel.doSpin(0.03 * i);
    }
  }

//changes the interactivity for stop and spin button
  lock(): void {
    this.button.getComponent(cc.Button).interactable = false;
  }

//stop each reel in a set time and changes the button label to spin function
  stop(result: Array<Array<number>> = null): void {
    setTimeout(() => {
      this.spinning = false;
      this.button.getComponent(cc.Button).interactable = true;
      this.button.getChildByName('Label').getComponent(cc.Label).string = 'SPIN';
    }, 2500);

    const rngMod = Math.random() / 2;
    for (let i = 0; i < this.numberOfReels; i++) {
      const spinDelay = i < 2 + rngMod ? i / 4 : rngMod * (i - 2) + i / 4;
      const theReel = this.reels[i].getComponent('Reel');

      //sets the interval for spin motion and reaction when reels stop.
      setTimeout(() => {
        theReel.readyStop(result[i]);
        theReel.node.opacity = 120;
      }, spinDelay * 1000);
    }  
  }
}

//  function evaluateResult() {
//    this.winningline = [];
   
//    for(let lineIdx=0; lineIdx< 5; lineIdx++){
//       const currentAnimal = null;
//       let streak = 0;

//       for(let coordenates=1; coordenates<4; coordenates++){

//           if(currentAnimal === coordAnimal ){
//             streak++
//         } else {
//           if(currentAnimal !== coordAnimal){
//             break;
//           } 
//         }
//         if(streak >= 5){
//           //colocar glow
//           setTimeout(() => {
//             //high lighted line
//           }, 1000);
//         }
//       }
//     }
//   }
   