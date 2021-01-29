
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/slots/Reel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91e54zzGJ5Os6qxY73m4+B5', 'Reel');
// scripts/slots/Reel.ts

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
var Reel = /** @class */ (function (_super) {
    __extends(Reel, _super);
    function Reel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reelAnchor = null;
        _this.spinDirection = SlotEnum_1.default.Direction.Down;
        _this.tiles = [];
        _this._tilePrefab = null;
        _this.result = [];
        _this.stopSpinning = false;
        return _this;
    }
    Object.defineProperty(Reel.prototype, "tilePrefab", {
        get: function () {
            return this._tilePrefab;
        },
        set: function (newPrefab) {
            this._tilePrefab = newPrefab;
            this.reelAnchor.removeAllChildren();
            this.tiles = [];
            if (newPrefab !== null) {
                this.createReel();
                this.shuffle();
            }
        },
        enumerable: false,
        configurable: true
    });
    Reel.prototype.createReel = function () {
        var newTile;
        for (var i = 0; i < 5; i++) {
            newTile = cc.instantiate(this.tilePrefab);
            this.reelAnchor.addChild(newTile);
            this.tiles[i] = newTile;
        }
    };
    Reel.prototype.shuffle = function () {
        for (var i = 0; i < this.tiles.length; i++) {
            this.tiles[i].getComponent('Tile').setRandom();
        }
    };
    //preparation for reel's next spin
    Reel.prototype.readyStop = function (newResult) {
        var check = this.spinDirection === SlotEnum_1.default.Direction.Down || newResult == null;
        this.result = check ? newResult : newResult.reverse();
        this.stopSpinning = true;
    };
    //enables the spinning randomization for spin initiation
    Reel.prototype.changeCallback = function (element) {
        if (element === void 0) { element = null; }
        var el = element;
        var dirModifier = this.spinDirection === SlotEnum_1.default.Direction.Down ? -1 : 1;
        if (el.position.y * dirModifier > 288) {
            el.position = cc.v3(0, -288 * dirModifier);
            //^^the elements don't star the spin in the same y ramdomizing even more the spin^^
            //eliminates previous results
            var pop = null;
            if (this.result != null && this.result.length > 0) {
                pop = this.result.pop();
            }
            if (pop != null && pop >= 0) {
                el.getComponent('Tile').setTile(pop);
            }
            else {
                el.getComponent('Tile').setRandom();
            }
        }
    };
    Reel.prototype.checkEndCallback = function (element) {
        if (element === void 0) { element = null; }
        var el = element;
        if (this.stopSpinning) {
            this.getComponent(cc.AudioSource).play();
            this.doStop(el);
        }
        else {
            this.doSpinning(el);
        }
    };
    //moviment animation, setting the stop motion delay 
    Reel.prototype.doSpin = function (windUp) {
        var _this = this;
        this.stopSpinning = false;
        this.reelAnchor.children.forEach(function (element) {
            var dirModifier = _this.spinDirection === SlotEnum_1.default.Direction.Down ? -1 : 1;
            var delay = cc.tween(element).delay(windUp);
            var start = cc.tween(element).by(0.25, { position: cc.v2(0, 144 * dirModifier) }, { easing: 'backIn' });
            var doChange = cc.tween().call(function () { return _this.changeCallback(element); });
            var callSpinning = cc.tween(element).call(function () { return _this.doSpinning(element, 5); });
            delay
                .then(start)
                .then(doChange)
                .then(callSpinning)
                .start();
        });
    };
    Reel.prototype.doSpinning = function (element, times) {
        var _this = this;
        if (element === void 0) { element = null; }
        if (times === void 0) { times = 1; }
        var dirModifier = this.spinDirection === SlotEnum_1.default.Direction.Down ? -1 : 1;
        var move = cc.tween().by(0.04, { position: cc.v2(0, 144 * dirModifier) });
        var doChange = cc.tween().call(function () { return _this.changeCallback(element); });
        var repeat = cc.tween(element).repeat(times, move.then(doChange));
        var checkEnd = cc.tween().call(function () { return _this.checkEndCallback(element); });
        repeat.then(checkEnd).start();
    };
    //stopping motion reset the game
    Reel.prototype.doStop = function (element) {
        var _this = this;
        if (element === void 0) { element = null; }
        var dirModifier = this.spinDirection === SlotEnum_1.default.Direction.Down ? -1 : 1;
        var move = cc.tween(element).by(0.04, { position: cc.v2(0, 144 * dirModifier) });
        var doChange = cc.tween().call(function () { return _this.changeCallback(element); });
        var end = cc.tween().by(0.2, { position: cc.v2(0, 144 * dirModifier) }, { easing: 'bounceOut' });
        move
            .then(doChange)
            .then(move)
            .then(doChange)
            .then(end)
            .then(doChange)
            .start();
    };
    __decorate([
        property({ type: cc.Node })
    ], Reel.prototype, "reelAnchor", void 0);
    __decorate([
        property({ type: cc.Enum(SlotEnum_1.default.Direction) })
    ], Reel.prototype, "spinDirection", void 0);
    __decorate([
        property({ type: [cc.Node], visible: false })
    ], Reel.prototype, "tiles", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], Reel.prototype, "_tilePrefab", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], Reel.prototype, "tilePrefab", null);
    Reel = __decorate([
        ccclass
    ], Reel);
    return Reel;
}(cc.Component));
exports.default = Reel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2xvdHNcXFJlZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBc0lDO1FBcElRLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBR2xCLG1CQUFhLEdBQUcsa0JBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBR2xDLFdBQUssR0FBRyxFQUFFLENBQUM7UUFHWixpQkFBVyxHQUFHLElBQUksQ0FBQztRQWtCbEIsWUFBTSxHQUFrQixFQUFFLENBQUM7UUFFNUIsa0JBQVksR0FBRyxLQUFLLENBQUM7O0lBdUc5QixDQUFDO0lBeEhDLHNCQUFJLDRCQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWUsU0FBb0I7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRWhCLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEI7UUFDSCxDQUFDOzs7T0FYQTtJQWlCRCx5QkFBVSxHQUFWO1FBQ0UsSUFBSSxPQUFnQixDQUFDO1FBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVB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LENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDOzBDQUc3QjtJQWhCa0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNJeEI7SUFBRCxXQUFDO0NBdElELEFBc0lDLENBdElpQyxFQUFFLENBQUMsU0FBUyxHQXNJN0M7a0JBdElvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1eCBmcm9tICcuLi9TbG90RW51bSc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSB9KVxyXG4gIHB1YmxpYyByZWVsQW5jaG9yID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShBdXguRGlyZWN0aW9uKSB9KVxyXG4gIHB1YmxpYyBzcGluRGlyZWN0aW9uID0gQXV4LkRpcmVjdGlvbi5Eb3duO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuTm9kZV0sIHZpc2libGU6IGZhbHNlIH0pXHJcbiAgcHJpdmF0ZSB0aWxlcyA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcclxuICBwdWJsaWMgX3RpbGVQcmVmYWIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIgfSlcclxuICBnZXQgdGlsZVByZWZhYigpOiBjYy5QcmVmYWIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpbGVQcmVmYWI7XHJcbiAgfVxyXG5cclxuICBzZXQgdGlsZVByZWZhYihuZXdQcmVmYWI6IGNjLlByZWZhYikge1xyXG4gICAgdGhpcy5fdGlsZVByZWZhYiA9IG5ld1ByZWZhYjtcclxuICAgIHRoaXMucmVlbEFuY2hvci5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgdGhpcy50aWxlcyA9IFtdO1xyXG5cclxuICAgIGlmIChuZXdQcmVmYWIgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5jcmVhdGVSZWVsKCk7XHJcbiAgICAgIHRoaXMuc2h1ZmZsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXN1bHQ6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHJcbiAgcHVibGljIHN0b3BTcGlubmluZyA9IGZhbHNlO1xyXG5cclxuICBjcmVhdGVSZWVsKCk6IHZvaWQge1xyXG4gICAgbGV0IG5ld1RpbGU6IGNjLk5vZGU7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICBuZXdUaWxlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlUHJlZmFiKTtcclxuICAgICAgdGhpcy5yZWVsQW5jaG9yLmFkZENoaWxkKG5ld1RpbGUpO1xyXG4gICAgICB0aGlzLnRpbGVzW2ldID0gbmV3VGlsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNodWZmbGUoKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy50aWxlc1tpXS5nZXRDb21wb25lbnQoJ1RpbGUnKS5zZXRSYW5kb20oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vcHJlcGFyYXRpb24gZm9yIHJlZWwncyBuZXh0IHNwaW5cclxuICByZWFkeVN0b3AobmV3UmVzdWx0OiBBcnJheTxudW1iZXI+KTogdm9pZCB7XHJcbiAgICBjb25zdCBjaGVjayA9IHRoaXMuc3BpbkRpcmVjdGlvbiA9PT0gQXV4LkRpcmVjdGlvbi5Eb3duIHx8IG5ld1Jlc3VsdCA9PSBudWxsO1xyXG4gICAgdGhpcy5yZXN1bHQgPSBjaGVjayA/IG5ld1Jlc3VsdCA6IG5ld1Jlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICB0aGlzLnN0b3BTcGlubmluZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvL2VuYWJsZXMgdGhlIHNwaW5uaW5nIHJhbmRvbWl6YXRpb24gZm9yIHNwaW4gaW5pdGlhdGlvblxyXG4gIGNoYW5nZUNhbGxiYWNrKGVsZW1lbnQ6IGNjLk5vZGUgPSBudWxsKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbCA9IGVsZW1lbnQ7XHJcbiAgICBjb25zdCBkaXJNb2RpZmllciA9IHRoaXMuc3BpbkRpcmVjdGlvbiA9PT0gQXV4LkRpcmVjdGlvbi5Eb3duID8gLTEgOiAxO1xyXG4gICAgaWYgKGVsLnBvc2l0aW9uLnkgKiBkaXJNb2RpZmllciA+IDI4OCkge1xyXG4gICAgICBlbC5wb3NpdGlvbiA9IGNjLnYzKDAsIC0yODggKiBkaXJNb2RpZmllcik7XHJcbi8vXl50aGUgZWxlbWVudHMgZG9uJ3Qgc3RhciB0aGUgc3BpbiBpbiB0aGUgc2FtZSB5IHJhbWRvbWl6aW5nIGV2ZW4gbW9yZSB0aGUgc3Bpbl5eXHJcbi8vZWxpbWluYXRlcyBwcmV2aW91cyByZXN1bHRzXHJcbiAgICAgIGxldCBwb3AgPSBudWxsO1xyXG4gICAgICBpZiAodGhpcy5yZXN1bHQgIT0gbnVsbCAmJiB0aGlzLnJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcG9wID0gdGhpcy5yZXN1bHQucG9wKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwb3AgIT0gbnVsbCAmJiBwb3AgPj0gMCkge1xyXG4gICAgICAgIGVsLmdldENvbXBvbmVudCgnVGlsZScpLnNldFRpbGUocG9wKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbC5nZXRDb21wb25lbnQoJ1RpbGUnKS5zZXRSYW5kb20oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tFbmRDYWxsYmFjayhlbGVtZW50OiBjYy5Ob2RlID0gbnVsbCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWwgPSBlbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuc3RvcFNwaW5uaW5nKSB7XHJcbiAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XHJcbiAgICAgIHRoaXMuZG9TdG9wKGVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZG9TcGlubmluZyhlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL21vdmltZW50IGFuaW1hdGlvbiwgc2V0dGluZyB0aGUgc3RvcCBtb3Rpb24gZGVsYXkgXHJcbiAgZG9TcGluKHdpbmRVcDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3BTcGlubmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMucmVlbEFuY2hvci5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBjb25zdCBkaXJNb2RpZmllciA9IHRoaXMuc3BpbkRpcmVjdGlvbiA9PT0gQXV4LkRpcmVjdGlvbi5Eb3duID8gLTEgOiAxO1xyXG5cclxuICAgICAgY29uc3QgZGVsYXkgPSBjYy50d2VlbihlbGVtZW50KS5kZWxheSh3aW5kVXApO1xyXG4gICAgICBjb25zdCBzdGFydCA9IGNjLnR3ZWVuKGVsZW1lbnQpLmJ5KDAuMjUsIHsgcG9zaXRpb246IGNjLnYyKDAsIDE0NCAqIGRpck1vZGlmaWVyKSB9LCB7IGVhc2luZzogJ2JhY2tJbicgfSk7XHJcbiAgICAgIGNvbnN0IGRvQ2hhbmdlID0gY2MudHdlZW4oKS5jYWxsKCgpID0+IHRoaXMuY2hhbmdlQ2FsbGJhY2soZWxlbWVudCkpO1xyXG4gICAgICBjb25zdCBjYWxsU3Bpbm5pbmcgPSBjYy50d2VlbihlbGVtZW50KS5jYWxsKCgpID0+IHRoaXMuZG9TcGlubmluZyhlbGVtZW50LCA1KSk7XHJcblxyXG4gICAgICBkZWxheVxyXG4gICAgICAgIC50aGVuKHN0YXJ0KVxyXG4gICAgICAgIC50aGVuKGRvQ2hhbmdlKVxyXG4gICAgICAgIC50aGVuKGNhbGxTcGlubmluZylcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZG9TcGlubmluZyhlbGVtZW50OiBjYy5Ob2RlID0gbnVsbCwgdGltZXMgPSAxKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaXJNb2RpZmllciA9IHRoaXMuc3BpbkRpcmVjdGlvbiA9PT0gQXV4LkRpcmVjdGlvbi5Eb3duID8gLTEgOiAxO1xyXG5cclxuICAgIGNvbnN0IG1vdmUgPSBjYy50d2VlbigpLmJ5KDAuMDQsIHsgcG9zaXRpb246IGNjLnYyKDAsIDE0NCAqIGRpck1vZGlmaWVyKSB9KTtcclxuICAgIGNvbnN0IGRvQ2hhbmdlID0gY2MudHdlZW4oKS5jYWxsKCgpID0+IHRoaXMuY2hhbmdlQ2FsbGJhY2soZWxlbWVudCkpO1xyXG4gICAgY29uc3QgcmVwZWF0ID0gY2MudHdlZW4oZWxlbWVudCkucmVwZWF0KHRpbWVzLCBtb3ZlLnRoZW4oZG9DaGFuZ2UpKTtcclxuICAgIGNvbnN0IGNoZWNrRW5kID0gY2MudHdlZW4oKS5jYWxsKCgpID0+IHRoaXMuY2hlY2tFbmRDYWxsYmFjayhlbGVtZW50KSk7XHJcblxyXG4gICAgcmVwZWF0LnRoZW4oY2hlY2tFbmQpLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICAvL3N0b3BwaW5nIG1vdGlvbiByZXNldCB0aGUgZ2FtZVxyXG4gIGRvU3RvcChlbGVtZW50OiBjYy5Ob2RlID0gbnVsbCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGlyTW9kaWZpZXIgPSB0aGlzLnNwaW5EaXJlY3Rpb24gPT09IEF1eC5EaXJlY3Rpb24uRG93biA/IC0xIDogMTtcclxuXHJcbiAgICBjb25zdCBtb3ZlID0gY2MudHdlZW4oZWxlbWVudCkuYnkoMC4wNCwgeyBwb3NpdGlvbjogY2MudjIoMCwgMTQ0ICogZGlyTW9kaWZpZXIpIH0pO1xyXG4gICAgY29uc3QgZG9DaGFuZ2UgPSBjYy50d2VlbigpLmNhbGwoKCkgPT4gdGhpcy5jaGFuZ2VDYWxsYmFjayhlbGVtZW50KSk7XHJcbiAgICBjb25zdCBlbmQgPSBjYy50d2VlbigpLmJ5KDAuMiwgeyBwb3NpdGlvbjogY2MudjIoMCwgMTQ0ICogZGlyTW9kaWZpZXIpIH0sIHsgZWFzaW5nOiAnYm91bmNlT3V0JyB9KTtcclxuXHJcbiAgICBcclxuICAgIG1vdmVcclxuICAgICAgLnRoZW4oZG9DaGFuZ2UpXHJcbiAgICAgIC50aGVuKG1vdmUpXHJcbiAgICAgIC50aGVuKGRvQ2hhbmdlKVxyXG4gICAgICAudGhlbihlbmQpXHJcbiAgICAgIC50aGVuKGRvQ2hhbmdlKVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcbn1cclxuIl19