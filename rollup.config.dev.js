const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
//支持Vue
const vue = require('rollup-plugin-vue')
//scss支持
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/y.datav.js')
const outputEsPath = path.resolve(__dirname, './dist/y.datav.es.js')

module.exports = {
    input: inputPath,
    output: [{
        file: outputUmdPath,
        format: 'umd',//umd-导出js的函数 ,cjs-html不能执行 ,es（同上）
        name:'yDatav', //必须配置
        globals: {
            vue: 'vue'
        }
    }, {
        file: outputEsPath,
        format: 'es',
        globals: {
            vue: 'vue'
        }
    }],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            plugins: [
                ['@babel/transform-runtime', {
                    regenerator: true
                }]
            ]
        }),
        json(),
        vue(),
        postcss({
            plugins: []
        })
    ],
    external:[ //哪些模块作为外部引用，使用后该模块会变为import {} from 'sam-test-data',
        // 而不是直接将代码合并
        //     'sam-test-data'
        'vue','echarts'
    ],
}
