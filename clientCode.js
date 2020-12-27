async function realShareClient (host) {
  return new Promise((resolve, reject) => {
    try {
      const socket = require('socket.io-client')(host)
      socket.on('real-share-objects', obj => {
        for (const name in obj) {
          for (const method of obj[name].methods) {
            obj[name][method] = (...args) => new Promise((resolve, reject) => {
              socket.emit('real-share-call', {
                name,
                method,
                args
              }, responseData => {
                resolve(responseData)
              })
            })
            delete obj[name].methods
          }
        }
        obj['socket.io-client'] = socket
        resolve(obj)
      });
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = realShareClient
