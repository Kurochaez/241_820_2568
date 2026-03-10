const validateData = (userData) => {
    let errors = [];
    if (!userData.firstname) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastname) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศ');
    }
    if (!userData.interests) {
        errors.push('กรุณาเลือกความสนใจอย่างน้อย 1 อย่าง');
    }
    if (!userData.description) {
        errors.push('กรุณากรอกคำอธิบายที่เกี่ยวกับตัวคุณ');
    }
    return errors;
}

const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name="firstname"]');
    let lastNameDOM = document.querySelector('input[name="lastname"]');
    let ageDOM = document.querySelector('input[name="age"]');

    let genderDOM = document.querySelector('input[name="gender"]:checked') || {};
    let interestsDOM = document.querySelectorAll('input[name="interests"]:checked') || {};

    let descriptionDOM = document.querySelector('textarea[name="description"]');

    let messageDOM = document.getElementById('message')
    try {
    let interest = ''
    for (let i = 0; i <interestsDOM.length; i++){
        interest += interestsDOM[i].value
        if( i != interestsDOM.length - 1){
            interest += ','
        }
    }

    let userData = {
        firstname: firstNameDOM.value,
        lastname: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interests : interest
    }

        const errors = validateData(userData);
        if (errors.length > 0) {
            // ถ้ามี error คือ มีข้อมูลใน arr
            throw {
                message: 'กรอกข้อมูลไม่ครบถ้วน',
                errors: errors
            }
    }

    const response = await axios.post('http://localhost:8000/users', userData)
    console.log('response', response.data);
    messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ'
    messageDOM.className = 'message success'
     
    } catch (error){
        console.log('errror message', error.message);
        console.log('error', error.errors);
        if (error.response) {
            console.log('Error response:', error.response); // รับ response มาจาก Backend
            error.message = error.response.data.message;
            error.errors = error.response.data.errors;
        }

        let htmlData = '<div>'
        htmlData += `<div>${error.message}</div>`
        htmlData += '<ul>'
        for (let i = 0; i < error.errors.length; i++){
            htmlData += `<li>${error.errors[i]}</li>`
        }
        htmlData += '</ul>'
        htmlData += '</div>'
        messageDOM.innerHTML = htmlData
        messageDOM.className = 'message danger'
    }
    // เนื่องจาก userData ไม่มีข้อมูลจากการกรอกฟอร์ม ทำให้เวลาเรียก userData จึงเกิด error ตรง console
    // console.log('submit data',userData) 
}