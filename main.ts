input.onButtonPressed(Button.A, function () {
    if (set_Timerseconds < 50) {
        set_Timerseconds += 10
        basic.showNumber(set_Timerseconds)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    while (set_Timerseconds > 0) {
        set_Timerseconds += 0 - 1
        basic.showNumber(set_Timerseconds)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (set_Timerseconds < 59) {
        basic.showNumber(set_Timerseconds)
        set_Timerseconds += 1
        basic.pause(100)
        basic.clearScreen()
    } else {
        set_Timerseconds = 0
        basic.showString("" + set_Timerminutes + ":" + set_Timerseconds)
        set_Timerminutes += 1
        basic.pause(100)
        basic.clearScreen()
        if (set_Timerminutes < 59) {
            set_Timerminutes = 0
            basic.showNumber(set_Timerhours)
            basic.showString("" + set_Timerhours + ":" + set_Timerminutes + ":" + set_Timerseconds)
            set_Timerhours += 1
            basic.pause(100)
            basic.clearScreen()
        } else {
            set_Timerhours = 0
        }
    }
})
let set_Timerhours = 0
let set_Timerminutes = 0
let set_Timerseconds = 0
basic.showNumber(set_Timerseconds)
