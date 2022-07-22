const wifi = require('node-wifi');

// Initialize wifi module
// Absolutely necessary even to set interface to null
wifi.init({
    iface: null // network interface, choose a random wifi interface if set to null
});


//ssid: '...',
//bssid: '...',
//mac: '...', // equals to bssid (for retrocompatibility)
//channel: <number>,
//frequency: <number>, // in MHz
//signal_level: <number>, // in dB
//quality: <number>, // same as signal level but in %
//security: 'WPA WPA2' // format depending on locale for open networks in Windows
//security_flags: '...' // encryption protocols (format currently depending of the OS)
//mode: '...' // network mode like Infra (format currently depending of the OS)

const scanWifi = async() => {
    const networks = await wifi.scan()
    // console.log(wifiInfo);
    return networks
}

// Connect to a network
// on windows, the callback is called even if the connection failed due to netsh limitations
// if your software may work on windows, you should use `wifi.getCurrentConnections` to check if the connection succeeded
const connectWifi =async ({ ssid, password })=>{
await wifi.connect({ ssid: 'ssid', password: 'password' })
}


// Disconnect from a network
// not available on all os for now
const disconnectWifi=async()=>{
  await wifi.disconnect()
}


// Delete a saved network
// not available on all os for now
const deleteConnection  =async({ ssid })=>{
  await wifi.deleteConnection({ ssid: 'ssid' })
}


// List the current wifi connections
const getCurrentConnections=()=>{
  await wifi.getCurrentConnections()
}

