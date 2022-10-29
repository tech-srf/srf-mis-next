import { useRouter } from "next/router";


export default function Attendance() {

    const router = useRouter()
    const { id } = router.query

    return <h1>This is {id}</h1>

}