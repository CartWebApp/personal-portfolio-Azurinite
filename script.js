const bioShieldCard = document.querySelector('#bioShieldCard');
const lineRedirect = document.querySelector("#lineRedirect")
const pawPalCard = document.querySelector("#pawPalCard");
const EECUBudgetCalculatorCard = document.querySelector('#EECUBudgetCalculatorCard');
const researchPaperCard = document.querySelector('#researchPaperCard');
const CARTShowcaseReflectionCard = document.querySelector('#CARTShowcaseReflectionCard');

// Draw lines between circles

function alignMiddleDot() {
    const dot1 = lineRedirect.getBoundingClientRect();
    const dot2 = researchPaperCard.querySelector("circle").getBoundingClientRect();

    const pawPalPercent = 0.33;
    const BudgetCalcPercent = 0.66;

    const alignCard = (card,percent) => {
        const x = dot1.x + percent*(dot2.x - dot1.x);
        const y = dot1.y + percent*(dot2.y - dot1.y);

        // Gotta account for offset from top of page to programmingCaseStudies section, since the abs. positioning is still scaling to it being inside of the section
        const sectionY = document.querySelector("#programmingCaseStudiesList").getBoundingClientRect().top;

        card.style.left = `${x - 25}px`; // Not sure why such a specific offset is needed.. but this works! I was just randomly plugging values in
        card.style.top = `${y - sectionY}px`;
    };

    alignCard(pawPalCard, pawPalPercent);
    alignCard(EECUBudgetCalculatorCard, BudgetCalcPercent);
}

// Don't need to redraw lines here since LeaderLine is automatically responsive
window.addEventListener('resize', () => {
    alignMiddleDot();
    
});

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
        LeaderLine.pointAnchor(lineRedirect)
    );
    const line2 = newLine(
        LeaderLine.pointAnchor(lineRedirect), 
        LeaderLine.pointAnchor(pawPalCard.querySelector('circle'))
    );
    const line3 = newLine(
        LeaderLine.pointAnchor(pawPalCard.querySelector('circle')), 
        LeaderLine.pointAnchor(EECUBudgetCalculatorCard.querySelector('circle'))
    );
    const line4 = newLine(
        LeaderLine.pointAnchor(EECUBudgetCalculatorCard.querySelector('circle')), 
        LeaderLine.pointAnchor(researchPaperCard.querySelector('circle'))
    );
    const line5 = newLine(
        LeaderLine.pointAnchor(researchPaperCard.querySelector('circle')), 
        LeaderLine.pointAnchor(CARTShowcaseReflectionCard.querySelector('circle'))
    );
    line5.path = 'grid';



    const repositionLines = () => {
        line1.position();
        line2.position();
        line3.position();
        line4.position();
        line5.position();
    };

    const setUpCard = card => {
        const id = card.id
        
        const caseStudyContent = card.querySelector(".caseStudyContent");
        const viewStudyButton = card.querySelector("button");
        const overlay = document.querySelector(`#${id.replace("Card","")}`);

        card.addEventListener("mouseenter", () => {
            caseStudyContent.classList.remove("hidden");
            repositionLines();
        });
        card.addEventListener("mouseleave", () => {
            caseStudyContent.classList.add("hidden");
            repositionLines();
        });

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