const bioShieldCard = document.querySelector('#bioShieldCard');
const pawPalCard = document.querySelector("#pawPalCard");
const EECUBudgetCalculatorCard = document.querySelector('#EECUBudgetCalculatorCard');
const researchPaperCard = document.querySelector('#researchPaperCard');
const CARTShowcaseReflectionCard = document.querySelector('#CARTShowcaseReflectionCard');

// Draw lines between circles

window.addEventListener('load', function () {
    const newLine = (start, end) => {
        return new LeaderLine(start, end, {
            path: 'straight',
            color: 'var(--primary-red)',
            endPlug: "behind"
        })
    }

    const line1 = newLine(bioShieldCard.querySelector('circle'), pawPalCard.querySelector('circle'));
    const line2 = newLine(pawPalCard.querySelector('circle'), EECUBudgetCalculatorCard.querySelector('circle'));
    const line3 = newLine(EECUBudgetCalculatorCard.querySelector('circle'), researchPaperCard.querySelector('circle'));
    const line4 = newLine(researchPaperCard.querySelector('circle'), CARTShowcaseReflectionCard.querySelector('circle'));



    const repositionLines = () => {
        line1.position();
        line2.position();
        line3.position();
        line4.position();
    };

    const setUpCard = card => {
        const circle = card.querySelector('circle');
        const caseStudyContent = card.querySelector(".caseStudyContent")

        circle.addEventListener("mouseenter", () => {
            caseStudyContent.classList.remove("hidden");
            repositionLines();
        });
        circle.addEventListener("mouseleave", () => {
            caseStudyContent.classList.add("hidden");
            repositionLines();
        })
    }

    setUpCard(bioShieldCard);
    setUpCard(pawPalCard);
    setUpCard(EECUBudgetCalculatorCard);
    setUpCard(researchPaperCard);
    setUpCard(CARTShowcaseReflectionCard);
});