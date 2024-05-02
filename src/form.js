document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('requestForm');
    const typeSelect = document.getElementById('typeSelect');
    const powerpointOptions = document.getElementById('powerpointOptions');
    const wordOptions = document.getElementById('wordOptions');
    const videoOptions = document.getElementById('videoOptions');
    const websiteOptions = document.getElementById('websiteOptions');
    const videoCreationOptions = document.getElementById('videoCreationOptions');
    const fullSiteOptions = document.getElementById('fullSiteOptions');
    const descriptionField = document.getElementById('descriptionField');
  
    typeSelect.addEventListener('change', function() {
      powerpointOptions.classList.add('hidden');
      wordOptions.classList.add('hidden');
      videoOptions.classList.add('hidden');
      websiteOptions.classList.add('hidden');
      descriptionField.classList.add('hidden');
  
      switch (this.value) {
        case 'powerpoint':
          powerpointOptions.classList.remove('hidden');
          descriptionField.classList.remove('hidden');
          break;
        case 'word':
          wordOptions.classList.remove('hidden');
          descriptionField.classList.remove('hidden');
          break;
        case 'video':
          videoOptions.classList.remove('hidden');
          break;
        case 'gdz':
          descriptionField.classList.remove('hidden');
          break;
        case 'website':
          websiteOptions.classList.remove('hidden');
          break;
      }
    });
  
    document.getElementById('videoType').addEventListener('change', function() {
      videoCreationOptions.classList.add('hidden');
      if (this.value === 'creation') {
        videoCreationOptions.classList.remove('hidden');
      }
    });
  
    document.getElementById('websiteType').addEventListener('change', function() {
      fullSiteOptions.classList.add('hidden');
      if (this.value === 'fullsite') {
        fullSiteOptions.classList.remove('hidden');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const typeSelect = document.getElementById('typeSelect');
    const slidesCount = document.getElementById('slidesCount');
    const pptTariff = document.getElementById('pptTariff');
    const costDisplay = document.getElementById('costDisplay'); // Элемент для отображения стоимости
  
    function calculateCost() {
      const numSlides = parseInt(slidesCount.value, 10);
      let costPerSlide;
  
      switch (pptTariff.value) {
        case 'vip':
          costPerSlide = 80;
          break;
        case 'standard':
          costPerSlide = 60;
          break;
        case 'light':
          costPerSlide = 40;
          break;
        default:
          costPerSlide = 0; // На случай, если тариф не выбран
      }
  
      const totalCost = numSlides * costPerSlide;
      costDisplay.textContent = `Стоимость: ${totalCost}₸`;
    }
  
    slidesCount.addEventListener('input', calculateCost);
    pptTariff.addEventListener('change', calculateCost);
  
    typeSelect.addEventListener('change', function() {
      document.querySelectorAll('.options').forEach(option => option.classList.add('hidden'));
      document.getElementById(`${this.value}Options`).classList.remove('hidden');
    });
  });
  