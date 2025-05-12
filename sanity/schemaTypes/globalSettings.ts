export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    {
      name: 'exchangeRate',
      title: 'USD to GHS Exchange Rate',
      type: 'number',
      description: 'Current conversion rate from USD to Ghanaian Cedi',
      validation: (Rule: any) => Rule.required().min(0).precision(2),
    },
    {
      name: 'displayCurrency',
      title: 'Display Currency',
      type: 'string',
      options: {
        list: [
          {title: 'US Dollars (USD)', value: 'USD'},
          {title: 'Ghanaian Cedis (GHS)', value: 'GHS'},
        ],
        layout: 'radio',
      },
      initialValue: 'USD',
    },
  ],
}
