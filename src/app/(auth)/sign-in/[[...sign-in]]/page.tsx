import { SignIn } from "@clerk/nextjs"

export default function SignInpage() {
    return(
        <SignIn path="/sign-in" routing="path" />
    )
}