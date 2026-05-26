function showCard(type) {

  document.querySelectorAll('.tab-btn')
    .forEach(btn => {
      btn.classList.remove('active');
    });



  document.querySelectorAll('.book-card')
    .forEach(card => {
      card.classList.remove('active-card');
    });

  

  if(type === 'finance') {

    document
      .getElementById('finance-card')
      .classList.add('active-card');

    document
      .querySelectorAll('.tab-btn')[0]
      .classList.add('active');

  }

  if(type === 'ai') {

    document
      .getElementById('ai-card')
      .classList.add('active-card');

    document
      .querySelectorAll('.tab-btn')[1]
      .classList.add('active');

  }

} 