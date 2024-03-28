import HStack from "../HStack/HStack"
import Editor from "./Editor/Editor"
import Skills from "./Skills/Skills"

const VscodeView = () => {
  return (
    <HStack height="100vh">
      <Skills />
      <Editor />
    </HStack>
  )
}
export default VscodeView
