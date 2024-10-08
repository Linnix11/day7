function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.item').forEach(item => {
        const quantity = parseInt(item.querySelector('input[type="text"]').value);
        const price = parseFloat(item.querySelector('.total-price').dataset.price);
        totalPrice += quantity * price;
    });
    document.querySelector('.grand-total').innerText = 'Total: $' + totalPrice.toFixed(2);
}

document.querySelectorAll('.plus-btn, .minus-btn, .delete-btn, .like-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        const quantityInput = e.target.closest('.item').querySelector('input[type="text"]');
        
        if (btn.classList.contains('plus-btn')) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        } else if (btn.classList.contains('minus-btn')) {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        } else if (btn.classList.contains('delete-btn')) {
            e.target.closest('.item').remove();
        }
        if (btn.classList.contains('like-btn')) btn.classList.toggle('is-active');
        updateTotalPrice();
    });
});

updateTotalPrice();