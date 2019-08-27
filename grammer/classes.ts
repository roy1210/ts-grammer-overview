class Vehicle {
  // to accept args when create instance
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  // to use another args other than parents constructor
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car(4, 'red');
car.startDrivingProcess();

/*
Modifiers

public:
This method can be called any where, any time.

protected:
This method can be called by other methods in this class, or by other methods in child classes. (extends)

private:
This method can only be called by other methods in this class.

*/
