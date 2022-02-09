describe('Frontend-Vanilla', () => {
  describe('Counter-App Example', () => {
    beforeEach(() => {
      cy.visit('../../public/index.html');
    });

    it('최초 렌더링 시 카운트는 0이다.', () => {
      cy.getCounterDisplay(0);
    });

    describe('[Sync] 버튼을 클릭한다.', () => {
      it('카운트 0에서 + 버튼을 클릭하면 카운트가 1이 된다.', () => {
        cy.countIncrement();
        cy.getCounterDisplay(1);
      });

      it('카운트 2에서 - 버튼을 클릭하면 카운트가 1이 된다.', () => {
        cy.countIncrement();
        cy.countIncrement();
        cy.countDecrement();
        cy.getCounterDisplay(1);
      });

      it('카운트 2에서 reset 버튼을 클릭하면 카운트가 0이 된다.', () => {
        cy.countIncrement();
        cy.countIncrement();
        cy.countReset();
        cy.getCounterDisplay(0);
      });
    });

    describe('[Async] 버튼을 클릭한다.', () => {
      it('카운트 0에서 + 버튼을 클릭하면 2초 뒤 카운트가 1이 된다.', () => {
        cy.countAsyncIncrement();
        cy.getCounterDisplay(1);
      });

      it('카운트 2에서 - 버튼을 클릭하면 2초 뒤 카운트가 1이 된다.', () => {
        cy.countIncrement();
        cy.countIncrement();
        cy.countAsyncDecrement();
        cy.getCounterDisplay(1);
      });

      it('카운트 2에서 reset 버튼을 클릭하면 2초 뒤 카운트가 0이 된다.', () => {
        cy.countIncrement();
        cy.countIncrement();
        cy.countAsyncReset();
        cy.getCounterDisplay(0);
      });
    });
  });
});
