const os = require("os")
const osInfo = {}


//返回操作系统的默认临时文件夹。
const getTmpdir = () => {
    // console.log(os.tmpdir())
    return os.tmpdir()
}

//返回 CPU 的字节序，可能的是 "BE" 或 "LE"。
const getEndianness = () => {
    // console.log(os.endianness())
    return os.endianness()

}

//返回操作系统的主机名。
const getHostname = () => {
    // console.log(os.hostname())
    return os.hostname()
}

//返回操作系统名 Windows_NT
const getType = () => {
    //console.log(os.type())
    return os.type()
}

//返回编译时的操作系统名 win32
const getPlatform = () => {
    // console.log(os.platform())
    return os.platform()
}

//返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。//x64
const getArch = () => {
    // console.log(os.arch())
    return os.arch()
}

//返回操作系统的发行版本。10.0.19043
const getRelease = () => {
    // console.log(os.release())
    return os.release()
}


//返回操作系统运行的时间，以秒为单位。
const getUptime = () => {
    // console.log(os.uptime())
    return os.uptime()
}

//返回一个包含 1、5、15 分钟平均负载的数组。[ 0, 0, 0 ]
const getLoadavg = () => {
    // console.log(os.loadavg())
    return os.loadavg()
}

// 返回系统内存总量，单位为字节。
const getTotalmem = () => {
    // console.log(os.totalmem()) //17007173632
    return os.totalmem()
}

// 返回操作系统空闲内存量，单位是字节。
const getFreemem = () => {
    // console.log(os.freemem()) //6569750528
    return os.freemem()
}

// 返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
const getCpus = () => {
    // console.log(os.cpus())
    return os.cpus()
}

//获得网络接口列表。
const getNetworkInterfaces = () => {
    // console.log(os.networkInterfaces())
    return os.networkInterfaces()
}

const getOsInfo = () => {
    osInfo = {
        tmpdir: getTmpdir(),
        endianness: getEndianness(),
        hostname: getHostname(),
        type: getType(),
        platform: getPlatform(),
        arch: getArch(),
        release: getRelease(),
        uptime: getUptime(),
        loadavg: getLoadavg(),
        totalmem: getTotalmem(),
        freemem: getFreemem(),
        cpus: getCpus(),
        networkInterfaces: getNetworkInterfaces()
    }

    return osInfo
}

export default getOsInfo