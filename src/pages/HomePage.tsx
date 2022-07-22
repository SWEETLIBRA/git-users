import React from "react";
import { useSerchUsersQuery } from "../store/github/github.api";

export function HomePage() {
    const {isLoading, isError, data} = useSerchUsersQuery('aigor')
    return(
        <div>home</div>
    )
}