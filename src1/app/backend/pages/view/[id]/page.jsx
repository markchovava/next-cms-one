import { BackendContextState } from '@/context/Backend/BackendContext';



function View() {
  const {setPageName} = BackendContextState()
  setPageName(() => 'View Page');
  return (
    <div>View by Id</div>
  )
}

export default View