# 최종 구현 화면

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
