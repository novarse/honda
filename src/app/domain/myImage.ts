export class MyImage {
  private name: string;
  private desc: string;
  
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
  }
  
  public getName() {
    return this.name;
  }
  
  public getDesc() {
    return this.desc;
  }
  
  toString() {
    return 'name: ' + this.name + ', desc: ' + this.desc;
  }
}