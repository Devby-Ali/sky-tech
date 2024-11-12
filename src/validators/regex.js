const testEmail = (value) => {
    const emailPattent = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/g
    return emailPattent.test(value)
}

const testCodeMelli = (value) => {
    // Test
}

const testPhoneNumber = (value) => {
    // Test
}

export default {
    testEmail,
    testCodeMelli,
    testPhoneNumber
}