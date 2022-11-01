export function scroll() {
  setTimeout(() => {
    const el: HTMLElement | null = document.querySelector("#products");

    if (el) {
      window.scroll({
        top: el.offsetTop,
        behavior: 'smooth'
      });
    }
  },200)
}