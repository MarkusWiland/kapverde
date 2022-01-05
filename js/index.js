const pageDays = document.querySelector('.days');
const pageHr = document.querySelector('.hr');
const pageMin = document.querySelector('.min');
const pageSec = document.querySelector('.sec');
const kapverde = new Date('Jan 24, 2022 09:35:00').getTime();
const interV = setInterval(() => {
  const now = new Date().getTime();

  const distance = kapverde - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((distance % (1000 * 60)) / 1000);
  pageDays.innerHTML = `${days} dagar`;
  pageHr.innerHTML = `${hours} timmar`;
  pageMin.innerHTML = `${min} minuter`;
  pageSec.innerHTML = `${sec} sekunder`;
}, 1000);
