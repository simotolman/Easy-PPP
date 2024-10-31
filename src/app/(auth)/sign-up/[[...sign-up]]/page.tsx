import { SignUp } from "@clerk/nextjs"

export default function SignUppage() {
    return(
        <SignUp path="/sign-in" routing="path" />
    )
}