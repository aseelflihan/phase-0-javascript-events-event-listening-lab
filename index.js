function addingEventListener() {
    const clickAlert = () => {
      alert("I was clicked!");
    };
    const inp = document.querySelector("input");
    inp.addEventListener("click", clickAlert);
  }