
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');
require('./assets/scripts/GameManager');
require('./assets/scripts/SlotEnum');
require('./assets/scripts/slots/Machine');
require('./assets/scripts/slots/Reel');
require('./assets/scripts/slots/Tile');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/slots/Tile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23da8goMpRLyoF0XDrNCKrG', 'Tile');
// scripts/slots/Tile.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textures = [];
        return _this;
    }
    //loads on grid the textures needed
    Tile.prototype.onLoad = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTextures()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tile.prototype.resetInEditor = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTextures()];
                    case 1:
                        _a.sent();
                        this.setRandom();
                        return [2 /*return*/];
                }
            });
        });
    };
    //loads textures from resources on tiles 
    Tile.prototype.loadTextures = function () {
        return __awaiter(this, void 0, Promise, function () {
            var self;
            return __generator(this, function (_a) {
                self = this;
                return [2 /*return*/, new Promise(function (resolve) {
                        cc.loader.loadResDir('gfx/Square', cc.SpriteFrame, function afterLoad(err, loadedTextures) {
                            self.textures = loadedTextures;
                            resolve(true);
                        });
                    })];
            });
        });
    };
    Tile.prototype.setTile = function (index) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.textures[index];
    };
    //randomizes the textures on each tile
    Tile.prototype.setRandom = function () {
        var randomIndex = Math.floor(Math.random() * this.textures.length);
        this.setTile(randomIndex);
    };
    __decorate([
        property({ type: [cc.SpriteFrame], visible: true })
    ], Tile.prototype, "textures", void 0);
    Tile = __decorate([
        ccclass
    ], Tile);
    return Tile;
}(cc.Component));
exports.default = Tile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2xvdHNcXFRpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrQ0M7UUFoQ1MsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUFnQ3hCLENBQUM7SUE5QkMsbUNBQW1DO0lBQzdCLHFCQUFNLEdBQVo7dUNBQWdCLE9BQU87Ozs0QkFDckIscUJBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQzs7Ozs7S0FDM0I7SUFFSyw0QkFBYSxHQUFuQjt1Q0FBdUIsT0FBTzs7OzRCQUM1QixxQkFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUF6QixTQUF5QixDQUFDO3dCQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Ozs7O0tBQ2xCO0lBRUQseUNBQXlDO0lBQ25DLDJCQUFZLEdBQWxCO3VDQUFzQixPQUFPOzs7Z0JBQ3JCLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLHNCQUFPLElBQUksT0FBTyxDQUFVLFVBQUEsT0FBTzt3QkFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxTQUFTLENBQUMsR0FBRyxFQUFFLGNBQWM7NEJBQ3ZGLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDOzRCQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hCLENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxFQUFDOzs7S0FDSjtJQUVELHNCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLHdCQUFTLEdBQVQ7UUFDRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7MENBQzlCO0lBRkgsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtDeEI7SUFBRCxXQUFDO0NBbENELEFBa0NDLENBbENpQyxFQUFFLENBQUMsU0FBUyxHQWtDN0M7a0JBbENvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0sIHZpc2libGU6IHRydWUgfSlcclxuICBwcml2YXRlIHRleHR1cmVzID0gW107XHJcblxyXG4gIC8vbG9hZHMgb24gZ3JpZCB0aGUgdGV4dHVyZXMgbmVlZGVkXHJcbiAgYXN5bmMgb25Mb2FkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkVGV4dHVyZXMoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJlc2V0SW5FZGl0b3IoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRUZXh0dXJlcygpO1xyXG4gICAgdGhpcy5zZXRSYW5kb20oKTtcclxuICB9XHJcblxyXG4gIC8vbG9hZHMgdGV4dHVyZXMgZnJvbSByZXNvdXJjZXMgb24gdGlsZXMgXHJcbiAgYXN5bmMgbG9hZFRleHR1cmVzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKCdnZngvU3F1YXJlJywgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIGFmdGVyTG9hZChlcnIsIGxvYWRlZFRleHR1cmVzKSB7XHJcbiAgICAgICAgc2VsZi50ZXh0dXJlcyA9IGxvYWRlZFRleHR1cmVzO1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRUaWxlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMudGV4dHVyZXNbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgLy9yYW5kb21pemVzIHRoZSB0ZXh0dXJlcyBvbiBlYWNoIHRpbGVcclxuICBzZXRSYW5kb20oKTogdm9pZCB7XHJcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV4dHVyZXMubGVuZ3RoKTtcclxuICAgIHRoaXMuc2V0VGlsZShyYW5kb21JbmRleCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '018e5+2jiFCt5nuP4LMihtM', 'use_v2.1-2.2.1_cc.Toggle_event');
// migration/use_v2.1-2.2.1_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with the v2.1.0 ～ 2.2.1 version.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 ~ 2.2.1 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether to trigger 'toggle' and 'checkEvents' events when modifying 'toggle.isChecked' in the code
  // 在代码中修改 'toggle.isChecked' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_isChecked = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMS0yLjIuMV9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlBLElBQUlBLEVBQUUsQ0FBQ0MsTUFBUCxFQUFlO0FBQ1g7QUFDQTtBQUNBRCxFQUFBQSxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsK0JBQVYsR0FBNEMsSUFBNUM7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdGhlIHYyLjEuMCDvvZ4gMi4yLjEgdmVyc2lvbi5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCB+IDIuMi4xIOeJiOacrOeahOW3peeoi++8jFxyXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIFRvZ2dsZe+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxyXG4gKi9cclxuXHJcbmlmIChjYy5Ub2dnbGUpIHtcclxuICAgIC8vIFdoZXRoZXIgdG8gdHJpZ2dlciAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgd2hlbiBtb2RpZnlpbmcgJ3RvZ2dsZS5pc0NoZWNrZWQnIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3kv67mlLkgJ3RvZ2dsZS5pc0NoZWNrZWQnIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcclxuICAgIGNjLlRvZ2dsZS5fdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkID0gdHJ1ZTtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SlotEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cbbb2wH3jBHYJaS87r8RQdn', 'SlotEnum');
// scripts/SlotEnum.ts

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
var ccclass = cc._decorator.ccclass;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
})(Direction || (Direction = {}));
var SlotEnum = /** @class */ (function (_super) {
    __extends(SlotEnum, _super);
    function SlotEnum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlotEnum.Direction = Direction;
    SlotEnum = __decorate([
        ccclass
    ], SlotEnum);
    return SlotEnum;
}(cc.Component));
exports.default = SlotEnum;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2xvdEVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFFbEMsSUFBSyxTQUdKO0FBSEQsV0FBSyxTQUFTO0lBQ1oscUNBQUUsQ0FBQTtJQUNGLHlDQUFJLENBQUE7QUFDTixDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtBQUdEO0lBQXNDLDRCQUFZO0lBQWxEOztJQUVBLENBQUM7SUFEUSxrQkFBUyxHQUFHLFNBQVMsQ0FBQztJQURWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FFNUI7SUFBRCxlQUFDO0NBRkQsQUFFQyxDQUZxQyxFQUFFLENBQUMsU0FBUyxHQUVqRDtrQkFGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRGlyZWN0aW9uIHtcclxuICBVcCxcclxuICBEb3duLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90RW51bSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIERpcmVjdGlvbiA9IERpcmVjdGlvbjtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
