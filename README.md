# Welcome to real-share!

  

<p  align="center">

<img  width="300"  src="https://miro.medium.com/max/3728/1*7zccGWE4o5LmxegijjK_xQ.png"/>

</p>

  

**Directly call a function or method of a remote object** from a Node.js App thru websocket that can be shared to any web frontend frameworks or mobile apps.


## Installation
```bash
npm install real-share
```
or
```bash
yarn add real-share
```

## CDN
```html
<script src="https://unpkg.com/real-share/client.js"></script>
```

  

## Server

```javascript
// Server.js
const realShare = require('real-share/server')

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
```

## Client
```javascript
async function init () {
  const realShare = require('real-share/client')
  // for CDN global variable named 'realShare'

  const { human } = await realShare('http://localhost:3131')
  console.log(await  human.run(100)) // Mr. Pogi is running at 100km/h
}
init()
```
  

>  **Join and support our Community**  <br  />

> Web and Mobile Developers PH <br  />

> [ [Facebook Page](https://fb.com/webmobile.ph) | [Group](https://fb.com/groups/webmobile.ph/) ]

  

# *Join and support our Community* <br /> **Web and Mobile Developers PH** <br/> [ [Facebook Page](https://fb.com/webmobile.ph) | [Group](https://fb.com/groups/webmobile.ph/) ]