const scrollToElement = (id: string): void => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start'})
};

export default scrollToElement;