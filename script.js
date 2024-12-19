document.getElementById('generateResume').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim()).join(', ');

    const resumeOutput = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Education:
        ${education}
        
        Experience:
        ${experience}
        
        Skills: ${skills}
    `;

    document.getElementById('resumeOutput').innerText = resumeOutput;
});
