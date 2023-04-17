import peer, { DataConnection, Peer } from 'peerjs'

export default class Get {
  peer: peer
  con: DataConnection

  constructor(public id: string) {
    this.peer = new Peer()

    this.con = this.peer.connect('clientID')
    this.con.on('data', (e) => {
      console.log(e)
    })
  }
}
