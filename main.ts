let Luz = 0
basic.forever(function () {
    Luz = input.lightLevel()
    basic.showNumber(Luz)
    if (Luz > 150) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
