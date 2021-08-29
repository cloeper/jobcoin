import * as Send_reducer from "./Send.reducer"
// @ponicode
describe("Send_reducer.sendReducer", () => {
    test("0", () => {
        let callFunction: any = () => {
            Send_reducer.sendReducer("Alabama", { type: "array", payload: 7588892 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            Send_reducer.sendReducer(0, { type: "array", payload: "c466a48309794261b64a4f02cfcc3d64" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            Send_reducer.sendReducer(-5.48, { type: "array", payload: 9876 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            Send_reducer.sendReducer("Florida", { type: "number", payload: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            Send_reducer.sendReducer(100, { type: "array", payload: 9876 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            Send_reducer.sendReducer(NaN, { type: "", payload: NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})
