import { ReactNode, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

import './editNameForm.scss'
import { editUserData } from '../../helper/api'
import { UserState, setUserData } from '../../reducers/userSlice'

function EditNameForm(): ReactNode {
  const dispatch = useDispatch()
  const user: UserState = useSelector((state: RootState) => state.user.user)!

  const [toggle, setToggle] = useState(false)
  function toggleEditNameForm() {
    setToggle(!toggle)
  }

  async function onSubmit(event: React.FormEvent<EditNameFormElement>) {
    event.preventDefault()

    const newUserName = event.currentTarget.elements.username.value
    await editUserData(newUserName, user.token)
    dispatch(
      setUserData({
        ...user,
        userName: newUserName,
      })
    )
    toggleEditNameForm()
  }

  return (
    <>
      <button
        type='button'
        onClick={toggleEditNameForm}
        className={toggle === true ? 'hidden' : 'edit-name-btn'}
      >
        Edit Username
      </button>
      <form
        onSubmit={onSubmit}
        className={toggle === true ? 'edit-name-form' : 'hidden'}
      >
        <div className="input-wrapper">
          <label>Username: (3-16 characters)</label>
          <input
            type="text"
            name="username"
            placeholder={user?.userName}
            pattern="\w{3,16}"
            required
          />
        </div>
        <div className="btn-container">
          <button type="submit">Save</button>
          <button
            type="reset"
            onClick={toggleEditNameForm}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement
}
interface EditNameFormElement extends HTMLFormElement {
  elements: FormElements
}

export default EditNameForm
