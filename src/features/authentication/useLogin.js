import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { login as loginAPI } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();

  const { isLoading: isAuthenticating, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { isAuthenticating, login };
}
