
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/slots/Machine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2xvdHNcXE1hY2hpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMEdDO1FBeEdNLFVBQUksR0FBRyxJQUFJLENBQUM7UUFHVixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBaUJuQixvQkFBYyxHQUFHLENBQUMsQ0FBQztRQWVsQixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVosY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUFnRTFCLENBQUM7SUEvRkMsc0JBQUksK0JBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBZSxTQUFvQjtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFOUIsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDOzs7T0FUQTtJQWVELHNCQUFJLGtDQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7YUFFRCxVQUFrQixTQUFpQjtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUVoQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUM1QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDOzs7T0FSQTtJQWFILHFFQUFxRTtJQUNuRSwrQkFBYSxHQUFiO1FBQ0Us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QU8sQ0EwRzNCO0lBQUQsY0FBQztDQTFHRCxBQTBHQyxDQTFHb0MsRUFBRSxDQUFDLFNBQVMsR0EwR2hEO2tCQTFHb0IsT0FBTztBQTRHNUIsK0JBQStCO0FBQy9CLDRCQUE0QjtBQUU1QixnREFBZ0Q7QUFDaEQsb0NBQW9DO0FBQ3BDLHdCQUF3QjtBQUV4Qiw4REFBOEQ7QUFFOUQsZ0RBQWdEO0FBQ2hELHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsK0NBQStDO0FBQy9DLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsWUFBWTtBQUNaLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQyxzQkFBc0I7QUFDdEIsWUFBWTtBQUNaLFVBQVU7QUFDVixRQUFRO0FBQ1IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXggZnJvbSAnLi4vU2xvdEVudW0nO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hY2hpbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5AcHJvcGVydHkoY2MuTm9kZSlcclxucHVibGljIGdhbWUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwdWJsaWMgYnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICBwdWJsaWMgX3JlZWxQcmVmYWIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcclxuICBnZXQgcmVlbFByZWZhYigpOiBjYy5QcmVmYWIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlZWxQcmVmYWI7XHJcbiAgfVxyXG5cclxuICBzZXQgcmVlbFByZWZhYihuZXdQcmVmYWI6IGNjLlByZWZhYikge1xyXG4gICAgdGhpcy5fcmVlbFByZWZhYiA9IG5ld1ByZWZhYjtcclxuICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgIGlmIChuZXdQcmVmYWIgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5jcmVhdGVNYWNoaW5lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyIH0pXHJcbiAgcHVibGljIF9udW1iZXJPZlJlZWxzID0gMztcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciwgcmFuZ2U6IFszLCA2XSwgc2xpZGU6IHRydWUgfSlcclxuICBnZXQgbnVtYmVyT2ZSZWVscygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX251bWJlck9mUmVlbHM7XHJcbiAgfVxyXG5cclxuICBzZXQgbnVtYmVyT2ZSZWVscyhuZXdOdW1iZXI6IG51bWJlcikge1xyXG4gICAgdGhpcy5fbnVtYmVyT2ZSZWVscyA9IG5ld051bWJlcjtcclxuXHJcbiAgICBpZiAodGhpcy5yZWVsUHJlZmFiICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlTWFjaGluZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWVscyA9IFtdO1xyXG5cclxuICBwdWJsaWMgc3Bpbm5pbmcgPSBmYWxzZTtcclxuLy9vcmdhbml6aW5nIGFuZCBzaHVmZmxpbmcvcmFuZG9taXppbmcgdGhlIHRpbGVzIGluIHJlZWxzIG9uIHRoZSBzcGluXHJcbiAgY3JlYXRlTWFjaGluZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgIHRoaXMucmVlbHMgPSBbXTtcclxuXHJcbiAgICBsZXQgbmV3UmVlbDogY2MuTm9kZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZlJlZWxzOyBpKyspIHtcclxuICAgICAgbmV3UmVlbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmVlbFByZWZhYik7XHJcbiAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSZWVsKTtcclxuICAgICAgdGhpcy5yZWVsc1tpXSA9IG5ld1JlZWw7XHJcblxyXG4gICAgICBjb25zdCByZWVsU2NyaXB0ID0gbmV3UmVlbC5nZXRDb21wb25lbnQoJ1JlZWwnKTtcclxuICAgICAgcmVlbFNjcmlwdC5zaHVmZmxlKCk7IC8vcmFuZG9taXplcyB0aGUgZ2FtZSByZWVscyBcclxuICAgICAgcmVlbFNjcmlwdC5yZWVsQW5jaG9yLmdldENvbXBvbmVudChjYy5MYXlvdXQpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XHJcbiAgfVxyXG4vLyBhY3RpdmF0ZXMgYnV0dG9uIHNvIHRoZSB0aWxlcyBjYW4gc3BpbiBhbmQgY2hhbmdlcyB0aGUgYnV0dG9uIHRvIHN0b3AgZnVuY3Rpb25cclxuICBzcGluKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zcGlubmluZyA9IHRydWU7XHJcbiAgICB0aGlzLmJ1dHRvbi5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICdTVE9QJztcclxuXHJcbiAgICAvL2FsdGVybmF0ZXMgdGhlIHJlZWxzIHNwaW5pbmcgZGlyZWN0aW9uIGluIG9kZCBhbmQgZXZlbiByb2xsc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mUmVlbHM7IGkrKykge1xyXG4gICAgICBjb25zdCB0aGVSZWVsID0gdGhpcy5yZWVsc1tpXS5nZXRDb21wb25lbnQoJ1JlZWwnKTtcclxuICAgICAgdGhlUmVlbC5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcblxyXG4gICAgICBpZiAoaSAlIDIpIHtcclxuICAgICAgICB0aGVSZWVsLnNwaW5EaXJlY3Rpb24gPSBBdXguRGlyZWN0aW9uLkRvd247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhlUmVlbC5zcGluRGlyZWN0aW9uID0gQXV4LkRpcmVjdGlvbi5VcDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhlUmVlbC5kb1NwaW4oMC4wMyAqIGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8vY2hhbmdlcyB0aGUgaW50ZXJhY3Rpdml0eSBmb3Igc3RvcCBhbmQgc3BpbiBidXR0b25cclxuICBsb2NrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5idXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuLy9zdG9wIGVhY2ggcmVlbCBpbiBhIHNldCB0aW1lIGFuZCBjaGFuZ2VzIHRoZSBidXR0b24gbGFiZWwgdG8gc3BpbiBmdW5jdGlvblxyXG4gIHN0b3AocmVzdWx0OiBBcnJheTxBcnJheTxudW1iZXI+PiA9IG51bGwpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNwaW5uaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuYnV0dG9uLmdldENoaWxkQnlOYW1lKCdMYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ1NQSU4nO1xyXG4gICAgfSwgMjUwMCk7XHJcblxyXG4gICAgY29uc3Qgcm5nTW9kID0gTWF0aC5yYW5kb20oKSAvIDI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZSZWVsczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNwaW5EZWxheSA9IGkgPCAyICsgcm5nTW9kID8gaSAvIDQgOiBybmdNb2QgKiAoaSAtIDIpICsgaSAvIDQ7XHJcbiAgICAgIGNvbnN0IHRoZVJlZWwgPSB0aGlzLnJlZWxzW2ldLmdldENvbXBvbmVudCgnUmVlbCcpO1xyXG5cclxuICAgICAgLy9zZXRzIHRoZSBpbnRlcnZhbCBmb3Igc3BpbiBtb3Rpb24gYW5kIHJlYWN0aW9uIHdoZW4gcmVlbHMgc3RvcC5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhlUmVlbC5yZWFkeVN0b3AocmVzdWx0W2ldKTtcclxuICAgICAgICB0aGVSZWVsLm5vZGUub3BhY2l0eSA9IDEyMDtcclxuICAgICAgfSwgc3BpbkRlbGF5ICogMTAwMCk7XHJcbiAgICB9ICBcclxuICB9XHJcbn1cclxuXHJcbi8vICBmdW5jdGlvbiBldmFsdWF0ZVJlc3VsdCgpIHtcclxuLy8gICAgdGhpcy53aW5uaW5nbGluZSA9IFtdO1xyXG4gICBcclxuLy8gICAgZm9yKGxldCBsaW5lSWR4PTA7IGxpbmVJZHg8IDU7IGxpbmVJZHgrKyl7XHJcbi8vICAgICAgIGNvbnN0IGN1cnJlbnRBbmltYWwgPSBudWxsO1xyXG4vLyAgICAgICBsZXQgc3RyZWFrID0gMDtcclxuXHJcbi8vICAgICAgIGZvcihsZXQgY29vcmRlbmF0ZXM9MTsgY29vcmRlbmF0ZXM8NDsgY29vcmRlbmF0ZXMrKyl7XHJcblxyXG4vLyAgICAgICAgICAgaWYoY3VycmVudEFuaW1hbCA9PT0gY29vcmRBbmltYWwgKXtcclxuLy8gICAgICAgICAgICAgc3RyZWFrKytcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgaWYoY3VycmVudEFuaW1hbCAhPT0gY29vcmRBbmltYWwpe1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgIH0gXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKHN0cmVhayA+PSA1KXtcclxuLy8gICAgICAgICAgIC8vY29sb2NhciBnbG93XHJcbi8vICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgICAgICAgLy9oaWdoIGxpZ2h0ZWQgbGluZVxyXG4vLyAgICAgICAgICAgfSwgMTAwMCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4gICAiXX0=