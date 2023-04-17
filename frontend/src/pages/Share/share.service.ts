import peer, { DataConnection, Peer } from 'peerjs'

export default class Sender {
  con: DataConnection

  constructor(private id: string) {
    let peer = new Peer()
    this.con = peer.connect(id)
  }

  send(message: string) {
    this.con.send('ye man')
  }
}
