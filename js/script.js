document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    // Получаем данные из формы
    const checkinDate = document.getElementById('checkin-date').value;
    const checkoutDate = document.getElementById('checkout-date').value;
    const floor = document.querySelector('input[name="floor"]:checked').value;

    // Генерация уникального ID бронирования
    const bookingID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // Имитация сохранения данных в БД
    console.log(`Booking confirmed: Check-in: ${checkinDate}, Check-out: ${checkoutDate}, Room: ${floor}, Booking ID: ${bookingID}`);

    // Переход на страницу подтверждения бронирования
    window.location.href = 'booking-confirmation.html';
});