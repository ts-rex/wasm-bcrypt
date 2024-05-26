import esbuild from 'npm:esbuild'
import { wasmLoader } from 'npm:esbuild-plugin-wasm'

await esbuild.build({
    entryPoints: ["./pkg/wasm_bcrypt.js"],
    bundle: true,
    outdir: 'out',
    format: "esm",
    plugins: [
        wasmLoader({
            mode: "embedded",
        })
    ]
})