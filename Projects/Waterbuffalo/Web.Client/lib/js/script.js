// wwwroot/Scripts/your-script.js

document.addEventListener('DOMContentLoaded', function () {
    // Logic to handle click events and animations
    document.querySelectorAll('.circle-outer').forEach(function (card) {
        card.addEventListener('click', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
            setTimeout(() => {
                card.style.transform = '';
            }, 100);
            // Update points and handle clicks here
        });
    });
});


//function handleCardClick(event) {
//    const card = event.currentTarget;
//    const rect = card.getBoundingClientRect();
//    const x = event.clientX - rect.left - rect.width / 2;
//    const y = event.clientY - rect.top - rect.height / 2;

//    fetch('/Home/HandleCardClick', {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify({ x: x, y: y })
//    })
//        .then(response => response.json())
//        .then(data => {
//            if (data.success) {
//                // Update UI based on success
//            } else {
//                console.error('Click handling failed');
//            }
//        })
//        .catch(error => {
//            console.error('Error:', error);
//        });
//}


//function handleClickInvite(event){

//}