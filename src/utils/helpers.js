export const formatPrice = (number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }

  return ['all', ...new Set(unique)];
};
export const paginate = (data) => {
  const itemsPerPage = 9;
  const numberOfPage = Math.ceil(data.length / itemsPerPage);

  const newData = Array.from({ length: numberOfPage }, (_, i) => {
    const start = i * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return newData;
};
