 const membershipForm = document.querySelector('.membership-form')
 const membershipInput = document.querySelector('.membership-input')
 const membershipInpputContainer = document.querySelector('.membership-input-container')
 const membershipInputLabel = document.querySelector('.membership-placeholder')
 const membershipInputMessage = document.querySelector('.membership-input-message')

 const on-focus = 'on-focus'
 const FOCUS_IN = 'focus-in'

 const validateEmail = (email) =>
	/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

    
    const handleFocus = (e) => {
        const {target: { value },
        type, 
    } = e
    
    if (value) return true
    
    if (type === FOCUS_IN) {
        membershipInputContainer.classList.add(ON_FOCUS)
        return true
    }

    membershipInputContainer.classList.remove(ON_FOCUS)
}

const handleSubmit = (e) => {}
membershipInput.addEventListener(FOCUS_IN, handleFocus)
membershipInput.addEventListener('focusout', handleFocus)