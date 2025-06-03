document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const title = document.getElementById('title');
    const email = document.getElementById('email');
    const content = document.getElementById('content');

    function validateTitle() {
        const value = title.value.trim();
        const errorElement = title.nextElementSibling;
        
        if (value.length < 5 || value.length > 32) {
            errorElement.textContent = 'タイトルは5文字以上32文字以下で入力してください。';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    function validateEmail() {
        const value = email.value.trim();
        const errorElement = email.nextElementSibling;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(value) || value.length > 100) {
            errorElement.textContent = '有効なメールアドレスを入力してください（100文字以下）。';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    function validateContent() {
        const value = content.value.trim();
        const errorElement = content.nextElementSibling;
        
        if (value.length < 10 || value.length > 100) {
            errorElement.textContent = 'お問い合わせ内容は10文字以上100文字以下で入力してください。';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    title.addEventListener('input', validateTitle);
    email.addEventListener('input', validateEmail);
    content.addEventListener('input', validateContent);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isTitleValid = validateTitle();
        const isEmailValid = validateEmail();
        const isContentValid = validateContent();

        if (isTitleValid && isEmailValid && isContentValid) {
            // ここにフォーム送信の処理を追加
            alert('お問い合わせを受け付けました。');
            form.reset();
        }
    });
}); 