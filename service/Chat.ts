import tmi from 'tmi.js'
import Env from '@ioc:Adonis/Core/Env'
import Command from 'App/Models/Command'

export default class Chat {
  protected client
  constructor () {
    this.client = new tmi.client({
      identity: {
        username: 'dgsapenas',
        password: Env.get('TWITCH_PASSWORD'),
      },
      channels: [ 'dgsapenas' ],
    })

    this.client.connect()
    this.client.on('connected', (_endereco, _porta) => {
      console.log('O bot ta on!')
    })
  }

  public async watchMessage () {
    this.client.on('message', async (target, _context, message, isBot) => {
      if (isBot) {
        return
      }

      message = message.trim()
      if(message.search('!') === 0) {
        const command = await Command.query().where('name', message.replace('!', '')).first()
        if(command) {
          this.client.say(target, command.answer)
        }
      }

      if (message === '!comandos') {
        const command = await Command.all()
        let myCommands = ''
        command.map(c => {
          myCommands = `${myCommands}!${c.name}, `
        })
        this.client.say(target, myCommands.trim().substring(0, myCommands.length -2))
      }
    })
  }
}
