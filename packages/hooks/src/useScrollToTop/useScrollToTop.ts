export default function useScrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
