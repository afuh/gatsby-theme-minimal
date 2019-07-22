import { useContext } from "react"

import { Context } from "../../templates/post"

export const usePostData = () => useContext(Context)
