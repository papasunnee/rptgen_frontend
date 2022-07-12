import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import Providercode from "@/components/Optionselect/Providercode";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";

function EnterProviderCode() {
    const { userSWR, errorSWR, mutate, isValidating } = useAuth();
    const isLoading = !userSWR && !errorSWR;

    const router = useRouter();

    useEffect(() => {
        if (!isValidating && typeof userSWR != "undefined" && !userSWR.isLoggedIn) {
            mutate();
            router.replace("/");
        }
    }, [isLoading]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Fragment>
            <Providercode />
        </Fragment>
    );
}

export default EnterProviderCode;
