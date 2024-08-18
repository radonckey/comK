#pinia 和 vuex 的对比
什么是 Pinia#
从那时起，最初的原理仍然相同，但 Pinia 适用于 Vue 2 和 Vue 3，并且不需要你使用组合 API。
Pinia 本质上依然是状态管理的库,用于跨组件、页面进行状态共享(这点和 Vuex 和 Redux 一样)
Pinia 和 Vuex 的区别#
与 Vuex 相比，Pinia 提供了一个更简单的 API，具有更少的仪式，提供了 Composition-API 风格的 API
最重要的是，在于 TypeScript 一起使用时具有可靠的类型判断支持
和 Vue 相比，Pinia 有很多的优势
比如 mutaions 不再存在
更友好的 Typescript 支持，Vuex 之前对 Ts 的支持很不友好
不再有 modules 的嵌套结构：
你可以灵活使用每一个 store，它们通过扁平化的方式来相互使用的
也不再有命名空间的概念，不需要记住它们的复杂关系
