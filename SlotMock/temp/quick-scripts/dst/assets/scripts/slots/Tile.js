
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