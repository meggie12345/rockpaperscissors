let tool = 0
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (0 == tool) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (2 == tool) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
