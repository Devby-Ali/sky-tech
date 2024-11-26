const testEmail = (value) => {
    const emailPattent = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/g
    return emailPattent.test(value)
}

const testMobileNumber = (value) => {
    const mobileNumbersPattern =  /^(\+98|0)?9\d{9}$/g
    return mobileNumbersPattern.test(value)
}

const testCodeMelli = (value) => {
    // Test
}


export default {
    testEmail,
    testCodeMelli,
    testMobileNumber
}