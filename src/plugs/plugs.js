import { useAuth } from "./authPlug"

export const usePlug = (props) => {
    return props?.key == 'auth' && useAuth(props?.payload)
}