function toggleIcon(button) {
  const icon = button.querySelectorAll('span');
  button.classList.toggle('collapsed');
  icon.forEach(span => span.classList.toggle('collapsed'));
}
