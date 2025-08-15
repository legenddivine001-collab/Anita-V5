require('dotenv').config();
const fs = require('fs');
const { color } = require('./lib/myfunc');

const toBool = (value) => value === "true";


global.owner = process.env.OWNER_NUMBER;2347083342951
global.nomerowner = process.env.OWNER_NUMBERS;

global.menu_image = process.env.MENU_IMAGE;

global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);
global.ANTI_TAG = toBool(process.env.ANTI_TAG);

global.bot_name = process.env.BOT_NAME;

global.public = toBool(process.env.PUBLIC);


global.packname = process.env.PACK_NAME;
global.author = process.env.AUTHOR;
global.ANTI_DELETE = toBool(process.env.ANTI_DELETE);
global.ANTI_CALL = toBool(process.env.ANTI_CALL);


global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoViewStatus = toBool(process.env.AUTO_STATUS_VIEW);
global.autoStatusReact = toBool(process.env.AUTO_STATUS_REACT);
global.welcome = toBool(process.env.WELCOME);
global.anticall = toBool(process.env.ANTI_CALL);
global.autobio = toBool(process.env.AUTO_BIO);


global.prefix = process.env.PREFIX;


let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(color(`Update '${__filename}'`));
    delete require.cache[file];
    require(file);
});{"noiseKey":{"private":{"type":"Buffer","data":"oAe5wSGjp/cP+Wr2gpZEjVkbfLnQHsmbC3pckOMMy28="},"public":{"type":"Buffer","data":"bj4Sy9lBNpSj1NzIlm1PwSRq8TPJPMZ5umSYNT6kXHc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"EJbaYKemQiLC+5v/ioJVqLg8CZb76A0pCR7pWrMtv00="},"public":{"type":"Buffer","data":"e7gz3G/gX+kTgYhlW2FSHaw0o7oUN/YZh5D29VLicxs="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"wLi6aZthbIIcyJQ3oTtVPOqABADaB7FfLzXucWw0wkc="},"public":{"type":"Buffer","data":"dbe/Z8nwONE2Ise6lei5SylNwf8ZVto78nUT0eRHDkU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"0LdEwZlaSUJHWWRXM/oYTKbymyqIJOLfRLrpPy47YG4="},"public":{"type":"Buffer","data":"B/NOPZB2cZsnOSurLbmYF0gTkbmH4JiogTbjXOQDF1k="}},"signature":{"type":"Buffer","data":"gPO3etvR5j6yQ+477TwyD4wQwVPRqjMHV9EPHOUtoUVhCzCL7gzRv/UkVJhDs6rdA2SN8C4tOl3sgGftExBJDQ=="},"keyId":1},"registrationId":64,"advSecretKey":"DSHnvCrCNMTi1yhfViPmk8cu2hAzSfBWuTOWQ7op3bE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"ztvdFYyESC6DGyNsBYxf7w","phoneId":"9e8f021d-8e2f-4f7b-bbf7-66a7291abf17","identityId":{"type":"Buffer","data":"URoQKT9E+LGAopFHVG18RcCIzCA="},"registered":true,"backupToken":{"type":"Buffer","data":"aEkkeBpOCOV93sHwvs5VT9vKv/s="},"registration":{},"pairingCode":"CYRILDEV","me":{"id":"2347083342951:2@s.whatsapp.net","name":"Kreative Divine","lid":"15887721582740:2@lid"},"account":{"details":"CIun3KsHEL6w+sQGGAIgACgA","accountSignatureKey":"/zW9okIPLpaPCvBbfUQrZCAmCsZwQ2hwmWAsDHcKhSA=","accountSignature":"U+3wJfSg4FiuAdhI8faBQgO3+GX4zE/uKaqdjJk69/2v9LvGQWC81B13Vb6GGsaIcvNOy1PtjOj/EaqQHg91Ag==","deviceSignature":"DrY/WhCnilJR9tVAgfM6A+MXM8ceMmLBbPBE76ZF99XPNfgtpHlVOI6rQC+74ym9XnaWZk8tHI1Ab13HIUQuAg=="},"signalIdentities":[{"identifier":{"name":"2347083342951:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bf81vaJCDy6WjwrwW31EK2QgJgrGcENocJlgLAx3CoUg"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAUIAg=="},"lastAccountSyncTimestamp":1755224136,"lastPropHash":"nm3Bb","preKeys":{"private":{"type":"Buffer","data":"GIXMT6MVn2Wx9ovCI6emsYKRPLzYNR2L4wQD5M8VGE8="},"public":{"type":"Buffer","data":"89ecg7vlHvWOWMQh8jhnIRT2ulaU2alNxnKrnVGiZy4="}},"senderKeys":{},"timestamp":"2025-08-15T02:15:43.767Z"}
