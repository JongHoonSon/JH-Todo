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

# 구현 요구 사항

# 사용한 프레임워크 및 라이브러리

# 폴더 구조

```ts
wanted-pre-onboarding-challenge-fe-1
├─ package.json
├─ public
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
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
│  ├─ components
│  │  ├─ common
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
│  ├─ constants
│  │  ├─ apiUrls.ts
│  │  └─ themeConstants.ts
│  ├─ containers
│  │  ├─ header
│  │  │  └─ DarkmodeSwitchContainer.tsx
│  │  └─ todo
│  │     ├─ TodoDetailContainer.tsx
│  │     ├─ TodoEditFormContainer.tsx
│  │     ├─ TodoListContainer.tsx
│  │     └─ TodoPageContainer.tsx
│  ├─ hooks
│  │  ├─ api
│  │  │  ├─ auth
│  │  │  │  ├─ useJoinMutation.ts
│  │  │  │  └─ useLoginMutation.ts
│  │  │  └─ todo
│  │  │     ├─ useCreateTodoMutation.ts
│  │  │     ├─ useDeleteTodoMutation.ts
│  │  │     ├─ useGetTodoByIdQuery.ts
│  │  │     ├─ useGetTodosQuery.ts
│  │  │     └─ useUpdateTodoMutation.ts
│  │  └─ common
│  │     └─ useCustomSnackbar.ts
│  ├─ index.tsx
│  ├─ pages
│  │  ├─ auth
│  │  │  ├─ authPageStyle.ts
│  │  │  ├─ JoinPage.tsx
│  │  │  └─ LoginPage.tsx
│  │  ├─ NotFoundPage.tsx
│  │  └─ todo
│  │     └─ TodoPage.tsx
│  ├─ Router.tsx
│  ├─ routes
│  │  ├─ MainRoute.tsx
│  │  ├─ PrivateRoute.tsx
│  │  └─ PublicRoute.tsx
│  ├─ store
│  │  ├─ store.ts
│  │  ├─ themeSlice.ts
│  │  └─ todoSlice.ts
│  ├─ styles
│  │  ├─ colors.ts
│  │  ├─ GlobalStyles.ts
│  │  ├─ styled.d.ts
│  │  └─ themeStyles.ts
│  ├─ types
│  │  ├─ mutationTypes.ts
│  │  ├─ themeTypes.ts
│  │  └─ todoTypes.ts
│  └─ utils
│     ├─ checkUserLoggedIn.ts
│     └─ validateForm.ts
├─ tsconfig.json
└─ yarn.lock

```

# 과제 진행 시 주안점

# 한계점 및 개선 사항
