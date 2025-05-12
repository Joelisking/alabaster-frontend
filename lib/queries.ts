export const GLOBAL_SETTINGS_QUERY = `*[_type == "globalSettings"][0] {
    exchangeRate,
    displayCurrency
  }`;

export const FLEET_QUERY = `*[_type == 'vehicle'] {
    _id,
    title,
    mainImage,
    vehicleDetails,
    tripTypes,
    category->{_id, title, description},
    "currentSlug": slug.current,
  }`;
