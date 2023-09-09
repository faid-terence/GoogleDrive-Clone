import { useSession } from "next-auth/react";

export const useFetchSession=()=> {
    const { data: session } = useSession();

    return (
        {session}
    )
}