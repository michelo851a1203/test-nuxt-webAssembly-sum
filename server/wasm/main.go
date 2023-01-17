package main

import (
	"syscall/js"
)

func SumInterface(this js.Value, args []js.Value) interface{} {
	if len(args) != 2 {
		return "not length 2"
	}

	return args[0].Int() + args[1].Int()
}

func main() {
	js.Global().Set("generateSumKey", js.FuncOf(SumInterface))
	select {}
}
