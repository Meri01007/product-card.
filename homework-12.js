class Phone {
  constructor( brand, model ){
    this.brand = brand;
    this.model = model;
  }
  available (){
    console.log(`${this.brand}, ${this.model} available in store`)
  }
}
class Touchscreen extends Phone {
  constructor (brand, model, screen ){
    super(brand, model)
    this.screen = screen;
  }
    screentouch(){
      console.log(`${this.brand}, ${this.model} have touch screens`)
    }
};

const nokia = new Phone('Nokia' , '1202')
nokia.available();
console.log(nokia);

const withTouchscreen = new Touchscreen('Nokia', 'N97', 'With Touchscreen' )
withTouchscreen.available();
console.log(withTouchscreen);
withTouchscreen.screentouch();
withTouchscreen.available();