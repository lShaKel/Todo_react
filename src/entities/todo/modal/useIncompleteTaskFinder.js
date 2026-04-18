import {useRef} from "react";

const useIncompleteTaskFinder = (tasks) => {
  const firstIncompleteTaskRef = useRef(null)
  const firstIncompleteTaskId = tasks.find(({isDone}) => !isDone)?.id

  return {
    firstIncompleteTaskRef,
    firstIncompleteTaskId
  }
}

export default useIncompleteTaskFinder