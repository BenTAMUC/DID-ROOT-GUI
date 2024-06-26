import { mdns } from '@libp2p/mdns'
import { yamux } from '@chainsafe/libp2p-yamux'
import { tcp } from '@libp2p/tcp'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'
import { noise } from '@chainsafe/libp2p-noise'
import { identify } from '@libp2p/identify'

// These are the options for the libp2p node

export const libp2pOptions = {
    peerDiscovery: [
      mdns()
    ],     
    addresses: {
      listen: [
        '/ip4/0.0.0.0/tcp/0'
      ]
    },
    transports: [
      tcp()
    ],    
    connectionEncryption: [
      noise()
    ],
    streamMuxers: [
      yamux()
    ],
    services: {
      identify: identify(),
      pubsub: gossipsub({ emitSelf: true })
    }
}