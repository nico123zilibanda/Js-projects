const monthNameEl = document.getElementById
("month_name");
const dayNameEl = document.getElementById
("day_name");
const dayNumEl = document.getElementById
("day_number");
const yearEl = document.getElementById
("year");

const da_tes = new Date();
const month = da_tes.getMonth();
monthNameEl.innerText = da_tes.toLocaleString("en", {
    month: "long"
});
const weaklyDay = da_tes.getDay()
dayNameEl.innerText = da_tes.toLocaleString("en", {
    weekday: "long"
})
dayNumEl.innerText = da_tes.getDate();
yearEl.innerText = da_tes.getFullYear()


