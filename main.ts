let currentReading = ""
let sensorValues: number[] = []
function get_binary_string () {
    currentReading = "0"
    for (let index = 0; index <= 4; index++) {
        if (sensorValues[index] >= 400) {
            currentReading = "" + currentReading + "0"
        } else {
            currentReading = "" + currentReading + "1"
        }
    }
}
basic.forever(function () {
    sensorValues = AlphaBot2.AnalogRead()
    get_binary_string()
    serial.writeLine(currentReading)
})
