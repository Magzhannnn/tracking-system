export const openPopUpWindow = (id: string) => {
  const data = document.getElementById(id);

  if (data) {
    const rect = data.getBoundingClientRect();

    return {
      top: Math.ceil(rect.top) + 38,
      left: Math.ceil(rect.left),
      isActive: true,
    };
  }
  return defaultPopUpInfo();
};

export const defaultPopUpInfo = () => ({
  top: 0,
  left: 0,
  isActive: false,
});
