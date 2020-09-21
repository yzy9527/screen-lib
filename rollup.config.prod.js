const path = require('path')

const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
// es6-es5
const babel =require('rollup-plugin-babel')
//可以加载json文件
const json = require('rollup-plugin-json')
//支持Vue
const vue = require('rollup-plugin-vue')
//scss支持
const postcss = require('rollup-plugin-postcss')
//压缩丑化
const { terser } = require('rollup-plugin-terser')

const input = path.resolve(__dirname, './src/index.js')
const outputEsPath = path.resolve(__dirname, './dist/y.datav.es.min.js')
const outputUmdPath = path.resolve(__dirname, './dist/y.datav.min.js')

module.exports = {
    input: input, //入口
    output: [{ //出口
        file: outputUmdPath,
        format: 'umd', //umd-导出js的函数 ,cjs-html不能执行 ,es（同上）
        name:'yDatav', //必须配置
        globals: {
            vue: 'vue'
        }
    },{ //出口
        file: outputEsPath,
        format: 'es', //umd-导出js的函数 ,cjs-html不能执行 ,es（同上）
        name:'es', //必须配置
        globals: {
            vue: 'vue'
        }
    }],
    plugins:[
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
        }),
        terser()
    ],
    external:[ //哪些模块作为外部引用，使用后该模块会变为import {} from 'sam-test-data',
        // 而不是直接将代码合并
        //     'sam-test-data'
        'vue'
    ],
}
