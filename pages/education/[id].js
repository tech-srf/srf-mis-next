import { useRouter } from "next/router";


export default function Education() {

    const router = useRouter()
    const { id } = router.query

    return <h1>This is {id}</h1>

}