document.querySelectorAll('.plus-btn, .minus-btn, .delete-btn, .like-btn').forEach(btn => {
    btn.addEventListener('click', e => {

        // augmente //
        document.querySelectorAll('.plus-btn').forEach(button => {
            button.onclick = function () {
                const quantityInput = this.parentElement.querySelector('input[type="text"]'); 
                quantityInput.value = parseInt(quantityInput.value) + 1; 
            };
        });


        // baisse //
        document.querySelectorAll('.minus-btn').forEach(button => {
            button.onclick = function () {
                const quantityInput = this.parentElement.querySelector('input[type="text"]'); 
                if (parseInt(quantityInput.value) > 1) {
                    quantityInput.value = parseInt(quantityInput.value) - 1; 
                }
            };
        });

        // suprrime //
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.onclick = function () {
                this.closest('.item').remove(); 
            };
        });

        // like //
        if (btn.classList.contains('like-btn')) btn.classList.toggle('is-active');

    });
});