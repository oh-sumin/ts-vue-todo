# Vue.js / typescript

### provide/inject vs props

- 컴포넌트가 중첩되어 있으면 중간에 있는 컴포넌트 props에 불필요한 데이터가 전달 된다. 이를 방지하기 위해 상위컴포넌트에 provide, 하위 컴포넌트에 inject로 받아서 props 처럼 사용할 수 있다.
- porps는 컴포넌트에서 직접 `<Child> :property="value" </Child>` 선언해 주었지만 provide 는 그렇지 안핟.
- provide, inject 특징
  - 부모 컴포넌트는 어떤 컴포넌트가 provide 속성을 사용하는지 모른다.
  - 하위 컴포넌트는 inject 속성이 어디서 왔는지 모른다.
  - 흐름을 직관적으로 파악하기 어려워서 플러그인이나 컴포넌트 라이브러리를 위해서 사용하고 일반적인 코드에서는 사용하지 않는 것이 좋다.
