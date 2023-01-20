import { useSnackbar } from "notistack";

interface IuseCustomSnackbar {
  isSuccess: boolean;
  message: string;
}

export const useCustomSnackbar = ({
  isSuccess,
  message,
}: IuseCustomSnackbar): (() => void) => {
  const { enqueueSnackbar } = useSnackbar();

  if (isSuccess) {
    return () => enqueueSnackbar(message, { variant: "success" });
  } else {
    return () => enqueueSnackbar(message, { variant: "error" });
  }
};
