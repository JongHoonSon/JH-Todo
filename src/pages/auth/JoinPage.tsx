import { useState } from "react";
import { Helmet } from "react-helmet";
import { vaildateEmail, validatePassword } from "../../utils/validateForm";
import { useJoinMutation } from "../../hooks/api/auth/useJoinMutation";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { SubmitInput } from "./../../components/common/SubmitInput";

import {
  CustomLink,
  EmptySpace,
  ErrorWrapper,
  Form,
  FormContainer,
  FormError,
  FormHeader,
  Input,
  InputError,
  InputWrapper,
  LinkContainer,
  LinkDescription,
} from "./authPageStyle";
import { useCustomSnackbar } from "../../hooks/common/useCustomSnackbar";

interface JoinFormInputs {
  email: string;
  password: string;
  passwordConfirm: string;
}

export const JoinPage = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<JoinFormInputs>({
    mode: "onChange",
  });

  const [joinError, setJoinError] = useState(false);
  const handleJoinErrorChange = (boolean: boolean) => setJoinError(boolean);
  const { customSnackbar } = useCustomSnackbar();

  const joinMutation = useJoinMutation({ handleJoinErrorChange });
  const handleJoinFormSubmit: SubmitHandler<JoinFormInputs> = (data) => {
    if (data.password !== data.passwordConfirm) {
      customSnackbar({
        isSuccess: false,
        message: "입력하신 비밀번호와 비밀번호 확인이 일치하지 않습니다.",
      });
    } else {
      joinMutation.mutate({
        emailInputValue: data.email,
        passwordInputValue: data.password,
      });
    }
  };

  watch(() => {
    if (joinError === true) {
      handleJoinErrorChange(false);
    }
  });

  return (
    <>
      <Helmet>
        <title>JH Todo | 회원가입</title>
      </Helmet>
      <FormContainer>
        <FormHeader>회원가입</FormHeader>
        <Form onSubmit={handleSubmit(handleJoinFormSubmit)}>
          <InputWrapper>
            <label htmlFor="email">이메일</label>
            <Input
              type="text"
              id="email"
              defaultValue=""
              {...register("email", {
                required: "이메일을 입력해 주세요.",
                validate: vaildateEmail,
              })}
              placeholder="예) example@example.com"
            />
          </InputWrapper>

          <ErrorWrapper>
            <EmptySpace />
            <InputError>{errors.email && errors.email.message}</InputError>
          </ErrorWrapper>

          <InputWrapper>
            <label htmlFor="password">비밀번호</label>
            <Input
              type="password"
              id="password"
              defaultValue=""
              {...register("password", {
                required: "비밀번호를 입력해 주세요.",
                validate: validatePassword,
              })}
              placeholder="8자 이상 입력해 주세요."
            />
          </InputWrapper>

          <ErrorWrapper>
            <EmptySpace />
            <InputError>
              {errors.password && errors.password.message}
            </InputError>
          </ErrorWrapper>

          <InputWrapper>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <Input
              type="password"
              id="passwordConfirm"
              defaultValue=""
              {...register("passwordConfirm", {
                required: "비밀번호 확인을 입력해 주세요.",
                validate: validatePassword,
              })}
              placeholder="비밀번호를 한번 더 입력해 주세요."
            />
          </InputWrapper>

          <ErrorWrapper>
            <EmptySpace />
            <InputError>
              {errors.passwordConfirm && errors.passwordConfirm.message}
            </InputError>
          </ErrorWrapper>

          <SubmitInput type="submit" value="회원가입" disabled={!isValid} />
        </Form>
        {joinError && <FormError>회원가입에 실패하였습니다.</FormError>}
        <LinkContainer>
          <LinkDescription>이미 아이디가 있으신가요?</LinkDescription>
          <CustomLink to="/auth/login">로그인 하러 가기</CustomLink>
        </LinkContainer>
      </FormContainer>
    </>
  );
};
