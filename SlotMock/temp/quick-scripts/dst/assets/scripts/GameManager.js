
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7462271VdFN4J38ivhu1fP1', 'GameManager');
// scripts/GameManager.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property; // Introduce ccclass and property
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.machine = null;
        _this.audioClick = null;
        _this.block = false;
        _this.result = null;
        return _this;
    }
    GameManager.prototype.start = function () {
        this.machine.getComponent('Machine').createMachine();
    };
    GameManager.prototype.update = function () {
        if (this.block && this.result != null) {
            this.informStop();
            this.result = null;
        }
    };
    //click effect starts game
    GameManager.prototype.click = function () {
        cc.audioEngine.playEffect(this.audioClick, false);
        if (this.machine.getComponent('Machine').spinning === false) {
            this.block = false;
            this.machine.getComponent('Machine').spin();
            this.requestResult();
        }
        else if (!this.block) {
            this.block = true;
            this.machine.getComponent('Machine').lock();
        }
    };
    GameManager.prototype.requestResult = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.result = null;
                        _a = this;
                        return [4 /*yield*/, this.getAnswer()];
                    case 1:
                        _a.result = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameManager.prototype.getAnswer = function () {
        var slotResult = [];
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(slotResult);
            }, 1000 + 500 * Math.random());
        });
    };
    GameManager.prototype.informStop = function () {
        var resultRelayed = this.result;
        this.machine.getComponent('Machine').stop(resultRelayed);
    };
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "machine", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameManager.prototype, "audioClick", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUMsQ0FBQyxpQ0FBaUM7QUFHOUU7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFzREM7UUFwREMsYUFBTyxHQUFHLElBQUksQ0FBQztRQUdmLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRVYsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUVkLFlBQU0sR0FBRyxJQUFJLENBQUM7O0lBNkN4QixDQUFDO0lBM0NDLDJCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNyQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsMEJBQTBCO0lBQzFCLDJCQUFLLEdBQUw7UUFDRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWxELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtZQUMzRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFSyxtQ0FBYSxHQUFuQjt1Q0FBdUIsT0FBTzs7Ozs7d0JBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNuQixLQUFBLElBQUksQ0FBQTt3QkFBVSxxQkFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFwQyxHQUFLLE1BQU0sR0FBRyxTQUFzQixDQUFDOzs7OztLQUN0QztJQUVELCtCQUFTLEdBQVQ7UUFDRSxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLE9BQU8sQ0FBdUIsVUFBQSxPQUFPO1lBQzlDLFVBQVUsQ0FBQztnQkFDVCxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNFLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSDtJQUdmO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzttREFDZjtJQUxDLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FzRC9CO0lBQUQsa0JBQUM7Q0F0REQsQUFzREMsQ0F0RHdDLEVBQUUsQ0FBQyxTQUFTLEdBc0RwRDtrQkF0RG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yOyAvLyBJbnRyb2R1Y2UgY2NjbGFzcyBhbmQgcHJvcGVydHlcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBtYWNoaW5lID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgYXVkaW9DbGljayA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgYmxvY2sgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSByZXN1bHQgPSBudWxsO1xyXG5cclxuICBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWFjaGluZS5nZXRDb21wb25lbnQoJ01hY2hpbmUnKS5jcmVhdGVNYWNoaW5lKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5ibG9jayAmJiB0aGlzLnJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaW5mb3JtU3RvcCgpO1xyXG4gICAgICB0aGlzLnJlc3VsdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2NsaWNrIGVmZmVjdCBzdGFydHMgZ2FtZVxyXG4gIGNsaWNrKCk6IHZvaWQge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF1ZGlvQ2xpY2ssIGZhbHNlKTtcclxuXHJcbiAgICBpZiAodGhpcy5tYWNoaW5lLmdldENvbXBvbmVudCgnTWFjaGluZScpLnNwaW5uaW5nID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmJsb2NrID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubWFjaGluZS5nZXRDb21wb25lbnQoJ01hY2hpbmUnKS5zcGluKCk7XHJcbiAgICAgIHRoaXMucmVxdWVzdFJlc3VsdCgpO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5ibG9jaykge1xyXG4gICAgICB0aGlzLmJsb2NrID0gdHJ1ZTtcclxuICAgICAgdGhpcy5tYWNoaW5lLmdldENvbXBvbmVudCgnTWFjaGluZScpLmxvY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHJlcXVlc3RSZXN1bHQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLnJlc3VsdCA9IG51bGw7XHJcbiAgICB0aGlzLnJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0QW5zd2VyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbnN3ZXIoKTogUHJvbWlzZTxBcnJheTxBcnJheTxudW1iZXI+Pj4ge1xyXG4gICAgY29uc3Qgc2xvdFJlc3VsdCA9IFtdO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5PEFycmF5PG51bWJlcj4+PihyZXNvbHZlID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShzbG90UmVzdWx0KTtcclxuICAgICAgfSwgMTAwMCArIDUwMCAqIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbmZvcm1TdG9wKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0UmVsYXllZCA9IHRoaXMucmVzdWx0O1xyXG4gICAgdGhpcy5tYWNoaW5lLmdldENvbXBvbmVudCgnTWFjaGluZScpLnN0b3AocmVzdWx0UmVsYXllZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==