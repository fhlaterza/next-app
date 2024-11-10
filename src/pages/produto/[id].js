import { useRouter } from "next/router";
import { useSession } from "next-auth/react"
import { useEffect } from "react";

export default function Produto() {
  
  const route = useRouter()
  const {data: session, status} = useSession();

  
  useEffect(() => {
    if (status === "unauthenticated" )
    route.push('/');
  }, [status, route]);

    if (status === "loading" || status === "unauthenticated") {
      return null;
    }

    const {id} = route.query

    return (
      <div>
        <h1>produto {id}</h1>
      </div>
    )
}
