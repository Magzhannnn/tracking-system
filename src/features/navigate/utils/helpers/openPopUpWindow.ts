export const openPopUpWindow = (id: string) => {
  const data = document.getElementById(id);

  if (data) {
    const rect = data.getBoundingClientRect();

    return { top: rect.top, left: rect.left, isActive: true };
  }
  return defaultPopUpInfo();
};

export const defaultPopUpInfo = () => ({
  top: 0,
  left: 0,
  isActive: false,
});
