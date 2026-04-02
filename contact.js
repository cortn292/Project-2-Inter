const records = document.querySelectorAll('.record');
const slider = document.getElementById('record-slider');
const sliderCur = document.getElementById('slider-cur');
const sliderTotal = document.getElementById('slider-total');
const recordId = document.getElementById('record-id');
const dots = document.querySelectorAll('.dot');

const ids = ['5195028', '7723401', '9914887'];
const total = records.length;

if (slider && sliderTotal && sliderCur) {
  sliderTotal.textContent = total;
  slider.max = total - 1;

  function showRecord(index) {
    records.forEach((r, i) => {
      if (i === index) {
        r.classList.remove('hidden');
        r.classList.add('fade-in');
        setTimeout(() => r.classList.remove('fade-in'), 350);
      } else {
        r.classList.add('hidden');
      }
    });

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });

    sliderCur.textContent = index + 1;
    if (recordId) recordId.textContent = ids[index] || '???????';
    slider.value = index;
  }

  slider.addEventListener('input', () => {
    showRecord(parseInt(slider.value));
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      showRecord(parseInt(dot.dataset.index));
    });
  });
}
