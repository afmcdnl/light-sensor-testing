let light_level = 0
basic.forever(function () {
    light_level = input.lightLevel()
    serial.writeValue("Light level", light_level)
    basic.pause(500)
})
