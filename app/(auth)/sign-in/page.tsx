import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { SignInCard } from "@/features/auth/components/sing-in-card";

const SignInPage = async () => {
    const user = await getCurrent()

    if (user) {
        redirect("/")
    }

    return <SignInCard />
}

export default SignInPage;