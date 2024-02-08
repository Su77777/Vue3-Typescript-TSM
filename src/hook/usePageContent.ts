import { ref } from 'vue'
import type PageModel from '@/components/page-model/page-model'
type updateType = (data: any) => void
type newUserType = () => void
function usePageContent(
  newUserCallBack?: newUserType,
  updateCallBack?: updateType
) {
  const pageModelRef = ref<InstanceType<typeof PageModel>>()

  function newUserClick() {
    pageModelRef.value?.dialogVisibleFn(true)

    if (newUserCallBack) newUserCallBack()
  }
  function updateUserClick(itemData: any[]) {
    pageModelRef.value?.dialogVisibleFn(false, itemData)
    if (updateCallBack) updateCallBack(itemData)
  }
  return {
    pageModelRef,
    newUserClick,
    updateUserClick
  }
}

export default usePageContent
