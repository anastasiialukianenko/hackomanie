const deliveryLines = document.querySelectorAll('.delivery-line');

deliveryLines.forEach(function(deliveryLine) {
    Array.from(deliveryLine.children).forEach(child => child.style.display = 'none');

    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Doba dodání 2-3 pracovní dny';
    deliveryLine.appendChild(newParagraph);
});
