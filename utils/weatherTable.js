export const weatherTable = (temp) => {
    if (temp < 0) {
        return 'Stay inside. It really really isn’t worth it today!'
    } else if (temp < 10) {
        return 'Put on a lot of layers and you might be okay... Might!'
    } else if (temp < 20) {
        return 'Shouldn’t you be outside and do stuff right now?'
    } else {
        return 'It’s gettin’ hot in here... Burn burn burn... and so on'
    }
}