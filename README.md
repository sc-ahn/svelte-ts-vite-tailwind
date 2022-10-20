# Svelte + TS + Vite

## Getting started

```bash
npm install
npm run dev
```

## 이 예제에서 알아볼 수 있는 것들

![example.gif](./documents/example.gif)

|가능여부| 내용 | 비고 | 링크 |
|:---:|:---:|:---:|:---:|
|✅| if 사용예시 | 상태에따른 컴포넌트 랜더링 분기 | [src/routes/Test.svelte](./src/routes/Test.svelte#L6) |
|✅| for-loop 사용예시 | Array 타입의 데이터를 컴포넌트 랜더링 | [src/routes/Test.svelte](./src/routes/Test.svelte#L7)|
|✅| svelte-routing 사용예시 | App 파일에서 라우팅을 관리합니다 | [src/App.svelte#L9](./src/App.svelte#L9)|
|✅| Query Parameter 사용예시 | 특정 엔드포인트의 특정 쿼리파라미터와 대응되는 작업에 활용 가능 | [src/routes/Test.svelte#L4](./src/routes/Test.svelte#L4)|
|✅| Path Parameter 사용예시 | 특정 엔드포인트 하위의 id 값과 대응되는 작업에 활용 가능 | [src/App.svelte#L7](./src/App.svelte#L11)|
|✅| Component 생성 및 사용예시 | 하나의 Card 컴포넌트를 만들고 [Home.svelte](./src/routes/Home.svelte)에서 원하는 컴포넌트 설정값을 prop으로 넘겨봅니다. | [src/components/Card.svelte](./src/components/Card.svelte)|
|✅| 외부 API 호출 및 Store 사용예시 | 외부와 통신하여 비동기 방식으로 얻게되는 정보를 store에 저장한 뒤에 꺼내씁니다. | [Home.svelte](./src/routes/Home.svelte#L9)|
