wasm-build:
	GOOS=js GOARCH=wasm go build -o sum.wasm ./server/wasm/main.go
build:
	pnpm build && GOOS=js GOARCH=wasm go build -o ./.output/server/sum.wasm ./server/wasm/main.go


