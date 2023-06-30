var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// build.ts
var require_build = __commonJS({
  "build.ts"() {
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  MWModuleMap: () => MWModuleMap
});
module.exports = __toCommonJS(stdin_exports);

// JavaScripts/Assets/GameAssetsConfig.ts
var GameAssetsConfig_exports = {};
__export(GameAssetsConfig_exports, {
  default: () => GameAssetsConfig
});
var GameAssetsConfig = class {
};
__publicField(GameAssetsConfig, "animationAssets", /* @__PURE__ */ new Map([
  ["1001", {
    id: "1001",
    name: "\u5DE6\u51B2\u523A",
    assetID: "151007"
  }],
  ["1002", {
    id: "1002",
    name: "\u53F3\u51B2\u523A",
    assetID: "151008"
  }]
]));

// JavaScripts/Cache/GameDataServer.ts
var GameDataServer_exports = {};
__export(GameDataServer_exports, {
  default: () => GameDataServer
});
var GameDataServer = class {
  static getPlayerInfo(player) {
    return this.playerData.get(player.getUserId());
  }
};
__publicField(GameDataServer, "playerData", /* @__PURE__ */ new Map());
__publicField(GameDataServer, "playerPetAttachData", /* @__PURE__ */ new Map());

// JavaScripts/Config/EnemyConfig.ts
var EnemyConfig_exports = {};
__export(EnemyConfig_exports, {
  default: () => EnemyConfig
});
var EnemyConfig = class {
};
__publicField(EnemyConfig, "minChaseRadius", 100);
__publicField(EnemyConfig, "maxChaseRadius", 200);
__publicField(EnemyConfig, "attackRadius", 10);
__publicField(EnemyConfig, "returnRadius", 300);
__publicField(EnemyConfig, "allEnemy", /* @__PURE__ */ new Map([
  ["1001", {
    id: "",
    prefabCharacterID: "",
    level: 1,
    name: "\u8D3C",
    activeAttack: false,
    maxHealth: 100,
    attackPower: 3,
    defensePower: 3,
    exp: 10,
    belongMapId: "1",
    moveSpeed: 50,
    skillList: []
  }],
  ["1002", {
    id: "",
    prefabCharacterID: "",
    level: 1,
    name: "\u8D3C",
    activeAttack: false,
    maxHealth: 100,
    attackPower: 3,
    defensePower: 3,
    exp: 10,
    belongMapId: "1",
    moveSpeed: 50,
    skillList: []
  }]
]));

// JavaScripts/Config/SkillConfig.ts
var SkillConfig_exports = {};
__export(SkillConfig_exports, {
  default: () => SkillConfig
});
var SkillConfig = class {
  static GetById(skillID) {
    this.allBasicSkill.forEach((basicSkill) => {
      if (basicSkill.id == skillID)
        return basicSkill;
    });
  }
};
__publicField(SkillConfig, "allBasicSkill", [
  {
    id: "1001",
    name: "\u51B2\u950B",
    type: 0,
    attach: "character",
    damageType: "collision",
    collisionShape: "box",
    collisionSize: new Vector(1, 1, 1),
    damage: 1,
    moveDirection: "",
    moveSpeed: ""
  },
  {
    id: "1001",
    name: "\u51B2\u950B",
    type: 0,
    attach: "character",
    damageType: "collision",
    collisionShape: "box",
    collisionSize: new Vector(1, 1, 1),
    damage: 1,
    moveDirection: "",
    moveSpeed: ""
  }
]);

// JavaScripts/Config/TS_Use.ts
var TS_Use_exports = {};
__export(TS_Use_exports, {
  default: () => TS_Use
});
var TS_Use = class extends Core.Script {
};
TS_Use = __decorateClass([
  Core.Class
], TS_Use);

// JavaScripts/Config/TaskConfig.ts
var TaskConfig_exports = {};
__export(TaskConfig_exports, {
  default: () => TaskConfig
});
var TaskConfig = class {
};
__publicField(TaskConfig, "taskList", /* @__PURE__ */ new Map([
  ["1001", {
    id: "1001",
    name: "\u666E\u901A\u602A\u7269",
    description: "\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4EFB\u52A1",
    enemyID: "1001",
    killNumber: 5
  }],
  ["1002", {
    id: "1002",
    name: "\u666E\u901A\u602A\u7269",
    description: "\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4EFB\u52A1",
    enemyID: "1002",
    killNumber: 5
  }],
  ["1003", {
    id: "1003",
    name: "\u666E\u901A\u602A\u7269",
    description: "\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4EFB\u52A1",
    enemyID: "1002",
    killNumber: 5
  }],
  ["1004", {
    id: "1004",
    name: "\u666E\u901A\u602A\u7269",
    description: "\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4EFB\u52A1",
    enemyID: "1002",
    killNumber: 5
  }]
]));

// JavaScripts/DefaultUI.ts
var DefaultUI_exports = {};
__export(DefaultUI_exports, {
  default: () => UIDefault
});
var UIDefault = class extends UI.UIBehavior {
  Character;
  resolveString(assetIds) {
    let assetIdArray = new Array();
    let assetId = "";
    let s = assetIds.split("");
    for (let a of s) {
      if (a == ",") {
        assetIdArray.push(assetId);
        assetId = "";
      } else {
        assetId += a;
      }
    }
    if (assetId) {
      assetIdArray.push(assetId);
    }
    return assetIdArray;
  }
  initAssets(assetIds) {
    let assetIdArray = this.resolveString(assetIds);
    for (let element of assetIdArray) {
      Util.AssetUtil.asyncDownloadAsset(element);
    }
  }
  onStart() {
    this.initAssets("95777,61245");
    this.canUpdate = false;
    const JumpBtn = this.uiWidgetBase.findChildByPath("RootCanvas/Button_Jump");
    const AttackBtn = this.uiWidgetBase.findChildByPath("RootCanvas/Button_Attack");
    JumpBtn.onPressed.add(() => {
      if (this.Character) {
        this.Character.jump();
      } else {
        Gameplay.asyncGetCurrentPlayer().then((player) => {
          this.Character = player.character;
          this.Character.jump();
        });
      }
    });
    AttackBtn.onPressed.add(() => {
      Gameplay.asyncGetCurrentPlayer().then((player) => {
        this.Character = player.character;
        let anim1 = player.character.loadAnimation("61245");
        anim1.slot = Gameplay.AnimSlot.Upper;
        if (anim1.isPlaying) {
          return;
        } else {
          anim1.play();
        }
      });
    });
  }
  onAdded() {
  }
  onRemoved() {
  }
  onDestroy() {
  }
};
UIDefault = __decorateClass([
  UI.UICallOnly("")
], UIDefault);

// JavaScripts/GameMain.ts
var GameMain_exports = {};
__export(GameMain_exports, {
  default: () => GameMain
});

// JavaScripts/ModuleC/AssetLoadModuleC.ts
var AssetLoadModuleC_exports = {};
__export(AssetLoadModuleC_exports, {
  default: () => AssetLoadModuleC
});
var _AssetLoadModuleC = class {
  static GetInstance() {
    return this._instance;
  }
  Init() {
    console.log("\u5F00\u59CB\u52A0\u8F7D\u52A8\u753B\u8D44\u6E90\u4FE1\u606F");
    GameAssetsConfig.animationAssets.forEach((value, key) => {
      Util.AssetUtil.asyncDownloadAsset(value.assetID).then((downResult) => {
        if (downResult)
          console.log("\u52A0\u8F7D\u52A8\u753B\u8D44\u6E90\u4FE1\u606F\u6210\u529F\uFF1A" + value.assetID);
        else
          console.log("\u52A0\u8F7D\u52A8\u753B\u8D44\u6E90\u4FE1\u606F\u5931\u8D25\uFF1A" + value.assetID);
      });
    });
  }
};
var AssetLoadModuleC = _AssetLoadModuleC;
__publicField(AssetLoadModuleC, "_instance", new _AssetLoadModuleC());

// JavaScripts/ModuleC/PlayerModuleC.ts
var PlayerModuleC_exports = {};
__export(PlayerModuleC_exports, {
  default: () => PlayerModuleC
});
var _PlayerModuleC = class {
  static GetInstance() {
    return this._instance;
  }
  Init() {
    Events.addServerListener("GetPlayerInfo", (playerInfoStr) => {
      console.log("\u63A5\u6536\u5230\u73A9\u5BB6\u4FE1\u606F");
      _PlayerModuleC.playerInfo = JSON.parse(playerInfoStr);
      Events.dispatchLocal("SetLocalBasicUI");
    });
    if (_PlayerModuleC.playerInfo == null) {
      console.log("\u5BA2\u6237\u7AEF\u52A0\u8F7D\u73A9\u5BB6\u4FE1\u606F");
      Events.dispatchToServer("GetPlayerInfo");
    }
  }
  GetRemainPower() {
    let playerInfo = _PlayerModuleC.playerInfo;
    return _PlayerModuleC.playerInfo.level * 4 - playerInfo.meleePower - playerInfo.fruitPower - playerInfo.swordPower - playerInfo.defensePower;
  }
  GetPlayerInfo() {
  }
};
var PlayerModuleC = _PlayerModuleC;
__publicField(PlayerModuleC, "_instance", new _PlayerModuleC());
__publicField(PlayerModuleC, "playerInfo");

// JavaScripts/ModuleS/EnemyAIModule.ts
var EnemyAIModule_exports = {};
__export(EnemyAIModule_exports, {
  default: () => EnemyAIModule
});

// JavaScripts/entity/EnemyInfo.ts
var EnemyInfo_exports = {};
__export(EnemyInfo_exports, {
  default: () => EnemyInfo
});

// JavaScripts/entity/BasicEnemyInfo.ts
var BasicEnemyInfo_exports = {};
__export(BasicEnemyInfo_exports, {
  default: () => BasicEnemyInfo
});
var BasicEnemyInfo = class {
  id = "";
  prefabCharacterID;
  level;
  name = "";
  activeAttack = false;
  maxHealth;
  attackPower;
  defensePower;
  exp;
  belongMapId;
  moveSpeed = 0;
  skillList;
};

// JavaScripts/entity/EnemyInfo.ts
var EnemyInfo = class extends BasicEnemyInfo {
  hatePlayer = null;
  runStatus = "idle";
  curHealth;
  moveDirection;
  curWorldPosition;
  spawnWorldPosition;
  respawnInterval = 10;
  curSkillkID;
};

// JavaScripts/ModuleS/AttackModule.ts
var AttackModule_exports = {};
__export(AttackModule_exports, {
  default: () => AttackModule
});

// JavaScripts/entity/PlayerInfo.ts
var PlayerInfo_exports = {};
__export(PlayerInfo_exports, {
  default: () => PlayerInfo
});
var PlayerInfo = class {
  level = 1;
  exp = 0;
  camp = "";
  spawnLocateMap = "";
  currentLocateMap = "";
  money = 0;
  maxHealth = 100;
  curHealth = 0;
  maxEnergy = 0;
  curEnergy = 0;
  currentTaskID = "";
  currentTaskCompletedCount = 0;
  meleePower = 0;
  defensePower = 0;
  swordPower = 0;
  fruitPower = 0;
  curUsingItemID = "";
  curEquipingItemIDList = new Array();
  itemList = new Array();
};

// JavaScripts/ModuleS/TaskModule.ts
var TaskModule_exports = {};
__export(TaskModule_exports, {
  default: () => TaskModule
});
var _TaskModule = class {
  static GetInstance() {
    return this._instance;
  }
  Init() {
    Events.addClientListener("receiveTask", (player, receiveTaskID) => {
      let resultInfo = this.receiveTask(player, receiveTaskID);
    });
  }
  CheckoutOneEnemy(playerInfo, enemyInfo) {
    try {
      if (playerInfo.currentTaskID == "") {
        return;
      }
      if (!TaskConfig.taskList.has(playerInfo.currentTaskID)) {
        return;
      }
      let taskInfo = TaskConfig.taskList.get(playerInfo.currentTaskID);
      playerInfo.exp += enemyInfo.exp;
      playerInfo.currentTaskCompletedCount += 1;
    } catch (error) {
    }
  }
  completeTask(player, taskID) {
    let playerInfo = GameDataServer.getPlayerInfo(player);
    if (playerInfo) {
    }
  }
  receiveTask(player, receiveTaskID) {
    try {
      let playerInfo = GameDataServer.getPlayerInfo(player);
      if (!playerInfo) {
        throw new Error("\u73A9\u5BB6\u4FE1\u606F\u4E0D\u5B58\u5728");
      }
      let taskInfo = TaskConfig.taskList.get(receiveTaskID);
      if (!taskInfo) {
        throw new console.error("\u4EFB\u52A1\u4FE1\u606F\u4E0D\u5B58\u5728");
      }
      let basicEnemyInfo = EnemyConfig.allEnemy.get(taskInfo.enemyID);
      if (!basicEnemyInfo) {
        throw new Error("\u9700\u8981\u9886\u53D6\u7684\u654C\u4EBA\u4E0D\u5B58\u5728");
      }
      if (playerInfo.level < basicEnemyInfo.level) {
        throw new Error("\u73A9\u5BB6\u7B49\u7EA7\u4E0D\u8DB3");
      }
      playerInfo.currentTaskID = receiveTaskID;
      playerInfo.currentTaskCompletedCount = 0;
    } catch (error) {
    }
  }
};
var TaskModule = _TaskModule;
__publicField(TaskModule, "_instance", new _TaskModule());

// JavaScripts/ModuleS/AttackModule.ts
var _AttackModule = class {
  static GetInstance() {
    return this._instance;
  }
  UseSkill(role, skillID) {
    if (role instanceof PlayerInfo) {
    } else {
    }
  }
  damageCheckout(attacker, beAttacker, skillID) {
    if (attacker instanceof EnemyInfo && beAttacker instanceof PlayerInfo) {
      let attackerObj = attacker;
      let beAttackerObj = beAttacker;
    } else if (attacker instanceof PlayerInfo && beAttacker instanceof EnemyInfo) {
      let playerInfo = attacker;
      let enemyInfo = beAttacker;
      let attackPower = 10;
      let defensePower = 5;
      if (attackPower - defensePower > enemyInfo.curHealth) {
        enemyInfo.curHealth = 0;
        TaskModule.GetInstance().CheckoutOneEnemy(playerInfo, enemyInfo);
        setTimeout(() => {
          enemyInfo.curHealth = enemyInfo.maxHealth;
        }, enemyInfo.respawnInterval * 1e3);
      }
    } else if (attacker instanceof PlayerInfo && beAttacker instanceof PlayerInfo) {
      let attackerObj = attacker;
      let beAttackerObj = beAttacker;
    }
  }
};
var AttackModule = _AttackModule;
__publicField(AttackModule, "_instance", new _AttackModule());

// JavaScripts/ModuleS/EnemyAIModule.ts
var _EnemyAIModule = class {
  allEnemyAnchoreFolder;
  static GetInstance() {
    return this._instance;
  }
  async Init() {
    await this.InitObj();
    if (SystemUtil.isServer()) {
      this.InitServerEnemy();
      this.patrolOnServer();
    } else {
      this.InitClientEnemy();
    }
  }
  patrolOnServer() {
    setInterval(() => {
      _EnemyAIModule.EnemiesPool.forEach((enemiesArray, areaName) => {
        enemiesArray.forEach((enemy, index) => {
          this.doPatrolOnServer(enemy);
        });
      });
    }, 200);
  }
  doPatrolOnServer(enemy) {
    if (enemy.runStatus == "chase" && Vector.distance(
      enemy.hatePlayer.character.worldLocation,
      enemy.curWorldPosition
    ) < EnemyConfig.attackRadius) {
      enemy.runStatus = "preAttack";
      setTimeout(() => {
        if (enemy.runStatus == "preAttack" && enemy.hatePlayer && GameDataServer.getPlayerInfo(enemy.hatePlayer) && Vector.distance(
          enemy.hatePlayer.character.worldLocation,
          enemy.curWorldPosition
        ) < EnemyConfig.attackRadius) {
          AttackModule.GetInstance().damageCheckout(enemy, enemy.hatePlayer, "");
        }
      }, 200);
    }
    if (enemy.spawnWorldPosition && Vector.distance(enemy.spawnWorldPosition, enemy.curWorldPosition) >= EnemyConfig.returnRadius) {
      enemy.moveDirection = Vector.subtract(
        enemy.spawnWorldPosition,
        enemy.curWorldPosition
      ).normalize();
    }
    if (enemy.activeAttack) {
      let nearestPlayer;
      let minDistance = 99999;
      Gameplay.getAllPlayers().forEach((player) => {
        let distance = Vector.distance(
          player.character.worldLocation,
          enemy.curWorldPosition
        );
        if (distance < minDistance && distance > EnemyConfig.minChaseRadius && distance < EnemyConfig.maxChaseRadius) {
          nearestPlayer = player;
        }
        if (nearestPlayer) {
          enemy.runStatus = "chase";
          enemy.hatePlayer = nearestPlayer;
          enemy.moveDirection = Vector.subtract(
            nearestPlayer.character.worldLocation,
            enemy.curWorldPosition
          ).normalize();
        }
      });
    }
  }
  async InitObj() {
    this.allEnemyAnchoreFolder = await Core.GameObject.asyncFind("2391765D");
  }
  InitClientEnemy() {
    this.allEnemyAnchoreFolder.getChildren().forEach((enemyArea) => {
      enemyArea.getChildren().forEach((enemySpawnPoint) => {
        let enemyInfo = new EnemyInfo();
        enemyInfo.curWorldPosition = enemySpawnPoint.worldLocation;
        console.log("\u5BA2\u6237\u7AEF\u521B\u5EFA\u654C\u4EBA\u4FE1\u606F" + JSON.stringify(enemyInfo));
        this.CreateOneEnemyModelByAreaAndSpawnPoint(enemyArea, enemySpawnPoint);
      });
    });
  }
  CreateOneEnemyModelByAreaAndSpawnPoint(enemyArea, enemySpawnPoint) {
    Core.GameObject.asyncSpawn({
      guid: EnemyConfig.allEnemy[0].prefabAssetID,
      replicates: false
    }).then((enemyPrefab) => {
      let npc = enemyPrefab.getChildByName("Character");
      console.log(npc);
      npc.worldLocation = enemySpawnPoint.worldLocation;
      let locationA = new Type.Vector(306.99, -958.06, 41);
      console.log("Move to");
      Gameplay.moveTo(npc, locationA, 3, () => {
        npc.maxWalkSpeed = 200;
        console.log("ok");
      }, () => {
        console.log("fail");
      });
    });
  }
  InitServerEnemy() {
    this.allEnemyAnchoreFolder.getChildren().forEach((enemyArea) => {
      if (!_EnemyAIModule.EnemiesPool.has(enemyArea)) {
        _EnemyAIModule.EnemiesPool.set(enemyArea, new Array());
      }
      enemyArea.getChildren().forEach((enemySpawnPoint) => {
        let enemyInfo = new EnemyInfo();
        enemyInfo.curWorldPosition = enemySpawnPoint.worldLocation;
        console.log("\u670D\u52A1\u5668\u521B\u5EFA\u654C\u4EBA\u4FE1\u606F" + JSON.stringify(enemyInfo));
        _EnemyAIModule.EnemiesPool.get(enemyArea).push(enemyInfo);
      });
    });
  }
  die() {
  }
  reSpawn() {
  }
};
var EnemyAIModule = _EnemyAIModule;
__publicField(EnemyAIModule, "_instance", new _EnemyAIModule());
__publicField(EnemyAIModule, "EnemiesPool", /* @__PURE__ */ new Map());

// JavaScripts/ModuleS/PlayerModule.ts
var PlayerModule_exports = {};
__export(PlayerModule_exports, {
  default: () => PlayerModule
});
var _PlayerModule = class {
  static GetInstance() {
    return this._instance;
  }
  Init() {
    DataStorage.setTemporaryStorage(SystemUtil.isPIE);
    Events.addPlayerJoinedListener(async (player) => {
      try {
        let retryTimes = 0;
        let loadSuccess = false;
        let playerInfo = new PlayerInfo();
        while (retryTimes < 2 && loadSuccess == false) {
          let playerDataString = await DataStorage.asyncGetPlayerData(player);
          if (playerDataString != void 0) {
            let playerData = JSON.parse(playerDataString);
            for (let attribute in playerData) {
              playerInfo[attribute] = playerData[attribute];
            }
            loadSuccess = true;
            break;
          } else {
            retryTimes++;
          }
        }
        playerInfo.maxHealth = 100;
        playerInfo.maxEnergy = 100;
        playerInfo.curHealth = playerInfo.maxHealth;
        playerInfo.curEnergy = playerInfo.maxEnergy;
        GameDataServer.playerData.set(player.getUserId(), playerInfo);
        return "SUCCESS";
      } catch (error) {
        console.log("\u83B7\u53D6\u73A9\u5BB6\u6570\u636E\u5F02\u5E38" + error);
        return error;
      }
    });
    Events.addClientListener("GetPlayerInfo", (player) => {
      console.log("\u670D\u52A1\u5668\u63A5\u6536\u73A9\u5BB6\u4FE1\u606F\u8BF7\u6C42");
      Events.dispatchToClient(player, "GetPlayerInfo", JSON.stringify(GameDataServer.getPlayerInfo(player)));
    });
    Events.addPlayerLeftListener((player) => {
      this.StorePlayerData(player);
      GameDataServer.playerData.delete(player.getUserId());
    });
    TimeUtil.setInterval(() => {
      Gameplay.getAllPlayers().forEach((player) => {
        this.StorePlayerData(player);
      });
    }, 25);
    Events.addClientListener("AddBasicAttribute", (player, attributeName, addValue) => {
      try {
        let playerInfo = GameDataServer.getPlayerInfo(player);
        if (!playerInfo) {
          throw new Error("\u73A9\u5BB6\u4FE1\u606F\u4E0D\u5B58\u5728");
        }
        if (playerInfo[attributeName] == null) {
          throw new Error("\u5C5E\u6027\u540D" + attributeName + "\u4E0D\u5B58\u5728\uFF01");
        }
        let remainPowerPoints = playerInfo.level * 4 - playerInfo.meleePower - playerInfo.swordPower - playerInfo.fruitPower - playerInfo.defensePower;
        if (remainPowerPoints <= 0) {
          throw new Error("\u73A9\u5BB6\u5C5E\u6027\u70B9\u4E0D\u8DB3");
        }
        playerInfo[attributeName] = playerInfo[attributeName] + addValue;
      } catch (error) {
        console.error("AddBasicAttribute Error:" + error);
      }
    });
  }
  UpdateAttribute(player, attributeName, newValue) {
    let playerInfo = GameDataServer.getPlayerInfo(player);
    if (playerInfo) {
      if (playerInfo[attributeName] == null) {
        throw new Error("\u5C5E\u6027\u540D" + attributeName + "\u4E0D\u5B58\u5728\uFF01");
      }
      playerInfo[attributeName] = newValue;
    }
  }
  AddAttribute(player, attributeName, addValue) {
    let playerInfo = GameDataServer.getPlayerInfo(player);
    if (playerInfo) {
      if (playerInfo[attributeName] == null) {
        throw new Error("\u5C5E\u6027\u540D" + attributeName + "\u4E0D\u5B58\u5728\uFF01");
      }
      playerInfo[attributeName] = playerInfo[attributeName] + addValue;
    }
    Events.dispatchToClient;
  }
  SwitchEquipSkill(player) {
  }
  EquipSkill(player) {
  }
  UnEquipSkill(player) {
  }
  async StorePlayerData(player) {
    if (player == null) {
      return;
    }
    if (GameDataServer.getPlayerInfo(player) == null) {
      GameDataServer.playerData.delete(player.getUserId());
      return;
    }
    let retryTimes = 0;
    let success = false;
    while (!success && retryTimes <= 3) {
      let playerInfo = GameDataServer.getPlayerInfo(player);
      if (playerInfo) {
        let playerStoreStr = JSON.stringify(playerInfo);
        if (playerStoreStr == null || playerStoreStr == "") {
          continue;
        }
        let storeResultCode = await DataStorage.asyncSetPlayerData(player, playerStoreStr);
        if (storeResultCode == DataStorage.DataStorageResultCode.Success) {
          console.log("\u5B58\u50A8\u73A9\u5BB6\u6570\u636E\u6210\u529F" + storeResultCode);
          return "SUCCESS";
        } else {
          console.log("\u5B58\u50A8\u5931\u8D25" + storeResultCode);
          retryTimes++;
        }
      } else {
        console.log("\u73A9\u5BB6\u4E0D\u5B58\u5728\uFF1A " + player.getUserId() + " end");
      }
      retryTimes++;
    }
  }
};
var PlayerModule = _PlayerModule;
__publicField(PlayerModule, "_instance", new _PlayerModule());

// JavaScripts/UI/MainUI.ts
var MainUI_exports = {};
__export(MainUI_exports, {
  default: () => MainUI
});

// JavaScripts/ui-generate/MainUI_generate.ts
var MainUI_generate_exports = {};
__export(MainUI_generate_exports, {
  default: () => MainUI_Generate
});
var MainUI_Generate = class extends UI.UIBehavior {
  healthBar = void 0;
  energyBar = void 0;
  healthText = void 0;
  energyText = void 0;
  levelText = void 0;
  healthBar_1 = void 0;
  levelText_1 = void 0;
  monetText = void 0;
  basicDataBtn = void 0;
  itemBtn = void 0;
  shopBtn = void 0;
  closeBtn = void 0;
  onAwake() {
  }
};
__decorateClass([
  UI.UIMarkPath("RootCanvas/healthBar")
], MainUI_Generate.prototype, "healthBar", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/energyBar")
], MainUI_Generate.prototype, "energyBar", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/healthText")
], MainUI_Generate.prototype, "healthText", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/energyText")
], MainUI_Generate.prototype, "energyText", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/levelText")
], MainUI_Generate.prototype, "levelText", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/healthBar_1")
], MainUI_Generate.prototype, "healthBar_1", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/levelText_1")
], MainUI_Generate.prototype, "levelText_1", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/monetText")
], MainUI_Generate.prototype, "monetText", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/basicDataBtn")
], MainUI_Generate.prototype, "basicDataBtn", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/itemBtn")
], MainUI_Generate.prototype, "itemBtn", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/shopBtn")
], MainUI_Generate.prototype, "shopBtn", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/closeBtn")
], MainUI_Generate.prototype, "closeBtn", 2);
MainUI_Generate = __decorateClass([
  UI.UICallOnly("UI/MainUI.ui")
], MainUI_Generate);

// JavaScripts/UI/MainUI.ts
var MainUI = class extends MainUI_Generate {
  onStart() {
    this.canUpdate = false;
    this.layer = UI.UILayerMiddle;
    Events.addLocalListener("SetLocalBasicUI", () => {
      let playerInfo = PlayerModuleC.playerInfo;
      this.levelText.text = playerInfo.level.toString() + "\u7EA7";
      this.monetText.text = "\uFFE5" + playerInfo.money.toString();
      this.healthText.text = playerInfo.curHealth + "/" + playerInfo.maxHealth;
      this.energyText.text = playerInfo.curEnergy + "/" + playerInfo.maxEnergy;
      this.healthBar.currentValue = playerInfo.curHealth / playerInfo.maxHealth;
      this.energyBar.currentValue = playerInfo.curEnergy / playerInfo.maxEnergy;
      console.log("\u8BBE\u7F6E\u73A9\u5BB6\u5F53\u524D\u4FE1\u606F\u6210\u529F:" + PlayerModuleC.playerInfo);
    });
    this.basicDataBtn.onClicked.add(() => {
    });
    this.itemBtn.onClicked.add(() => {
    });
    this.shopBtn.onClicked.add(() => {
    });
    this.closeBtn.onClicked.add(() => {
    });
  }
  onAdded() {
  }
  onRemoved() {
  }
  onDestroy() {
  }
};

// JavaScripts/GameMain.ts
var GameMain = class extends Core.Script {
  onStart() {
    if (SystemUtil.isServer()) {
      PlayerModule.GetInstance().Init();
      this.useUpdate = true;
      console.log(12345);
      Events.addPlayerJoinedListener((player) => {
        setTimeout(() => {
          player.character.playAnimation(GameAssetsConfig.animationAssets.get("1001").assetID, 1, 1);
          player.character.addImpulse(new Vector(0, -2e4, 0), true);
        }, 2e3);
      });
      Gameplay.getAllPlayers().forEach((player) => {
      });
    } else {
      let mainUI = UI.UIManager.instance.getUI(MainUI);
      PlayerModuleC.GetInstance().Init();
      AssetLoadModuleC.GetInstance().Init();
      this.characterDash();
    }
  }
  characterDash() {
    console.log("characterDash");
    let player = Gameplay.getCurrentPlayer();
    let centerLocation = Gameplay.getSightBeadLocation();
  }
  onUpdate(dt) {
    EnemyAIModule.EnemiesPool.forEach((enemiesArray, areaName) => {
      enemiesArray.forEach((enemy, index) => {
        if (enemy.moveDirection) {
          enemy.curWorldPosition = Vector.multiply(enemy.moveDirection, enemy.moveSpeed);
        }
      });
    });
  }
  onDestroy() {
  }
};
GameMain = __decorateClass([
  Core.Class
], GameMain);

// JavaScripts/ModuleS/EquipModuleS.ts
var EquipModuleS_exports = {};
__export(EquipModuleS_exports, {
  default: () => EquipModuleS
});
var _EquipModuleS = class {
  static GetInstance() {
    return this._instance;
  }
  Init() {
  }
  SwitchUsingEquipmentItem(player, equipItemID) {
    let playerInfo = GameDataServer.getPlayerInfo(player);
    if (!playerInfo) {
      return;
    }
    if (playerInfo.curUsingItemID == "") {
      this.Equip(player, equipItemID);
    } else if (playerInfo.curUsingItemID == equipItemID) {
      this.UnEquip(player, playerInfo.curUsingItemID);
    } else if (playerInfo.curUsingItemID != "" && playerInfo.curUsingItemID != equipItemID) {
      this.UnEquip(player, playerInfo.curUsingItemID);
      this.Equip(player, equipItemID);
    }
  }
  UnEquip(player, curUsingItemID) {
    let playerInfo = GameDataServer.getPlayerInfo(player);
    if (playerInfo) {
      playerInfo.curUsingItemID = "";
    }
  }
  Equip(player, equipItemID) {
    let playerInfo = GameDataServer.getPlayerInfo(player);
    if (playerInfo) {
      playerInfo.curUsingItemID = equipItemID;
    }
  }
};
var EquipModuleS = _EquipModuleS;
__publicField(EquipModuleS, "_instance", new _EquipModuleS());

// JavaScripts/ModuleS/SkillModule.ts
var SkillModule_exports = {};
__export(SkillModule_exports, {
  default: () => SkillModule
});
var _SkillModule = class {
  static GetInstance() {
    return this._instance;
  }
  static GenerateSkill(player, skillInfo) {
  }
};
var SkillModule = _SkillModule;
__publicField(SkillModule, "_instance", new _SkillModule());

// JavaScripts/NPC.ts
var NPC_exports = {};
__export(NPC_exports, {
  default: () => NPC
});
var NPC = class extends Core.Script {
  async onStart() {
  }
  onUpdate(dt) {
  }
  onDestroy() {
  }
};
NPC = __decorateClass([
  Core.Class
], NPC);

// JavaScripts/UI/BasicDataUI.ts
var BasicDataUI_exports = {};
__export(BasicDataUI_exports, {
  default: () => BasicDataUI
});

// JavaScripts/ui-generate/BasicDataUI_generate.ts
var BasicDataUI_generate_exports = {};
__export(BasicDataUI_generate_exports, {
  default: () => BasicDataUI_Generate
});
var BasicDataUI_Generate = class extends UI.UIBehavior {
  meleePowerText = void 0;
  defensePowerText = void 0;
  swordPowerText = void 0;
  fruitPowerText = void 0;
  addMeleeBtn = void 0;
  addDefenseBtn = void 0;
  addSwordBtn = void 0;
  addFruitBtn = void 0;
  onAwake() {
  }
};
__decorateClass([
  UI.UIMarkPath("RootCanvas/meleePowerText")
], BasicDataUI_Generate.prototype, "meleePowerText", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/defensePowerText")
], BasicDataUI_Generate.prototype, "defensePowerText", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/swordPowerText")
], BasicDataUI_Generate.prototype, "swordPowerText", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/fruitPowerText")
], BasicDataUI_Generate.prototype, "fruitPowerText", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/addMeleeBtn")
], BasicDataUI_Generate.prototype, "addMeleeBtn", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/addDefenseBtn")
], BasicDataUI_Generate.prototype, "addDefenseBtn", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/addSwordBtn")
], BasicDataUI_Generate.prototype, "addSwordBtn", 2);
__decorateClass([
  UI.UIMarkPath("RootCanvas/addFruitBtn")
], BasicDataUI_Generate.prototype, "addFruitBtn", 2);
BasicDataUI_Generate = __decorateClass([
  UI.UICallOnly("UI/BasicDataUI.ui")
], BasicDataUI_Generate);

// JavaScripts/UI/BasicDataUI.ts
var BasicDataUI = class extends BasicDataUI_Generate {
  onStart() {
    this.canUpdate = false;
    this.layer = UI.UILayerMiddle;
    let addBtnList = [
      { btnUI: this.addMeleeBtn, attributeName: "meleePower" },
      { btnUI: this.addSwordBtn, attributeName: "swordPower" },
      { btnUI: this.addFruitBtn, attributeName: "fruitPower" },
      { btnUI: this.addDefenseBtn, attributeName: "defensePower" }
    ];
    addBtnList.forEach((info) => {
      info.btnUI.onClicked.add(() => {
        try {
          let remainPower = PlayerModuleC.GetInstance().GetRemainPower();
          if (remainPower <= 0) {
            console.log("\u89D2\u8272\u80FD\u529B\u70B9\u4E0D\u8DB3");
            return;
          }
          PlayerModuleC.playerInfo[info.attributeName] -= 1;
          this[info.attributeName + "Text"].Text = PlayerModuleC.playerInfo[info.attributeName];
          Events.dispatchToServer("AddBasicAttribute", info.attributeName, 1);
        } catch (error) {
          console.error("\u6D88\u8017\u80FD\u529B\u70B9\u9519\u8BEF\uFF1A" + error);
        }
      });
    });
  }
  onAdded() {
  }
  onRemoved() {
  }
  onDestroy() {
  }
};

// JavaScripts/entity/Item.ts
var Item_exports = {};
__export(Item_exports, {
  default: () => Item
});
var Item = class {
};

// JavaScripts/entity/ResultInfo.ts
var ResultInfo_exports = {};
__export(ResultInfo_exports, {
  default: () => ResultInfo
});
var ResultInfo = class extends Core.Script {
  onStart() {
  }
  onUpdate(dt) {
  }
  onDestroy() {
  }
};
ResultInfo = __decorateClass([
  Core.Class
], ResultInfo);

// JavaScripts/entity/SkillInfo.ts
var SkillInfo_exports = {};
__export(SkillInfo_exports, {
  default: () => SkillInfo
});
var SkillInfo = class {
};

// JavaScripts/entity/TaskInfo.ts
var TaskInfo_exports = {};
__export(TaskInfo_exports, {
  default: () => TaskInfo
});
var TaskInfo = class {
  id;
  name;
  description;
  enemyID;
  killNumber;
};

// JavaScripts/ui-generate/DefaultUI_generate.ts
var DefaultUI_generate_exports = {};
__export(DefaultUI_generate_exports, {
  default: () => DefaultUI_Generate
});
var DefaultUI_Generate = class extends UI.UIBehavior {
  onAwake() {
  }
};
DefaultUI_Generate = __decorateClass([
  UI.UICallOnly("UI/DefaultUI.ui")
], DefaultUI_Generate);

// JavaScripts/ui-generate/TestUI_generate.ts
var TestUI_generate_exports = {};
__export(TestUI_generate_exports, {
  default: () => TestUI_Generate
});
var TestUI_Generate = class extends UI.UIBehavior {
  onAwake() {
  }
};
TestUI_Generate = __decorateClass([
  UI.UICallOnly("UI/TestUI.ui")
], TestUI_Generate);

// <stdin>
var foreign31 = __toESM(require_build());
var MWModuleMap = {
  "JavaScripts/Assets/GameAssetsConfig": GameAssetsConfig_exports,
  "JavaScripts/Cache/GameDataServer": GameDataServer_exports,
  "JavaScripts/Config/EnemyConfig": EnemyConfig_exports,
  "JavaScripts/Config/SkillConfig": SkillConfig_exports,
  "JavaScripts/Config/TS_Use": TS_Use_exports,
  "JavaScripts/Config/TaskConfig": TaskConfig_exports,
  "JavaScripts/DefaultUI": DefaultUI_exports,
  "JavaScripts/GameMain": GameMain_exports,
  "JavaScripts/ModuleC/AssetLoadModuleC": AssetLoadModuleC_exports,
  "JavaScripts/ModuleC/PlayerModuleC": PlayerModuleC_exports,
  "JavaScripts/ModuleS/AttackModule": AttackModule_exports,
  "JavaScripts/ModuleS/EnemyAIModule": EnemyAIModule_exports,
  "JavaScripts/ModuleS/EquipModuleS": EquipModuleS_exports,
  "JavaScripts/ModuleS/PlayerModule": PlayerModule_exports,
  "JavaScripts/ModuleS/SkillModule": SkillModule_exports,
  "JavaScripts/ModuleS/TaskModule": TaskModule_exports,
  "JavaScripts/NPC": NPC_exports,
  "JavaScripts/UI/BasicDataUI": BasicDataUI_exports,
  "JavaScripts/UI/MainUI": MainUI_exports,
  "JavaScripts/entity/BasicEnemyInfo": BasicEnemyInfo_exports,
  "JavaScripts/entity/EnemyInfo": EnemyInfo_exports,
  "JavaScripts/entity/Item": Item_exports,
  "JavaScripts/entity/PlayerInfo": PlayerInfo_exports,
  "JavaScripts/entity/ResultInfo": ResultInfo_exports,
  "JavaScripts/entity/SkillInfo": SkillInfo_exports,
  "JavaScripts/entity/TaskInfo": TaskInfo_exports,
  "JavaScripts/ui-generate/BasicDataUI_generate": BasicDataUI_generate_exports,
  "JavaScripts/ui-generate/DefaultUI_generate": DefaultUI_generate_exports,
  "JavaScripts/ui-generate/MainUI_generate": MainUI_generate_exports,
  "JavaScripts/ui-generate/TestUI_generate": TestUI_generate_exports,
  "build": foreign31
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnVpbGQudHMiLCAiPHN0ZGluPiIsICJKYXZhU2NyaXB0cy9Bc3NldHMvR2FtZUFzc2V0c0NvbmZpZy50cyIsICJKYXZhU2NyaXB0cy9DYWNoZS9HYW1lRGF0YVNlcnZlci50cyIsICJKYXZhU2NyaXB0cy9Db25maWcvRW5lbXlDb25maWcudHMiLCAiSmF2YVNjcmlwdHMvQ29uZmlnL1NraWxsQ29uZmlnLnRzIiwgIkphdmFTY3JpcHRzL0NvbmZpZy9UU19Vc2UudHMiLCAiSmF2YVNjcmlwdHMvQ29uZmlnL1Rhc2tDb25maWcudHMiLCAiSmF2YVNjcmlwdHMvRGVmYXVsdFVJLnRzIiwgIkphdmFTY3JpcHRzL0dhbWVNYWluLnRzIiwgIkphdmFTY3JpcHRzL01vZHVsZUMvQXNzZXRMb2FkTW9kdWxlQy50cyIsICJKYXZhU2NyaXB0cy9Nb2R1bGVDL1BsYXllck1vZHVsZUMudHMiLCAiSmF2YVNjcmlwdHMvTW9kdWxlUy9FbmVteUFJTW9kdWxlLnRzIiwgIkphdmFTY3JpcHRzL2VudGl0eS9FbmVteUluZm8udHMiLCAiSmF2YVNjcmlwdHMvZW50aXR5L0Jhc2ljRW5lbXlJbmZvLnRzIiwgIkphdmFTY3JpcHRzL01vZHVsZVMvQXR0YWNrTW9kdWxlLnRzIiwgIkphdmFTY3JpcHRzL2VudGl0eS9QbGF5ZXJJbmZvLnRzIiwgIkphdmFTY3JpcHRzL01vZHVsZVMvVGFza01vZHVsZS50cyIsICJKYXZhU2NyaXB0cy9Nb2R1bGVTL1BsYXllck1vZHVsZS50cyIsICJKYXZhU2NyaXB0cy9VSS9NYWluVUkudHMiLCAiSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvTWFpblVJX2dlbmVyYXRlLnRzIiwgIkphdmFTY3JpcHRzL01vZHVsZVMvRXF1aXBNb2R1bGVTLnRzIiwgIkphdmFTY3JpcHRzL01vZHVsZVMvU2tpbGxNb2R1bGUudHMiLCAiSmF2YVNjcmlwdHMvTlBDLnRzIiwgIkphdmFTY3JpcHRzL1VJL0Jhc2ljRGF0YVVJLnRzIiwgIkphdmFTY3JpcHRzL3VpLWdlbmVyYXRlL0Jhc2ljRGF0YVVJX2dlbmVyYXRlLnRzIiwgIkphdmFTY3JpcHRzL2VudGl0eS9JdGVtLnRzIiwgIkphdmFTY3JpcHRzL2VudGl0eS9SZXN1bHRJbmZvLnRzIiwgIkphdmFTY3JpcHRzL2VudGl0eS9Ta2lsbEluZm8udHMiLCAiSmF2YVNjcmlwdHMvZW50aXR5L1Rhc2tJbmZvLnRzIiwgIkphdmFTY3JpcHRzL3VpLWdlbmVyYXRlL0RlZmF1bHRVSV9nZW5lcmF0ZS50cyIsICJKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9UZXN0VUlfZ2VuZXJhdGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiIsICJpbXBvcnQgKiBhcyBmb3JlaWduMSBmcm9tICcuL0phdmFTY3JpcHRzL0Fzc2V0cy9HYW1lQXNzZXRzQ29uZmlnJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yIGZyb20gJy4vSmF2YVNjcmlwdHMvQ2FjaGUvR2FtZURhdGFTZXJ2ZXInO1xuaW1wb3J0ICogYXMgZm9yZWlnbjMgZnJvbSAnLi9KYXZhU2NyaXB0cy9Db25maWcvRW5lbXlDb25maWcnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjQgZnJvbSAnLi9KYXZhU2NyaXB0cy9Db25maWcvU2tpbGxDb25maWcnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjUgZnJvbSAnLi9KYXZhU2NyaXB0cy9Db25maWcvVFNfVXNlJztcbmltcG9ydCAqIGFzIGZvcmVpZ242IGZyb20gJy4vSmF2YVNjcmlwdHMvQ29uZmlnL1Rhc2tDb25maWcnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjcgZnJvbSAnLi9KYXZhU2NyaXB0cy9EZWZhdWx0VUknO1xuaW1wb3J0ICogYXMgZm9yZWlnbjggZnJvbSAnLi9KYXZhU2NyaXB0cy9HYW1lTWFpbic7XG5pbXBvcnQgKiBhcyBmb3JlaWduOSBmcm9tICcuL0phdmFTY3JpcHRzL01vZHVsZUMvQXNzZXRMb2FkTW9kdWxlQyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTAgZnJvbSAnLi9KYXZhU2NyaXB0cy9Nb2R1bGVDL1BsYXllck1vZHVsZUMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjExIGZyb20gJy4vSmF2YVNjcmlwdHMvTW9kdWxlUy9BdHRhY2tNb2R1bGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjEyIGZyb20gJy4vSmF2YVNjcmlwdHMvTW9kdWxlUy9FbmVteUFJTW9kdWxlJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xMyBmcm9tICcuL0phdmFTY3JpcHRzL01vZHVsZVMvRXF1aXBNb2R1bGVTJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xNCBmcm9tICcuL0phdmFTY3JpcHRzL01vZHVsZVMvUGxheWVyTW9kdWxlJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xNSBmcm9tICcuL0phdmFTY3JpcHRzL01vZHVsZVMvU2tpbGxNb2R1bGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE2IGZyb20gJy4vSmF2YVNjcmlwdHMvTW9kdWxlUy9UYXNrTW9kdWxlJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xNyBmcm9tICcuL0phdmFTY3JpcHRzL05QQyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTggZnJvbSAnLi9KYXZhU2NyaXB0cy9VSS9CYXNpY0RhdGFVSSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTkgZnJvbSAnLi9KYXZhU2NyaXB0cy9VSS9NYWluVUknO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIwIGZyb20gJy4vSmF2YVNjcmlwdHMvZW50aXR5L0Jhc2ljRW5lbXlJbmZvJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yMSBmcm9tICcuL0phdmFTY3JpcHRzL2VudGl0eS9FbmVteUluZm8nO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIyIGZyb20gJy4vSmF2YVNjcmlwdHMvZW50aXR5L0l0ZW0nO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIzIGZyb20gJy4vSmF2YVNjcmlwdHMvZW50aXR5L1BsYXllckluZm8nO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI0IGZyb20gJy4vSmF2YVNjcmlwdHMvZW50aXR5L1Jlc3VsdEluZm8nO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI1IGZyb20gJy4vSmF2YVNjcmlwdHMvZW50aXR5L1NraWxsSW5mbyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjYgZnJvbSAnLi9KYXZhU2NyaXB0cy9lbnRpdHkvVGFza0luZm8nO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI3IGZyb20gJy4vSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvQmFzaWNEYXRhVUlfZ2VuZXJhdGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI4IGZyb20gJy4vSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvRGVmYXVsdFVJX2dlbmVyYXRlJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yOSBmcm9tICcuL0phdmFTY3JpcHRzL3VpLWdlbmVyYXRlL01haW5VSV9nZW5lcmF0ZSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMzAgZnJvbSAnLi9KYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9UZXN0VUlfZ2VuZXJhdGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjMxIGZyb20gJy4vYnVpbGQnO1xuXG5leHBvcnQgY29uc3QgTVdNb2R1bGVNYXAgPSB7IFxuICAgICAnSmF2YVNjcmlwdHMvQXNzZXRzL0dhbWVBc3NldHNDb25maWcnOiBmb3JlaWduMSxcbiAgICAgJ0phdmFTY3JpcHRzL0NhY2hlL0dhbWVEYXRhU2VydmVyJzogZm9yZWlnbjIsXG4gICAgICdKYXZhU2NyaXB0cy9Db25maWcvRW5lbXlDb25maWcnOiBmb3JlaWduMyxcbiAgICAgJ0phdmFTY3JpcHRzL0NvbmZpZy9Ta2lsbENvbmZpZyc6IGZvcmVpZ240LFxuICAgICAnSmF2YVNjcmlwdHMvQ29uZmlnL1RTX1VzZSc6IGZvcmVpZ241LFxuICAgICAnSmF2YVNjcmlwdHMvQ29uZmlnL1Rhc2tDb25maWcnOiBmb3JlaWduNixcbiAgICAgJ0phdmFTY3JpcHRzL0RlZmF1bHRVSSc6IGZvcmVpZ243LFxuICAgICAnSmF2YVNjcmlwdHMvR2FtZU1haW4nOiBmb3JlaWduOCxcbiAgICAgJ0phdmFTY3JpcHRzL01vZHVsZUMvQXNzZXRMb2FkTW9kdWxlQyc6IGZvcmVpZ245LFxuICAgICAnSmF2YVNjcmlwdHMvTW9kdWxlQy9QbGF5ZXJNb2R1bGVDJzogZm9yZWlnbjEwLFxuICAgICAnSmF2YVNjcmlwdHMvTW9kdWxlUy9BdHRhY2tNb2R1bGUnOiBmb3JlaWduMTEsXG4gICAgICdKYXZhU2NyaXB0cy9Nb2R1bGVTL0VuZW15QUlNb2R1bGUnOiBmb3JlaWduMTIsXG4gICAgICdKYXZhU2NyaXB0cy9Nb2R1bGVTL0VxdWlwTW9kdWxlUyc6IGZvcmVpZ24xMyxcbiAgICAgJ0phdmFTY3JpcHRzL01vZHVsZVMvUGxheWVyTW9kdWxlJzogZm9yZWlnbjE0LFxuICAgICAnSmF2YVNjcmlwdHMvTW9kdWxlUy9Ta2lsbE1vZHVsZSc6IGZvcmVpZ24xNSxcbiAgICAgJ0phdmFTY3JpcHRzL01vZHVsZVMvVGFza01vZHVsZSc6IGZvcmVpZ24xNixcbiAgICAgJ0phdmFTY3JpcHRzL05QQyc6IGZvcmVpZ24xNyxcbiAgICAgJ0phdmFTY3JpcHRzL1VJL0Jhc2ljRGF0YVVJJzogZm9yZWlnbjE4LFxuICAgICAnSmF2YVNjcmlwdHMvVUkvTWFpblVJJzogZm9yZWlnbjE5LFxuICAgICAnSmF2YVNjcmlwdHMvZW50aXR5L0Jhc2ljRW5lbXlJbmZvJzogZm9yZWlnbjIwLFxuICAgICAnSmF2YVNjcmlwdHMvZW50aXR5L0VuZW15SW5mbyc6IGZvcmVpZ24yMSxcbiAgICAgJ0phdmFTY3JpcHRzL2VudGl0eS9JdGVtJzogZm9yZWlnbjIyLFxuICAgICAnSmF2YVNjcmlwdHMvZW50aXR5L1BsYXllckluZm8nOiBmb3JlaWduMjMsXG4gICAgICdKYXZhU2NyaXB0cy9lbnRpdHkvUmVzdWx0SW5mbyc6IGZvcmVpZ24yNCxcbiAgICAgJ0phdmFTY3JpcHRzL2VudGl0eS9Ta2lsbEluZm8nOiBmb3JlaWduMjUsXG4gICAgICdKYXZhU2NyaXB0cy9lbnRpdHkvVGFza0luZm8nOiBmb3JlaWduMjYsXG4gICAgICdKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9CYXNpY0RhdGFVSV9nZW5lcmF0ZSc6IGZvcmVpZ24yNyxcbiAgICAgJ0phdmFTY3JpcHRzL3VpLWdlbmVyYXRlL0RlZmF1bHRVSV9nZW5lcmF0ZSc6IGZvcmVpZ24yOCxcbiAgICAgJ0phdmFTY3JpcHRzL3VpLWdlbmVyYXRlL01haW5VSV9nZW5lcmF0ZSc6IGZvcmVpZ24yOSxcbiAgICAgJ0phdmFTY3JpcHRzL3VpLWdlbmVyYXRlL1Rlc3RVSV9nZW5lcmF0ZSc6IGZvcmVpZ24zMCxcbiAgICAgJ2J1aWxkJzogZm9yZWlnbjMxLFxufVxuIiwgIlx1RkVGRlxyXG4vKipcclxuICogXHU2RTM4XHU2MjBGXHU0RTJEXHU3Njg0XHU2MjQwXHU2NzA5XHU4RDQ0XHU2RTkwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQXNzZXRzQ29uZmlne1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjQwXHU2NzA5XHU1MkE4XHU3NTNCXHU4RDQ0XHU2RTkwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYW5pbWF0aW9uQXNzZXRzIDpNYXA8c3RyaW5nLGFueT4gPSBuZXcgTWFwPHN0cmluZyxhbnk+KFtcclxuXHJcbiAgICAgICAgW1wiMTAwMVwiLHtcclxuICAgICAgICAgICAgaWQ6XCIxMDAxXCIsXHJcbiAgICAgICAgICAgIG5hbWU6XCJcdTVERTZcdTUxQjJcdTUyM0FcIixcclxuICAgICAgICAgICAgYXNzZXRJRCA6XCIxNTEwMDdcIlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIFtcIjEwMDJcIix7XHJcbiAgICAgICAgICAgIGlkOlwiMTAwMlwiLFxyXG4gICAgICAgICAgICBuYW1lOlwiXHU1M0YzXHU1MUIyXHU1MjNBXCIsXHJcbiAgICAgICAgICAgIGFzc2V0SUQgOlwiMTUxMDA4XCJcclxuICAgICAgICB9XVxyXG5cclxuICAgIF0pXHJcbn0iLCAiXHVGRUZGaW1wb3J0IFBsYXllckluZm8gZnJvbSBcIi4uL2VudGl0eS9QbGF5ZXJJbmZvXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZURhdGFTZXJ2ZXIge1xyXG5cclxuICAgIC8vXHU3M0E5XHU1QkI2XHU0RkUxXHU2MDZGXHU3RUY0XHU2MkE0XHJcbiAgICBwdWJsaWMgc3RhdGljIHBsYXllckRhdGE6TWFwPHN0cmluZywgUGxheWVySW5mbz4gPSBuZXcgTWFwPHN0cmluZywgUGxheWVySW5mbz4oKTtcclxuICAgIC8vXHU3M0E5XHU1QkI2XHU2MjQwXHU2NzA5XHU2MkU1XHU2NzA5XHU3Njg0XHU1QkEwXHU3MjY5XHU1QkY5XHU4QzYxXHU3RUY0XHU2MkE0LCAgXHU2N0QwXHU0RTJBXHU3M0E5XHU1QkI2XHU3RUY0XHU2MkE0XHU1Rjg4XHU1OTFBXHU2RTM4XHU2MjBGXHU1QkY5XHU4QzYxXHJcbiAgICBwdWJsaWMgc3RhdGljIHBsYXllclBldEF0dGFjaERhdGE6TWFwPHN0cmluZywgc3RyaW5nW10+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZ1tdPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogIGdldFBsYXllckluZm9cclxuICAgICAgICBwbGF5ZXJJZDpzdHJpbmcgICAgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGxheWVySW5mbyhwbGF5ZXI6R2FtZXBsYXkuUGxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyRGF0YS5nZXQocGxheWVyLmdldFVzZXJJZCgpKVxyXG4gICAgfVxyXG59IiwgIlx1RkVGRmltcG9ydCBCYXNpY0VuZW15SW5mbyBmcm9tIFwiLi4vZW50aXR5L0Jhc2ljRW5lbXlJbmZvXCJcclxuaW1wb3J0IEVuZW15SW5mbyBmcm9tIFwiLi4vZW50aXR5L0VuZW15SW5mb1wiXHJcblxyXG4vKipcclxuICogXHU2NTRDXHU2NUI5XHU5MTREXHU3RjZFXHU0RkUxXHU2MDZGXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteUNvbmZpZyB7XHJcbiAgICAvL1x1NTcyOFx1OEZEOVx1NEUyQVx1ODMwM1x1NTZGNFx1OERERFx1NzlCQlx1NEU0Qlx1NTE4NVx1RkYwQ1x1NUJGOVx1NjVCOVx1NEYxQVx1OEZGRFx1NTFGQlxyXG4gICAgcHVibGljIHN0YXRpYyBtaW5DaGFzZVJhZGl1cyA9IDEwMFxyXG4gICAgcHVibGljIHN0YXRpYyBtYXhDaGFzZVJhZGl1cyA9IDIwMFxyXG4gICAgLy9cdThGREJcdTUxNjVcdTY1M0JcdTUxRkJcdTgzMDNcdTU2RjRcdThERERcdTc5QkJcclxuICAgIHB1YmxpYyBzdGF0aWMgYXR0YWNrUmFkaXVzID0gMTBcclxuICAgIC8vXHU4MUVBXHU1MkE4XHU1NkRFXHU1MzlGXHU3MEI5XHU4REREXHU3OUJCXHJcbiAgICBwdWJsaWMgc3RhdGljIHJldHVyblJhZGl1cyA9IDMwMFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2N0QwXHU0RTJBSURcdTc2ODRcdTY1NENcdTRFQkFcdTRGRTFcdTYwNkZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhbGxFbmVteTogTWFwPHN0cmluZywgQmFzaWNFbmVteUluZm8+ID0gbmV3IE1hcDxzdHJpbmcsIEJhc2ljRW5lbXlJbmZvPihbXHJcbiAgICAgICAgW1wiMTAwMVwiLCB7XHJcbiAgICAgICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgICAgICBwcmVmYWJDaGFyYWN0ZXJJRDogXCJcIixcclxuICAgICAgICAgICAgbGV2ZWw6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiXHU4RDNDXCIsXHJcbiAgICAgICAgICAgIGFjdGl2ZUF0dGFjazogZmFsc2UsXHJcbiAgICAgICAgICAgIG1heEhlYWx0aDogMTAwLFxyXG4gICAgICAgICAgICBhdHRhY2tQb3dlcjogMyxcclxuICAgICAgICAgICAgZGVmZW5zZVBvd2VyOiAzLFxyXG4gICAgICAgICAgICBleHA6IDEwLFxyXG4gICAgICAgICAgICBiZWxvbmdNYXBJZDogXCIxXCIsXHJcbiAgICAgICAgICAgIG1vdmVTcGVlZDogNTAsXHJcbiAgICAgICAgICAgIHNraWxsTGlzdDogW11cclxuICAgICAgICB9XSxcclxuICAgICAgICBbXCIxMDAyXCIsIHtcclxuICAgICAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHByZWZhYkNoYXJhY3RlcklEOiBcIlwiLFxyXG4gICAgICAgICAgICBsZXZlbDogMSxcclxuICAgICAgICAgICAgbmFtZTogXCJcdThEM0NcIixcclxuICAgICAgICAgICAgYWN0aXZlQXR0YWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgbWF4SGVhbHRoOiAxMDAsXHJcbiAgICAgICAgICAgIGF0dGFja1Bvd2VyOiAzLFxyXG4gICAgICAgICAgICBkZWZlbnNlUG93ZXI6IDMsXHJcbiAgICAgICAgICAgIGV4cDogMTAsXHJcbiAgICAgICAgICAgIGJlbG9uZ01hcElkOiBcIjFcIixcclxuICAgICAgICAgICAgbW92ZVNwZWVkOiA1MCxcclxuICAgICAgICAgICAgc2tpbGxMaXN0OiBbXVxyXG4gICAgICAgIH1dXHJcbiAgICBdKVxyXG59IiwgIlx1RkVGRlxyXG5cclxuLyoqXHJcbiAqIFx1NjI4MFx1ODBGRFx1OTE0RFx1N0Y2RVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbGxDb25maWcge1xyXG4gICAgLy9cdTYyNDBcdTY3MDlcdTYyODBcdTgwRkRcdTRGRTFcdTYwNkZcclxuICAgIHB1YmxpYyBzdGF0aWMgYWxsQmFzaWNTa2lsbDphbnkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZCA6IFwiMTAwMVwiLFxyXG4gICAgICAgICAgICBuYW1lIDogXCJcdTUxQjJcdTk1MEJcIixcclxuICAgICAgICAgICAgdHlwZSA6IDAsLy9cdTU3RkFcdTc4NDBcdThGRDFcdTYyMThcdTYyODBcdTgwRkRcclxuICAgICAgICAgICAgYXR0YWNoIDogXCJjaGFyYWN0ZXJcIiwvL1x1NjMwMlx1OEY3RFx1NTIzMFx1ODlEMlx1ODI3Mlx1NEUwQlxyXG4gICAgICAgICAgICBkYW1hZ2VUeXBlIDogXCJjb2xsaXNpb25cIiwvL1x1NEYyNFx1NUJCM1x1NUY2Mlx1NUYwRlx1NEUzQVx1NzhCMFx1NjQ5RVx1NzZEMlxyXG4gICAgICAgICAgICBjb2xsaXNpb25TaGFwZSA6IFwiYm94XCIsLy9cdTc4QjBcdTY0OUVcdTRGNTNcdTVGNjJcdTcyQjZcclxuICAgICAgICAgICAgY29sbGlzaW9uU2l6ZSA6IG5ldyBWZWN0b3IoMSwxLDEpLC8vXHU3OEIwXHU2NDlFXHU0RjUzXHU1OTI3XHU1QzBGXHJcbiAgICAgICAgICAgIGRhbWFnZSA6IDEsXHJcbiAgICAgICAgICAgIG1vdmVEaXJlY3Rpb24gOiBcIlwiLFxyXG4gICAgICAgICAgICBtb3ZlU3BlZWQgOiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkIDogXCIxMDAxXCIsXHJcbiAgICAgICAgICAgIG5hbWUgOiBcIlx1NTFCMlx1OTUwQlwiLFxyXG4gICAgICAgICAgICB0eXBlIDogMCwvL1x1NTdGQVx1Nzg0MFx1OEZEMVx1NjIxOFx1NjI4MFx1ODBGRFxyXG4gICAgICAgICAgICBhdHRhY2ggOiBcImNoYXJhY3RlclwiLC8vXHU2MzAyXHU4RjdEXHU1MjMwXHU4OUQyXHU4MjcyXHU0RTBCXHJcbiAgICAgICAgICAgIGRhbWFnZVR5cGUgOiBcImNvbGxpc2lvblwiLC8vXHU0RjI0XHU1QkIzXHU1RjYyXHU1RjBGXHU0RTNBXHU3OEIwXHU2NDlFXHU3NkQyXHJcbiAgICAgICAgICAgIGNvbGxpc2lvblNoYXBlIDogXCJib3hcIiwvL1x1NzhCMFx1NjQ5RVx1NEY1M1x1NUY2Mlx1NzJCNlxyXG4gICAgICAgICAgICBjb2xsaXNpb25TaXplIDogbmV3IFZlY3RvcigxLDEsMSksLy9cdTc4QjBcdTY0OUVcdTRGNTNcdTU5MjdcdTVDMEZcclxuICAgICAgICAgICAgZGFtYWdlIDogMSxcclxuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA6IFwiXCIsXHJcbiAgICAgICAgICAgIG1vdmVTcGVlZCA6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbiAgICAvKipcclxuICAgICAqIFx1NjgzOVx1NjM2RVx1NjI4MFx1ODBGRElEIFx1ODNCN1x1NTNENlx1NjI4MFx1ODBGRFx1NEZFMVx1NjA2RlxyXG4gICAgICogQHBhcmFtIHNraWxsSUQgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBHZXRCeUlkKHNraWxsSUQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYWxsQmFzaWNTa2lsbC5mb3JFYWNoKGJhc2ljU2tpbGwgPT4ge1xyXG4gICAgICAgICAgICBpZihiYXNpY1NraWxsLmlkID09IHNraWxsSUQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzaWNTa2lsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwgIlx1RkVGRlxyXG5AQ29yZS5DbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUU19Vc2UgZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcblxyXG4gICAgLy8gLy8gXHU0RjdGXHU3NTI4XHU4MUVBXHU1QjlBXHU0RTQ5XHU3QzdCXHU1NzhCOlxyXG4gICAgLy8gdHlwZSBEaXJlY3Rpb24gPSAndXAnIHwgJ2Rvd24nIHwgJ2xlZnQnIHwgJ3JpZ2h0J1xyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb246IERpcmVjdGlvbikge1xyXG4gICAgLy8gY29uc29sZS5sb2coZGlyZWN0aW9uKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIC8vIFx1OEMwM1x1NzUyOFx1NTFGRFx1NjU3MFx1NjVGNlx1RkYwQ1x1NEYxQVx1NjcwOVx1N0M3Qlx1NTc4Qlx1NjNEMFx1NzkzQVx1RkYxQVxyXG4gICAgLy8gY2hhbmdlRGlyZWN0aW9uKCd1cCcpXHJcblxyXG4gICAgLy8gdHlwZSBHZW5kZXIgPSAnXHU3NTM3JyB8ICdcdTU5NzMnXHJcbiAgICAvLyBsZXQgZ2VuZGVyOiBHZW5kZXIgPSAnXHU3NTM3J1xyXG4gICAgLy8gZ2VuZGVyID0gJ1x1NTk3MydcclxufSIsICJpbXBvcnQgVGFza0luZm8gZnJvbSBcIi4uL2VudGl0eS9UYXNrSW5mb1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVGQlx1NTJBMVx1OTE0RFx1N0Y2RVx1NkEyMVx1NTc1N1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0NvbmZpZyAge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdGFza0xpc3Q6TWFwPHN0cmluZywgVGFza0luZm8+ID0gbmV3IE1hcDxzdHJpbmcsIFRhc2tJbmZvPihbXHJcbiAgICAgICAgW1wiMTAwMVwiLHtcclxuICAgICAgICAgICAgaWQgOiBcIjEwMDFcIixcclxuICAgICAgICAgICAgbmFtZSA6IFwiXHU2NjZFXHU5MDFBXHU2MDJBXHU3MjY5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogXCJcdThGRDlcdTY2MkZcdTRFMDBcdTRFMkFcdTdCODBcdTUzNTVcdTc2ODRcdTRFRkJcdTUyQTFcIixcclxuICAgICAgICAgICAgZW5lbXlJRCA6IFwiMTAwMVwiLFxyXG4gICAgICAgICAgICBraWxsTnVtYmVyIDogNSxcclxuICAgICAgICB9XSxcclxuICAgICAgICBbXCIxMDAyXCIse1xyXG4gICAgICAgICAgICBpZCA6IFwiMTAwMlwiLFxyXG4gICAgICAgICAgICBuYW1lIDogXCJcdTY2NkVcdTkwMUFcdTYwMkFcdTcyNjlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBcIlx1OEZEOVx1NjYyRlx1NEUwMFx1NEUyQVx1N0I4MFx1NTM1NVx1NzY4NFx1NEVGQlx1NTJBMVwiLFxyXG4gICAgICAgICAgICBlbmVteUlEIDogXCIxMDAyXCIsXHJcbiAgICAgICAgICAgIGtpbGxOdW1iZXIgOiA1LFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIFtcIjEwMDNcIix7XHJcbiAgICAgICAgICAgIGlkIDogXCIxMDAzXCIsXHJcbiAgICAgICAgICAgIG5hbWUgOiBcIlx1NjY2RVx1OTAxQVx1NjAyQVx1NzI2OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IFwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU0RTJBXHU3QjgwXHU1MzU1XHU3Njg0XHU0RUZCXHU1MkExXCIsXHJcbiAgICAgICAgICAgIGVuZW15SUQgOiBcIjEwMDJcIixcclxuICAgICAgICAgICAga2lsbE51bWJlciA6IDUsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgW1wiMTAwNFwiLHtcclxuICAgICAgICAgICAgaWQgOiBcIjEwMDRcIixcclxuICAgICAgICAgICAgbmFtZSA6IFwiXHU2NjZFXHU5MDFBXHU2MDJBXHU3MjY5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogXCJcdThGRDlcdTY2MkZcdTRFMDBcdTRFMkFcdTdCODBcdTUzNTVcdTc2ODRcdTRFRkJcdTUyQTFcIixcclxuICAgICAgICAgICAgZW5lbXlJRCA6IFwiMTAwMlwiLFxyXG4gICAgICAgICAgICBraWxsTnVtYmVyIDogNSxcclxuICAgICAgICB9XVxyXG4gICAgXSlcclxufSIsICJcdUZFRkZAVUkuVUlDYWxsT25seSgnJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlEZWZhdWx0IGV4dGVuZHMgVUkuVUlCZWhhdmlvciB7XHJcblx0Q2hhcmFjdGVyOiBHYW1lcGxheS5DaGFyYWN0ZXI7XHJcblx0LyogXHU4OUUzXHU2NzkwXHU4RDQ0XHU2RTkwSURcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgcmVzb2x2ZVN0cmluZyhhc3NldElkczogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBhc3NldElkQXJyYXk6IHN0cmluZ1tdID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgICAgICBsZXQgYXNzZXRJZDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBsZXQgcyA9IGFzc2V0SWRzLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGEgb2Ygcykge1xyXG4gICAgICAgICAgICBpZiAoYSA9PSBcIixcIikge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRJZEFycmF5LnB1c2goYXNzZXRJZCk7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkID0gXCJcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0SWQgKz0gYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICBhc3NldElkQXJyYXkucHVzaChhc3NldElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFzc2V0SWRBcnJheTtcclxuICAgIH1cclxuXHJcblx0LyogXHU1MjFEXHU1OUNCXHU1MzE2XHU4RDQ0XHU2RTkwICovXHJcblx0cHJpdmF0ZSBpbml0QXNzZXRzKGFzc2V0SWRzOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGxldCBhc3NldElkQXJyYXkgPSB0aGlzLnJlc29sdmVTdHJpbmcoYXNzZXRJZHMpO1xyXG5cdFx0Zm9yIChsZXQgZWxlbWVudCBvZiBhc3NldElkQXJyYXkpIHtcclxuXHRcdFx0VXRpbC5Bc3NldFV0aWwuYXN5bmNEb3dubG9hZEFzc2V0KGVsZW1lbnQpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0LyoqIFx1NEVDNVx1NTcyOFx1NkUzOFx1NjIwRlx1NjVGNlx1OTVGNFx1NUJGOVx1OTc1RVx1NkEyMVx1Njc3Rlx1NUI5RVx1NEY4Qlx1OEMwM1x1NzUyOFx1NEUwMFx1NkIyMSAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKSB7XHJcblx0XHQvL1x1NTIxRFx1NTlDQlx1NTMxNlx1NTJBOFx1NzUzQlx1OEQ0NFx1NkU5MCBcclxuXHRcdHRoaXMuaW5pdEFzc2V0cyhcIjk1Nzc3LDYxMjQ1XCIpXHJcblx0XHQvL1x1OEJCRVx1N0Y2RVx1ODBGRFx1NTQyNlx1NkJDRlx1NUUyN1x1ODlFNlx1NTNEMW9uVXBkYXRlXHJcblx0XHR0aGlzLmNhblVwZGF0ZSA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHQvL1x1NjI3RVx1NTIzMFx1NUJGOVx1NUU5NFx1NzY4NFx1OERGM1x1OERDM1x1NjMwOVx1OTRBRVxyXG4gICAgICAgIGNvbnN0IEp1bXBCdG4gPSB0aGlzLnVpV2lkZ2V0QmFzZS5maW5kQ2hpbGRCeVBhdGgoJ1Jvb3RDYW52YXMvQnV0dG9uX0p1bXAnKSBhcyBVSS5CdXR0b25cclxuXHRcdGNvbnN0IEF0dGFja0J0biA9IHRoaXMudWlXaWRnZXRCYXNlLmZpbmRDaGlsZEJ5UGF0aCgnUm9vdENhbnZhcy9CdXR0b25fQXR0YWNrJykgYXMgVUkuQnV0dG9uXHJcblx0XHQvL2NvbnN0IEludGVyYWN0QnRuID0gdGhpcy51aVdpZGdldEJhc2UuZmluZENoaWxkQnlQYXRoKCdSb290Q2FudmFzL0J1dHRvbl9JbnRlcmFjdCcpIGFzIFVJLkJ1dHRvblxyXG5cdFx0XHJcblx0XHQvL1x1NzBCOVx1NTFGQlx1OERGM1x1OERDM1x1NjMwOVx1OTRBRSxcdTVGMDJcdTZCNjVcdTgzQjdcdTUzRDZcdTRFQkFcdTcyNjlcdTU0MEVcdTYyNjdcdTg4NENcdThERjNcdThEQzNcclxuICAgICAgICBKdW1wQnRuLm9uUHJlc3NlZC5hZGQoKCk9PntcclxuXHRcdFx0aWYgKHRoaXMuQ2hhcmFjdGVyKSB7XHJcblx0XHRcdFx0dGhpcy5DaGFyYWN0ZXIuanVtcCgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdEdhbWVwbGF5LmFzeW5jR2V0Q3VycmVudFBsYXllcigpLnRoZW4oKHBsYXllcikgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5DaGFyYWN0ZXIgPSBwbGF5ZXIuY2hhcmFjdGVyO1xyXG5cdFx0XHRcdFx0Ly9cdTg5RDJcdTgyNzJcdTYyNjdcdTg4NENcdThERjNcdThEQzNcdTUyOUZcdTgwRkRcclxuXHRcdFx0XHRcdHRoaXMuQ2hhcmFjdGVyLmp1bXAoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcdFxyXG5cclxuXHRcdC8vXHU3MEI5XHU1MUZCXHU2NTNCXHU1MUZCXHU2MzA5XHU5NEFFLFx1NUYwMlx1NkI2NVx1ODNCN1x1NTNENlx1NEVCQVx1NzI2OVx1NTQwRVx1NjI2N1x1ODg0Q1x1NjUzQlx1NTFGQlx1NTJBOFx1NEY1Q1xyXG4gICAgICAgIEF0dGFja0J0bi5vblByZXNzZWQuYWRkKCgpPT57XHJcblx0XHRcdFx0R2FtZXBsYXkuYXN5bmNHZXRDdXJyZW50UGxheWVyKCkudGhlbigocGxheWVyKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLkNoYXJhY3RlciA9IHBsYXllci5jaGFyYWN0ZXI7XHJcblx0XHRcdFx0XHQvL1x1OEJBOVx1NTJBOFx1NzUzQlx1NTNFQVx1NTcyOFx1NEUwQVx1NTM0QVx1OEVBQlx1NjRBRFx1NjUzRVxyXG5cdFx0XHRcdFx0bGV0IGFuaW0xID0gcGxheWVyLmNoYXJhY3Rlci5sb2FkQW5pbWF0aW9uKFwiNjEyNDVcIik7XHJcblx0XHRcdFx0XHRhbmltMS5zbG90ID0gR2FtZXBsYXkuQW5pbVNsb3QuVXBwZXI7XHJcblx0XHRcdFx0XHQvL1x1ODlEMlx1ODI3Mlx1NjI2N1x1ODg0Q1x1NjUzQlx1NTFGQlx1NTJBOFx1NEY1Q1xyXG5cdFx0XHRcdFx0aWYoYW5pbTEuaXNQbGF5aW5nKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0YW5pbTEucGxheSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSlcdFxyXG5cdFx0Ly9cdTcwQjlcdTUxRkJcdTRFQTRcdTRFOTJcdTYzMDlcdTk0QUUsXHU1RjAyXHU2QjY1XHU4M0I3XHU1M0Q2XHU0RUJBXHU3MjY5XHU1NDBFXHU2MjY3XHU4ODRDXHU0RUE0XHU0RTkyXHU1MkE4XHU0RjVDXHJcbiAgICAgICAgLy8gSW50ZXJhY3RCdG4ub25QcmVzc2VkLmFkZCgoKT0+e1xyXG5cdFx0Ly8gXHRcdEdhbWVwbGF5LmFzeW5jR2V0Q3VycmVudFBsYXllcigpLnRoZW4oKHBsYXllcikgPT4ge1xyXG5cdFx0Ly8gXHRcdFx0dGhpcy5DaGFyYWN0ZXIgPSBwbGF5ZXIuY2hhcmFjdGVyO1xyXG5cdFx0Ly8gXHRcdFx0Ly9cdThCQTlcdTUyQThcdTc1M0JcdTUzRUFcdTU3MjhcdTRFMEFcdTUzNEFcdThFQUJcdTY0QURcdTY1M0VcclxuXHRcdC8vIFx0XHRcdGxldCBhbmltMiA9IHBsYXllci5jaGFyYWN0ZXIubG9hZEFuaW1hdGlvbihcIjk1Nzc3XCIpO1xyXG5cdFx0Ly8gXHRcdFx0YW5pbTIuc2xvdCA9IEdhbWVwbGF5LkFuaW1TbG90LlVwcGVyO1xyXG5cdFx0Ly8gXHRcdFx0Ly9cdTg5RDJcdTgyNzJcdTYyNjdcdTg4NENcdTRFQTRcdTRFOTJcdTUyQThcdTRGNUNcclxuXHRcdC8vIFx0XHRcdGlmKGFuaW0yLmlzUGxheWluZyl7XHJcblx0XHQvLyBcdFx0XHRcdHJldHVyblxyXG5cdFx0Ly8gXHRcdFx0fWVsc2V7XHJcblx0XHQvLyBcdFx0XHRcdGFuaW0yLnBsYXkoKTtcclxuXHRcdC8vIFx0XHRcdH1cclxuXHRcdC8vIFx0XHR9KTtcclxuXHRcdC8vfSlcdFxyXG4gICAgfVxyXG5cclxuXHQvKiogXHJcblx0ICogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENvblN0YXJ0XHU0RTRCXHU1NDBFIFxyXG5cdCAqIFx1NUJGOVx1NEU4RVVJXHU3Njg0XHU2ODM5XHU4MjgyXHU3MEI5XHU3Njg0XHU2REZCXHU1MkEwXHU2NENEXHU0RjVDXHVGRjBDXHU4RkRCXHU4ODRDXHU4QzAzXHU3NTI4XHJcblx0ICogXHU2Q0U4XHU2MTBGXHVGRjFBXHU4QkU1XHU0RThCXHU0RUY2XHU1M0VGXHU4MEZEXHU0RjFBXHU1OTFBXHU2QjIxXHU4QzAzXHU3NTI4XHJcblx0ICovXHJcblx0cHJvdGVjdGVkIG9uQWRkZWQoKSB7XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0ICogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENvbkFkZGVkXHU0RTRCXHU1NDBFXHJcblx0ICogXHU1QkY5XHU0RThFVUlcdTc2ODRcdTY4MzlcdTgyODJcdTcwQjlcdTc2ODRcdTc5RkJcdTk2NjRcdTY0Q0RcdTRGNUNcdUZGMENcdThGREJcdTg4NENcdThDMDNcdTc1MjhcclxuXHQgKiBcdTZDRThcdTYxMEZcdUZGMUFcdThCRTVcdTRFOEJcdTRFRjZcdTUzRUZcdTgwRkRcdTRGMUFcdTU5MUFcdTZCMjFcdThDMDNcdTc1MjhcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgb25SZW1vdmVkKCkge1xyXG5cdH1cclxuXHJcblx0LyoqIFxyXG5cdCogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENVSVx1NUJGOVx1OEM2MVx1NTE4RFx1ODhBQlx1OTUwMFx1NkJDMVx1NjVGNlx1OEMwM1x1NzUyOCBcclxuXHQqIFx1NkNFOFx1NjEwRlx1RkYxQVx1OEZEOVx1NEU0Qlx1NTQwRVVJXHU1QkY5XHU4QzYxXHU1REYyXHU3RUNGXHU4OEFCXHU5NTAwXHU2QkMxXHU0RTg2XHVGRjBDXHU5NzAwXHU4OTgxXHU3OUZCXHU5NjY0XHU2MjQwXHU2NzA5XHU1QkY5XHU4QkU1XHU2NTg3XHU0RUY2XHU1NDhDVUlcdTc2RjhcdTUxNzNcdTVCRjlcdThDNjFcdTRFRTVcdTUzQ0FcdTVCNTBcdTVCRjlcdThDNjFcdTc2ODRcdTVGMTVcdTc1MjhcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIFx1NkJDRlx1NEUwMFx1NUUyN1x1OEMwM1x1NzUyOFxyXG5cdCogXHU5MDFBXHU4RkM3Y2FuVXBkYXRlXHU1M0VGXHU0RUU1XHU1RjAwXHU1NDJGXHU1MTczXHU5NUVEXHU4QzAzXHU3NTI4XHJcblx0KiBkdCBcdTRFMjRcdTVFMjdcdThDMDNcdTc1MjhcdTc2ODRcdTY1RjZcdTk1RjRcdTVERUVcdUZGMENcdTZCRUJcdTc5RDJcclxuXHQqL1xyXG5cdC8vcHJvdGVjdGVkIG9uVXBkYXRlKGR0IDpudW1iZXIpIHtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU4QkJFXHU3RjZFXHU2NjNFXHU3OTNBXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25TaG93KC4uLnBhcmFtczphbnlbXSkge1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdThCQkVcdTdGNkVcdTRFMERcdTY2M0VcdTc5M0FcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkhpZGUoKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NUY1M1x1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU2NjJGXHU1M0VGXHU0RUU1XHU2M0E1XHU2NTM2XHU0RThCXHU0RUY2XHU3Njg0XHU2NUY2XHU1MDE5XHJcblx0ICogXHU2MjRCXHU2MzA3XHU2MjE2XHU1MjE5XHU5RjIwXHU2ODA3XHU4OUU2XHU1M0QxXHU0RTAwXHU2QjIxVG91Y2hcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKiBcdThGRDRcdTU2REVcdTRFOEJcdTRFRjZcdTY2MkZcdTU0MjZcdTU5MDRcdTc0MDZcdTRFODZcclxuXHQgKiBcdTU5ODJcdTY3OUNcdTU5MDRcdTc0MDZcdTRFODZcdUZGMENcdTkwQTNcdTRFNDhcdThGRDlcdTRFMkFVSVx1NzU0Q1x1OTc2Mlx1NTNFRlx1NEVFNVx1NjNBNVx1NjUzNlx1OEZEOVx1NkIyMVRvdWNoXHU1NDBFXHU3RUVEXHU3Njg0TW92ZVx1NTQ4Q0VuZFx1NEU4Qlx1NEVGNlxyXG5cdCAqIFx1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NTkwNFx1NzQwNlx1RkYwQ1x1OTBBM1x1NEU0OFx1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU1QzMxXHU2NUUwXHU2Q0Q1XHU2M0E1XHU2NTM2XHU4RkQ5XHU2QjIxVG91Y2hcdTU0MEVcdTdFRURcdTc2ODRNb3ZlXHU1NDhDRW5kXHU0RThCXHU0RUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0ZWQoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJblBvaW50ZXJFdmVudDpVSS5Qb2ludGVyRXZlbnQpIDpVSS5FdmVudFJlcGx5e1xyXG5cdC8vXHRyZXR1cm4gVUkuRXZlbnRSZXBseS51bkhhbmRsZWQ7IC8vVUkuRXZlbnRSZXBseS5oYW5kbGVkXHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjI0Qlx1NjMwN1x1NjIxNlx1NTIxOVx1OUYyMFx1NjgwN1x1NTE4RFVJXHU3NTRDXHU5NzYyXHU0RTBBXHU3OUZCXHU1MkE4XHU2NUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ub3VjaE1vdmVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5Qb2ludGVyRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSA6VUkuRXZlbnRSZXBseXtcclxuXHQvL1x0cmV0dXJuIFVJLkV2ZW50UmVwbHkudW5IYW5kbGVkOyAvL1VJLkV2ZW50UmVwbHkuaGFuZGxlZFxyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyNEJcdTYzMDdcdTYyMTZcdTUyMTlcdTlGMjBcdTY4MDdcdTc5QkJcdTVGMDBVSVx1NzU0Q1x1OTc2Mlx1NjVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIE9uVG91Y2hFbmRlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCkgOlVJLkV2ZW50UmVwbHl7XHJcblx0Ly9cdHJldHVybiBVSS5FdmVudFJlcGx5LnVuSGFuZGxlZDsgLy9VSS5FdmVudFJlcGx5LmhhbmRsZWRcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU1RjUzXHU1NzI4VUlcdTc1NENcdTk3NjJcdTRFMEFcdThDMDNcdTc1MjhkZXRlY3REcmFnL2RldGVjdERyYWdJZlByZXNzZWRcdTY1RjZcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQgKiBcdTUzRUZcdTRFRTVcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcdTYyRDZcdTYyRkRcdTRFOEJcdTRFRjZcdTc2ODRcdTVGMDBcdTU5Q0JcdTc1MUZcdTYyMTBcclxuXHQgKiBcdThGRDRcdTU2REVcdTRFMDBcdTZCMjFcdTc1MUZcdTYyMTBcdTc2ODRcdTYyRDZcdTYyRkRcdTRFOEJcdTRFRjYgbmV3RHJhZ0Ryb3BcdTUzRUZcdTRFRTVcdTc1MUZcdTYyMTBcdTRFMDBcdTZCMjFcdTRFOEJcdTRFRjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyYWdEZXRlY3RlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCk6VUkuRHJhZ0Ryb3BPcGVyYXRpb24ge1xyXG5cdC8vXHRyZXR1cm4gdGhpcy5uZXdEcmFnRHJvcChudWxsKTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU3RUNGXHU4RkM3XHU4RkQ5XHU0RTJBVUlcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ092ZXIoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50LEluRHJhZ0Ryb3BPcGVyYXRpb246VUkuRHJhZ0Ryb3BPcGVyYXRpb24pOmJvb2xlYW4ge1xyXG5cdC8vXHRyZXR1cm4gdHJ1ZTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU1NzI4XHU4RkQ5XHU0RTJBVUlcdTkxQ0FcdTY1M0VcdTVCOENcdTYyMTBcdTY1RjZcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJvcChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluRHJhZ0Ryb3BFdmVudDpVSS5Qb2ludGVyRXZlbnQsSW5EcmFnRHJvcE9wZXJhdGlvbjpVSS5EcmFnRHJvcE9wZXJhdGlvbik6Ym9vbGVhbiB7XHJcblx0Ly9cdHJldHVybiB0cnVlO1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyRDZcdTYyRkRcdTY0Q0RcdTRGNUNcdTc1MUZcdTYyMTBcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDFcdTU0MEVcdThGREJcdTUxNjVcdThGRDlcdTRFMkFVSVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ0VudGVyKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCxJbkRyYWdEcm9wT3BlcmF0aW9uOlVJLkRyYWdEcm9wT3BlcmF0aW9uKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1NzlCQlx1NUYwMFx1OEZEOVx1NEUyQVVJXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnTGVhdmUoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSB7XHJcblx0Ly99XHJcblx0XHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHVGRjBDXHU2Q0ExXHU2NzA5XHU1QjhDXHU2MjEwXHU1QjhDXHU2MjEwXHU3Njg0XHU2MkQ2XHU2MkZEXHU0RThCXHU0RUY2XHU4MDBDXHU1M0Q2XHU2RDg4XHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnQ2FuY2VsbGVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCkge1xyXG5cdC8vfVxyXG5cclxufVxyXG4iLCAiXHVGRUZGaW1wb3J0IEdhbWVBc3NldHNDb25maWcgZnJvbSBcIi4vQXNzZXRzL0dhbWVBc3NldHNDb25maWdcIjtcclxuaW1wb3J0IEFzc2V0TG9hZE1vZHVsZUMgZnJvbSBcIi4vTW9kdWxlQy9Bc3NldExvYWRNb2R1bGVDXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2R1bGVDIGZyb20gXCIuL01vZHVsZUMvUGxheWVyTW9kdWxlQ1wiO1xyXG5pbXBvcnQgRW5lbXlBSU1vZHVsZSBmcm9tIFwiLi9Nb2R1bGVTL0VuZW15QUlNb2R1bGVcIjtcclxuaW1wb3J0IFBsYXllck1vZHVsZSBmcm9tIFwiLi9Nb2R1bGVTL1BsYXllck1vZHVsZVwiO1xyXG5pbXBvcnQgTWFpblVJIGZyb20gXCIuL1VJL01haW5VSVwiO1xyXG5cclxuQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1haW4gZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcblxyXG4gICAgLyoqIFx1NUY1M1x1ODExQVx1NjcyQ1x1ODhBQlx1NUI5RVx1NEY4Qlx1NTQwRVx1RkYwQ1x1NEYxQVx1NTcyOFx1N0IyQ1x1NEUwMFx1NUUyN1x1NjZGNFx1NjVCMFx1NTI0RFx1OEMwM1x1NzUyOFx1NkI2NFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgLy9FbmVteUFJTW9kdWxlLkdldEluc3RhbmNlKCkuSW5pdCgpXHJcbiAgICAgICAgaWYgKFN5c3RlbVV0aWwuaXNTZXJ2ZXIoKSkge1xyXG5cclxuICAgICAgICAgICAgLy9cdTUyQTBcdThGN0RcdTczQTlcdTVCQjZcdTZBMjFcdTU3NTdcclxuICAgICAgICAgICAgUGxheWVyTW9kdWxlLkdldEluc3RhbmNlKCkuSW5pdCgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVzZVVwZGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coMTIzNDUpXHJcbiAgICAgICAgICAgIEV2ZW50cy5hZGRQbGF5ZXJKb2luZWRMaXN0ZW5lcigocGxheWVyKT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNoYXJhY3Rlci5wbGF5QW5pbWF0aW9uKEdhbWVBc3NldHNDb25maWcuYW5pbWF0aW9uQXNzZXRzLmdldChcIjEwMDFcIikuYXNzZXRJRCwgMSwgMSlcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY2hhcmFjdGVyLmFkZEltcHVsc2UobmV3IFZlY3RvcigwLC0yMDAwMCwwKSwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBHYW1lcGxheS5nZXRBbGxQbGF5ZXJzKCkuZm9yRWFjaCgocGxheWVyKT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy9cdTUyMURcdTU5Q0JcdTUzMTZVSVx1NzU0Q1x1OTc2MlxyXG4gICAgICAgICAgICAvL1x1NUMwNlx1NzNBOVx1NUJCNlx1NEZFMVx1NjA2Rlx1NTQwQ1x1NkI2NVx1NTIzMFVJXHU3NTRDXHU5NzYyXHJcbiAgICAgICAgICAgIGxldCBtYWluVUkgPSBVSS5VSU1hbmFnZXIuaW5zdGFuY2UuZ2V0VUkoTWFpblVJKVxyXG5cclxuICAgICAgICAgICAgLy9cdTUyMURcdTU5Q0JcdTUzMTZcdTVCQTJcdTYyMzdcdTdBRUZcdTU0MDRcdTRFMkFcdTZBMjFcdTU3NTdcclxuICAgICAgICAgICAgUGxheWVyTW9kdWxlQy5HZXRJbnN0YW5jZSgpLkluaXQoKSAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgQXNzZXRMb2FkTW9kdWxlQy5HZXRJbnN0YW5jZSgpLkluaXQoKVxyXG4gICAgICAgICAgICAvL1x1ODlEMlx1ODI3Mlx1NTFCMlx1NTIzQVx1NkQ0Qlx1OEJENVxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlckRhc2goKVxyXG4gICAgICAgICAgICAvLyBDb3JlLkdhbWVPYmplY3QuYXN5bmNGaW5kKFwiMTBEODkxM0JcIikudGhlbigoQXJlYV8xX0xpc3QpPT57XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgYWxsbnBjID0gQXJlYV8xX0xpc3QuZ2V0Q2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAvLyAgICAgYWxsbnBjLmZvckVhY2goKG5wYzpHYW1lcGxheS5OUEMpPT57XHJcbiAgICAgICAgICAgIC8vICAgICAgICBucGMucmVhZHkoKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGxvY2F0aW9uQSA9IG5ldyBUeXBlLlZlY3RvcigzMDYuOTkwLC05NTguMDYwLDQxLjAwMCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLy9cdTYyNjdcdTg4NENtb3ZldG9cdTUxRkRcdTY1NzBcclxuICAgICAgICAgICAgLy8gICAgICAgICBHYW1lcGxheS5tb3ZlVG8obnBjLCBsb2NhdGlvbkEpM1xyXG4gICAgICAgICAgICAvLyAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhcmFjdGVyRGFzaCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlckRhc2hcIilcclxuICAgICAgICBsZXQgcGxheWVyID0gR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpXHJcbiAgICAgICAgLy9cdTgzQjdcdTUzRDZcdTc2RjhcdTY3M0FcdTY1QjlcdTU0MTFcclxuICAgICAgICBsZXQgY2VudGVyTG9jYXRpb24gPSBHYW1lcGxheS5nZXRTaWdodEJlYWRMb2NhdGlvbigpXHJcbiAgICAgICAgLy9cdTUyQTBcdThGN0RcdTUyQThcdTc1M0JcdTRGRTFcdTYwNkZcclxuICAgICAgICAvLyBsZXQgVGhydXN0ZXJPRyA9IHRoaXMuZ2FtZU9iamVjdCBhcyBHYW1lcGxheS5QaHlzaWNzVGhydXN0ZXI7IC8vXHU2MzA3XHU1QjlBXHU2M0E4XHU4RkRCXHU1NjY4XHU1MjlGXHU4MEZEXHU1QkY5XHU4QzYxXHJcbiAgICAgICAgLy8gVGhydXN0ZXJPRy5zdHJlbmd0aCA9IDE2NTAwMDA7ICAvL1x1OEJCRVx1N0Y2RVx1NjNBOFx1OEZEQlx1NTI5QlxyXG4gICAgICAgIC8vIFRocnVzdGVyT0cuZW5hYmxlID0gdHJ1ZTsgICAgICAvL1x1NUYwMFx1NTQyRlx1NjNBOFx1OEZEQlx1NTY2OFxyXG4gICAgICAgIC8vIFRocnVzdGVyT0cucmVsYXRpdmVSb3RhdGlvbiA9IG5ldyBSb3RhdGlvbigwLDAsMClcclxuICAgICAgICAvL1x1ODlEMlx1ODI3Mlx1NTFCMlx1NTIzQVx1NEUwMFx1N0FFRlx1OERERFx1NzlCQlxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU0NjhcdTY3MUZcdTUxRkRcdTY1NzAgXHU2QkNGXHU1RTI3XHU2MjY3XHU4ODRDXHJcbiAgICAgKiBcdTZCNjRcdTUxRkRcdTY1NzBcdTYyNjdcdTg4NENcdTk3MDBcdTg5ODFcdTVDMDZ0aGlzLnVzZVVwZGF0ZVx1OEQ0Qlx1NTAzQ1x1NEUzQXRydWVcclxuICAgICAqIEBwYXJhbSBkdCBcdTVGNTNcdTUyNERcdTVFMjdcdTRFMEVcdTRFMEFcdTRFMDBcdTVFMjdcdTc2ODRcdTVFRjZcdThGREYgLyBcdTc5RDJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uVXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NkJDRlx1NEUwMFx1NUUyN1x1NjZGNFx1NjVCMFx1NjU0Q1x1NEVCQVx1NUI5RVx1NjVGNlx1NEY0RFx1N0Y2RVxyXG4gICAgICAgIEVuZW15QUlNb2R1bGUuRW5lbWllc1Bvb2wuZm9yRWFjaCgoZW5lbWllc0FycmF5LCBhcmVhTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBlbmVtaWVzQXJyYXkuZm9yRWFjaCgoZW5lbXksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkubW92ZURpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU1QjlFXHU2NUY2XHU2NkY0XHU2NUIwXHU2MDJBXHU3MjY5XHU1NzI4XHU2NzBEXHU1MkExXHU1NjY4XHU3Njg0XHU0RjREXHU3RjZFXHVGRjBDXHU4RkQ5XHU5MUNDXHU0RTBEXHU4QzAzXHU3NTI4YysrXHVGRjBDXHU1M0VBXHU3RUQ5XHU1QzVFXHU2MDI3XHU4RDRCXHU1MDNDXHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkuY3VyV29ybGRQb3NpdGlvbiA9IFZlY3Rvci5tdWx0aXBseShlbmVteS5tb3ZlRGlyZWN0aW9uLCBlbmVteS5tb3ZlU3BlZWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL1x1NkJDRlx1OTY5NFx1ODJFNVx1NUU3Mlx1NUUyN1x1NjI2N1x1ODg0Q1xyXG4gICAgfVxyXG4gICAgLyoqIFx1ODExQVx1NjcyQ1x1ODhBQlx1OTUwMFx1NkJDMVx1NjVGNlx1NjcwMFx1NTQwRVx1NEUwMFx1NUUyN1x1NjI2N1x1ODg0Q1x1NUI4Q1x1OEMwM1x1NzUyOFx1NkI2NFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbn0iLCAiXHVGRUZGaW1wb3J0IEdhbWVBc3NldHNDb25maWcgZnJvbSBcIi4uL0Fzc2V0cy9HYW1lQXNzZXRzQ29uZmlnXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRMb2FkTW9kdWxlQyAge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQXNzZXRMb2FkTW9kdWxlQyA9IG5ldyBBc3NldExvYWRNb2R1bGVDKCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNjdcdTg4NENcdTUyMURcdTU5Q0JcdTUzMTZcclxuICAgICAqL1xyXG4gICAgcHVibGljIEluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIC8vXHU1MkEwXHU4RjdEXHU1MkE4XHU3NTNCXHU4RDQ0XHU2RTkwXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJcdTVGMDBcdTU5Q0JcdTUyQTBcdThGN0RcdTUyQThcdTc1M0JcdThENDRcdTZFOTBcdTRGRTFcdTYwNkZcIilcclxuICAgICAgICBHYW1lQXNzZXRzQ29uZmlnLmFuaW1hdGlvbkFzc2V0cy5mb3JFYWNoKCh2YWx1ZSwga2V5KT0+e1xyXG4gICAgICAgICAgICBVdGlsLkFzc2V0VXRpbC5hc3luY0Rvd25sb2FkQXNzZXQodmFsdWUuYXNzZXRJRCkudGhlbigoZG93blJlc3VsdCk9PntcclxuICAgICAgICAgICAgICAgIGlmKGRvd25SZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTUyQTBcdThGN0RcdTUyQThcdTc1M0JcdThENDRcdTZFOTBcdTRGRTFcdTYwNkZcdTYyMTBcdTUyOUZcdUZGMUFcIiArIHZhbHVlLmFzc2V0SUQpXHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTUyQTBcdThGN0RcdTUyQThcdTc1M0JcdThENDRcdTZFOTBcdTRGRTFcdTYwNkZcdTU5MzFcdThEMjVcdUZGMUFcIiArIHZhbHVlLmFzc2V0SUQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL1x1NTJBMFx1OEY3RFx1NzI3OVx1NjU0OFx1NEZFMVx1NjA2RlxyXG5cclxuXHJcbiAgICAgICAgLy9cdTUyQTBcdThGN0RcdTU2RkVcdTcyNDdcdTRGRTFcdTYwNkZcclxuXHJcblxyXG4gICAgfVxyXG59IiwgIlx1RkVGRmltcG9ydCBNYWluVUkgZnJvbSBcIi4uL1VJL01haW5VSVwiO1xyXG5pbXBvcnQgUGxheWVySW5mbyBmcm9tIFwiLi4vZW50aXR5L1BsYXllckluZm9cIjtcclxuXHJcbi8qKlxyXG4gKiBcdTczQTlcdTVCQjZcdTVCQTJcdTYyMzdcdTdBRUZcdTZBMjFcdTU3NTdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllck1vZHVsZUMge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUGxheWVyTW9kdWxlQyA9IG5ldyBQbGF5ZXJNb2R1bGVDKCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBsYXllckluZm86UGxheWVySW5mb1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3M0E5XHU1QkI2XHU1QkEyXHU2MjM3XHU3QUVGXHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBJbml0KClcclxuICAgIHtcclxuICAgICAgICAvL1x1NjNBNVx1NTNEN1x1NzNBOVx1NUJCNlx1NEZFMVx1NjA2RlxyXG4gICAgICAgIEV2ZW50cy5hZGRTZXJ2ZXJMaXN0ZW5lcihcIkdldFBsYXllckluZm9cIiwocGxheWVySW5mb1N0cjpzdHJpbmcpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU2M0E1XHU2NTM2XHU1MjMwXHU3M0E5XHU1QkI2XHU0RkUxXHU2MDZGXCIpXHJcbiAgICAgICAgICAgIFBsYXllck1vZHVsZUMucGxheWVySW5mbyA9IEpTT04ucGFyc2UocGxheWVySW5mb1N0cikgYXMgUGxheWVySW5mb1xyXG4gICAgICAgICAgICAvL1x1NTNEMVx1OTAwMVx1NjcyQ1x1NTczMFx1NEU4Qlx1NEVGNlxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChcIlNldExvY2FsQmFzaWNVSVwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU3M0E5XHU1QkI2XHU1N0ZBXHU3ODQwXHU0RkUxXHU2MDZGXHJcbiAgICAgICAgaWYoUGxheWVyTW9kdWxlQy5wbGF5ZXJJbmZvID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NUJBMlx1NjIzN1x1N0FFRlx1NTJBMFx1OEY3RFx1NzNBOVx1NUJCNlx1NEZFMVx1NjA2RlwiKVxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hUb1NlcnZlcihcIkdldFBsYXllckluZm9cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTUyNjlcdTRGNTlcdTgwRkRcdTkxQ0ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIEdldFJlbWFpblBvd2VyKCk6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBsYXllckluZm8gPSBQbGF5ZXJNb2R1bGVDLnBsYXllckluZm9cclxuICAgICAgICByZXR1cm4gIFBsYXllck1vZHVsZUMucGxheWVySW5mby5sZXZlbCAqIDQgLSBwbGF5ZXJJbmZvLm1lbGVlUG93ZXIgLSBwbGF5ZXJJbmZvLmZydWl0UG93ZXIgLSBwbGF5ZXJJbmZvLnN3b3JkUG93ZXIgLSBwbGF5ZXJJbmZvLmRlZmVuc2VQb3dlclxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRQbGF5ZXJJbmZvKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcbn0iLCAiXHVGRUZGaW1wb3J0IEdhbWVEYXRhU2VydmVyIGZyb20gXCIuLi9DYWNoZS9HYW1lRGF0YVNlcnZlclwiO1xyXG5pbXBvcnQgRW5lbXlDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9FbmVteUNvbmZpZ1wiO1xyXG5pbXBvcnQgTlBDIGZyb20gXCIuLi9OUENcIjtcclxuaW1wb3J0IEVuZW15SW5mbyBmcm9tIFwiLi4vZW50aXR5L0VuZW15SW5mb1wiO1xyXG5pbXBvcnQgUGxheWVySW5mbyBmcm9tIFwiLi4vZW50aXR5L1BsYXllckluZm9cIjtcclxuaW1wb3J0IEF0dGFja01vZHVsZSBmcm9tIFwiLi9BdHRhY2tNb2R1bGVcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTY1NENcdTRFQkFBSVx1NkEyMVx1NTc1N1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlBSU1vZHVsZSB7XHJcblxyXG4gICAgcHVibGljIGFsbEVuZW15QW5jaG9yZUZvbGRlcjtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEVuZW15QUlNb2R1bGUgPSBuZXcgRW5lbXlBSU1vZHVsZSgpO1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogXHU1QkY5XHU4QzYxXHU2QzYwXHVGRjBDa2V5XHU2MDJBXHU3MjY5XHU2MjQwXHU1NzI4XHU1MzNBXHU1N0RGICBcclxuICAgICAqIHZhbHVlIFx1NjAyQVx1NzI2OVx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVuZW1pZXNQb29sOiBNYXA8c3RyaW5nLCBBcnJheTxFbmVteUluZm8+PiA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxFbmVteUluZm8+PigpXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgSW5pdCgpIHtcclxuICAgICAgICAvL1x1NTIxRFx1NTlDQlx1NTMxNlx1NTNEOFx1OTFDRlxyXG4gICAgICAgIGF3YWl0IHRoaXMuSW5pdE9iaigpXHJcblxyXG4gICAgICAgIC8vXHU2NzBEXHU1MkExXHU1NjY4XHU5MDNCXHU4RjkxXHJcbiAgICAgICAgaWYgKFN5c3RlbVV0aWwuaXNTZXJ2ZXIoKSkge1xyXG4gICAgICAgICAgICAvL1x1NzUxRlx1NjIxMFx1NjAyQVx1NzI2OVx1NUJGOVx1OEM2MVx1RkYwQ1x1NEUwMFx1NkJCNVx1NjVGNlx1OTVGNFx1NjI4QVx1NUY1M1x1NTI0RFx1NTczMFx1NTZGRVx1NzY4NFx1NjAyQVx1NzI2OVx1NTQwQ1x1NkI2NVx1N0VEOVx1NUY1M1x1NTI0RFx1NTMzQVx1NTdERlx1NzNBOVx1NUJCNlxyXG4gICAgICAgICAgICAvL1x1NjcwRFx1NTJBMVx1NTY2OFx1OTcwMFx1ODk4MVx1NTIxQlx1NUVGQVx1NjI0MFx1NjcwOVx1NjU0Q1x1NEVCQVx1NUJGOVx1OEM2MVxyXG4gICAgICAgICAgICB0aGlzLkluaXRTZXJ2ZXJFbmVteSgpXHJcbiAgICAgICAgICAgIC8vQUlcdTVCRkJcdThERUZcdTkwM0JcdThGOTFcclxuICAgICAgICAgICAgdGhpcy5wYXRyb2xPblNlcnZlcigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU1QkEyXHU2MjM3XHU3QUVGXHU5MDNCXHU4RjkxXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHU1QkEyXHU2MjM3XHU3QUVGXHU3NTFGXHU2MjEwXHU2MDJBXHU3MjY5XHU1QjlFXHU0RjUzXHJcbiAgICAgICAgICAgIHRoaXMuSW5pdENsaWVudEVuZW15KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBcdTY3MERcdTUyQTFcdTU2NjhcdTc2ODRcdTVCRkJcdThERUZcdTkwM0JcdThGOTFcclxuICAgICAqIFx1NkJDRjIwMG1zXHU2NzBEXHU1MkExXHU1NjY4XHU2MjQwXHU2NzA5XHU2MDJBXHU3MjY5XHU2MjY3XHU4ODRDXHU0RTBCXHU0RTAwXHU0RTJBXHU0RjREXHU3RjZFXHU3Njg0XHU4QkExXHU3Qjk3XHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcGF0cm9sT25TZXJ2ZXIoKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1OTA0RFx1NTM4Nlx1NjI0MFx1NjcwOVx1NTMzQVx1NTdERlx1NzY4NFx1NjI0MFx1NjcwOVx1NjAyQVx1NzI2OVxyXG4gICAgICAgICAgICBFbmVteUFJTW9kdWxlLkVuZW1pZXNQb29sLmZvckVhY2goKGVuZW1pZXNBcnJheSwgYXJlYU5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGVuZW1pZXNBcnJheS5mb3JFYWNoKChlbmVteSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvUGF0cm9sT25TZXJ2ZXIoZW5lbXkpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDIwMClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogXHU2N0QwXHU0RTJBXHU2NTRDXHU0RUJBXHU2MjY3XHU4ODRDXHU2NDFDXHU1QkZCXHU5MDNCXHU4RjkxXHJcbiAgICAgKiBAcGFyYW0gZW5lbXkgXHJcbiAgICAgKi9cclxuICAgIGRvUGF0cm9sT25TZXJ2ZXIoZW5lbXk6IEVuZW15SW5mbykge1xyXG5cclxuICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1NzNBOVx1NUJCNlx1NTkwNFx1NEU4RVx1OEZGRFx1NTFGQlx1NzJCNlx1NjAwMVx1RkYwQ1x1NEUxNFx1NzlCQlx1OEZGRFx1NTFGQlx1NzNBOVx1NUJCNlx1NUY4OFx1OEZEMVx1RkYwQ1x1NTIxOVx1NEUwRFx1NTE4RFx1OEZGRFx1NTFGQlx1NEU4Nlx1RkYwQ1x1OEZEQlx1NTE2NVx1NjUzQlx1NTFGQlx1NzJCNlx1NjAwMVxyXG4gICAgICAgIGlmIChlbmVteS5ydW5TdGF0dXMgPT0gXCJjaGFzZVwiXHJcbiAgICAgICAgICAgICYmIFZlY3Rvci5kaXN0YW5jZShcclxuICAgICAgICAgICAgICAgIGVuZW15LmhhdGVQbGF5ZXIuY2hhcmFjdGVyLndvcmxkTG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICBlbmVteS5jdXJXb3JsZFBvc2l0aW9uKSA8IEVuZW15Q29uZmlnLmF0dGFja1JhZGl1cykge1xyXG4gICAgICAgICAgICAvL1x1NTkwNFx1NEU4RVx1NjUzQlx1NTFGQlx1NTI0RFx1NjQ0N1x1NzJCNlx1NjAwMVx1RkYwQ1x1NkI2NFx1NjVGNlx1ODhDNVx1NTkwN1x1NTNEMVx1NTJBOFx1NjI4MFx1ODBGRFx1NjIxNlx1NjY2RVx1OTAxQVx1NjUzQlx1NTFGQlxyXG4gICAgICAgICAgICBlbmVteS5ydW5TdGF0dXMgPSBcInByZUF0dGFja1wiXHJcbiAgICAgICAgICAgIC8vL1x1NUVGNlx1NjVGNlx1NEUwMFx1NUI5QVx1NjVGNlx1OTVGNFx1RkYwQ1x1NTNEMVx1NTJBOFx1NjUzQlx1NTFGQlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU1OUNCXHU4QkExXHU3Qjk3XHU0RjI0XHU1QkIzXHVGRjBDXHU2NjZFXHU5MDFBXHU2NTNCXHU1MUZCXHVGRjBDXHU1M0VBXHU1QkY5XHU0RUM3XHU2MDY4XHU3M0E5XHU1QkI2XHU5MDIwXHU2MjEwXHU0RjI0XHU1QkIzXHJcbiAgICAgICAgICAgICAgICAvL1x1NTIyNFx1NjVBRFx1NTQ4Q1x1NzNBOVx1NUJCNlx1NzY4NFx1OERERFx1NzlCQlxyXG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LnJ1blN0YXR1cyA9PSBcInByZUF0dGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgZW5lbXkuaGF0ZVBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgICYmIEdhbWVEYXRhU2VydmVyLmdldFBsYXllckluZm8oZW5lbXkuaGF0ZVBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICAmJiBWZWN0b3IuZGlzdGFuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LmhhdGVQbGF5ZXIuY2hhcmFjdGVyLndvcmxkTG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LmN1cldvcmxkUG9zaXRpb24pIDwgRW5lbXlDb25maWcuYXR0YWNrUmFkaXVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTY1NENcdTRFQkFcdTVCRjlcdTczQTlcdTVCQjZcdTkwMjBcdTYyMTBcdTRFODZcdTRGMjRcdTVCQjNcclxuICAgICAgICAgICAgICAgICAgICBBdHRhY2tNb2R1bGUuR2V0SW5zdGFuY2UoKS5kYW1hZ2VDaGVja291dChlbmVteSwgZW5lbXkuaGF0ZVBsYXllciwgXCJcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTUyMjRcdTY1QURcdTY1NENcdTRFQkFcdTY2MkZcdTU0MjZcdTc5QkJcdTUxRkFcdTc1MUZcdTcwQjlcdTU5MkFcdThGRENcclxuICAgICAgICBpZiAoZW5lbXkuc3Bhd25Xb3JsZFBvc2l0aW9uICYmIFZlY3Rvci5kaXN0YW5jZShlbmVteS5zcGF3bldvcmxkUG9zaXRpb24sIGVuZW15LmN1cldvcmxkUG9zaXRpb24pID49IEVuZW15Q29uZmlnLnJldHVyblJhZGl1cykge1xyXG4gICAgICAgICAgICAvL1x1OEJBMVx1N0I5N1x1OEZENFx1NTZERVx1NjVCOVx1NTQxMVxyXG4gICAgICAgICAgICBlbmVteS5tb3ZlRGlyZWN0aW9uID0gVmVjdG9yLnN1YnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgZW5lbXkuc3Bhd25Xb3JsZFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgZW5lbXkuY3VyV29ybGRQb3NpdGlvblxyXG4gICAgICAgICAgICApLm5vcm1hbGl6ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU1OTgyXHU2NzlDXHU2NTRDXHU0RUJBXHU0RTNCXHU1MkE4XHU2NTNCXHU1MUZCXHVGRjBDXHU2MjdFXHU4MUVBXHU1REYxXHU3NkY4XHU1QkY5XHU4RjgzXHU4RkQxXHU3Njg0XHU3M0E5XHU1QkI2XHU0RjVDXHU0RTNBXHU0RUM3XHU2MDY4XHU1QkY5XHU4QzYxXHJcbiAgICAgICAgaWYgKGVuZW15LmFjdGl2ZUF0dGFjaykge1xyXG4gICAgICAgICAgICBsZXQgbmVhcmVzdFBsYXllcjtcclxuICAgICAgICAgICAgbGV0IG1pbkRpc3RhbmNlID0gOTk5OTlcclxuICAgICAgICAgICAgR2FtZXBsYXkuZ2V0QWxsUGxheWVycygpLmZvckVhY2goKHBsYXllcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gVmVjdG9yLmRpc3RhbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5jaGFyYWN0ZXIud29ybGRMb2NhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBlbmVteS5jdXJXb3JsZFBvc2l0aW9uKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IG1pbkRpc3RhbmNlICYmIGRpc3RhbmNlID4gRW5lbXlDb25maWcubWluQ2hhc2VSYWRpdXMgJiYgZGlzdGFuY2UgPCBFbmVteUNvbmZpZy5tYXhDaGFzZVJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5lYXJlc3RQbGF5ZXIgPSBwbGF5ZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vXHU4QkExXHU3Qjk3XHU3OUZCXHU1MkE4XHU2NUI5XHU1NDExXHJcbiAgICAgICAgICAgICAgICBpZiAobmVhcmVzdFBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15LnJ1blN0YXR1cyA9IFwiY2hhc2VcIi8vXHU4RkZEXHU4RDc2XHU3MkI2XHU2MDAxXHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdThCQkVcdTdGNkVcdTRFQzdcdTYwNjhcdTczQTlcdTVCQjZcclxuICAgICAgICAgICAgICAgICAgICBlbmVteS5oYXRlUGxheWVyID0gbmVhcmVzdFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgIGVuZW15Lm1vdmVEaXJlY3Rpb24gPSBWZWN0b3Iuc3VidHJhY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lYXJlc3RQbGF5ZXIuY2hhcmFjdGVyLndvcmxkTG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LmN1cldvcmxkUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICApLm5vcm1hbGl6ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBJbml0T2JqKCkge1xyXG4gICAgICAgIHRoaXMuYWxsRW5lbXlBbmNob3JlRm9sZGVyID0gYXdhaXQgQ29yZS5HYW1lT2JqZWN0LmFzeW5jRmluZChcIjIzOTE3NjVEXCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTVCQTJcdTYyMzdcdTdBRUZcdTYwMkFcdTcyNjlcdTRGRTFcdTYwNkZcclxuICAgICAqL1xyXG4gICAgSW5pdENsaWVudEVuZW15KCkge1xyXG4gICAgICAgIHRoaXMuYWxsRW5lbXlBbmNob3JlRm9sZGVyLmdldENoaWxkcmVuKCkuZm9yRWFjaCgoZW5lbXlBcmVhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU1NzMwXHU1NkZFXHU1MzNBXHU1N0RGXHJcbiAgICAgICAgICAgIC8vXHU2ODM5XHU2MzZFXHU1NzMwXHU1NkZFXHU1MzNBXHU1N0RGXHU1MjFCXHU1RUZBXHU2NTRDXHU2NUI5XHU2MDJBXHU3MjY5XHU0RkUxXHU2MDZGXHJcbiAgICAgICAgICAgIGVuZW15QXJlYS5nZXRDaGlsZHJlbigpLmZvckVhY2goKGVuZW15U3Bhd25Qb2ludCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZW15SW5mbzogRW5lbXlJbmZvID0gbmV3IEVuZW15SW5mbygpXHJcbiAgICAgICAgICAgICAgICBlbmVteUluZm8uY3VyV29ybGRQb3NpdGlvbiA9IGVuZW15U3Bhd25Qb2ludC53b3JsZExvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NUJBMlx1NjIzN1x1N0FFRlx1NTIxQlx1NUVGQVx1NjU0Q1x1NEVCQVx1NEZFMVx1NjA2RlwiICsgSlNPTi5zdHJpbmdpZnkoZW5lbXlJbmZvKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL1x1NTIxQlx1NUVGQVx1NjdEMFx1NEUwMFx1NEUyQVx1NTMzQVx1NTdERlx1NzY4NFx1NjAyQVx1NzI2OVxyXG4gICAgICAgICAgICAgICAgdGhpcy5DcmVhdGVPbmVFbmVteU1vZGVsQnlBcmVhQW5kU3Bhd25Qb2ludChlbmVteUFyZWEsIGVuZW15U3Bhd25Qb2ludClcclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogXHU1MjFCXHU1RUZBXHU2NTRDXHU0RUJBXHU2QTIxXHU1NzhCIFx1NjgzOVx1NjM2RVx1NjU0Q1x1NEVCQVx1NjI0MFx1NTcyOFx1NTMzQVx1NTdERlx1NTQ4Q1x1NTFGQVx1NzUxRlx1NzBCOVxyXG4gICAgICogQHBhcmFtIGVuZW15QXJlYSBcclxuICAgICAqIEBwYXJhbSBlbmVteVNwYXduUG9pbnQgXHJcbiAgICAgKi9cclxuICAgIENyZWF0ZU9uZUVuZW15TW9kZWxCeUFyZWFBbmRTcGF3blBvaW50KGVuZW15QXJlYTogYW55LCBlbmVteVNwYXduUG9pbnQ6IGFueSkge1xyXG4gICAgICAgIC8vXHU1MjFCXHU1RUZBXHU2NTRDXHU0RUJBXHU0RkUxXHU2MDZGXHJcbiAgICAgICAgQ29yZS5HYW1lT2JqZWN0LmFzeW5jU3Bhd24oe1xyXG4gICAgICAgICAgICBndWlkOiBFbmVteUNvbmZpZy5hbGxFbmVteVswXS5wcmVmYWJBc3NldElELC8vXHU2NTRDXHU0RUJBXHU4RDQ0XHU2RTkwaWRcclxuICAgICAgICAgICAgcmVwbGljYXRlczogZmFsc2VcclxuICAgICAgICB9KS50aGVuKChlbmVteVByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbnBjID0gZW5lbXlQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoXCJDaGFyYWN0ZXJcIikgYXMgR2FtZXBsYXkuTlBDXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5wYylcclxuICAgICAgICAgICAgbnBjLndvcmxkTG9jYXRpb24gPSBlbmVteVNwYXduUG9pbnQud29ybGRMb2NhdGlvblxyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25BID0gbmV3IFR5cGUuVmVjdG9yKDMwNi45OTAsIC05NTguMDYwLCA0MS4wMDApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW92ZSB0b1wiKVxyXG4gICAgICAgICAgICAvL1x1NjI2N1x1ODg0Q21vdmV0b1x1NTFGRFx1NjU3MFxyXG4gICAgICAgICAgICBHYW1lcGxheS5tb3ZlVG8obnBjLCBsb2NhdGlvbkEsIDMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5wYy5tYXhXYWxrU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbFwiKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjcwRFx1NTJBMVx1NTY2OFx1N0FFRlx1NjU0Q1x1NEVCQVx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICBJbml0U2VydmVyRW5lbXkoKSB7XHJcbiAgICAgICAgdGhpcy5hbGxFbmVteUFuY2hvcmVGb2xkZXIuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKChlbmVteUFyZWEpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFFbmVteUFJTW9kdWxlLkVuZW1pZXNQb29sLmhhcyhlbmVteUFyZWEpKSB7XHJcbiAgICAgICAgICAgICAgICBFbmVteUFJTW9kdWxlLkVuZW1pZXNQb29sLnNldChlbmVteUFyZWEsIG5ldyBBcnJheTxFbmVteUluZm8+KCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZW5lbXlBcmVhLmdldENoaWxkcmVuKCkuZm9yRWFjaCgoZW5lbXlTcGF3blBvaW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5lbXlJbmZvOiBFbmVteUluZm8gPSBuZXcgRW5lbXlJbmZvKClcclxuICAgICAgICAgICAgICAgIGVuZW15SW5mby5jdXJXb3JsZFBvc2l0aW9uID0gZW5lbXlTcGF3blBvaW50LndvcmxkTG9jYXRpb25cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU2NzBEXHU1MkExXHU1NjY4XHU1MjFCXHU1RUZBXHU2NTRDXHU0RUJBXHU0RkUxXHU2MDZGXCIgKyBKU09OLnN0cmluZ2lmeShlbmVteUluZm8pKVxyXG4gICAgICAgICAgICAgICAgLy9cdTU0MTFcdTk2QzZcdTU0MDhcdTZERkJcdTUyQTBcdTY1NENcdTRFQkFcclxuICAgICAgICAgICAgICAgIEVuZW15QUlNb2R1bGUuRW5lbWllc1Bvb2wuZ2V0KGVuZW15QXJlYSkucHVzaChlbmVteUluZm8pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjU0Q1x1NEVCQVx1ODhBQlx1NjI1M1x1NkI3QlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGllKCkge1xyXG5cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU2MDJBXHU3MjY5XHU5MUNEXHU2NUIwXHU1OTBEXHU2RDNCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZVNwYXduKCkge1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwgIlx1RkVGRmltcG9ydCBCYXNpY0VuZW15SW5mbyBmcm9tIFwiLi9CYXNpY0VuZW15SW5mb1wiXHJcblxyXG4vKipcclxuICogXHU2NTRDXHU0RUJBXHU0RkUxXHU2MDZGXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteUluZm8gZXh0ZW5kcyAgQmFzaWNFbmVteUluZm97XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTRFQzdcdTYwNjhcdTczQTlcdTVCQjZJRFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGF0ZVBsYXllcjpHYW1lcGxheS5QbGF5ZXIgPSBudWxsXHJcbiAgICAvKipcclxuICAgICAqIFx1NUY1M1x1NTI0RFx1NzNBOVx1NUJCNlx1NzY4NFx1OEZEMFx1ODg0Q1x1NzJCNlx1NjAwMVx1RkYwQ1x1NTIxRFx1NTlDQlx1NEUzQVx1OTc1OVx1NkI2Mlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcnVuU3RhdHVzOnN0cmluZyA9IFwiaWRsZVwiXHJcbiAgICAvKipcclxuICAgICAqIFx1NUY1M1x1NTI0RFx1NzUxRlx1NTQ3RFx1NTAzQ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VySGVhbHRoOm51bWJlclxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY1NENcdTRFQkFcdTUyNERcdThGREJcdTY1QjlcdTU0MTFcdUZGMENcdTRFM0FcdTRFODZcdThCQTFcdTdCOTdcdTc5RkJcdTUyQThcdThERERcdTc5QkJcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1vdmVEaXJlY3Rpb246VmVjdG9yXHJcbiAgICAvKipcclxuICAgICAqIFx1NUY1M1x1NTI0RFx1NjI0MFx1NTkwNFx1NEUxNlx1NzU0Q1x1NTc1MFx1NjgwN1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VyV29ybGRQb3NpdGlvbjpWZWN0b3JcclxuICAgIC8qKlxyXG4gICAgICogIFx1NTFGQVx1NzUxRlx1NzBCOVx1NEUxNlx1NzU0Q1x1NTc1MFx1NjgwN3ggXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzcGF3bldvcmxkUG9zaXRpb246VmVjdG9yXHJcbiAgICAvKipcclxuICAgICAqIFx1NTkwRFx1NkQzQlx1OTVGNFx1OTY5NFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVzcGF3bkludGVydmFsID0gMTBcclxuICAgIC8qKlxyXG4gICAgICogXHU1RjUzXHU1MjREXHU2NTRDXHU0RUJBXHU0RjdGXHU3NTI4XHU3Njg0XHU2MjgwXHU4MEZEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjdXJTa2lsbGtJRDpzdHJpbmdcclxufSIsICJcdUZFRkZcclxuLyoqXHJcbiAqIFx1NTdGQVx1Nzg0MFx1NjU0Q1x1NEVCQVx1NEZFMVx1NjA2RlxyXG4gKiBcclxuICogXHU2NTRDXHU0RUJBXHU3Njg0XHU1N0ZBXHU3ODQwXHVGRjBDXHU1MTc3XHU0RjUzXHU2NTRDXHU0RUJBXHU2NjJGXHU2ODM5XHU2MzZFXHU2QjY0XHU1MjFCXHU1RUZBXHU3Njg0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY0VuZW15SW5mbyB7XHJcbiAgICAvKipcclxuICAgICAqIFx1NjU0Q1x1NEVCQWlkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAqIFx1OTg4NFx1NTIzNlx1NEY1M0lEXHJcbiAqL1xyXG4gICAgcHVibGljIHByZWZhYkNoYXJhY3RlcklEOiBzdHJpbmdcclxuICAgIC8qKlxyXG4qIFx1N0I0OVx1N0VBN1xyXG4qL1xyXG4gICAgcHVibGljIGxldmVsOiBudW1iZXJcclxuICAgIC8qKlxyXG4gICAgICogXHU2NTRDXHU0RUJBXHU1NDBEXHU1QjU3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIFx1NjYyRlx1NTQyNlx1NEUzQlx1NTJBOFx1NjUzQlx1NTFGQlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWN0aXZlQXR0YWNrID0gZmFsc2VcclxuICAgIC8qKlxyXG4gICAgICogXHU2NzAwXHU1OTI3XHU3NTFGXHU1NDdEXHU1MDNDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtYXhIZWFsdGg6IG51bWJlclxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY1M0JcdTUxRkJcdTUyOUJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGF0dGFja1Bvd2VyOiBudW1iZXJcclxuICAgIC8qKlxyXG4gICAgICogXHU5NjMyXHU1RkExXHU1MjlCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWZlbnNlUG93ZXI6IG51bWJlclxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxRkJcdTY3NDBcdTU0MEVcdTgzQjdcdTVGOTdcdTdFQ0ZcdTlBOENcdTUwM0NcclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4cDogbnVtYmVyXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI0MFx1NUM1RVx1NTczMFx1NTZGRUlEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBiZWxvbmdNYXBJZDogc3RyaW5nXHJcbiAgICAvKipcclxuICAgICAqIFx1NzlGQlx1NTJBOFx1OTAxRlx1NUVBNlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAwXHJcbiAgICAvKipcclxuICogXHU2NTRDXHU0RUJBXHU2MjQwXHU2NzA5XHU3Njg0XHU2MjgwXHU4MEZEXHU3MkI2XHU2MDAxXHU0RkUxXHU2MDZGXHVGRjBDXHU2QkQ0XHU1OTgyXHVGRjBDXHU2NTRDXHU0RUJBXHU1NzI4XHU0RTAwXHU1QjlBXHU2NUY2XHU5NUY0XHU0RTRCXHU1NDBFXHU0RjdGXHU3NTI4XHU2N0QwXHU0RTJBXHU2MjgwXHU4MEZEXHU4RkRCXHU4ODRDXHU2NTNCXHU1MUZCXHJcbiAqL1xyXG4gICAgcHVibGljIHNraWxsTGlzdDtcclxufSIsICJcdUZFRkZpbXBvcnQgR2FtZURhdGFTZXJ2ZXIgZnJvbSBcIi4uL0NhY2hlL0dhbWVEYXRhU2VydmVyXCI7XHJcbmltcG9ydCBFbmVteUluZm8gZnJvbSBcIi4uL2VudGl0eS9FbmVteUluZm9cIjtcclxuaW1wb3J0IFBsYXllckluZm8gZnJvbSBcIi4uL2VudGl0eS9QbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCBFbmVteUFJTW9kdWxlIGZyb20gXCIuL0VuZW15QUlNb2R1bGVcIjtcclxuaW1wb3J0IFRhc2tNb2R1bGUgZnJvbSBcIi4vVGFza01vZHVsZVwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBcdTY1M0JcdTUxRkJcdTZBMjFcdTU3NTdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dGFja01vZHVsZSB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQXR0YWNrTW9kdWxlID0gbmV3IEF0dGFja01vZHVsZSgpO1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIFx1NjUzQlx1NTFGQlx1ODAwNVx1NEY3Rlx1NzUyOFx1NEU4Nlx1NEUwMFx1NEUyQVx1NjI4MFx1ODBGRFxyXG4gICAgICogQHBhcmFtIHBsYXllciBcclxuICAgICAqIEBwYXJhbSBza2lsbElEIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVXNlU2tpbGwocm9sZSA6IFBsYXllckluZm8gfCBFbmVteUluZm8sIHNraWxsSUQ6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU3M0E5XHU1QkI2XHU0RkUxXHU2MDZGXHJcbiAgICAgICAgLy8gbGV0IHBsYXllckluZm86UGxheWVySW5mbyA9IEdhbWVEYXRhU2VydmVyLmdldFBsYXllckluZm8ocGxheWVyKVxyXG4gICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU2MjgwXHU4MEZEXHU0RkUxXHU2MDZGXHJcbiAgICAgICAgLy8gbGV0IHNraWxsSW5mbyA9IFNraWxsQ29uZmlnLkdldEJ5SWQoc2tpbGxJRClcclxuICAgICAgICAvL1x1NzUxRlx1NjIxMFx1NjI4MFx1ODBGRCBcdTUzQzJcdTY1NzBcdUZGMUFcdThDMDFcdTUzRDFcdTUxRkFcdTc2ODRcdTYyODBcdTgwRkQgXHU1NDhDIFx1NjI4MFx1ODBGRFx1NEZFMVx1NjA2Rlx1RkYwQ1x1OEMwMVx1NjNBNVx1NjUzNlx1NTIzMFx1NjI4MFx1ODBGRFx1NEUwRFx1NEUwMFx1NUI5QVxyXG4gICAgICAgIC8vIFNraWxsTW9kdWxlLkdlbmVyYXRlU2tpbGwocGxheWVyLCBza2lsbEluZm8pXHJcblxyXG4gICAgICAgIC8vXHU3M0E5XHU1QkI2XHU0RjdGXHU3NTI4XHU2MjgwXHU4MEZEXHJcbiAgICAgICAgaWYocm9sZSBpbnN0YW5jZW9mIFBsYXllckluZm8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1x1NTIxQlx1NUVGQVx1NjI4MFx1ODBGRFx1NzhCMFx1NjQ5RVx1NkEyMVx1NTc4QlxyXG5cclxuICAgICAgICAgICAgLy9cdTVDMDZcdTYyODBcdTgwRkRcdTcyNzlcdTY1NDhcdTYzMDJcdThGN0RcdTUyMzBcdTc4QjBcdTY0OUVcdTZBMjFcdTU3OEJcclxuXHJcbiAgICAgICAgICAgIC8vXHU3OEIwXHU2NDlFXHU2QTIxXHU1NzhCXHU3RUQxXHU1QjlBXHU3OEIwXHU2NDlFXHU0RThCXHU0RUY2XHJcblxyXG4gICAgICAgICAgICAvL1x1NTNEMVx1NUMwNFx1N0M3Qlx1NjI4MFx1ODBGRFx1NzUyOFx1NTI5Qlx1OEZEQlx1ODg0Q1x1NTNEMVx1NUMwNFx1RkYwQ1x1NzhCMFx1NjQ5RVx1NEY1M1x1NEUwRFx1NzhCMFx1NjQ5RVx1RkYwQ1x1NEY0Nlx1NjYyRlx1NTNFRlx1NEVFNVx1NjhDMFx1NkQ0Qlx1RkYwQ1x1NEUwMFx1NjVFNlx1NzhCMFx1NjQ5RVx1NTIzMFx1OEMwMVx1RkYwQ1x1NTIyNFx1NjVBRFx1NjVGNlx1ODlEMlx1ODI3Mlx1OEZEOFx1NjYyRlx1NjU0Q1x1NEVCQVx1RkYwQ1x1NUU3Nlx1OEZEQlx1ODg0Q1x1NEYyNFx1NUJCM1x1N0VEM1x1N0I5N1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvL1x1NEUwMFx1NEUyQVx1NzhCMFx1NjQ5RVx1NEU4Qlx1NEVGNlx1NTNFQVx1NUJGOVx1NzhCMFx1NTIzMFx1NzY4NFx1NjdEMFx1NEUyQVx1NTZGQVx1NUI5QVx1NTM1NVx1NEY0RFx1NzUxRlx1NjU0OFx1NEUwMFx1NkIyMVx1RkYwQ1x1NTE4RFx1NkIyMVx1NzhCMFx1ODlFNlx1NEUwRFx1NzUxRlx1NjU0OFxyXG5cclxuICAgICAgICAgICAgLy9cdTczQTlcdTVCQjZcdTRGN0ZcdTc1MjhcdTYyODBcdTgwRkRcdTY1RjZcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1x1NjU0Q1x1NEVCQVx1NEY3Rlx1NzUyOFx1NjI4MFx1ODBGRFxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogXHU0RjI0XHU1QkIzXHU3RUQzXHU3Qjk3XHJcbiAgICAgKiBcdTY1M0JcdTUxRkJcdTgwMDVcdTRGN0ZcdTc1MjhcdTY3RDBcdTRFMkFcdTYyODBcdTgwRkRcdTVCRjlcdTg4QUJcdTY1M0JcdTUxRkJcdTgwMDVcdTkwMjBcdTYyMTBcdTRFMDBcdTZCMjFcdTRGMjRcdTVCQjNcdTdFRDNcdTdCOTdcclxuICAgICAqIEBwYXJhbSBhdHRhY2tcclxuICAgICAqIEBwYXJhbSBiZUF0dGFja2VkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGFtYWdlQ2hlY2tvdXQoYXR0YWNrZXI6YW55ICwgYmVBdHRhY2tlcjphbnksIHNraWxsSUQ6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIC8vXHU2NTRDXHU0RUJBXHU2NTNCXHU1MUZCXHU3M0E5XHU1QkI2XHJcbiAgICAgICAgaWYoYXR0YWNrZXIgaW5zdGFuY2VvZiBFbmVteUluZm8gJiYgYmVBdHRhY2tlciBpbnN0YW5jZW9mIFBsYXllckluZm8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYXR0YWNrZXJPYmogPSAoYXR0YWNrZXIgYXMgRW5lbXlJbmZvKVxyXG4gICAgICAgICAgICBsZXQgYmVBdHRhY2tlck9iaiA9IChiZUF0dGFja2VyIGFzIFBsYXllckluZm8pIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTczQTlcdTVCQjZcdTY1M0JcdTUxRkJcdTY1NENcdTRFQkFcclxuICAgICAgICBlbHNlIGlmKGF0dGFja2VyIGluc3RhbmNlb2YgUGxheWVySW5mbyAmJiBiZUF0dGFja2VyIGluc3RhbmNlb2YgRW5lbXlJbmZvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHBsYXllckluZm8gPSAoYXR0YWNrZXIgYXMgUGxheWVySW5mbylcclxuICAgICAgICAgICAgbGV0IGVuZW15SW5mbyA9IChiZUF0dGFja2VyIGFzIEVuZW15SW5mbykgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGF0dGFja1Bvd2VyID0gMTBcclxuICAgICAgICAgICAgbGV0IGRlZmVuc2VQb3dlciA9IDVcclxuXHJcbiAgICAgICAgICAgIC8vXHU1MUZCXHU4RDI1XHU2MDJBXHU3MjY5XHJcbiAgICAgICAgICAgIGlmKGF0dGFja1Bvd2VyIC0gZGVmZW5zZVBvd2VyID4gZW5lbXlJbmZvLmN1ckhlYWx0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW5lbXlJbmZvLmN1ckhlYWx0aCA9IDBcclxuICAgICAgICAgICAgICAgIC8vXHU0RUZCXHU1MkExXHU3RUQzXHU3Qjk3XHJcbiAgICAgICAgICAgICAgICBUYXNrTW9kdWxlLkdldEluc3RhbmNlKCkuQ2hlY2tvdXRPbmVFbmVteShwbGF5ZXJJbmZvLCBlbmVteUluZm8pXHJcbiAgICAgICAgICAgICAgICAvL1x1NjU0Q1x1NEVCQVx1NzUxRlx1NTQ3RFx1NTAzQ1x1NEUzQTBcdUZGMENcdTkwMUFcdTc3RTVcdTVCQTJcdTYyMzdcdTdBRUZcdTRGN0ZcdTVGOTdcdTY1NENcdTRFQkFcdTZEODhcdTU5MzFcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9cdTRFMDBcdTZCQjVcdTY1RjZcdTk1RjRcdTRFNEJcdTU0MEVcdUZGMENcdTU5MERcdTZEM0JcdTY1NENcdTRFQkFcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU2MDYyXHU1OTBEXHU2NTRDXHU0RUJBXHU2NzAwXHU1OTI3XHU3NTFGXHU1NDdEXHU1MDNDXHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlJbmZvLmN1ckhlYWx0aCA9IGVuZW15SW5mby5tYXhIZWFsdGhcclxuICAgICAgICAgICAgICAgICAgICAvL1x1OTAxQVx1NzdFNVx1NUJBMlx1NjIzN1x1N0FFRlx1NjA2Mlx1NTkwRFx1NTIxQlx1NUVGQVx1NjU0Q1x1NEVCQVx1NkEyMVx1NTc4Qlx1RkYwOFx1OTcwMFx1ODk4MVx1NTcyOFx1NUYwMFx1NTlDQlx1NjVGNlx1NTAxOVx1NzUxRlx1NjIxMFx1NEUwMFx1NEUyQVx1NjAyQVx1NzI2OVx1NzY4NFx1NTUyRlx1NEUwMFVVSURcdUZGMENcdTVCQTJcdTYyMzdcdTdBRUZcdTk3MDBcdTg5ODFcdTY4MzlcdTYzNkVcdThGRDlcdTRFMkFcdTUzQkJcdTc3RTVcdTkwNTNcdTY2MkZcdTU0RUFcdTRFMkFcdTYwMkFcdTcyNjlcdTg4QUJcdTUyMUJcdTVFRkFcdTRFODZcdUZGMDlcclxuICAgICAgICAgICAgICAgIH0sIGVuZW15SW5mby5yZXNwYXduSW50ZXJ2YWwgKiAxMDAwKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1x1NzNBOVx1NUJCNlx1NjUzQlx1NTFGQlx1NzNBOVx1NUJCNlxyXG4gICAgICAgIGVsc2UgaWYoYXR0YWNrZXIgaW5zdGFuY2VvZiBQbGF5ZXJJbmZvICYmIGJlQXR0YWNrZXIgaW5zdGFuY2VvZiBQbGF5ZXJJbmZvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGF0dGFja2VyT2JqID0gKGF0dGFja2VyIGFzIFBsYXllckluZm8pXHJcbiAgICAgICAgICAgIGxldCBiZUF0dGFja2VyT2JqID0gKGJlQXR0YWNrZXIgYXMgUGxheWVySW5mbykgXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCAiXHVGRUZGaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiXHJcblxyXG4vKipcclxuICogXHU4OUQyXHU4MjcyXHU0RkUxXHU2MDZGXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJJbmZvIHtcclxuICAgIC8qKlxyXG4gICAgICogXHU3QjQ5XHU3RUE3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsZXZlbDpudW1iZXIgPSAxXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDRlx1OUE4Q1x1NTAzQ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhwOm51bWJlciA9IDBcclxuICAgIC8qKlxyXG4gICAgICogXHU5NjM1XHU4NDI1XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjYW1wOnN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICogXHU4OUQyXHU4MjcyXHU1MUZBXHU3NTFGXHU3MEI5XHU1NzMwXHU1NkZFXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzcGF3bkxvY2F0ZU1hcDpzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlEMlx1ODI3Mlx1NUY1M1x1NTI0RFx1NjI0MFx1NTkwNFx1NzY4NFx1NTczMFx1NTZGRVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VycmVudExvY2F0ZU1hcDpzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIFx1OTFEMVx1OTRCMVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW9uZXk6bnVtYmVyID0gMFxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc1MUZcdTU0N0RcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1heEhlYWx0aDpudW1iZXIgPSAxMDBcclxuICAgIC8qKlxyXG4gICAgICogXHU1RjUzXHU1MjREXHU3NTFGXHU1NDdEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjdXJIZWFsdGg6bnVtYmVyID0gMFxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgwRkRcdTkxQ0ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1heEVuZXJneTpudW1iZXIgPSAwXHJcbiAgICAvKipcclxuICAgICAqIFx1NUY1M1x1NTI0RFx1ODBGRFx1OTFDRlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VyRW5lcmd5ID0gMFxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVGNTNcdTUyNERcdTc3MUZcdTU3MjhcdTYyNjdcdTg4NENcdTc2ODRcdTRFRkJcdTUyQTFJRFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VycmVudFRhc2tJRDpzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIFx1NUY1M1x1NTI0RFx1NEVGQlx1NTJBMVx1NURGMlx1N0VDRlx1NUI4Q1x1NjIxMFx1NzY4NFx1NjU3MFx1OTFDRlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VycmVudFRhc2tDb21wbGV0ZWRDb3VudCA9IDBcclxuICAgIC8qKlxyXG4gICAgICogXHU4RkQxXHU2MjE4XHU4MEZEXHU1MjlCXHU3MEI5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtZWxlZVBvd2VyOm51bWJlciA9IDBcclxuICAgIC8qKlxyXG4gICAgICogXHU5NjMyXHU1RkExXHU4MEZEXHU1MjlCXHU3MEI5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWZlbnNlUG93ZXI6bnVtYmVyID0gMFxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyNTFcdTgwRkRcdTUyOUJcdTcwQjlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN3b3JkUG93ZXI6bnVtYmVyID0gMFxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUzRDhcdThFQUJcdTZDMzRcdTY3OUNcdTgwRkRcdTUyOUJcdTcwQjlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGZydWl0UG93ZXI6bnVtYmVyID0gMFxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVGNTNcdTUyNERcdTg4QzVcdTU5MDdcdTk4NzlJRFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VyVXNpbmdJdGVtSUQ6c3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTczQTlcdTVCQjZcdTVGNTNcdTUyNERcdTYyNDBcdTY3MDlcdTg4QzVcdTU5MDdcdTc2ODRcdTYyODBcdTgwRkRcdTk4NzlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGN1ckVxdWlwaW5nSXRlbUlETGlzdDpBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTcyNjlcdTU0QzFcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGl0ZW1MaXN0OkFycmF5PEl0ZW0+ID0gbmV3IEFycmF5PEl0ZW0+KCk7XHJcbiAgICAvKipcclxuICAgICAqIFx1ODhDNVx1NTkwN1x1NEZFMVx1NjA2RlxyXG4gICAgICovXHJcbn0iLCAiXHVGRUZGaW1wb3J0IEdhbWVEYXRhU2VydmVyIGZyb20gXCIuLi9DYWNoZS9HYW1lRGF0YVNlcnZlclwiO1xyXG5pbXBvcnQgRW5lbXlDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9FbmVteUNvbmZpZ1wiO1xyXG5pbXBvcnQgVGFza0NvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL1Rhc2tDb25maWdcIjtcclxuaW1wb3J0IEJhc2ljRW5lbXlJbmZvIGZyb20gXCIuLi9lbnRpdHkvQmFzaWNFbmVteUluZm9cIjtcclxuaW1wb3J0IEVuZW15SW5mbyBmcm9tIFwiLi4vZW50aXR5L0VuZW15SW5mb1wiO1xyXG5pbXBvcnQgUGxheWVySW5mbyBmcm9tIFwiLi4vZW50aXR5L1BsYXllckluZm9cIjtcclxuaW1wb3J0IFRhc2tJbmZvIGZyb20gXCIuLi9lbnRpdHkvVGFza0luZm9cIjtcclxuXHJcbi8qKlxyXG4gKiBcdTRFRkJcdTUyQTFcdTZBMjFcdTU3NTdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tNb2R1bGV7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVGFza01vZHVsZSA9IG5ldyBUYXNrTW9kdWxlKCk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcclxuICAgICAqL1xyXG4gICAgcHVibGljIEluaXQoKVxyXG4gICAge1xyXG5cclxuICAgICAgICAvL1x1NjNBNVx1NTNEN1x1NjVCMFx1NzY4NFx1NEVGQlx1NTJBMVxyXG4gICAgICAgIEV2ZW50cy5hZGRDbGllbnRMaXN0ZW5lcihcInJlY2VpdmVUYXNrXCIsIChwbGF5ZXIsIHJlY2VpdmVUYXNrSUQ6c3RyaW5nKT0+e1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0SW5mbzpSZXN1bHRJbmZvID0gdGhpcy5yZWNlaXZlVGFzayhwbGF5ZXIsIHJlY2VpdmVUYXNrSUQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VEM1x1N0I5N1x1NEUwMFx1NEUyQVx1NjU0Q1x1NEVCQVxyXG4gICAgICogQHBhcmFtIHBsYXllckluZm8gXHJcbiAgICAgKiBAcGFyYW0gZW5lbXlJbmZvIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2hlY2tvdXRPbmVFbmVteShwbGF5ZXJJbmZvOiBQbGF5ZXJJbmZvLCBlbmVteUluZm86IEVuZW15SW5mbylcclxuICAgIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL1x1ODNCN1x1NTNENlx1NUY1M1x1NTI0RFx1NjI2N1x1ODg0Q1x1NzY4NFx1NEVGQlx1NTJBMUlEXHJcbiAgICAgICAgICAgIGlmKHBsYXllckluZm8uY3VycmVudFRhc2tJRCA9PSBcIlwiKS8vXHU2QjY0XHU2NUY2XHU2NzJBXHU2M0E1XHU2NTM2XHU0RUZCXHU1MkExXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1x1NUI1OFx1NTcyOFx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICBpZighVGFza0NvbmZpZy50YXNrTGlzdC5oYXMocGxheWVySW5mby5jdXJyZW50VGFza0lEKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRhc2tJbmZvOlRhc2tJbmZvID0gVGFza0NvbmZpZy50YXNrTGlzdC5nZXQocGxheWVySW5mby5jdXJyZW50VGFza0lEKVxyXG4gICAgICAgICAgICAvL1x1ODNCN1x1NUY5N1x1N0VDRlx1OUE4Q1xyXG4gICAgICAgICAgICBwbGF5ZXJJbmZvLmV4cCArPSBlbmVteUluZm8uZXhwXHJcbiAgICAgICAgICAgIC8vXHU1MUZCXHU2NzQwXHU2NTcwXHU5MUNGKzFcclxuICAgICAgICAgICAgcGxheWVySW5mby5jdXJyZW50VGFza0NvbXBsZXRlZENvdW50ICs9IDFcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVCOENcdTYyMTBcdTRFMDBcdTRFMkFcdTRFRkJcdTUyQTFcclxuICAgICAqIEBwYXJhbSBwbGF5ZXIgXHJcbiAgICAgKiBAcGFyYW0gdGFza0lEIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29tcGxldGVUYXNrKHBsYXllcjpHYW1lcGxheS5QbGF5ZXIsIHRhc2tJRDpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBsYXllckluZm86UGxheWVySW5mbyA9IEdhbWVEYXRhU2VydmVyLmdldFBsYXllckluZm8ocGxheWVyKVxyXG4gICAgICAgIGlmKHBsYXllckluZm8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1x1NTIyNFx1NjVBRFx1NEVGQlx1NTJBMVx1NjYyRlx1NTQyNlx1NUI4Q1x1NjIxMFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5ODg2XHU1M0Q2XHU0RTAwXHU0RTJBXHU0RUZCXHU1MkExXHJcbiAgICAgKiBAcGFyYW0gcGxheWVyIFx1NzNBOVx1NUJCNlxyXG4gICAgICogQHBhcmFtIHJlY2VpdmVUYXNrSUQgXHU5ODg2XHU1M0Q2XHU3Njg0XHU0RUZCXHU1MkExXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWNlaXZlVGFzayhwbGF5ZXI6R2FtZXBsYXkuUGxheWVyLCByZWNlaXZlVGFza0lEOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGxheWVySW5mbzpQbGF5ZXJJbmZvID0gR2FtZURhdGFTZXJ2ZXIuZ2V0UGxheWVySW5mbyhwbGF5ZXIpXHJcbiAgICAgICAgICAgIGlmKCFwbGF5ZXJJbmZvKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcdTczQTlcdTVCQjZcdTRGRTFcdTYwNkZcdTRFMERcdTVCNThcdTU3MjhcIilcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdGFza0luZm86VGFza0luZm8gPSBUYXNrQ29uZmlnLnRhc2tMaXN0LmdldChyZWNlaXZlVGFza0lEKVxyXG4gICAgICAgICAgICBpZighdGFza0luZm8pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBjb25zb2xlLmVycm9yKFwiXHU0RUZCXHU1MkExXHU0RkUxXHU2MDZGXHU0RTBEXHU1QjU4XHU1NzI4XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBiYXNpY0VuZW15SW5mbzpCYXNpY0VuZW15SW5mbyA9IEVuZW15Q29uZmlnLmFsbEVuZW15LmdldCh0YXNrSW5mby5lbmVteUlEKVxyXG4gICAgICAgICAgICBpZighYmFzaWNFbmVteUluZm8pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlx1OTcwMFx1ODk4MVx1OTg4Nlx1NTNENlx1NzY4NFx1NjU0Q1x1NEVCQVx1NEUwRFx1NUI1OFx1NTcyOFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vXHU1MjI0XHU2NUFEXHU0RUZCXHU1MkExXHU5ODg2XHU1M0Q2XHU3RUE3XHU1MjJCXHJcbiAgICAgICAgICAgIGlmKHBsYXllckluZm8ubGV2ZWwgPCBiYXNpY0VuZW15SW5mby5sZXZlbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXHU3M0E5XHU1QkI2XHU3QjQ5XHU3RUE3XHU0RTBEXHU4REIzXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9cdThCQkVcdTdGNkVcdTczQTlcdTVCQjZcdTRFRkJcdTUyQTFcclxuICAgICAgICAgICAgcGxheWVySW5mby5jdXJyZW50VGFza0lEID0gcmVjZWl2ZVRhc2tJRFxyXG4gICAgICAgICAgICAvL1x1OTFDRFx1N0Y2RVx1NTFGQlx1Njc0MFx1NEUyQVx1NjU3MFxyXG4gICAgICAgICAgICBwbGF5ZXJJbmZvLmN1cnJlbnRUYXNrQ29tcGxldGVkQ291bnQgPSAwXHJcbiAgICAgICAgICAgIC8vXHU5MDFBXHU3N0U1XHU1QkEyXHU2MjM3XHU3QUVGXHU0RUZCXHU1MkExXHU0RUZCXHU1MkExXHU5ODg2XHU1M0Q2XHU1QjhDXHU2MjEwXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsICJcdUZFRkZpbXBvcnQgR2FtZURhdGFTZXJ2ZXIgZnJvbSBcIi4uL0NhY2hlL0dhbWVEYXRhU2VydmVyXCI7XHJcbmltcG9ydCBTa2lsbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL1NraWxsQ29uZmlnXCI7XHJcbmltcG9ydCBQbGF5ZXJJbmZvIGZyb20gXCIuLi9lbnRpdHkvUGxheWVySW5mb1wiO1xyXG5pbXBvcnQgU2tpbGxJbmZvIGZyb20gXCIuLi9lbnRpdHkvU2tpbGxJbmZvXCI7XHJcbmltcG9ydCBTa2lsbE1vZHVsZSBmcm9tIFwiLi9Ta2lsbE1vZHVsZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllck1vZHVsZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQbGF5ZXJNb2R1bGUgPSBuZXcgUGxheWVyTW9kdWxlKCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSW5pdCgpIHtcclxuXHJcbiAgICAgICAgRGF0YVN0b3JhZ2Uuc2V0VGVtcG9yYXJ5U3RvcmFnZShTeXN0ZW1VdGlsLmlzUElFKVxyXG4gICAgICAgIC8vXHU1MjFEXHU1OUNCXHU1MzE2XHU3M0E5XHU1QkI2XHU4RkRCXHU1MTY1XHU2RTM4XHU2MjBGXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBXHJcbiAgICAgICAgRXZlbnRzLmFkZFBsYXllckpvaW5lZExpc3RlbmVyKGFzeW5jIChwbGF5ZXIpID0+IHtcclxuICAgICAgICAgICAgLy9cdTUyQTBcdThGN0RcdTczQTlcdTVCQjZcdTU3RkFcdTc4NDBcdTRGRTFcdTYwNkZcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXRyeVRpbWVzID0gMFxyXG4gICAgICAgICAgICAgICAgbGV0IGxvYWRTdWNjZXNzID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVySW5mbzogUGxheWVySW5mbyA9IG5ldyBQbGF5ZXJJbmZvKClcclxuICAgICAgICAgICAgICAgIHdoaWxlIChyZXRyeVRpbWVzIDwgMiAmJiBsb2FkU3VjY2VzcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJEYXRhU3RyaW5nID0gYXdhaXQgRGF0YVN0b3JhZ2UuYXN5bmNHZXRQbGF5ZXJEYXRhKHBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NUI1OFx1NTcyOFx1NzNBOVx1NUJCNlx1NjU3MFx1NjM2RVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJEYXRhU3RyaW5nICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyRGF0YSA9IEpTT04ucGFyc2UocGxheWVyRGF0YVN0cmluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYXR0cmlidXRlIGluIHBsYXllckRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckluZm9bYXR0cmlidXRlXSA9IHBsYXllckRhdGFbYXR0cmlidXRlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRTdWNjZXNzID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTk5OTZcdTZCMjFcdTc2N0JcdTVGNTVcdThCRTVcdTZFMzhcdTYyMEZcdTc2ODRcdTczQTlcdTVCQjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnlUaW1lcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vXHU4QkJFXHU3RjZFXHU2NzAwXHU1OTI3XHU4ODQwXHU5MUNGXHU1NDhDXHU2NzAwXHU1OTI3XHU4MEZEXHU5MUNGXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJJbmZvLm1heEhlYWx0aCA9IDEwMFxyXG4gICAgICAgICAgICAgICAgcGxheWVySW5mby5tYXhFbmVyZ3kgPSAxMDBcclxuXHJcbiAgICAgICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFx1ODg0MFx1OTFDRlx1NTQ4Q1x1ODBGRFx1OTFDRlx1NTAzQ1x1N0I0OVx1NEU4RVx1NjcwMFx1NTkyN1x1ODg0MFx1OTFDRlx1NTQ4Q1x1ODBGRFx1OTFDRlx1NTAzQ1xyXG4gICAgICAgICAgICAgICAgcGxheWVySW5mby5jdXJIZWFsdGggPSBwbGF5ZXJJbmZvLm1heEhlYWx0aFxyXG4gICAgICAgICAgICAgICAgcGxheWVySW5mby5jdXJFbmVyZ3kgPSBwbGF5ZXJJbmZvLm1heEVuZXJneVxyXG4gICAgICAgICAgICAgICAgLy9cdThCQkVcdTdGNkVcdTczQTlcdTVCQjZcdTdGMTNcdTVCNThcdTY1NzBcdTYzNkVcclxuICAgICAgICAgICAgICAgIEdhbWVEYXRhU2VydmVyLnBsYXllckRhdGEuc2V0KHBsYXllci5nZXRVc2VySWQoKSwgcGxheWVySW5mbyk7XHJcbiAgICAgICAgICAgICAgICAvL0V2ZW50cy5kaXNwYXRjaFRvQ2xpZW50KHBsYXllciwgXCJTeW5QbGF5ZXJEYXRhVG9DbGllbnRcIiwgcGxheWVySW5mbyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTVUNDRVNTXCI7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1ODNCN1x1NTNENlx1NzNBOVx1NUJCNlx1NjU3MFx1NjM2RVx1NUYwMlx1NUUzOFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogXHU4M0I3XHU1M0Q2XHU3M0E5XHU1QkI2XHU0RkUxXHU2MDZGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgRXZlbnRzLmFkZENsaWVudExpc3RlbmVyKFwiR2V0UGxheWVySW5mb1wiLCAocGxheWVyOkdhbWVwbGF5LlBsYXllcik9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTY3MERcdTUyQTFcdTU2NjhcdTYzQTVcdTY1MzZcdTczQTlcdTVCQjZcdTRGRTFcdTYwNkZcdThCRjdcdTZDNDJcIilcclxuICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoVG9DbGllbnQocGxheWVyLFwiR2V0UGxheWVySW5mb1wiLCBKU09OLnN0cmluZ2lmeShHYW1lRGF0YVNlcnZlci5nZXRQbGF5ZXJJbmZvKHBsYXllcikpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vXHU3M0E5XHU1QkI2XHU3OUJCXHU1RjAwXHU2RTM4XHU2MjBGXHJcbiAgICAgICAgRXZlbnRzLmFkZFBsYXllckxlZnRMaXN0ZW5lcigocGxheWVyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU3M0E5XHU1QkI2XHU3OUJCXHU1RjAwXHU1QjU4XHU1MEE4XHU0RTAwXHU2QjIxXHU2NTcwXHU2MzZFXHJcbiAgICAgICAgICAgIHRoaXMuU3RvcmVQbGF5ZXJEYXRhKHBsYXllcilcclxuICAgICAgICAgICAgLy9cdTZFMDVcdTY5NUFcdTczQTlcdTVCQjZcdTY1NzBcdTYzNkVcdTdGMTNcdTVCNThcclxuICAgICAgICAgICAgR2FtZURhdGFTZXJ2ZXIucGxheWVyRGF0YS5kZWxldGUocGxheWVyLmdldFVzZXJJZCgpKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL1x1NkJDRlx1OTY5NDMwc1x1NEUwMFx1NkJCNVx1NjVGNlx1OTVGNFx1NzNBOVx1NUJCNlx1NjU3MFx1NjM2RVx1NUI1OFx1NTBBOFxyXG4gICAgICAgIFRpbWVVdGlsLnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgR2FtZXBsYXkuZ2V0QWxsUGxheWVycygpLmZvckVhY2goKHBsYXllcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TdG9yZVBsYXllckRhdGEocGxheWVyKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDI1KVxyXG5cclxuICAgICAgICAvL1x1NjZGNFx1NjVCMFx1NzNBOVx1NUJCNlx1NEZFMVx1NjA2RlxyXG4gICAgICAgIEV2ZW50cy5hZGRDbGllbnRMaXN0ZW5lcihcIkFkZEJhc2ljQXR0cmlidXRlXCIsIChwbGF5ZXIsIGF0dHJpYnV0ZU5hbWU6c3RyaW5nLCBhZGRWYWx1ZTpudW1iZXIpPT57XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVySW5mbzpQbGF5ZXJJbmZvID0gR2FtZURhdGFTZXJ2ZXIuZ2V0UGxheWVySW5mbyhwbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICBpZighcGxheWVySW5mbylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcdTczQTlcdTVCQjZcdTRGRTFcdTYwNkZcdTRFMERcdTVCNThcdTU3MjhcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBsYXllckluZm9bYXR0cmlidXRlTmFtZV0gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcdTVDNUVcdTYwMjdcdTU0MERcIiArIGF0dHJpYnV0ZU5hbWUgKyBcIlx1NEUwRFx1NUI1OFx1NTcyOFx1RkYwMVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vXHU0RTBEXHU4MEZEXHU4RDg1XHU4RkM3XHU3M0E5XHU1QkI2XHU1MjY5XHU0RjU5XHU1QzVFXHU2MDI3XHU3MEI5XHVGRjBDXHU1NDI2XHU1MjE5XHU3Qjk3XHU0RjVDXHU1RjBBXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVtYWluUG93ZXJQb2ludHMgPSBwbGF5ZXJJbmZvLmxldmVsICogNCAtIHBsYXllckluZm8ubWVsZWVQb3dlciAtIHBsYXllckluZm8uc3dvcmRQb3dlciAtIHBsYXllckluZm8uZnJ1aXRQb3dlciAtIHBsYXllckluZm8uZGVmZW5zZVBvd2VyXHJcbiAgICAgICAgICAgICAgICBpZihyZW1haW5Qb3dlclBvaW50cyA8PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlx1NzNBOVx1NUJCNlx1NUM1RVx1NjAyN1x1NzBCOVx1NEUwRFx1OERCM1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9cdTY1MzlcdTUzRDhcdTVDNUVcdTYwMjdcdTcwQjlcclxuICAgICAgICAgICAgICAgIHBsYXllckluZm9bYXR0cmlidXRlTmFtZV0gPSBwbGF5ZXJJbmZvW2F0dHJpYnV0ZU5hbWVdICsgYWRkVmFsdWVcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBZGRCYXNpY0F0dHJpYnV0ZSBFcnJvcjpcIiArIGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RTY2XHU1QzVFXHU2MDI3XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyIFx1NzNBOVx1NUJCNlx1NEZFMVx1NjA2RlxyXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgXHU1QzVFXHU2MDI3XHU1NDBEXHJcbiAgICAgKiBAcGFyYW0gbmV3VmFsdWUgXHU2NUIwXHU1MDNDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBVcGRhdGVBdHRyaWJ1dGUocGxheWVyOkdhbWVwbGF5LlBsYXllciwgYXR0cmlidXRlTmFtZTpzdHJpbmcsIG5ld1ZhbHVlOmFueSlcclxuICAgIHtcclxuICAgICAgICBsZXQgcGxheWVySW5mbzpQbGF5ZXJJbmZvID0gR2FtZURhdGFTZXJ2ZXIuZ2V0UGxheWVySW5mbyhwbGF5ZXIpXHJcbiAgICAgICAgLy9cdTVCNThcdTU3MjhcdTczQTlcdTVCQjZcdTRGRTFcdTYwNkZcclxuICAgICAgICBpZihwbGF5ZXJJbmZvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYocGxheWVySW5mb1thdHRyaWJ1dGVOYW1lXSA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcdTVDNUVcdTYwMjdcdTU0MERcIiArIGF0dHJpYnV0ZU5hbWUgKyBcIlx1NEUwRFx1NUI1OFx1NTcyOFx1RkYwMVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwbGF5ZXJJbmZvW2F0dHJpYnV0ZU5hbWVdID0gbmV3VmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1QzVFXHU2MDI3XHU1MDNDXHU1ODlFXHU1MkEwXHJcbiAgICAgKiBAcGFyYW0gcGxheWVyIFxyXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgXHJcbiAgICAgKiBAcGFyYW0gYWRkVmFsdWUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBZGRBdHRyaWJ1dGUocGxheWVyOkdhbWVwbGF5LlBsYXllciwgYXR0cmlidXRlTmFtZTpzdHJpbmcsIGFkZFZhbHVlOmFueSlcclxuICAgIHtcclxuICAgICAgICBsZXQgcGxheWVySW5mbzpQbGF5ZXJJbmZvID0gR2FtZURhdGFTZXJ2ZXIuZ2V0UGxheWVySW5mbyhwbGF5ZXIpXHJcbiAgICAgICAgLy9cdTVCNThcdTU3MjhcdTczQTlcdTVCQjZcdTRGRTFcdTYwNkZcclxuICAgICAgICBpZihwbGF5ZXJJbmZvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYocGxheWVySW5mb1thdHRyaWJ1dGVOYW1lXSA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcdTVDNUVcdTYwMjdcdTU0MERcIiArIGF0dHJpYnV0ZU5hbWUgKyBcIlx1NEUwRFx1NUI1OFx1NTcyOFx1RkYwMVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwbGF5ZXJJbmZvW2F0dHJpYnV0ZU5hbWVdID0gcGxheWVySW5mb1thdHRyaWJ1dGVOYW1lXSArIGFkZFZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU5MDFBXHU3N0U1XHU1QkEyXHU2MjM3XHU3QUVGXHU1QzVFXHU2MDI3XHU1MDNDXHU2NTM5XHU1M0Q4XHU0RTg2XHJcbiAgICAgICAgRXZlbnRzLmRpc3BhdGNoVG9DbGllbnRcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjA3XHU2MzYyXHU4OEM1XHU1OTA3XHU2MjgwXHU4MEZEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTd2l0Y2hFcXVpcFNraWxsKHBsYXllcjogR2FtZXBsYXkuUGxheWVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OEM1XHU1OTA3XHU2MjgwXHU4MEZEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBFcXVpcFNraWxsKHBsYXllcjogR2FtZXBsYXkuUGxheWVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1Mzc4XHU0RTBCXHU2MjgwXHU4MEZEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBVbkVxdWlwU2tpbGwocGxheWVyOiBHYW1lcGxheS5QbGF5ZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVCNThcdTUwQThcdTczQTlcdTVCQjZcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIFN0b3JlUGxheWVyRGF0YShwbGF5ZXIpIHtcclxuXHJcbiAgICAgICAgLy9cdTU5ODJcdTY3OUNcdTczQTlcdTVCQjZcdTRGRTFcdTYwNkZcdTRFMERcdTVCNThcdTU3MjhcdUZGMENcdTRFMERcdTYyNjdcdTg4NENcdTVCNThcdTUwQThcdTY1QjlcdTZDRDVcclxuICAgICAgICBpZiAocGxheWVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU2NTcwXHU2MzZFXHU0RTBEXHU1QjU4XHU1NzI4XHU1MjIwXHU5NjY0XHU3RjEzXHU1QjU4XHJcbiAgICAgICAgaWYgKEdhbWVEYXRhU2VydmVyLmdldFBsYXllckluZm8ocGxheWVyKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEdhbWVEYXRhU2VydmVyLnBsYXllckRhdGEuZGVsZXRlKHBsYXllci5nZXRVc2VySWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1x1NkJDRlx1OTY5NDFzXHU1NDBDXHU2QjY1XHU3M0E5XHU1QkI2XHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFXHVGRjBDXHU4MERDXHU1MjI5XHU3MEI5XHU2NTcwICsgXHU4REYzXHU4REMzXHU1MDNDXHJcbiAgICAgICAgbGV0IHJldHJ5VGltZXMgPSAwO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgd2hpbGUgKCFzdWNjZXNzICYmIHJldHJ5VGltZXMgPD0gMykge1xyXG4gICAgICAgICAgICAvL1x1NUI1OFx1NTBBOFx1NTkzMVx1OEQyNVx1NjVGNlx1RkYwQ1x1NTkxQVx1NkIyMVx1OTFDRFx1OEJENVxyXG4gICAgICAgICAgICBsZXQgcGxheWVySW5mbyA9IEdhbWVEYXRhU2VydmVyLmdldFBsYXllckluZm8ocGxheWVyKVxyXG4gICAgICAgICAgICBpZiAocGxheWVySW5mbykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBsYXllclN0b3JlU3RyOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwbGF5ZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgIC8vXHU2NjgyXHU2NUY2XHU0RTBEXHU1QjU4XHU1MEE4XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyU3RvcmVTdHIgPT0gbnVsbCB8fCBwbGF5ZXJTdG9yZVN0ciA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBzdG9yZVJlc3VsdENvZGUgPSBhd2FpdCBEYXRhU3RvcmFnZS5hc3luY1NldFBsYXllckRhdGEocGxheWVyLCBwbGF5ZXJTdG9yZVN0cik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmVSZXN1bHRDb2RlID09IERhdGFTdG9yYWdlLkRhdGFTdG9yYWdlUmVzdWx0Q29kZS5TdWNjZXNzKSB7Ly9cdTVCNThcdTUwQThcdTYyMTBcdTUyOUZcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NUI1OFx1NTBBOFx1NzNBOVx1NUJCNlx1NjU3MFx1NjM2RVx1NjIxMFx1NTI5RlwiICsgc3RvcmVSZXN1bHRDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTVUNDRVNTXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NUI1OFx1NTBBOFx1NTkzMVx1OEQyNVwiICsgc3RvcmVSZXN1bHRDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NUI1OFx1NTBBOFx1NTkzMVx1OEQyNVx1OTcwMFx1ODk4MVx1NTZERVx1NkVEQVx1NzNBOVx1NUJCNlx1NjU3MFx1NjM2RVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHJ5VGltZXMrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU3M0E5XHU1QkI2XHU0RTBEXHU1QjU4XHU1NzI4XHVGRjFBIFwiICsgcGxheWVyLmdldFVzZXJJZCgpICsgXCIgZW5kXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHJ5VGltZXMrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCAiXHVGRUZGXHJcbi8qKiBcclxuICogQVVUSE9SOiBcdTcyMzFcdTYzMjRcdTcyNTlcdTgxOEZcdTc2ODRcdTcyNUJcclxuICogVElNRTogMjAyMy4wNi4yNC0xMC41MC4zNlxyXG4gKi9cclxuXHJcbmltcG9ydCBQbGF5ZXJNb2R1bGVDIGZyb20gXCIuLi9Nb2R1bGVDL1BsYXllck1vZHVsZUNcIjtcclxuaW1wb3J0IE1haW5VSV9HZW5lcmF0ZSBmcm9tIFwiLi4vdWktZ2VuZXJhdGUvTWFpblVJX2dlbmVyYXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVUkgZXh0ZW5kcyBNYWluVUlfR2VuZXJhdGUge1xyXG5cclxuXHQvKiogXHJcblx0ICogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENcdTU3MjhcdTU0MDhcdTkwMDJcdTc2ODRcdTY1RjZcdTY3M0FcdTY3MDBcdTUxNDhcdTUyMURcdTU5Q0JcdTUzMTZcdTRFMDBcdTZCMjEgXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIG9uU3RhcnQoKSB7XHJcblx0XHQvL1x1OEJCRVx1N0Y2RVx1ODBGRFx1NTQyNlx1NkJDRlx1NUUyN1x1ODlFNlx1NTNEMW9uVXBkYXRlXHJcblx0XHR0aGlzLmNhblVwZGF0ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sYXllciA9IFVJLlVJTGF5ZXJNaWRkbGU7XHJcblxyXG5cdFx0Ly9cdThCQkVcdTdGNkVcdTY3MkNcdTU3MzBcdTRGRTFcdTYwNkZcclxuXHRcdEV2ZW50cy5hZGRMb2NhbExpc3RlbmVyKFwiU2V0TG9jYWxCYXNpY1VJXCIsICgpPT57XHJcblx0XHRcdGxldCBwbGF5ZXJJbmZvID0gUGxheWVyTW9kdWxlQy5wbGF5ZXJJbmZvXHJcblx0XHRcdHRoaXMubGV2ZWxUZXh0LnRleHQgPSBwbGF5ZXJJbmZvLmxldmVsLnRvU3RyaW5nKCkgKyBcIlx1N0VBN1wiXHJcblx0XHRcdHRoaXMubW9uZXRUZXh0LnRleHQgPSBcIlx1RkZFNVwiK3BsYXllckluZm8ubW9uZXkudG9TdHJpbmcoKVxyXG5cdFx0XHR0aGlzLmhlYWx0aFRleHQudGV4dCA9IHBsYXllckluZm8uY3VySGVhbHRoICsgXCIvXCIgKyBwbGF5ZXJJbmZvLm1heEhlYWx0aFxyXG5cdFx0XHR0aGlzLmVuZXJneVRleHQudGV4dCA9IHBsYXllckluZm8uY3VyRW5lcmd5ICsgXCIvXCIgKyBwbGF5ZXJJbmZvLm1heEVuZXJneVxyXG5cdFx0XHR0aGlzLmhlYWx0aEJhci5jdXJyZW50VmFsdWUgPSBwbGF5ZXJJbmZvLmN1ckhlYWx0aCAvIHBsYXllckluZm8ubWF4SGVhbHRoXHJcblx0XHRcdHRoaXMuZW5lcmd5QmFyLmN1cnJlbnRWYWx1ZSA9IHBsYXllckluZm8uY3VyRW5lcmd5IC8gcGxheWVySW5mby5tYXhFbmVyZ3lcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiXHU4QkJFXHU3RjZFXHU3M0E5XHU1QkI2XHU1RjUzXHU1MjREXHU0RkUxXHU2MDZGXHU2MjEwXHU1MjlGOlwiK1BsYXllck1vZHVsZUMucGxheWVySW5mbylcclxuXHRcdH0pXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBcdTY1NzBcdTYzNkVcdTYzMDlcdTk0QUVcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5iYXNpY0RhdGFCdG4ub25DbGlja2VkLmFkZCgoKT0+e1xyXG5cclxuXHJcblx0XHR9KVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogXHU4MENDXHU1MzA1XHU2MzA5XHU5NEFFXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuaXRlbUJ0bi5vbkNsaWNrZWQuYWRkKCgpPT57XHJcblxyXG5cdFx0fSlcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBcdTU1NDZcdTVFOTdcdTYzMDlcdTk0QUVcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zaG9wQnRuLm9uQ2xpY2tlZC5hZGQoKCk9PntcclxuXHJcblx0XHR9KVxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFx1NTE3M1x1OTVFRFx1NjMwOVx1OTRBRVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmNsb3NlQnRuLm9uQ2xpY2tlZC5hZGQoKCk9PntcclxuXHJcblx0XHR9KVxyXG5cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0LyoqIFxyXG5cdCAqIFx1Njc4NFx1OTAyMFVJXHU2NTg3XHU0RUY2XHU2MjEwXHU1MjlGXHU1NDBFXHVGRjBDb25TdGFydFx1NEU0Qlx1NTQwRSBcclxuXHQgKiBcdTVCRjlcdTRFOEVVSVx1NzY4NFx1NjgzOVx1ODI4Mlx1NzBCOVx1NzY4NFx1NkRGQlx1NTJBMFx1NjRDRFx1NEY1Q1x1RkYwQ1x1OEZEQlx1ODg0Q1x1OEMwM1x1NzUyOFxyXG5cdCAqIFx1NkNFOFx1NjEwRlx1RkYxQVx1OEJFNVx1NEU4Qlx1NEVGNlx1NTNFRlx1ODBGRFx1NEYxQVx1NTkxQVx1NkIyMVx1OEMwM1x1NzUyOFxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBvbkFkZGVkKCkge1xyXG5cdH1cclxuXHJcblx0LyoqIFxyXG5cdCAqIFx1Njc4NFx1OTAyMFVJXHU2NTg3XHU0RUY2XHU2MjEwXHU1MjlGXHU1NDBFXHVGRjBDb25BZGRlZFx1NEU0Qlx1NTQwRVxyXG5cdCAqIFx1NUJGOVx1NEU4RVVJXHU3Njg0XHU2ODM5XHU4MjgyXHU3MEI5XHU3Njg0XHU3OUZCXHU5NjY0XHU2NENEXHU0RjVDXHVGRjBDXHU4RkRCXHU4ODRDXHU4QzAzXHU3NTI4XHJcblx0ICogXHU2Q0U4XHU2MTBGXHVGRjFBXHU4QkU1XHU0RThCXHU0RUY2XHU1M0VGXHU4MEZEXHU0RjFBXHU1OTFBXHU2QjIxXHU4QzAzXHU3NTI4XHJcblx0ICovXHJcblx0cHJvdGVjdGVkIG9uUmVtb3ZlZCgpIHtcclxuXHR9XHJcblxyXG5cdC8qKiBcclxuXHQqIFx1Njc4NFx1OTAyMFVJXHU2NTg3XHU0RUY2XHU2MjEwXHU1MjlGXHU1NDBFXHVGRjBDVUlcdTVCRjlcdThDNjFcdTUxOERcdTg4QUJcdTk1MDBcdTZCQzFcdTY1RjZcdThDMDNcdTc1MjggXHJcblx0KiBcdTZDRThcdTYxMEZcdUZGMUFcdThGRDlcdTRFNEJcdTU0MEVVSVx1NUJGOVx1OEM2MVx1NURGMlx1N0VDRlx1ODhBQlx1OTUwMFx1NkJDMVx1NEU4Nlx1RkYwQ1x1OTcwMFx1ODk4MVx1NzlGQlx1OTY2NFx1NjI0MFx1NjcwOVx1NUJGOVx1OEJFNVx1NjU4N1x1NEVGNlx1NTQ4Q1VJXHU3NkY4XHU1MTczXHU1QkY5XHU4QzYxXHU0RUU1XHU1M0NBXHU1QjUwXHU1QkY5XHU4QzYxXHU3Njg0XHU1RjE1XHU3NTI4XHJcblx0Ki9cclxuXHRwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiBcdTZCQ0ZcdTRFMDBcdTVFMjdcdThDMDNcdTc1MjhcclxuXHQqIFx1OTAxQVx1OEZDN2NhblVwZGF0ZVx1NTNFRlx1NEVFNVx1NUYwMFx1NTQyRlx1NTE3M1x1OTVFRFx1OEMwM1x1NzUyOFxyXG5cdCogZHQgXHU0RTI0XHU1RTI3XHU4QzAzXHU3NTI4XHU3Njg0XHU2NUY2XHU5NUY0XHU1REVFXHVGRjBDXHU2QkVCXHU3OUQyXHJcblx0Ki9cclxuXHQvL3Byb3RlY3RlZCBvblVwZGF0ZShkdCA6bnVtYmVyKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1OEJCRVx1N0Y2RVx1NjYzRVx1NzkzQVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uU2hvdyguLi5wYXJhbXM6YW55W10pIHtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU4QkJFXHU3RjZFXHU0RTBEXHU2NjNFXHU3OTNBXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25IaWRlKCkge1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTVGNTNcdThGRDlcdTRFMkFVSVx1NzU0Q1x1OTc2Mlx1NjYyRlx1NTNFRlx1NEVFNVx1NjNBNVx1NjUzNlx1NEU4Qlx1NEVGNlx1NzY4NFx1NjVGNlx1NTAxOVxyXG5cdCAqIFx1NjI0Qlx1NjMwN1x1NjIxNlx1NTIxOVx1OUYyMFx1NjgwN1x1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVRvdWNoXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICogXHU4RkQ0XHU1NkRFXHU0RThCXHU0RUY2XHU2NjJGXHU1NDI2XHU1OTA0XHU3NDA2XHU0RTg2XHJcblx0ICogXHU1OTgyXHU2NzlDXHU1OTA0XHU3NDA2XHU0RTg2XHVGRjBDXHU5MEEzXHU0RTQ4XHU4RkQ5XHU0RTJBVUlcdTc1NENcdTk3NjJcdTUzRUZcdTRFRTVcdTYzQTVcdTY1MzZcdThGRDlcdTZCMjFUb3VjaFx1NTQwRVx1N0VFRFx1NzY4NE1vdmVcdTU0OENFbmRcdTRFOEJcdTRFRjZcclxuXHQgKiBcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdTU5MDRcdTc0MDZcdUZGMENcdTkwQTNcdTRFNDhcdThGRDlcdTRFMkFVSVx1NzU0Q1x1OTc2Mlx1NUMzMVx1NjVFMFx1NkNENVx1NjNBNVx1NjUzNlx1OEZEOVx1NkIyMVRvdWNoXHU1NDBFXHU3RUVEXHU3Njg0TW92ZVx1NTQ4Q0VuZFx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uVG91Y2hTdGFydGVkKEluR2VvbWV0cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCkgOlVJLkV2ZW50UmVwbHl7XHJcblx0Ly9cdHJldHVybiBVSS5FdmVudFJlcGx5LnVuSGFuZGxlZDsgLy9VSS5FdmVudFJlcGx5LmhhbmRsZWRcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MjRCXHU2MzA3XHU2MjE2XHU1MjE5XHU5RjIwXHU2ODA3XHU1MThEVUlcdTc1NENcdTk3NjJcdTRFMEFcdTc5RkJcdTUyQThcdTY1RjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvblRvdWNoTW92ZWQoSW5HZW9tZXRyeSA6VUkuR2VvbWV0cnksSW5Qb2ludGVyRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSA6VUkuRXZlbnRSZXBseXtcclxuXHQvL1x0cmV0dXJuIFVJLkV2ZW50UmVwbHkudW5IYW5kbGVkOyAvL1VJLkV2ZW50UmVwbHkuaGFuZGxlZFxyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyNEJcdTYzMDdcdTYyMTZcdTUyMTlcdTlGMjBcdTY4MDdcdTc5QkJcdTVGMDBVSVx1NzU0Q1x1OTc2Mlx1NjVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uVG91Y2hFbmRlZChJbkdlb21ldHJ5IDpVSS5HZW9tZXRyeSxJblBvaW50ZXJFdmVudDpVSS5Qb2ludGVyRXZlbnQpIDpVSS5FdmVudFJlcGx5e1xyXG5cdC8vXHRyZXR1cm4gVUkuRXZlbnRSZXBseS51bkhhbmRsZWQ7IC8vVUkuRXZlbnRSZXBseS5oYW5kbGVkXHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NUY1M1x1NTcyOFVJXHU3NTRDXHU5NzYyXHU0RTBBXHU4QzAzXHU3NTI4ZGV0ZWN0RHJhZy9kZXRlY3REcmFnSWZQcmVzc2VkXHU2NUY2XHU4OUU2XHU1M0QxXHU0RTAwXHU2QjIxXHJcblx0ICogXHU1M0VGXHU0RUU1XHU4OUU2XHU1M0QxXHU0RTAwXHU2QjIxXHU2MkQ2XHU2MkZEXHU0RThCXHU0RUY2XHU3Njg0XHU1RjAwXHU1OUNCXHU3NTFGXHU2MjEwXHJcblx0ICogXHU4RkQ0XHU1NkRFXHU0RTAwXHU2QjIxXHU3NTFGXHU2MjEwXHU3Njg0XHU2MkQ2XHU2MkZEXHU0RThCXHU0RUY2IG5ld0RyYWdEcm9wXHU1M0VGXHU0RUU1XHU3NTFGXHU2MjEwXHU0RTAwXHU2QjIxXHU0RThCXHU0RUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnRGV0ZWN0ZWQoSW5HZW9tZXRyeSA6VUkuR2VvbWV0cnksSW5Qb2ludGVyRXZlbnQ6VUkuUG9pbnRlckV2ZW50KTpVSS5EcmFnRHJvcE9wZXJhdGlvbiB7XHJcblx0Ly9cdHJldHVybiB0aGlzLm5ld0RyYWdEcm9wKG51bGwpO1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyRDZcdTYyRkRcdTY0Q0RcdTRGNUNcdTc1MUZcdTYyMTBcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDFcdTU0MEVcdTdFQ0ZcdThGQzdcdThGRDlcdTRFMkFVSVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqIFx1OEZENFx1NTZERXRydWVcdTc2ODRcdThCRERcdTg4NjhcdTc5M0FcdTU5MDRcdTc0MDZcdTRFODZcdThGRDlcdTZCMjFcdTRFOEJcdTRFRjZcdUZGMENcdTRFMERcdTRGMUFcdTUxOERcdTVGODBcdThGRDlcdTRFMkFVSVx1NzY4NFx1NEUwQlx1NEUwMFx1NUM0Mlx1NzY4NFVJXHU3RUU3XHU3RUVEXHU1MTkyXHU2Q0UxXHU4RkQ5XHU0RTJBXHU0RThCXHU0RUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnT3ZlcihJbkdlb21ldHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50LEluRHJhZ0Ryb3BPcGVyYXRpb246VUkuRHJhZ0Ryb3BPcGVyYXRpb24pOmJvb2xlYW4ge1xyXG5cdC8vXHRyZXR1cm4gdHJ1ZTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU1NzI4XHU4RkQ5XHU0RTJBVUlcdTkxQ0FcdTY1M0VcdTVCOENcdTYyMTBcdTY1RjZcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJvcChJbkdlb21ldHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50LEluRHJhZ0Ryb3BPcGVyYXRpb246VUkuRHJhZ0Ryb3BPcGVyYXRpb24pOmJvb2xlYW4ge1xyXG5cdC8vXHRyZXR1cm4gdHJ1ZTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU4RkRCXHU1MTY1XHU4RkQ5XHU0RTJBVUlcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyYWdFbnRlcihJbkdlb21ldHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50LEluRHJhZ0Ryb3BPcGVyYXRpb246VUkuRHJhZ0Ryb3BPcGVyYXRpb24pIHtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU3OUJCXHU1RjAwXHU4RkQ5XHU0RTJBVUlcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyYWdMZWF2ZShJbkdlb21ldHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSB7XHJcblx0Ly99XHJcblx0XHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHVGRjBDXHU2Q0ExXHU2NzA5XHU1QjhDXHU2MjEwXHU1QjhDXHU2MjEwXHU3Njg0XHU2MkQ2XHU2MkZEXHU0RThCXHU0RUY2XHU4MDBDXHU1M0Q2XHU2RDg4XHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnQ2FuY2VsbGVkKEluR2VvbWV0cnkgOlVJLkdlb21ldHJ5LEluRHJhZ0Ryb3BFdmVudDpVSS5Qb2ludGVyRXZlbnQpIHtcclxuXHQvL31cclxuXHRcclxufVxyXG4iLCAiXHVGRUZGXHJcbi8qKlxyXG4gKiBBVVRPIEdFTkVSQVRFIEJZIFVJIEVESVRPUi5cclxuICogV0FSTklORzogRE8gTk9UIE1PRElGWSBUSElTIEZJTEUsTUFZIENBVVNFIENPREUgTE9TVC5cclxuICogQVVUSE9SOiBcdTcyMzFcdTYzMjRcdTcyNTlcdTgxOEZcdTc2ODRcdTcyNUJcclxuICogVUk6IFVJL01haW5VSS51aVxyXG4gKiBUSU1FOiAyMDIzLjA2LjMwLTEwLjQ5LjA4XHJcbiovXHJcblxyXG5cclxuXHJcbkBVSS5VSUNhbGxPbmx5KCdVSS9NYWluVUkudWknKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVUlfR2VuZXJhdGUgZXh0ZW5kcyBVSS5VSUJlaGF2aW9yIHtcclxuXHRAVUkuVUlNYXJrUGF0aCgnUm9vdENhbnZhcy9oZWFsdGhCYXInKVxuICAgIHB1YmxpYyBoZWFsdGhCYXI6IFVJLlByb2dyZXNzQmFyPXVuZGVmaW5lZDtcbiAgICBAVUkuVUlNYXJrUGF0aCgnUm9vdENhbnZhcy9lbmVyZ3lCYXInKVxuICAgIHB1YmxpYyBlbmVyZ3lCYXI6IFVJLlByb2dyZXNzQmFyPXVuZGVmaW5lZDtcbiAgICBAVUkuVUlNYXJrUGF0aCgnUm9vdENhbnZhcy9oZWFsdGhUZXh0JylcbiAgICBwdWJsaWMgaGVhbHRoVGV4dDogVUkuVGV4dEJsb2NrPXVuZGVmaW5lZDtcbiAgICBAVUkuVUlNYXJrUGF0aCgnUm9vdENhbnZhcy9lbmVyZ3lUZXh0JylcbiAgICBwdWJsaWMgZW5lcmd5VGV4dDogVUkuVGV4dEJsb2NrPXVuZGVmaW5lZDtcbiAgICBAVUkuVUlNYXJrUGF0aCgnUm9vdENhbnZhcy9sZXZlbFRleHQnKVxuICAgIHB1YmxpYyBsZXZlbFRleHQ6IFVJLlRleHRCbG9jaz11bmRlZmluZWQ7XG4gICAgQFVJLlVJTWFya1BhdGgoJ1Jvb3RDYW52YXMvaGVhbHRoQmFyXzEnKVxuICAgIHB1YmxpYyBoZWFsdGhCYXJfMTogVUkuUHJvZ3Jlc3NCYXI9dW5kZWZpbmVkO1xuICAgIEBVSS5VSU1hcmtQYXRoKCdSb290Q2FudmFzL2xldmVsVGV4dF8xJylcbiAgICBwdWJsaWMgbGV2ZWxUZXh0XzE6IFVJLlRleHRCbG9jaz11bmRlZmluZWQ7XG4gICAgQFVJLlVJTWFya1BhdGgoJ1Jvb3RDYW52YXMvbW9uZXRUZXh0JylcbiAgICBwdWJsaWMgbW9uZXRUZXh0OiBVSS5UZXh0QmxvY2s9dW5kZWZpbmVkO1xuICAgIEBVSS5VSU1hcmtQYXRoKCdSb290Q2FudmFzL2Jhc2ljRGF0YUJ0bicpXG4gICAgcHVibGljIGJhc2ljRGF0YUJ0bjogVUkuU3RhbGVCdXR0b249dW5kZWZpbmVkO1xuICAgIEBVSS5VSU1hcmtQYXRoKCdSb290Q2FudmFzL2l0ZW1CdG4nKVxuICAgIHB1YmxpYyBpdGVtQnRuOiBVSS5TdGFsZUJ1dHRvbj11bmRlZmluZWQ7XG4gICAgQFVJLlVJTWFya1BhdGgoJ1Jvb3RDYW52YXMvc2hvcEJ0bicpXG4gICAgcHVibGljIHNob3BCdG46IFVJLlN0YWxlQnV0dG9uPXVuZGVmaW5lZDtcbiAgICBAVUkuVUlNYXJrUGF0aCgnUm9vdENhbnZhcy9jbG9zZUJ0bicpXG4gICAgcHVibGljIGNsb3NlQnRuOiBVSS5TdGFsZUJ1dHRvbj11bmRlZmluZWQ7XG4gICAgXG5cclxuIFxyXG5cdC8qKlxyXG5cdCogb25TdGFydCBcdTRFNEJcdTUyNERcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkF3YWtlKCkge1xyXG5cdH1cclxuXHQgXHJcbn1cclxuICIsICJcdUZFRkZpbXBvcnQgR2FtZURhdGFTZXJ2ZXIgZnJvbSBcIi4uL0NhY2hlL0dhbWVEYXRhU2VydmVyXCI7XHJcbmltcG9ydCBQbGF5ZXJJbmZvIGZyb20gXCIuLi9lbnRpdHkvUGxheWVySW5mb1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1ODhDNVx1NTkwN1x1NkEyMVx1NTc1N1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1aXBNb2R1bGVTIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEVxdWlwTW9kdWxlUyA9IG5ldyBFcXVpcE1vZHVsZVMoKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIEluaXQoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODhDNVx1NTkwN1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU3dpdGNoVXNpbmdFcXVpcG1lbnRJdGVtKHBsYXllcjpHYW1lcGxheS5QbGF5ZXIsIGVxdWlwSXRlbUlEOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICBsZXQgcGxheWVySW5mbzpQbGF5ZXJJbmZvID0gR2FtZURhdGFTZXJ2ZXIuZ2V0UGxheWVySW5mbyhwbGF5ZXIpXHJcbiAgICAgICAgaWYoIXBsYXllckluZm8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTdCMkNcdTRFMDBcdTZCMjFcdTg4QzVcdTU5MDdcclxuICAgICAgICBpZihwbGF5ZXJJbmZvLmN1clVzaW5nSXRlbUlEID09IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkVxdWlwKHBsYXllciwgZXF1aXBJdGVtSUQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU1Mzc4XHU0RTBCXHJcbiAgICAgICAgZWxzZSBpZihwbGF5ZXJJbmZvLmN1clVzaW5nSXRlbUlEID09IGVxdWlwSXRlbUlEKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5VbkVxdWlwKHBsYXllciwgcGxheWVySW5mby5jdXJVc2luZ0l0ZW1JRClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTUyMDdcdTYzNjJcdTUzRTZcdTRFMDBcdTRFMkFcclxuICAgICAgICBlbHNlIGlmKHBsYXllckluZm8uY3VyVXNpbmdJdGVtSUQgIT0gXCJcIiAmJiBwbGF5ZXJJbmZvLmN1clVzaW5nSXRlbUlEICE9IGVxdWlwSXRlbUlEKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5VbkVxdWlwKHBsYXllciwgcGxheWVySW5mby5jdXJVc2luZ0l0ZW1JRClcclxuICAgICAgICAgICAgdGhpcy5FcXVpcChwbGF5ZXIsIGVxdWlwSXRlbUlEKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU1Mzc4XHU4RjdEXHU4OEM1XHU1OTA3XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyIFxyXG4gICAgICogQHBhcmFtIGN1clVzaW5nSXRlbUlEIFxyXG4gICAgICovXHJcbiAgICBVbkVxdWlwKHBsYXllcjogR2FtZXBsYXkuUGxheWVyLCBjdXJVc2luZ0l0ZW1JRDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHBsYXllckluZm86UGxheWVySW5mbyA9IEdhbWVEYXRhU2VydmVyLmdldFBsYXllckluZm8ocGxheWVyKVxyXG4gICAgICAgIGlmKHBsYXllckluZm8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwbGF5ZXJJbmZvLmN1clVzaW5nSXRlbUlEID0gXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTRGN0ZcdTc1MjhcdTRFMDBcdTRFMkFcdTg4QzVcdTU5MDdcclxuICAgICAqIEBwYXJhbSBwbGF5ZXIgXHJcbiAgICAgKiBAcGFyYW0gZXF1aXBJdGVtSUQgXHJcbiAgICAgKi9cclxuICAgIEVxdWlwKHBsYXllcjogR2FtZXBsYXkuUGxheWVyLCBlcXVpcEl0ZW1JRDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHBsYXllckluZm86UGxheWVySW5mbyA9IEdhbWVEYXRhU2VydmVyLmdldFBsYXllckluZm8ocGxheWVyKVxyXG4gICAgICAgIGlmKHBsYXllckluZm8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwbGF5ZXJJbmZvLmN1clVzaW5nSXRlbUlEID0gZXF1aXBJdGVtSURcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCAiXHVGRUZGXHJcbi8qKlxyXG4gKiBcdTYyODBcdTgwRkRcdTZBMjFcdTU3NTdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraWxsTW9kdWxlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogU2tpbGxNb2R1bGUgPSBuZXcgU2tpbGxNb2R1bGUoKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHU3NTFGXHU2MjEwXHU2MjgwXHU4MEZEXHJcbiAgICBzdGF0aWMgR2VuZXJhdGVTa2lsbChwbGF5ZXI6IEdhbWVwbGF5LlBsYXllciwgc2tpbGxJbmZvOiB2b2lkKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG59IiwgIlx1RkVGRlxyXG5AQ29yZS5DbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOUEMgZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIG9uU3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcblxyXG4gICAgICAgIC8vXHU5MDFBXHU4RkM3R1VJRFx1NjI3RVx1NTIzME5QQ1x1NUJGOVx1OEM2MVxyXG4gICAgICAgIC8vIGxldCBOUEM1ID0gYXdhaXQgQ29yZS5HYW1lT2JqZWN0LmFzeW5jRmluZChcIjM5QTk4MjM5XCIpIGFzIEdhbWVwbGF5Lk5QQztcclxuXHJcbiAgICAgICAgLy8gLy9OUENcdTY1NzBcdTYzNkVcdTUxQzZcdTU5MDdcdTU5N0RcdTU0MEVcdTYyNjdcdTg4NENcdTc2RjhcdTVFOTRcdTkwM0JcdThGOTFcclxuICAgICAgICAvLyBOUEM1LnJlYWR5KCkudGhlbigoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vICAgICAvL1x1OTc1RVx1NzNBOVx1NUJCNlx1NUJGOVx1OEM2MVx1NEYxQVx1NTcyODVzXHU1NDBFXHU4RkRCXHU4ODRDXHU1QkZCXHU4REVGXHJcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gXHU4QkJFXHU3RjZFXHU4OUQyXHU4MjcyXHU3OUZCXHU1MkE4XHU5MDFGXHU1RUE2XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBOUEM1Lm1heFdhbGtTcGVlZCA9IDIwMDtcclxuICAgICAgICAvLyAgICAgICAgIC8vXHU4QkJFXHU1QjlBXHU3OUZCXHU1MkE4XHU3RUM4XHU3MEI5XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgbG9jYXRpb25BID0gbmV3IFR5cGUuVmVjdG9yKDMwNi45OTAsLTk1OC4wNjAsNDEuMDAwKVxyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJNb3ZlIHRvXCIpXHJcbiAgICAgICAgLy8gICAgICAgICAvL1x1NjI2N1x1ODg0Q21vdmV0b1x1NTFGRFx1NjU3MFxyXG4gICAgICAgIC8vICAgICAgICAgR2FtZXBsYXkubW92ZVRvKE5QQzUsIGxvY2F0aW9uQSwgMywgKCk9PntcclxuICAgICAgICAvLyAgICAgICAgICAgICBOUEM1Lm1heFdhbGtTcGVlZCA9IDIwMDtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpXHJcbiAgICAgICAgLy8gICAgICAgICB9LCAoKT0+e1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbFwiKVxyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU0NjhcdTY3MUZcdTUxRkRcdTY1NzAgXHU2QkNGXHU1RTI3XHU2MjY3XHU4ODRDXHJcbiAgICAgKiBcdTZCNjRcdTUxRkRcdTY1NzBcdTYyNjdcdTg4NENcdTk3MDBcdTg5ODFcdTVDMDZ0aGlzLnVzZVVwZGF0ZVx1OEQ0Qlx1NTAzQ1x1NEUzQXRydWVcclxuICAgICAqIEBwYXJhbSBkdCBcdTVGNTNcdTUyNERcdTVFMjdcdTRFMEVcdTRFMEFcdTRFMDBcdTVFMjdcdTc2ODRcdTVFRjZcdThGREYgLyBcdTc5RDJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uVXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1ODExQVx1NjcyQ1x1ODhBQlx1OTUwMFx1NkJDMVx1NjVGNlx1NjcwMFx1NTQwRVx1NEUwMFx1NUUyN1x1NjI2N1x1ODg0Q1x1NUI4Q1x1OEMwM1x1NzUyOFx1NkI2NFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbn0iLCAiXHVGRUZGXHJcbi8qKiBcclxuICogQVVUSE9SOiBcdTcyMzFcdTYzMjRcdTcyNTlcdTgxOEZcdTc2ODRcdTcyNUJcclxuICogVElNRTogMjAyMy4wNi4yOS0yMi40Mi40OVxyXG4gKi9cclxuXHJcbmltcG9ydCBQbGF5ZXJNb2R1bGVDIGZyb20gXCIuLi9Nb2R1bGVDL1BsYXllck1vZHVsZUNcIjtcclxuaW1wb3J0IEJhc2ljRGF0YVVJX0dlbmVyYXRlIGZyb20gXCIuLi91aS1nZW5lcmF0ZS9CYXNpY0RhdGFVSV9nZW5lcmF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNEYXRhVUkgZXh0ZW5kcyBCYXNpY0RhdGFVSV9HZW5lcmF0ZSB7XHJcblxyXG5cdC8qKiBcclxuXHQgKiBcdTY3ODRcdTkwMjBVSVx1NjU4N1x1NEVGNlx1NjIxMFx1NTI5Rlx1NTQwRVx1RkYwQ1x1NTcyOFx1NTQwOFx1OTAwMlx1NzY4NFx1NjVGNlx1NjczQVx1NjcwMFx1NTE0OFx1NTIxRFx1NTlDQlx1NTMxNlx1NEUwMFx1NkIyMSBcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgb25TdGFydCgpIHtcclxuXHRcdC8vXHU4QkJFXHU3RjZFXHU4MEZEXHU1NDI2XHU2QkNGXHU1RTI3XHU4OUU2XHU1M0Qxb25VcGRhdGVcclxuXHRcdHRoaXMuY2FuVXBkYXRlID0gZmFsc2U7XHJcblx0XHR0aGlzLmxheWVyID0gVUkuVUlMYXllck1pZGRsZTtcclxuXHJcblx0XHQvLzRcdTRFMkFcdTYzMDlcdTk0QUVcclxuXHRcdGxldCBhZGRCdG5MaXN0ID0gW1xyXG5cdFx0XHR7IGJ0blVJOiB0aGlzLmFkZE1lbGVlQnRuLCBhdHRyaWJ1dGVOYW1lOiBcIm1lbGVlUG93ZXJcIiB9LFxyXG5cdFx0XHR7IGJ0blVJOiB0aGlzLmFkZFN3b3JkQnRuLCBhdHRyaWJ1dGVOYW1lOiBcInN3b3JkUG93ZXJcIiB9LFxyXG5cdFx0XHR7IGJ0blVJOiB0aGlzLmFkZEZydWl0QnRuLCBhdHRyaWJ1dGVOYW1lOiBcImZydWl0UG93ZXJcIiB9LFxyXG5cdFx0XHR7IGJ0blVJOiB0aGlzLmFkZERlZmVuc2VCdG4sIGF0dHJpYnV0ZU5hbWU6IFwiZGVmZW5zZVBvd2VyXCIgfSxcclxuXHRcdF1cclxuXHJcblx0XHQvL1x1N0VEMVx1NUI5QTRcdTRFMkFcdTZERkJcdTUyQTBcdTYzMDlcdTk0QUVcdTRFOEJcdTRFRjZcclxuXHRcdGFkZEJ0bkxpc3QuZm9yRWFjaCgoaW5mbykgPT4ge1xyXG5cdFx0XHRpbmZvLmJ0blVJLm9uQ2xpY2tlZC5hZGQoKCkgPT4ge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRsZXQgcmVtYWluUG93ZXIgPSBQbGF5ZXJNb2R1bGVDLkdldEluc3RhbmNlKCkuR2V0UmVtYWluUG93ZXIoKTtcclxuXHRcdFx0XHRcdGlmIChyZW1haW5Qb3dlciA8PSAwKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiXHU4OUQyXHU4MjcyXHU4MEZEXHU1MjlCXHU3MEI5XHU0RTBEXHU4REIzXCIpXHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly9cdTY3MkNcdTU3MzBcdTUzRDhcdTkxQ0ZcclxuXHRcdFx0XHRcdFBsYXllck1vZHVsZUMucGxheWVySW5mb1tpbmZvLmF0dHJpYnV0ZU5hbWVdIC09IDFcclxuXHRcdFx0XHRcdC8vVUlcdTY1ODdcdTY3MkNcclxuXHRcdFx0XHRcdHRoaXNbaW5mby5hdHRyaWJ1dGVOYW1lICsgXCJUZXh0XCJdLlRleHQgPSBQbGF5ZXJNb2R1bGVDLnBsYXllckluZm9baW5mby5hdHRyaWJ1dGVOYW1lXVxyXG5cdFx0XHRcdFx0Ly9cdTkwMUFcdTc3RTVcdTY3MERcdTUyQTFcdTU2NjhcdTY1MzlcdTUzRDhcdTVDNUVcdTYwMjdcclxuXHRcdFx0XHRcdEV2ZW50cy5kaXNwYXRjaFRvU2VydmVyKFwiQWRkQmFzaWNBdHRyaWJ1dGVcIiwgaW5mby5hdHRyaWJ1dGVOYW1lLCAxKVxyXG5cdFx0XHRcdFx0Ly9cdTVCQTJcdTYyMzdcdTdBRUZcdTVGMzlcdTUxRkFcdTU4OUVcdTUyQTBcdTYyMTBcdTUyOUZcdTYzRDBcdTc5M0FcclxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlx1NkQ4OFx1ODAxN1x1ODBGRFx1NTI5Qlx1NzBCOVx1OTUxOVx1OEJFRlx1RkYxQVwiICsgZXJyb3IpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8qKiBcclxuXHQgKiBcdTY3ODRcdTkwMjBVSVx1NjU4N1x1NEVGNlx1NjIxMFx1NTI5Rlx1NTQwRVx1RkYwQ29uU3RhcnRcdTRFNEJcdTU0MEUgXHJcblx0ICogXHU1QkY5XHU0RThFVUlcdTc2ODRcdTY4MzlcdTgyODJcdTcwQjlcdTc2ODRcdTZERkJcdTUyQTBcdTY0Q0RcdTRGNUNcdUZGMENcdThGREJcdTg4NENcdThDMDNcdTc1MjhcclxuXHQgKiBcdTZDRThcdTYxMEZcdUZGMUFcdThCRTVcdTRFOEJcdTRFRjZcdTUzRUZcdTgwRkRcdTRGMUFcdTU5MUFcdTZCMjFcdThDMDNcdTc1MjhcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgb25BZGRlZCgpIHtcclxuXHR9XHJcblxyXG5cdC8qKiBcclxuXHQgKiBcdTY3ODRcdTkwMjBVSVx1NjU4N1x1NEVGNlx1NjIxMFx1NTI5Rlx1NTQwRVx1RkYwQ29uQWRkZWRcdTRFNEJcdTU0MEVcclxuXHQgKiBcdTVCRjlcdTRFOEVVSVx1NzY4NFx1NjgzOVx1ODI4Mlx1NzBCOVx1NzY4NFx1NzlGQlx1OTY2NFx1NjRDRFx1NEY1Q1x1RkYwQ1x1OEZEQlx1ODg0Q1x1OEMwM1x1NzUyOFxyXG5cdCAqIFx1NkNFOFx1NjEwRlx1RkYxQVx1OEJFNVx1NEU4Qlx1NEVGNlx1NTNFRlx1ODBGRFx1NEYxQVx1NTkxQVx1NkIyMVx1OEMwM1x1NzUyOFxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBvblJlbW92ZWQoKSB7XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0KiBcdTY3ODRcdTkwMjBVSVx1NjU4N1x1NEVGNlx1NjIxMFx1NTI5Rlx1NTQwRVx1RkYwQ1VJXHU1QkY5XHU4QzYxXHU1MThEXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU4QzAzXHU3NTI4IFxyXG5cdCogXHU2Q0U4XHU2MTBGXHVGRjFBXHU4RkQ5XHU0RTRCXHU1NDBFVUlcdTVCRjlcdThDNjFcdTVERjJcdTdFQ0ZcdTg4QUJcdTk1MDBcdTZCQzFcdTRFODZcdUZGMENcdTk3MDBcdTg5ODFcdTc5RkJcdTk2NjRcdTYyNDBcdTY3MDlcdTVCRjlcdThCRTVcdTY1ODdcdTRFRjZcdTU0OENVSVx1NzZGOFx1NTE3M1x1NUJGOVx1OEM2MVx1NEVFNVx1NTNDQVx1NUI1MFx1NUJGOVx1OEM2MVx1NzY4NFx1NUYxNVx1NzUyOFxyXG5cdCovXHJcblx0cHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogXHU2QkNGXHU0RTAwXHU1RTI3XHU4QzAzXHU3NTI4XHJcblx0KiBcdTkwMUFcdThGQzdjYW5VcGRhdGVcdTUzRUZcdTRFRTVcdTVGMDBcdTU0MkZcdTUxNzNcdTk1RURcdThDMDNcdTc1MjhcclxuXHQqIGR0IFx1NEUyNFx1NUUyN1x1OEMwM1x1NzUyOFx1NzY4NFx1NjVGNlx1OTVGNFx1NURFRVx1RkYwQ1x1NkJFQlx1NzlEMlxyXG5cdCovXHJcblx0Ly9wcm90ZWN0ZWQgb25VcGRhdGUoZHQgOm51bWJlcikge1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdThCQkVcdTdGNkVcdTY2M0VcdTc5M0FcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvblNob3coLi4ucGFyYW1zOmFueVtdKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1OEJCRVx1N0Y2RVx1NEUwRFx1NjYzRVx1NzkzQVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uSGlkZSgpIHtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU1RjUzXHU4RkQ5XHU0RTJBVUlcdTc1NENcdTk3NjJcdTY2MkZcdTUzRUZcdTRFRTVcdTYzQTVcdTY1MzZcdTRFOEJcdTRFRjZcdTc2ODRcdTY1RjZcdTUwMTlcclxuXHQgKiBcdTYyNEJcdTYzMDdcdTYyMTZcdTUyMTlcdTlGMjBcdTY4MDdcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFUb3VjaFx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqIFx1OEZENFx1NTZERVx1NEU4Qlx1NEVGNlx1NjYyRlx1NTQyNlx1NTkwNFx1NzQwNlx1NEU4NlxyXG5cdCAqIFx1NTk4Mlx1Njc5Q1x1NTkwNFx1NzQwNlx1NEU4Nlx1RkYwQ1x1OTBBM1x1NEU0OFx1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU1M0VGXHU0RUU1XHU2M0E1XHU2NTM2XHU4RkQ5XHU2QjIxVG91Y2hcdTU0MEVcdTdFRURcdTc2ODRNb3ZlXHU1NDhDRW5kXHU0RThCXHU0RUY2XHJcblx0ICogXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU1OTA0XHU3NDA2XHVGRjBDXHU5MEEzXHU0RTQ4XHU4RkQ5XHU0RTJBVUlcdTc1NENcdTk3NjJcdTVDMzFcdTY1RTBcdTZDRDVcdTYzQTVcdTY1MzZcdThGRDlcdTZCMjFUb3VjaFx1NTQwRVx1N0VFRFx1NzY4NE1vdmVcdTU0OENFbmRcdTRFOEJcdTRFRjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvblRvdWNoU3RhcnRlZChJbkdlb21ldHJ5IDpVSS5HZW9tZXRyeSxJblBvaW50ZXJFdmVudDpVSS5Qb2ludGVyRXZlbnQpIDpVSS5FdmVudFJlcGx5e1xyXG5cdC8vXHRyZXR1cm4gVUkuRXZlbnRSZXBseS51bkhhbmRsZWQ7IC8vVUkuRXZlbnRSZXBseS5oYW5kbGVkXHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjI0Qlx1NjMwN1x1NjIxNlx1NTIxOVx1OUYyMFx1NjgwN1x1NTE4RFVJXHU3NTRDXHU5NzYyXHU0RTBBXHU3OUZCXHU1MkE4XHU2NUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ub3VjaE1vdmVkKEluR2VvbWV0cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCkgOlVJLkV2ZW50UmVwbHl7XHJcblx0Ly9cdHJldHVybiBVSS5FdmVudFJlcGx5LnVuSGFuZGxlZDsgLy9VSS5FdmVudFJlcGx5LmhhbmRsZWRcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MjRCXHU2MzA3XHU2MjE2XHU1MjE5XHU5RjIwXHU2ODA3XHU3OUJCXHU1RjAwVUlcdTc1NENcdTk3NjJcdTY1RjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvblRvdWNoRW5kZWQoSW5HZW9tZXRyeSA6VUkuR2VvbWV0cnksSW5Qb2ludGVyRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSA6VUkuRXZlbnRSZXBseXtcclxuXHQvL1x0cmV0dXJuIFVJLkV2ZW50UmVwbHkudW5IYW5kbGVkOyAvL1VJLkV2ZW50UmVwbHkuaGFuZGxlZFxyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTVGNTNcdTU3MjhVSVx1NzU0Q1x1OTc2Mlx1NEUwQVx1OEMwM1x1NzUyOGRldGVjdERyYWcvZGV0ZWN0RHJhZ0lmUHJlc3NlZFx1NjVGNlx1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVxyXG5cdCAqIFx1NTNFRlx1NEVFNVx1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVx1NjJENlx1NjJGRFx1NEU4Qlx1NEVGNlx1NzY4NFx1NUYwMFx1NTlDQlx1NzUxRlx1NjIxMFxyXG5cdCAqIFx1OEZENFx1NTZERVx1NEUwMFx1NkIyMVx1NzUxRlx1NjIxMFx1NzY4NFx1NjJENlx1NjJGRFx1NEU4Qlx1NEVGNiBuZXdEcmFnRHJvcFx1NTNFRlx1NEVFNVx1NzUxRlx1NjIxMFx1NEUwMFx1NkIyMVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ0RldGVjdGVkKEluR2VvbWV0cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCk6VUkuRHJhZ0Ryb3BPcGVyYXRpb24ge1xyXG5cdC8vXHRyZXR1cm4gdGhpcy5uZXdEcmFnRHJvcChudWxsKTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU3RUNGXHU4RkM3XHU4RkQ5XHU0RTJBVUlcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ092ZXIoSW5HZW9tZXRyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCxJbkRyYWdEcm9wT3BlcmF0aW9uOlVJLkRyYWdEcm9wT3BlcmF0aW9uKTpib29sZWFuIHtcclxuXHQvL1x0cmV0dXJuIHRydWU7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1NTcyOFx1OEZEOVx1NEUyQVVJXHU5MUNBXHU2NTNFXHU1QjhDXHU2MjEwXHU2NUY2XHJcblx0ICogXHU4RkQ0XHU1NkRFdHJ1ZVx1NzY4NFx1OEJERFx1ODg2OFx1NzkzQVx1NTkwNFx1NzQwNlx1NEU4Nlx1OEZEOVx1NkIyMVx1NEU4Qlx1NEVGNlx1RkYwQ1x1NEUwRFx1NEYxQVx1NTE4RFx1NUY4MFx1OEZEOVx1NEUyQVVJXHU3Njg0XHU0RTBCXHU0RTAwXHU1QzQyXHU3Njg0VUlcdTdFRTdcdTdFRURcdTUxOTJcdTZDRTFcdThGRDlcdTRFMkFcdTRFOEJcdTRFRjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyb3AoSW5HZW9tZXRyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCxJbkRyYWdEcm9wT3BlcmF0aW9uOlVJLkRyYWdEcm9wT3BlcmF0aW9uKTpib29sZWFuIHtcclxuXHQvL1x0cmV0dXJuIHRydWU7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1OEZEQlx1NTE2NVx1OEZEOVx1NEUyQVVJXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnRW50ZXIoSW5HZW9tZXRyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCxJbkRyYWdEcm9wT3BlcmF0aW9uOlVJLkRyYWdEcm9wT3BlcmF0aW9uKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1NzlCQlx1NUYwMFx1OEZEOVx1NEUyQVVJXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnTGVhdmUoSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCxJbkRyYWdEcm9wT3BlcmF0aW9uOlVJLkRyYWdEcm9wT3BlcmF0aW9uKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1RkYwQ1x1NkNBMVx1NjcwOVx1NUI4Q1x1NjIxMFx1NUI4Q1x1NjIxMFx1NzY4NFx1NjJENlx1NjJGRFx1NEU4Qlx1NEVGNlx1ODAwQ1x1NTNENlx1NkQ4OFx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ0NhbmNlbGxlZChJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50LEluRHJhZ0Ryb3BPcGVyYXRpb246VUkuRHJhZ0Ryb3BPcGVyYXRpb24pIHtcclxuXHQvL31cclxuXHJcbn1cclxuIiwgIlx1RkVGRlxyXG4vKipcclxuICogQVVUTyBHRU5FUkFURSBCWSBVSSBFRElUT1IuXHJcbiAqIFdBUk5JTkc6IERPIE5PVCBNT0RJRlkgVEhJUyBGSUxFLE1BWSBDQVVTRSBDT0RFIExPU1QuXHJcbiAqIEFVVEhPUjogXHU3MjMxXHU2MzI0XHU3MjU5XHU4MThGXHU3Njg0XHU3MjVCXHJcbiAqIFVJOiBVSS9CYXNpY0RhdGFVSS51aVxyXG4gKiBUSU1FOiAyMDIzLjA2LjMwLTEwLjQ5LjA4XHJcbiovXHJcblxyXG5cclxuXHJcbkBVSS5VSUNhbGxPbmx5KCdVSS9CYXNpY0RhdGFVSS51aScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljRGF0YVVJX0dlbmVyYXRlIGV4dGVuZHMgVUkuVUlCZWhhdmlvciB7XHJcblx0QFVJLlVJTWFya1BhdGgoJ1Jvb3RDYW52YXMvbWVsZWVQb3dlclRleHQnKVxuICAgIHB1YmxpYyBtZWxlZVBvd2VyVGV4dDogVUkuVGV4dEJsb2NrPXVuZGVmaW5lZDtcbiAgICBAVUkuVUlNYXJrUGF0aCgnUm9vdENhbnZhcy9kZWZlbnNlUG93ZXJUZXh0JylcbiAgICBwdWJsaWMgZGVmZW5zZVBvd2VyVGV4dDogVUkuVGV4dEJsb2NrPXVuZGVmaW5lZDtcbiAgICBAVUkuVUlNYXJrUGF0aCgnUm9vdENhbnZhcy9zd29yZFBvd2VyVGV4dCcpXG4gICAgcHVibGljIHN3b3JkUG93ZXJUZXh0OiBVSS5UZXh0QmxvY2s9dW5kZWZpbmVkO1xuICAgIEBVSS5VSU1hcmtQYXRoKCdSb290Q2FudmFzL2ZydWl0UG93ZXJUZXh0JylcbiAgICBwdWJsaWMgZnJ1aXRQb3dlclRleHQ6IFVJLlRleHRCbG9jaz11bmRlZmluZWQ7XG4gICAgQFVJLlVJTWFya1BhdGgoJ1Jvb3RDYW52YXMvYWRkTWVsZWVCdG4nKVxuICAgIHB1YmxpYyBhZGRNZWxlZUJ0bjogVUkuU3RhbGVCdXR0b249dW5kZWZpbmVkO1xuICAgIEBVSS5VSU1hcmtQYXRoKCdSb290Q2FudmFzL2FkZERlZmVuc2VCdG4nKVxuICAgIHB1YmxpYyBhZGREZWZlbnNlQnRuOiBVSS5TdGFsZUJ1dHRvbj11bmRlZmluZWQ7XG4gICAgQFVJLlVJTWFya1BhdGgoJ1Jvb3RDYW52YXMvYWRkU3dvcmRCdG4nKVxuICAgIHB1YmxpYyBhZGRTd29yZEJ0bjogVUkuU3RhbGVCdXR0b249dW5kZWZpbmVkO1xuICAgIEBVSS5VSU1hcmtQYXRoKCdSb290Q2FudmFzL2FkZEZydWl0QnRuJylcbiAgICBwdWJsaWMgYWRkRnJ1aXRCdG46IFVJLlN0YWxlQnV0dG9uPXVuZGVmaW5lZDtcbiAgICBcblxyXG4gXHJcblx0LyoqXHJcblx0KiBvblN0YXJ0IFx1NEU0Qlx1NTI0RFx1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVxyXG5cdCovXHJcblx0cHJvdGVjdGVkIG9uQXdha2UoKSB7XHJcblx0fVxyXG5cdCBcclxufVxyXG4gIiwgIlx1RkVGRlxyXG5cclxuLyoqXHJcbiAqIFx1NzI2OVx1NTRDMVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSAge1xyXG5cclxufSIsICJcdUZFRkZcclxuQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0SW5mbyBleHRlbmRzIENvcmUuU2NyaXB0IHtcclxuXHJcbiAgICAvKiogXHU1RjUzXHU4MTFBXHU2NzJDXHU4OEFCXHU1QjlFXHU0RjhCXHU1NDBFXHVGRjBDXHU0RjFBXHU1NzI4XHU3QjJDXHU0RTAwXHU1RTI3XHU2NkY0XHU2NUIwXHU1MjREXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU0NjhcdTY3MUZcdTUxRkRcdTY1NzAgXHU2QkNGXHU1RTI3XHU2MjY3XHU4ODRDXHJcbiAgICAgKiBcdTZCNjRcdTUxRkRcdTY1NzBcdTYyNjdcdTg4NENcdTk3MDBcdTg5ODFcdTVDMDZ0aGlzLnVzZVVwZGF0ZVx1OEQ0Qlx1NTAzQ1x1NEUzQXRydWVcclxuICAgICAqIEBwYXJhbSBkdCBcdTVGNTNcdTUyNERcdTVFMjdcdTRFMEVcdTRFMEFcdTRFMDBcdTVFMjdcdTc2ODRcdTVFRjZcdThGREYgLyBcdTc5RDJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uVXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1ODExQVx1NjcyQ1x1ODhBQlx1OTUwMFx1NkJDMVx1NjVGNlx1NjcwMFx1NTQwRVx1NEUwMFx1NUUyN1x1NjI2N1x1ODg0Q1x1NUI4Q1x1OEMwM1x1NzUyOFx1NkI2NFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbn0iLCAiXHVGRUZGXHJcbi8qKlxyXG4gKiBcdTYyODBcdTgwRkRcdTRGRTFcdTYwNkZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraWxsSW5mb3tcclxuXHJcbiAgIFxyXG59IiwgIlxyXG4vKipcclxuICogXHU0RUZCXHU1MkExXHU0RkUxXHU2MDZGXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrSW5mbyB7XHJcblxyXG4gICAgcHVibGljIGlkOiBzdHJpbmdcclxuICAgIC8qKlxyXG4gICAgICogXHU0RUZCXHU1MkExXHU1NDBEXHU3OUYwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmdcclxuICAgIC8qKlxyXG4gICAgICogXHU0RUZCXHU1MkExXHU2M0NGXHU4RkYwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nXHJcbiAgICAvKipcclxuICAgICAqIFx1NjU0Q1x1NEVCQUlEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmVteUlEOiBzdHJpbmdcclxuICAgIC8qKlxyXG4gICAgICogXHU1MUZCXHU2NzQwXHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBraWxsTnVtYmVyOiBudW1iZXJcclxuXHJcbiAgICBcclxufSIsICJcdUZFRkZcclxuLyoqXHJcbiAqIEFVVE8gR0VORVJBVEUgQlkgVUkgRURJVE9SLlxyXG4gKiBXQVJOSU5HOiBETyBOT1QgTU9ESUZZIFRISVMgRklMRSxNQVkgQ0FVU0UgQ09ERSBMT1NULlxyXG4gKiBBVVRIT1I6IFx1NzIzMVx1NjMyNFx1NzI1OVx1ODE4Rlx1NzY4NFx1NzI1QlxyXG4gKiBVSTogVUkvRGVmYXVsdFVJLnVpXHJcbiAqIFRJTUU6IDIwMjMuMDYuMzAtMTAuNDkuMDhcclxuKi9cclxuXHJcblxyXG5cclxuQFVJLlVJQ2FsbE9ubHkoJ1VJL0RlZmF1bHRVSS51aScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRVSV9HZW5lcmF0ZSBleHRlbmRzIFVJLlVJQmVoYXZpb3Ige1xyXG5cdFxuXHJcbiBcclxuXHQvKipcclxuXHQqIG9uU3RhcnQgXHU0RTRCXHU1MjREXHU4OUU2XHU1M0QxXHU0RTAwXHU2QjIxXHJcblx0Ki9cclxuXHRwcm90ZWN0ZWQgb25Bd2FrZSgpIHtcclxuXHR9XHJcblx0IFxyXG59XHJcbiAiLCAiXHVGRUZGXHJcbi8qKlxyXG4gKiBBVVRPIEdFTkVSQVRFIEJZIFVJIEVESVRPUi5cclxuICogV0FSTklORzogRE8gTk9UIE1PRElGWSBUSElTIEZJTEUsTUFZIENBVVNFIENPREUgTE9TVC5cclxuICogQVVUSE9SOiBcdTcyMzFcdTYzMjRcdTcyNTlcdTgxOEZcdTc2ODRcdTcyNUJcclxuICogVUk6IFVJL1Rlc3RVSS51aVxyXG4gKiBUSU1FOiAyMDIzLjA2LjMwLTEwLjQ5LjA4XHJcbiovXHJcblxyXG5cclxuXHJcbkBVSS5VSUNhbGxPbmx5KCdVSS9UZXN0VUkudWknKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0VUlfR2VuZXJhdGUgZXh0ZW5kcyBVSS5VSUJlaGF2aW9yIHtcclxuXHRcblxyXG4gXHJcblx0LyoqXHJcblx0KiBvblN0YXJ0IFx1NEU0Qlx1NTI0RFx1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVxyXG5cdCovXHJcblx0cHJvdGVjdGVkIG9uQXdha2UoKSB7XHJcblx0fVxyXG5cdCBcclxufVxyXG4gIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBSUEsSUFBcUIsbUJBQXJCLE1BQXFDO0FBbUJyQztBQWRJLGNBTGlCLGtCQUtILG1CQUFtQyxvQkFBSSxJQUFnQjtBQUFBLEVBRWpFLENBQUMsUUFBTztBQUFBLElBQ0osSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsU0FBUztBQUFBLEVBQ2IsQ0FBQztBQUFBLEVBQ0QsQ0FBQyxRQUFPO0FBQUEsSUFDSixJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxTQUFTO0FBQUEsRUFDYixDQUFDO0FBRUwsQ0FBQzs7O0FDdEJMO0FBQUE7QUFBQTtBQUFBO0FBR0EsSUFBcUIsaUJBQXJCLE1BQW9DO0FBQUEsRUFXaEMsT0FBYyxjQUFjLFFBQXdCO0FBQ2hELFdBQU8sS0FBSyxXQUFXLElBQUksT0FBTyxVQUFVLENBQUM7QUFBQSxFQUNqRDtBQUNK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
