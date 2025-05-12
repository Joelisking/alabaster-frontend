interface VehicleDetails {
  year: number
  fuelType: 'diesel' | 'petrol' | 'hybrid' | 'electric'
  seats: number
}

export default {
  name: 'vehicle',
  title: 'Vehicles',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Full name of the vehicle (e.g. Toyota Land Cruiser VX V8)',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'vehicleDetails',
      title: 'Vehicle Details',
      type: 'object',
      fields: [
        {
          name: 'year',
          title: 'Registration Year',
          type: 'number',
        },
        {
          name: 'fuelType',
          title: 'Fuel Type',
          type: 'string',
          options: {
            list: [
              {title: 'Diesel', value: 'diesel'},
              {title: 'Petrol', value: 'petrol'},
              {title: 'Hybrid', value: 'hybrid'},
              {title: 'Electric', value: 'electric'},
            ],
          },
        },
        {
          name: 'seats',
          title: 'Seats',
          type: 'number',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tripTypes',
      title: 'Trip Types & Pricing',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'tripType',
              title: 'Trip Type',
              type: 'reference',
              to: [{type: 'tripType'}],
              options: {
                filter: ({document}: {document: {tripTypes?: {tripType?: {_ref: string}}[]}}) => ({
                  filter: '!(_id in $selectedTripTypes)',
                  params: {
                    selectedTripTypes:
                      document.tripTypes?.map((trip) => trip.tripType?._ref).filter(Boolean) || [],
                  },
                }),
              },
            },
            {
              name: 'price',
              title: 'Price (USD)',
              type: 'number',
              description: 'Price in US Dollars',
              validation: (Rule: any) => Rule.required().min(0),
            },
          ],
          preview: {
            select: {
              title: 'tripType.name',
              price: 'price',
            },
            prepare(selection: {title?: string; price?: number}) {
              const {title, price} = selection
              return {
                title: title || 'No trip type selected',
                subtitle: price ? `USD ${price}` : 'No price set',
              }
            },
          },
        },
      ],
    },
    {
      name: 'accessories',
      title: 'Accessories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'accessory'}],
          options: {
            // Add this filter to exclude already selected accessories
            filter: ({document}: {document: {accessories?: {_ref: string}[]}}) => ({
              filter: '!(_id in $selectedAccessories)',
              params: {
                selectedAccessories:
                  document.accessories?.map((accessory: {_ref: string}) => accessory._ref) || [],
              },
            }),
          },
        },
      ],
      description: 'Select accessories available with this vehicle',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: {title: string; vehicleDetails: VehicleDetails}) => {
          // Generate a random string of 6 characters
          const randomStr = Math.random().toString(36).substring(2, 8)
          return `${doc.title}-${randomStr}`
        },
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
