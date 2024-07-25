import MaxLengthInput from "./MaxLengthInput"
import ResumeForm from "./ResumeForm"
import UserInfo from "./UserInfo"

const ResumeMain = ()=>{
  return(
    <div className="ResumeMain">
    <UserInfo />
    <ResumeForm />
    <MaxLengthInput />
    </div>
  )
}

export default ResumeMain;