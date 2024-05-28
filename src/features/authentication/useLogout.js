import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoading };
};

export default useLogout;
