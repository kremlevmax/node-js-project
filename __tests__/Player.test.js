import { expect, test } from "@jest/globals"
import Player from "../Player.js"
import Song from "../Song.js"


describe("Test of Player class", () => {
    let playlist
    let aHeadWithWings
    let welcomeToTheJungle
    let bitchesBrew
    let myPlayer

    beforeEach(() => {
        aHeadWithWings = new Song("A Head With Wings", "Morphine", 220)
        welcomeToTheJungle = new Song("Welcome To The Jungle", "Guns'n'Roses", 272)
        bitchesBrew = new Song("Bitches Brew", "Miles Davis", 1619)

        playlist = [aHeadWithWings, welcomeToTheJungle, bitchesBrew]

        myPlayer = new Player(playlist)
    })

    test("Random switch works as it should", () => {
        expect(myPlayer.random).toBe(false)
        myPlayer.randomSwitch()
        expect(myPlayer.random).toBe(true)
    })

    test("Play() function works as it should in non-random mode", () => {
        expect(myPlayer.play()).toEqual([0, 1, 2])
    })

    test("Play() function works as it should in random mode", () => {
        myPlayer.randomSwitch()
        expect(myPlayer.play()).not.toEqual([0, 1, 2])
    })
})