import { useSnackbar } from "notistack";

interface ISnackbar {
  isSuccess: boolean;
  message: string;
}

export const useCustomSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();
  return {
    customSnackbar: ({ isSuccess, message }: ISnackbar) => {
      if (isSuccess) {
        enqueueSnackbar(message, { variant: "success" });
      } else {
        enqueueSnackbar(message, { variant: "error" });
      }
    },
  };
};
