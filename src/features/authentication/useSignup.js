import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { signup as signupAPI } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      toast.success(
        "Account created successfully! Please verify the new account from the user's email address."
      );
    },
  });

  return { signup, isLoading };
}
