import React from "react";
import { create } from "react-test-renderer";
import { Count } from '../App'
import generateTokenArray from '../generateTokens'
import Board from '../components/board'

let tokenArray = generateTokenArray

describe("BoardComponent", () => {
    test('confirm the array in props is equal array generated', () => {
        const component = create(<Board tokenArray={tokenArray} />)
        const instance = component.root
        const board = instance.findByType("Board")
        expect(board.props.tokenArray).toBe(tokenArray)
    })
})