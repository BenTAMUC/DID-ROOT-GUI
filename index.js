import { createHelia, libp2pDefaults } from 'helia'
import { createOrbitDB, Identities, useIdentityProvider } from '@orbitdb/core'
import OrbitDBIdentityProviderDID from '@orbitdb/identity-provider-did'
import KeyDidResolver from 'key-did-resolver'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import { createLibp2p } from 'libp2p'
import { createHelia } from 'helia'
import { createOrbitDB } from '@orbitdb/core'
import { LevelBlockstore } from 'blockstore-level'
import { Libp2pOptions } from './renderer/js/libp2p.js'

// Create an IPFS instance.
const blockstore = new LevelBlockstore('./ipfs/blocks')
const libp2p = await createLibp2p(Libp2pOptions)
const ipfs = await createHelia({ libp2p, blockstore })

const seed = new Uint8Array(/* some private seed */)

OrbitDBIdentityProviderDID.setDIDResolver(KeyDidResolver.getResolver())
useIdentityProvider(OrbitDBIdentityProviderDID)

const didProvider = new Ed25519Provider(seed)

const identities = await Identities({ ipfs })
const identity = await identities.createIdentity({ provider: OrbitDBIdentityProviderDID({ didProvider }) })

const orbitdb = await createOrbitDB({ ipfs, identities, identity })

const db = await orbitdb.open('my-db')

console.log('my-db address', db.address)

await db.close()
await orbitdb.stop()
await ipfs.stop()