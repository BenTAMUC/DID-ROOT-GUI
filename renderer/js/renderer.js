const ipcRenderer = require('electron').ipcRenderer;
const { createLibp2p } = require('libp2p');
const { createHelia } = require('helia');
const { LevelBlockstore } = require('blockstore-level');
const { createOrbitDB, Identities, KeyStore, useIdentityProvider } = require('@orbitdb/core');
const { OrbitDBIdentityProvider } = require('@orbitdb/identity-provider');
const KeyDidResolver = require('key-did-resolver');
const { Ed25519Provider } = require('key-did-provider-ed25519');
const { Libp2pOptions } = require('./libp2p.js');

function socialProof(){
    let funcDynamic = document.getElementById('func-socialProof');

    let block = document.getElementById('blocks');

    let displaySetting = funcDynamic.style.display;


    if(displaySetting == 'block'){
        block.style.display = 'block';
        funcDynamic.style.display = 'none';
    }
    else{
        block.style.display = 'none';
        funcDynamic.style.display = 'block';
    }
}

function newKey(){
    let funcDynamic = document.getElementById('func-newKey');

    let block = document.getElementById('blocks');

    let displaySetting = funcDynamic.style.display;


    if(displaySetting == 'block'){
        block.style.display = 'block';
        funcDynamic.style.display = 'none';
    }
    else{
        block.style.display = 'none';
        funcDynamic.style.display = 'block';
    }
}

function deactivate(){
    let funcDynamic = document.getElementById('func-deactivate');

    let block = document.getElementById('blocks');

    let displaySetting = funcDynamic.style.display;


    if(displaySetting == 'block'){
        block.style.display = 'block';
        funcDynamic.style.display = 'none';
    }
    else{
        block.style.display = 'none';
        funcDynamic.style.display = 'block';
    }
}

function submitSocProof(){
    let funcDynamic = document.getElementById('func-socialProof');

    let block = document.getElementById('blocks');

    const urlValue = document.getElementById('textbox-url').value;
    const usernameValue = document.getElementById('textbox-uname').value;

    const element1 = document.getElementById('block-links');
    const element2 = document.getElementById('social-list');

    const newlink1 = document.createElement('li');
    const newlinkText1 = document.createTextNode('Social Proof ' + urlValue + ' ' + usernameValue);
    newlink1.appendChild(newlinkText1);

    element1.appendChild(newlink1);

    const newlink2 = document.createElement('li');
    const newlinkText2 = document.createTextNode('Social Proof ' + urlValue + ' ' + usernameValue);
    newlink2.appendChild(newlinkText2);

    element2.appendChild(newlink2);

    block.style.display = 'block';
    funcDynamic.style.display = 'none';
}

function generateKey(){
    let funcDynamic = document.getElementById('func-newKey');

    let block = document.getElementById('blocks');

    const element = document.getElementById('block-links');

    const newlink = document.createElement('li');
    const newlinkText = document.createTextNode('New Key');
    newlink.appendChild(newlinkText);

    element.appendChild(newlink);

    block.style.display = 'block';
    funcDynamic.style.display = 'none';
}

function cancelKey(){
    let funcDynamic = document.getElementById('func-newKey');

    let block = document.getElementById('blocks');

    block.style.display = 'block';
    funcDynamic.style.display = 'none';
}

function confDeactivation(){
    let funcDynamic = document.getElementById('func-deactivate');

    let block = document.getElementById('blocks');

    const element = document.getElementById('block-links');

    const newlink = document.createElement('li');
    const newlinkText = document.createTextNode('Deactivated');
    newlink.appendChild(newlinkText);

    element.appendChild(newlink);

    block.style.display = 'block';
    funcDynamic.style.display = 'none';
}

function denyDeactivation(){
    let funcDynamic = document.getElementById('func-deactivate');

    let block = document.getElementById('blocks');

    block.style.display = 'block';
    funcDynamic.style.display = 'none';
}

async function signUp(){
    let singupin = document.getElementById('signin-up');
    let userdata = document.getElementById('userdata');
    let funcoptions = document.getElementById('func-options');
    let blocks = document.getElementById('blocks');
    const displayName_Value = document.getElementById('textbox-displayname').value;

    singupin.style.display = 'none';
    userdata.style.display = 'block';
    funcoptions.style.display = 'block';
    blocks.style.display = 'block';

    let disName = document.getElementById('dis-name');
    let did_identity = document.getElementById('did-identity');

    disName.innerText = displayName_Value;
    did_identity.innerText = 'DID:ROOT:0x123456789abcdef';
}