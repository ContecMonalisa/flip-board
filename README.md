# Flip Board

## 권장 Node.js 버전 : [v18.19.0](https://nodejs.org/download/release/v18.19.0/)
node-v18.19.0-x64.msi 다운로드 후 설치

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```



## 폴더 구조


components: 공용 컴포넌트 (Dropdown, input, ModalBase ...) 여기저기서 쓰는애들

ㄴ common: 공통 컴포넌트 (이후 폴더별 정리)   modal, button

ㄴ views[string]: 파일명 각 파일당 컴포넌트 폴더 (Dashboared 폴더 등등)

<br/>

views: page 별 파일

interface: 기능별 모든 타입 정리

ㄴ common.ts: 공통 타입 정리

<br />

mixin: 함수 파일들을 정리합니다.

ㄴ common.ts: 공용 함수 정리

<br/>

assets: 모든 이미지 및 적당한 파일들

ㄴ css: 공통 scss, mixin, variable, animation, font ... 공용 scss

ㄴ font: 폰트 파일

ㄴ image: 이미지

<br />

store: pinia를 사용한다. 데이터 변경이 필요한경우 store 에서 처리해야한다.

<br/>

## 네이밍 컨벤션

1. 폴더명은 한단어
    1. 가능한 한단어로 (사실상 무조건)
    2. ex) layout, layout_default
2. Vue 파일의 경우 파스칼케이스
    1. ex) HelloWorld
3. Method는 카멜케이스
    1. 동사 사용 필수
    2. ex) setStyleGuide
4. 변수명
    1. 카멜 케이스 명사
    2. ex) name, style, groundStation
5. 인터페이스
    1. 파스칼 케이스
    2. 속성 카멜 케이스
    3. ex) BaseMapType
6. css
    1. 스네이크 케이스
    2. ex) lcam_modal_title


---

지원사항
810px × 1080px IPad 10 Size
~
1920px x 1080px Desktop Size
Safari, Chrome, Edge 지원
