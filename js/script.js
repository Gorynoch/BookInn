document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    const formData = new FormData(document.getElementById('registrationForm'));
    const fullName = formData.get('fullName');
    const country = formData.get('country');
    const city = formData.get('city');
    const birthday = formData.get('birthday');
    const language = formData.get('language');

    // Отправляем данные на сервер
    await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
            fullName,
            country,
            city,
            birthday,
            language
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Обработка ответа сервера
    console.log('Данные отправлены');
});