# 프로젝트 소개

- 2023년 원티드 프리온보딩 프론트엔드 챌린지 1월에서 요구하는 `Todo 앱 만들기` 과제를 진행한 프로젝트입니다.
- 원티드에서 제공하는 백엔드 서버를 바탕으로 React + Typescript로 프론트엔드를 구현하는 것이 목표입니다.
- 사용자 입장에서 좋은 UI/UX를 제공하고, 개발자 입장에서 좋은 코드 구조를 갖는 앱을 구현하는데 집중하였습니다.
- 총 개발 기간은 약 2주입니다.

<br>

[배포된 사이트 보러가기](https://www.jhs-todo.kro.kr/)


[1분 시연 영상 보러가기](https://youtu.be/qhof44HYXLw)

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
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

# 사용한 프레임워크 및 라이브러리

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

# 과제 진행 시 주안점

# 한계점 및 개선 사항
