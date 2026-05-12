const bioShieldCard = document.querySelector('#bioShieldCard');
const lineRedirect1 = document.querySelector("#lineRedirect1")
const pawPalCard = document.querySelector("#pawPalCard");
const EECUBudgetCalculatorCard = document.querySelector('#EECUBudgetCalculatorCard');
const lineRedirect2 = document.querySelector('#lineRedirect2')
const researchPaperCard = document.querySelector('#researchPaperCard');
const lineRedirect3 = document.querySelector('#lineRedirect3')
const lineRedirect4 = document.querySelector('#lineRedirect4')
const CARTShowcaseReflectionCard = document.querySelector('#CARTShowcaseReflectionCard');

// Draw lines between circles
function alignMiddleDot() {
    const dot1 = lineRedirect1.getBoundingClientRect();
    const dot2 = lineRedirect2.getBoundingClientRect();

    const pawPalPercent = 0.33;
    const BudgetCalcPercent = 0.66;

    const alignCard = (card, percent) => {
        const x = dot1.x + percent * (dot2.x - dot1.x);
        const y = dot1.y + percent * (dot2.y - dot1.y);

        // Gotta account for offset from top of page to programmingCaseStudies section, since the abs. positioning is still scaling to it being inside of the section
        const sectionY = document.querySelector("#programmingCaseStudiesList").getBoundingClientRect().top;

        card.style.left = `${x - 25}px`; // Not sure why such a specific offset is needed.. but this works! I was just randomly plugging values in
        card.style.top = `${y - sectionY}px`;
    };

    alignCard(pawPalCard, pawPalPercent);
    alignCard(EECUBudgetCalculatorCard, BudgetCalcPercent);
}

// Don't need to redraw lines here since LeaderLine is automatically responsive
window.addEventListener('resize', alignMiddleDot);

window.addEventListener('load', () => {
    const newLine = (start, end) => {
        return new LeaderLine(start, end, {
            path: 'straight',
            color: 'var(--primary-red)',
            endPlug: "behind"
        });
    };

    // pointAnchor makes line connect at center
    const line1 = newLine(
        LeaderLine.pointAnchor(bioShieldCard.querySelector('circle')),
        LeaderLine.pointAnchor(lineRedirect1)
    );
    const line2 = newLine(
        LeaderLine.pointAnchor(lineRedirect1),
        LeaderLine.pointAnchor(pawPalCard.querySelector('circle'))
    );
    const line3 = newLine(
        LeaderLine.pointAnchor(pawPalCard.querySelector('circle')),
        LeaderLine.pointAnchor(EECUBudgetCalculatorCard.querySelector('circle'))
    );
    const line4 = newLine(
        LeaderLine.pointAnchor(EECUBudgetCalculatorCard.querySelector('circle')),
        LeaderLine.pointAnchor(lineRedirect2)
    );
    const line5 = newLine(
        LeaderLine.pointAnchor(lineRedirect2),
        LeaderLine.pointAnchor(researchPaperCard.querySelector('circle'))
    );
    const line6 = newLine(
        LeaderLine.pointAnchor(researchPaperCard.querySelector('circle')),
        LeaderLine.pointAnchor(lineRedirect3)
    );
    const line7 = newLine(
        LeaderLine.pointAnchor(lineRedirect3),
        LeaderLine.pointAnchor(lineRedirect4)
    );
    const line8 = newLine(
        LeaderLine.pointAnchor(lineRedirect4),
        LeaderLine.pointAnchor(CARTShowcaseReflectionCard.querySelector('circle'))
    );
    line8.path = 'grid';



    const repositionLines = () => {
        line1.position();
        line2.position();
        line3.position();
        line4.position();
        line5.position();
        line6.position();
    };

    const setUpCard = card => {
        const id = card.id

       // const caseStudyContent = card.querySelector(".caseStudyContent");
        const viewStudyButton = card.querySelector("button");
        const overlay = document.querySelector(`#${id.replace("Card", "")}`);

     /*   card.addEventListener("mouseenter", () => {
            caseStudyContent.classList.remove("hidden");
            repositionLines();
        });
        card.addEventListener("mouseleave", () => {
            caseStudyContent.classList.add("hidden");
            repositionLines();
        }); */

        viewStudyButton.addEventListener("click", () => {
            overlay.showModal();
        });


    }

    setUpCard(bioShieldCard);
    setUpCard(pawPalCard);
    setUpCard(EECUBudgetCalculatorCard);
    setUpCard(researchPaperCard);
    setUpCard(CARTShowcaseReflectionCard); 

    alignMiddleDot();
    repositionLines();
});