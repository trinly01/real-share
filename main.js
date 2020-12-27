const realShare = require('./server.js')

class Person {
  constructor() {
    this.name = 'Trinmar Pogi'
  }
  run(speed, client) {
    console.log(client.id)
    return `${this.name} is running at ${speed}km/h`
  }
  eat(food) {
    return `${this.name} is eating ${food}`
  }
  async talk(speech) {
    await new Promise(r => setTimeout(r, 2000))
    return speech
  }
}

let human = new Person('Trinmar Pogi')

realShare(3000, {
  human
})