export class ProjectListView {
  constructor () {
      // 受注番号
      this.projectID = '';
      // 案件名
      this.projectName = '';
      // 顧客名
      this.clientName = '';
      // ステータス
      this.status = '';
  }

  // getter
  get projectID() {
    return this.projectID;
  }
  get projectName() {
    return this.projectName;
  }
  get clientName() {
    return this.clientName;
  }
  get status() {
    return this.status;
  }

  // setter
  set projectID(arg) {
    this.projectID = arg
  }
  set projectName(arg) {
    this.projectName = arg
  }
  set clientName(arg) {
    this.clientName = arg
  }
  set status(arg) {
    this.status = arg
  }
}

export class ProjectView extends ProjectListView {
  constructor () {
    super();
    // 作業開始日
    this.startDate = new Date();
    // 納期
    this.limitDate = new Date();
    this.orderAmount = 0;
    // 予測稼働工数
    this.estimateOperatingTime = 0;
    // 予測稼働工数
    this.estimateOperatingCost = 0;
    // 予測その他原価
    this.estimateOthersCost = 0;
    // 予測収益
    this.estimateproceeds = 0;
    // 実績稼働工数
    this.actualOperatingTime = 0;
    // 実績稼働原価
    this.actualOperatingCost = 0;
    // 実績その他原価
    this.actualOthersCost = 0;
    // メンバー
    this.menbers;
    // その他原価
    this.otherCosts;
    // 更新履歴
    this.historys;
  }

  // getter
  get startDate() {
    return this.startDate;
  }
  get limitDate() {
    return this.limitDate;
  }
  get estimateOperatingTime() {
    return this.estimateOperatingTime;
  }
  get estimateOperatingCost() {
    return this.estimateOperatingCost;
  }
  get estimateOthersCost() {
    return this.estimateOthersCost;
  }
  get estimateproceeds() {
    return this.estimateproceeds;
  }
  get actualOperatingTime() {
    return this.actualOperatingTime;
  }
  get actualOperatingCost() {
    return this.actualOperatingCost;
  }
  get actualOthersCost() {
    return this.actualOthersCost;
  }
  get historys() {
    return this.historys;
  }

  // setter
  set startDate(arg) {
    this.startDate = arg
  }
  set limitDate(arg) {
    this.limitDate = arg
  }
  set estimateOperatingTime(arg) {
    this.estimateOperatingTime = arg
  }
  set estimateOperatingCost(arg) {
    this.estimateOperatingCost = arg
  }
  set estimateOthersCost(arg) {
    this.estimateOthersCost = arg
  }
  set estimateproceeds(arg) {
    this.estimateproceeds = arg
  }
  set actualOperatingTime(arg) {
    this.actualOperatingTime = arg
  }
  set actualOperatingCost(arg) {
    this.actualOperatingCost = arg
  }
  set actualOthersCost(arg) {
    this.actualOthersCost = arg
  }
  set historys(arg) {
    this.startDate = arg
  }
}

export class project extends ProjectView {
  constructor () {
    super();
    // 顧客ID
    this.clientID = '';
    // 作成者
    this.createUserID = '';
    // 作成日
    this.createDate = new Date();
    // 受注者
    this.orderUserID = '';
    // 受注日
    this.orderDate = new Date();
    // 納品責任者
    this.deliveryUser = '';
    // 納品日
    this.deliveryDate = new Date();
    // 検収予定日
    this.acceptanceLimitDate = new Date();
    // 検収確認者
    this.acceptanceLimitUser = '';
    // 検収確認者
    this.acceptanceDate = new Date();
    // 入金予定日
    this.paymentLimitDate = new Date();
    // 入金確認者
    this.paymentedUserID = '';
    // 入金確認日
    this.paymentedDate = new Date();
    // 失注日
    this.lostOrderDate = new Date();
  }
}