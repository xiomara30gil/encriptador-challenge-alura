document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    displayResult(encryptedText);
    
    document.getElementById('inputText').value = encryptedText;
});


document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    
    if (inputText === "") {
        return;
    }

    
    const decryptedText = decrypt(inputText);
    displayResult(decryptedText);
    document.getElementById('inputText').value = '';
});


function encrypt(text) {
    const substitution = { a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat' };
    return text.split('').map(char => substitution[char] || char).join('');
}

function decrypt(text) {
    const substitution = { ai: 'a', enter: 'e', imes: 'i', ober: 'o', ufat: 'u' };
    let decryptedText = text;
    for (const [key, value] of Object.entries(substitution)) {
        decryptedText = decryptedText.split(key).join(value);
    }
    return decryptedText;
}

function displayResult(text) {
    document.getElementById('noResultImage').style.display = 'none';
    document.getElementById('message1').style.display = 'none';
    document.getElementById('message2').style.display = 'none';
    document.getElementById('outputText').textContent = text;
}
