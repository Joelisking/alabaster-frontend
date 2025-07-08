import Container from '@/components/shared/container';
import Header from '@/components/shared/header';
import { Icon } from '@/components/ui';
import { client } from '@/lib/sanity';
import { GlobalSettings, IVehicle } from '@/lib/types';
import Form from '@/components/vehicle-details/Form';
import TripTypeSelector from '@/components/vehicle-details/trip-type-selector';

export const revalidate = 60;

async function getData(id: string) {
  const query = `
    *[_type == 'vehicle' && slug.current == '${id}'][0] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  mainImage {
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  galleryImages[] {
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  vehicleDetails {
    year,
    fuelType,
    seats
  },
  description,
  tripTypes[] {
    _key,
    tripType->{
      _id,
      name,
      description
    }
  },
  priceRange,
  accessories[]->{
    _id,
    name,
    description
  },
  category->{
    _id,
    title,
    description
  },
  slug {
    current
  }
}`;
  const data = await client.fetch(query);
  return data;
}

async function getGlobalSettings() {
  const query = `*[_type == "globalSettings"][0] { exchangeRate, displayCurrency }`;
  return await client.fetch(query);
}

async function VehicleDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const globalSettings: GlobalSettings = await getGlobalSettings();
  const fleet: IVehicle = await getData(slug);

  // Default selected trip type
  const defaultTripTypeId =
    Array.isArray(fleet.tripTypes) && fleet.tripTypes.length > 0
      ? fleet.tripTypes[0]?.tripType._id
      : '';

  return (
    <main>
      <Container>
        <Header title={fleet.title} />

        <section className="mt-12 flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-medium">Vehicle Details</h3>
            <div className="mt-4 bg-secondary rounded-2xl p-4">
              <div className="bg-white p-4">
                <p>{fleet.description}</p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3">
                <div className="flex flex-col">
                  <div className="bg-black text-white text-center font-medium py-2">
                    Registration Year
                  </div>
                  <div className="text-center text-2xl md:text-3xl xl:text-5xl p-4 lg:p-8 bg-white font-extralight">
                    {fleet.vehicleDetails.year}
                  </div>
                </div>
                <div className="xl:col-span-2">
                  <div className="bg-black text-white text-center font-medium py-2">
                    Fuel Type
                  </div>
                  <div className="text-center text-2xl md:text-3xl xl:text-5xl p-4 lg:p-8 bg-white font-extralight capitalize">
                    {fleet.vehicleDetails.fuelType}
                  </div>
                </div>
                <div>
                  <div className="bg-black text-white text-center font-medium py-2">
                    Seats
                  </div>
                  <div className="text-center text-2xl md:text-3xl xl:text-5xl p-4 lg:p-8 bg-white font-extralight">
                    {fleet.vehicleDetails.seats}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-medium">Accessories</h3>
              <div className="rounded-2xl bg-secondary p-4 mt-5">
                <div className="flex flex-wrap gap-3">
                  {fleet.accessories?.map((accessory) => (
                    <div
                      className="bg-white px-3 py-2 rounded-xl flex gap-2 capitalize"
                      key={accessory._id}>
                      <Icon
                        name="ShieldCheck"
                        className="text-primary"
                      />
                      {accessory.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-medium">Trip Type</h3>

            <div className="relative mt-4">
              {/* <div className="absolute top-16 left-0 w-full h-full rounded-2xl overflow-hidden z-20">
                <Image
                  src={img}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div> */}

              <TripTypeSelector
                tripTypes={fleet.tripTypes}
                defaultValue={defaultTripTypeId}
                globalSettings={globalSettings}
                priceRange={fleet.priceRange}
              />
            </div>

            <div className="bg-card-foreground p-7 rounded-2xl mt-3">
              <span className="text-white text-2xl">
                Get in touch using the form below
              </span>

              <Form
                tripTypes={fleet.tripTypes}
                globalSettings={globalSettings}
              />
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

export default VehicleDetails;
