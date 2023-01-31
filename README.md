# 프로젝트 소개

- 2023년 원티드 프리온보딩 프론트엔드 챌린지 1월에서 요구하는 `Todo 앱 만들기` 과제를 진행한 프로젝트입니다.
- 원티드에서 제공하는 백엔드 서버를 바탕으로 React + Typescript로 프론트엔드를 구현하는 것이 목표입니다.
- 사용자 입장에서 좋은 UI/UX를 제공하고, 개발자 입장에서 좋은 코드 구조를 갖는 앱을 구현하는데 집중하였습니다.
- 총 개발 소요 기간은 10일 입니다.
  - 개발 : 7일
  - 리팩토링 : 3일 

<br>

[[JH-TODO]](https://www.jhs-todo.kro.kr/) ☚ 배포된 사이트 보러가기

[[YOUTUBE]](https://youtu.be/qhof44HYXLw) ☚ 1분 시연 영상 보러가기

<br>

# 최종 구현 화면

<table>
  <tr>
    <td><strong>회원가입</strong></td>
    <td><strong>로그인</strong></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/100356649/215660652-917a71a1-0d6d-4162-b0e6-45eb4bfa5bbf.gif" height="400"/></td>
    <td><img src="https://user-images.githubusercontent.com/100356649/215660658-820674cc-baf4-4047-b4fd-ef4cf8763377.gif" height="400"/></td>
  </tr>

 <tr>
    <td><strong>Todo 메인</strong></td>
    <td><strong>Todo 생성</strong></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/100356649/215660673-66b6086e-c152-41a9-b7fa-e2c738432792.gif" height="400"/></td>
    <td><img src="https://user-images.githubusercontent.com/100356649/215660681-733bf501-ac84-482a-9047-4b77585f96f8.gif" height="400"/></td>
  </tr>
 
  <tr>
    <td><strong>Todo 수정</strong></td>
    <td><strong>Todo 삭제</strong></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/100356649/215660688-12631470-efdc-4525-8393-d29e6b3fedce.gif" height="400"/></td>
    <td><img src="https://user-images.githubusercontent.com/100356649/215660690-58af3486-b7c4-40dc-8e48-39b7f759ef7a.gif" height="400"/></td>
  </tr>
 
 <tr>
    <td><strong>로그아웃</strong></td>
    <td><strong>다크모드</strong></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/100356649/215660662-c337402b-da92-40c6-9bf3-0599f0266851.gif" height="400"/></td>
    <td><img src="https://user-images.githubusercontent.com/100356649/215660666-e6042bae-1e5f-427b-806a-24375fbba237.gif" height="400"/></td>
  </tr>
  
</table>

<br>

# 설치, 환경설정 및 실행 방법

## Frontend
```
git clone https://github.com/JongHoonSon/wanted-pre-onboarding-challenge-fe-1.git ./
yarn
yarn start
```

## Backend
```
git clone https://github.com/JongHoonSon/wanted-pre-onboarding-challenge-fe-1-api ./
yarn
yarn start
```

<br>

# 구현 요구 사항

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [✔️] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요

- 이메일과 비밀번호의 유효성을 확인합니다
  - [✔️] 이메일 조건 : 최소 `@`, `.` 포함
  - [✔️] 비밀번호 조건 : 8자 이상 입력
  - [✔️ 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요

- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [✔️] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [✔️] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [✔️] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [✔️] 목록 / 상세 영역으로 나누어 구현해주세요
  - [✔️] Todo 목록을 볼 수 있습니다.
  - [✔️] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [✔️] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [✔️] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.

- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [❌] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [❌] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.

  (구현하지 못한(않은) 이유 [바로가기](https://github.com/JongHoonSon/wanted-pre-onboarding-challenge-fe-1/blob/master/README.md#todo-%EC%83%81%EC%84%B8-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A5%BC-%EA%B5%AC%ED%98%84-%EA%B3%BC%EC%A0%95%EC%97%90%EC%84%9C%EC%9D%98-%EB%A1%9C%EC%A7%81-%EA%B2%80%EC%A6%9D-%EB%B6%80%EC%A1%B1))

- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [✔️] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

<br>

# 사용한 프레임워크 및 라이브러리

## React-Route-Dom
- React 앱 내부에서 Page Routing 을 위해 사용

## React-Hook-Form
- 각종 form에 대해서 유저가 input을 입력할 때마다 입력 값을 validation 하기 위해 사용
- validation 실패 시 유저에게 적절한 Feedback을 제공하기 위해 사용

## React-Query
- API 요청의 성공/실패 여부에 따른 처리 구현하기 위해 사용
- API 요청 성공 시 갱신이 필요한 데이터를 재요청하기 위해 사용

## Reduxjs-Toolkit
- Redux를 쉽게 구현하기 위해 사용
- 유저가 선택한 Todo, Todo 수정 중인지의 여부, 유저가 선택한 라이트/다크모드 등 Front 단에서 필요한 전역 상태를 관리하기 위해 사용

## Notistack
- 유저에게 Snackbar 형태로 알림을 제공하기 위해 사용

<br>

# 폴더 구조

```ts
wanted-pre-onboarding-challenge-fe-1
├─ package.json
├─ public
│  └─ index.html
├─ README.md
├─ src
│  ├─ api                   // 백엔드 서버와 API 통신을 하기 위한 파일을 모아둔 폴더
│  │  ├─ auth
│  │  │  ├─ join.ts
│  │  │  └─ login.ts
│  │  ├─ common
│  │  │  └─ customAxios.ts
│  │  └─ todo
│  │     ├─ createTodo.ts
│  │     ├─ deleteTodo.ts
│  │     ├─ getTodoById.ts
│  │     ├─ getTodos.ts
│  │     └─ updateTodo.ts
│  ├─ App.tsx
│  ├─ components          // 화면을 구성하는 각종 Presenter Component를 모아둔 폴더
│  │  ├─ common           // 공통적으로 사용되는 Component를 따로 구분해서 모아둔 폴더
│  │  │  ├─ Button.tsx
│  │  │  └─ SubmitInput.tsx
│  │  ├─ header
│  │  │  ├─ DarkmodeSwitch.tsx
│  │  │  ├─ Header.tsx
│  │  │  └─ LogoutButton.tsx
│  │  └─ todo
│  │     ├─ TodoCreateForm.tsx
│  │     ├─ TodoDetail.tsx
│  │     ├─ TodoEditForm.tsx
│  │     ├─ TodoList.tsx
│  │     └─ TodoListItem.tsx
│  ├─ constants            // 앱 내부에서 자주 사용되거나, 비슷한 형식을 띄는 문자열을 모아둔 폴더 
│  │  ├─ apiUrls.ts
│  │  └─ themeConstants.ts
│  ├─ containers          // Redux store에서 가져온 전역 상태를 Presenter Component에 전달하는 역할을 하는 Container Component를 모아둔 폴더
│  │  ├─ header
│  │  │  └─ DarkmodeSwitchContainer.tsx
│  │  └─ todo
│  │     ├─ TodoDetailContainer.tsx
│  │     ├─ TodoEditFormContainer.tsx
│  │     ├─ TodoListContainer.tsx
│  │     └─ TodoPageContainer.tsx
│  ├─ hooks               // Component 에서 사용되는 각종 hook을 모아둔 폴더
│  │  ├─ api              // API 관련 hook을 모아둔 폴더
│  │  │  ├─ auth
│  │  │  │  ├─ useJoinMutation.ts
│  │  │  │  └─ useLoginMutation.ts
│  │  │  └─ todo
│  │  │     ├─ useCreateTodoMutation.ts
│  │  │     ├─ useDeleteTodoMutation.ts
│  │  │     ├─ useGetTodoByIdQuery.ts
│  │  │     ├─ useGetTodosQuery.ts
│  │  │     └─ useUpdateTodoMutation.ts
│  │  └─ common          // 일반적으로 사용되는 hook을 모아둔 폴더
│  │     └─ useCustomSnackbar.ts
│  ├─ index.tsx
│  ├─ pages              // Route의 단위가 되는 페이지들을 모아둔 폴더
│  │  ├─ auth
│  │  │  ├─ authPageStyle.ts
│  │  │  ├─ JoinPage.tsx
│  │  │  └─ LoginPage.tsx
│  │  ├─ NotFoundPage.tsx
│  │  └─ todo
│  │     └─ TodoPage.tsx
│  ├─ Router.tsx
│  ├─ routes              // 특정 페이지에 접속 가능한지 권한을 체크하는 CustomRoute를 모아둔 폴더
│  │  ├─ MainRoute.tsx
│  │  ├─ PrivateRoute.tsx
│  │  └─ PublicRoute.tsx
│  ├─ store               // Redux를 이용한 전역 상태 관리를 구현하기 위해 필요한 코드를 모아둔 ㅎ폴더
│  │  ├─ store.ts
│  │  ├─ themeSlice.ts
│  │  └─ todoSlice.ts
│  ├─ styles              // 앱에서 사용되는 Style을 모아둔 폴더
│  │  ├─ colors.ts
│  │  ├─ GlobalStyles.ts
│  │  ├─ styled.d.ts
│  │  └─ themeStyles.ts
│  ├─ types               // 앱에서 사용되는 Type을 모아둔 폴더
│  │  ├─ mutationTypes.ts
│  │  ├─ themeTypes.ts
│  │  └─ todoTypes.ts
│  └─ utils               // 반복적으로 사용되거나, 비슷한 맥락을 갖는 함수들을 모아둔 폴더
│     ├─ checkUserLoggedIn.ts
│     └─ validateForm.ts
├─ tsconfig.json
└─ yarn.lock

```

<br>

# 구현 시 고려한 점

## 사용자 입장

### Auth 관련
- 한 번 로그인을 수행하여 JWT 토큰을 발급 받은 경우, 이를 브라우저의 Local Storage에 저장하여, 추후 접속 시 재 로그인 없이 바로 서비스를 사용할 수 있도록 구현
- 페이지 접근 제한을 컴포넌트 내의 useEffect에서 진행하면, 페이지가 렌더된 이후 접근 권한을 체크하게 되므로, 페이지가 렌더되기 이전에 유저의 권한을 체크하기 위해 PrivateRoute, PublicRoute 구현

### UX 관련
- form에서 유저가 입력한 값에 대해 실시간으로 validation를 수행하고, 유저가 validation의 결과를 실시간으로 볼 수 있도록 구현
- 유저가 특정 데이터를 CUD 한 경우, 서버로부터 자동으로 새로 데이터를 받아와 최신 데이터를 확인할 수 있도록 구현
- 유저가 보낸 API 요청에 대한 결과를 Snackbar 형태로 제공
- 유저가 발생시키고 있는 각종 Event(Mouse hover, 선택한 Todo 등)에 대한 응답을 제공 (CSS 이용)
- 라이트모드/다크모드를 구현하여 유저가 원하는 theme으로 사이트를 이용할 수 있도록 구현
- 유저가 입력한 값이 UI의 크기를 벗어나지 않도록 overflow, ellipsis 처리

## 개발자 입장

### API 관련
- Axios를 커스텀하여 유저 로그인 여부에 따라 HTTP Headers를 자동으로 설정하도록 구현
- 앱에서 사용되는 각종 API의 Endpoint 주소를 따로 하나의 Constants 파일로 관리하여, Base URL 등을 한 번에 관리하기 편하도록 구현
- React Query의 useMutation Hook을 이용하여 API 요청의 성공, 실패에 따른 처리를 쉽게 관리할 수 있도록 구현

### 컴포넌트 관련
- 자주 사용되는 컴포넌트(Button 등)를 공통 컴포넌트로 분리
- Container / Presenter 방식으로 컴포넌트의 관심사 분리

<br>

# 부족했던 점 및 개선 사항

## Todo 상세 페이지를 구현 과정에서의 로직 검증 부족
- 사용자가 선택한 Todo의 상세페이지를 구현하는 과정에서, 선택한 Todo의 id를 갖는 URL로 이동하는 방식으로 구현하지 않고, Redux를 이용해 사용자가 선택한 Todo의 정보를 `selectedTodo` 라는 전역 상태로 저장하여 보여주는 방식으로 구현하고 싶었다.
- 구현 가능성을 판단했을 때 충분히 구현이 가능하다고 판단하였지만, 해당 방식으로 구현하면 어떤 부작용이 있을지에 대해서는 충분히 고려하지 않고 구현을 시작했다. 
- 구현을 마친 이후 다시 곰곰히 생각해보니, 내가 구현한 전역 상태를 이용하는 방식에는 여러 가지 부작용이 있었다.

1. 전역 상태로 구현한 `selectedTodo` 는 페이지 새로고침 시 초기화되기 때문에, 유저가 특정 Todo를 선택하고 새로고침을 한 경우 자신이 선택했던 Todo를 잃어버리게 된다는 점
=> 해당 상황에서 만약 유저가 새로고침하기 이전에 선택한 Todo를 다시 보고자 한다면, 유저는 Todo 목록에서 자신이 선택했던 Todo를 찾아야 한다. 이는 유저가 Todo 앱에 추가했던 Todo의 갯수가 많을수록 선택했던 Todo를 찾기가 더 어려워 어지고, 이런 이유들 때문에 전역 상태로 선택한 Todo를 관리하는 것은 좋은 구조가 아니라는 것을 알게 되었다.

2. 앱이 고도화됨에 따라 추가될 각종 기능들(찜한 Todo로 바로가기 등)에 대한 구현이 더 복잡해진다는 점
=> 만약 특정 Todo의 상세페이지를 볼 수 있는 URI가 존재하는 구조로 구현하였다면, React-route-dom에서 제공하는 Link 컴포넌트를 이용해 특정 Todo의 상세페이지로 이동하는 Link 컴포넌트를 구현하고, 해당 페이지로 쉽게 이동할 수 있었을 것이다. 하지만 이를 전역 상태로 구현하였기 때문에 특정 Todo의 상세페이지로 이동하기 위해서는 직접 전역 상태인 `selectedTodo`의 값을 변경해야 했고, 따라서 Redux store의 dispatch 등을 사용하게 되면서 코드가 더 복잡해지게 된다는 것을 알게 되었다.

-> 앞으로 전역 상태를 사용할 때 발생하는 이러한 단점들을 잘 기억하고, React 앱을 구현할 때 어떤 데이터를 전역 상태로 관리할지에 대한 고민을 충분히 진행해야겠다고 생각했다.
