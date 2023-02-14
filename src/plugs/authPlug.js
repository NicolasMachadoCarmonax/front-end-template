import { authenticate } from "@/api/api";
import { useQuery } from "react-query";

// key: auth, data: { roles: 'all' }
export function useAuth(props) {
    return useQuery(['auth'], () => authenticate(props?.payload))
}

