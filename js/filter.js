  const filterOptions = document.querySelectorAll('[data-filter-option]');
  const learningLevels = document.querySelectorAll('[data-learning-level]');
  const cardList = document.getElementById("cardList");

  const cardListClassReset = () => {
      for (let i = cardList.classList.length - 1; i >= 0; i--) {
          const className = cardList.classList[i];
          if (className.startsWith('card-list--learning-level-')) {
              cardList.classList.remove(className);
          }
      };
  }

  const optionFilter = (elem, event) => {

    const viewportWidth = window.innerWidth;
    if (viewportWidth > 599) {
      event.preventDefault();
    }
      const filterOption = elem.dataset.filterOption;
      filterOptions.forEach(opt => {
          opt.parentElement.classList.remove('active');
      });
      elem.parentElement.classList.add('active');

      cardListClassReset();
      cardList.classList.add(`card-list--learning-level-${elem.dataset.filterOption ? elem.dataset.filterOption : 0}`)

      learningLevels.forEach(levelSetItem => {
          if (filterOption !== "-1" && levelSetItem.dataset.learningLevel !== filterOption) {
              levelSetItem.style.display = 'none';
          } else if (filterOption === "-1" || levelSetItem.dataset.learningLevel === filterOption) {
              levelSetItem.style.display = 'block';
          }
      });
  };

  filterOptions.forEach((df, index) => {
      df.addEventListener("click", (event) => { 
        optionFilter(df, event); 
      }, false);
      // Removing this option because disabled buttons don't get these events,
      // meaning this only works the first time through, possibly confusing
      // users.
      //     df.addEventListener("keyup", function() {
      //       const lastOption = filterOptions[filterOptions.length - 1];
      //       if (index === 0 && event.key === "ArrowLeft") {
      //         lastOption.focus();
      //         optionFilter(lastOption);
      //       } else if (index === filterOptions.length - 1 && event.key === "ArrowRight") {
      //         filterOptions[0].focus();
      //         optionFilter(filterOptions[0]);
      //       } else if (event.key === "ArrowRight") {
      //         filterOptions[index + 1].focus();
      //         optionFilter(filterOptions[index + 1]);
      //       } else if (event.key === "ArrowLeft") {
      //         filterOptions[index - 1].focus();
      //         optionFilter(filterOptions[index - 1]);
      //       }
      //     }, false);
  });