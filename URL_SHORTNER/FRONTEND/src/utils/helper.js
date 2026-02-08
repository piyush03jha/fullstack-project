import { redirect } from "@tanstack/react-router";
import { getCurrentUser } from "../api/user.api";
import { login } from "../store/slice/authSlice";

export const checkAuth = async ({ context }) => {
    try {
        const { queryClient, store } = context;
        const response = await queryClient.ensureQueryData({
            queryKey: ["currentUser"],
            queryFn: getCurrentUser,
        });
        if(!response?.user) throw redirect({to: "/auth"});
        store.dispatch(login(response.user));
        const {isAuthenticated} = store.getState().auth;
        if(!isAuthenticated) throw redirect({to: "/auth"});
        return true
    } catch {
        throw redirect({to: "/auth"})
    }
};
