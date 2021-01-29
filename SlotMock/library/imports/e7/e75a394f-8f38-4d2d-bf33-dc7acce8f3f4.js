"use strict";
cc._RF.push(module, 'e75a3lPjzhNLb8z3HrM6PP0', 'Machine');
// scripts/slots/Machine.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SlotEnum_1 = require("../SlotEnum");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Machine = /** @class */ (function (_super) {
    __extends(Machine, _super);
    function Machine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.game = null;
        _this.button = null;
        _this._reelPrefab = null;
        _this._numberOfReels = 3;
        _this.reels = [];
        _this.spinning = false;
        return _this;
    }
    Object.defineProperty(Machine.prototype, "reelPrefab", {
        get: function () {
            return this._reelPrefab;
        },
        set: function (newPrefab) {
            this._reelPrefab = newPrefab;
            this.node.removeAllChildren();
            if (newPrefab !== null) {
                this.createMachine();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Machine.prototype, "numberOfReels", {
        get: function () {
            return this._numberOfReels;
        },
        set: function (newNumber) {
            this._numberOfReels = newNumber;
            if (this.reelPrefab !== null) {
                this.createMachine();
            }
        },
        enumerable: false,
        configurable: true
    });
    //organizing and shuffling/randomizing the tiles in reels on the spin
    Machine.prototype.createMachine = function () {
        this.node.destroyAllChildren();
        this.reels = [];
        var newReel;
        for (var i = 0; i < this.numberOfReels; i++) {
            newReel = cc.instantiate(this.reelPrefab);
            this.node.addChild(newReel);
            this.reels[i] = newReel;
            var reelScript = newReel.getComponent('Reel');
            reelScript.shuffle(); //randomizes the game reels 
            reelScript.reelAnchor.getComponent(cc.Layout).enabled = false;
        }
        this.node.getComponent(cc.Widget).updateAlignment();
    };
    // activates button so the tiles can spin and changes the button to stop function
    Machine.prototype.spin = function () {
        this.spinning = true;
        this.button.getChildByName('Label').getComponent(cc.Label).string = 'STOP';
        //alternates the reels spining direction in odd and even rolls
        for (var i = 0; i < this.numberOfReels; i++) {
            var theReel = this.reels[i].getComponent('Reel');
            theReel.node.opacity = 255;
            if (i % 2) {
                theReel.spinDirection = SlotEnum_1.default.Direction.Down;
            }
            else {
                theReel.spinDirection = SlotEnum_1.default.Direction.Up;
            }
            theReel.doSpin(0.03 * i);
        }
    };
    //changes the interactivity for stop and spin button
    Machine.prototype.lock = function () {
        this.button.getComponent(cc.Button).interactable = false;
    };
    //stop each reel in a set time and changes the button label to spin function
    Machine.prototype.stop = function (result) {
        var _this = this;
        if (result === void 0) { result = null; }
        setTimeout(function () {
            _this.spinning = false;
            _this.button.getComponent(cc.Button).interactable = true;
            _this.button.getChildByName('Label').getComponent(cc.Label).string = 'SPIN';
        }, 2500);
        var rngMod = Math.random() / 2;
        var _loop_1 = function (i) {
            var spinDelay = i < 2 + rngMod ? i / 4 : rngMod * (i - 2) + i / 4;
            var theReel = this_1.reels[i].getComponent('Reel');
            //sets the interval for spin motion and reaction when reels stop.
            setTimeout(function () {
                theReel.readyStop(result[i]);
                theReel.node.opacity = 120;
            }, spinDelay * 1000);
        };
        var this_1 = this;
        for (var i = 0; i < this.numberOfReels; i++) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.Node)
    ], Machine.prototype, "game", void 0);
    __decorate([
        property(cc.Node)
    ], Machine.prototype, "button", void 0);
    __decorate([
        property(cc.Prefab)
    ], Machine.prototype, "_reelPrefab", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], Machine.prototype, "reelPrefab", null);
    __decorate([
        property({ type: cc.Integer })
    ], Machine.prototype, "_numberOfReels", void 0);
    __decorate([
        property({ type: cc.Integer, range: [3, 6], slide: true })
    ], Machine.prototype, "numberOfReels", null);
    Machine = __decorate([
        ccclass
    ], Machine);
    return Machine;
}(cc.Component));
exports.default = Machine;
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

cc._RF.pop();