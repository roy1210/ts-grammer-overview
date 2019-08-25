const profile = {
  fullName: 'Alex Fernando',
  age: 20,
  coords: {lat: 0, lng: 15},
  // function
  setAge(age: number): void {
    this.age = age
  }
}

// X const {age}: number. -> `profile.age` is number of age property
const {age, fullName}: {age: number; fullName: string} = profile

const {coords: {lat, lng}}: {coords: {lat: number; lng: number}} = profile