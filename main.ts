input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.showString("A",5)
basic.showString("B",5)
basic.showString("C",5)
basic.showString("D",5)
    }
    if (Letter == 1) {
        basic.showString("A")
    } else if (Letter == 2) {
        basic.showString("B")
    } else if (Letter == 3) {
        basic.showString("C")
    } else if (Letter == 3) {
        basic.showString("D")
    }
    Letter = randint(1, 4)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 4))
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        basic.showArrow(ArrowNames.North)
        basic.pause(500)
        basic.showArrow(ArrowNames.South)
        basic.pause(500)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
let Letter = 0
basic.showLeds(`
    . . . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `)
basic.forever(function () {
	
})
