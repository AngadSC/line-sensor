function displayLETTER () {
    if (currentReading.compare("00000") == 0) {
        basic.showString("A")
    } else if (currentReading.compare("00001") == 0) {
        basic.showString("B")
    } else if (currentReading.compare("00010") == 0) {
        basic.showString("C")
    } else if (currentReading.compare("00011") == 0) {
        basic.showString("D")
    } else if (currentReading.compare("00100") == 0) {
        basic.showString("E")
    } else if (currentReading.compare("00101") == 0) {
        basic.showString("F")
    } else if (currentReading.compare("00110") == 0) {
        basic.showString("G")
    } else if (currentReading.compare("00111") == 0) {
        basic.showString("H")
    } else if (currentReading.compare("01000") == 0) {
        basic.showString("I")
    } else if (currentReading.compare("01001") == 0) {
        basic.showString("J")
    } else if (currentReading.compare("01010") == 0) {
        basic.showString("K")
    } else if (currentReading.compare("01011") == 0) {
        basic.showString("L")
    } else if (currentReading.compare("01100") == 0) {
        basic.showString("M")
    } else if (currentReading.compare("01101") == 0) {
        basic.showString("N")
    } else if (currentReading.compare("01110") == 0) {
        basic.showString("O")
    } else if (currentReading.compare("01111") == 0) {
        basic.showString("P")
    } else if (currentReading.compare("10000") == 0) {
        basic.showString("Q")
    } else if (currentReading.compare("10001") == 0) {
        basic.showString("R")
    } else if (currentReading.compare("10010") == 0) {
        basic.showString("S")
    } else if (currentReading.compare("10011") == 0) {
        basic.showString("T")
    } else if (currentReading.compare("10100") == 0) {
        basic.showString("U")
    } else if (currentReading.compare("10101") == 0) {
        basic.showString("V")
    } else if (currentReading.compare("10110") == 0) {
        basic.showString("W")
    } else if (currentReading.compare("10111") == 1) {
        basic.showString("X")
    } else if (currentReading.compare("11000") == 0) {
        basic.showString("Y")
    } else if (currentReading.compare("11001") == 0) {
        basic.showString("Z")
    } else if (currentReading.compare("11010") == 0) {
        basic.showString(".")
    } else if (currentReading.compare("11011") == 0) {
        basic.showString("!")
    } else if (currentReading.compare("11100") == 0) {
        basic.showString(",")
    } else if (currentReading.compare("11101") == 0) {
        basic.showString("?")
    } else if (currentReading.compare("11110") == 0) {
        basic.showString("$")
    } else if (currentReading.compare("11111") == 0) {
        basic.showString("-")
    }
}
function get_binary_string () {
    for (let index = 0; index <= 4; index++) {
        if (sensorValues[index] >= threshold) {
            currentReading = "" + currentReading + "0"
        } else {
            currentReading = "" + currentReading + "1"
        }
    }
}
let sensorValues: number[] = []
let currentReading = ""
let threshold = 0
threshold = 200
basic.forever(function () {
	
})
basic.forever(function () {
    sensorValues = AlphaBot2.AnalogRead()
    currentReading = ""
    get_binary_string()
    displayLETTER()
    serial.writeLine(currentReading)
})
