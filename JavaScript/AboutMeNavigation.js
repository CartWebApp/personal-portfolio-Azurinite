const yearInReview = document.querySelector("#yearInReview");
const awards = document.querySelector("#awardsAndAchievements");
const certifications = document.querySelector("#certification");
const hobbies = document.querySelector("#hobbies");

const navYearInReview = document.querySelector("#navYearInReview");
const navAwards = document.querySelector("#navAwards");
const navCertifications = document.querySelector("#navCertifications");
const navHobbies = document.querySelector("#navHobbies");

function scrollIntoView(section) {
    section.scrollIntoView({ block: "start", behavior: 'smooth' });
};

navYearInReview.addEventListener("click", () => {
    scrollIntoView(yearInReview);
});
navAwards.addEventListener("click", () => {
    scrollIntoView(awards);
});
navCertifications.addEventListener("click", () => {
    scrollIntoView(certifications);
});
navHobbies.addEventListener("click", () => {
    scrollIntoView(hobbies);
});